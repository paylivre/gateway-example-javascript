/* eslint-disable no-unused-expressions */
import React from "react";
import Button from "@mui/material/Button";
import Form from "../components/Form";
import { getArgon2i } from "../services/argon2i";
import { utf8_to_b64 } from "../utils/base64";
import { Container, ContainerResult } from "./styles";

import { ContainerRow, ContainerFlexWidth } from "../components/styles";

import RequestJson from "../components/RequestJson";

function App() {
  const [base_url, setBaseUrl] = React.useState(
    "https://dev.gateway.paylivre.com"
  );
  const [data, setData] = React.useState({});
  const [gateway_token, setGateway_token] = React.useState("teste");
  const [urlGenerated, setUrlGenerated] = React.useState(false);
  const [url, setURL] = React.useState("");
  const [urlGateway, setUrlGateway] = React.useState("");
  const [typeFormSelected, setTypeFormSelected] = React.useState("url");

  function getUrlGateway(DataURL, signature) {
    const merchant_transaction_id = `merchant_transaction_id=${DataURL.merchant_transaction_id}`;
    const merchant_id = `merchant_id=${DataURL.merchant_id}`;
    const account_id = `account_id=${DataURL.account_id}`;
    const amount = `amount=${DataURL.amount}`;
    const currency = `currency=${DataURL.currency}`;
    const operation = `operation=${DataURL.operation}`;
    const calback_url = `callback_url=${DataURL.callback_url}`;
    const redirect_url = `redirect_url=${DataURL.redirect_url}`;
    const mock_type = `type=${DataURL.type}`;
    const mock_auto_approve = `auto_approve=${DataURL.auto_approve}`;
    const Signature = signature ? `&signature=${signature}` : "";

    const email = DataURL.email ? `&email=${DataURL.email}` : "";
    const document_number = DataURL.document_number
      ? `&document_number=${DataURL.document_number}`
      : "";

    const UrlGateway = `${base_url}?${merchant_transaction_id}&${merchant_id}&${operation}${email}${document_number}&${amount}&${currency}&${mock_type}&${account_id}&${calback_url}&${redirect_url}&${mock_auto_approve}${Signature}`;

    return UrlGateway;
  }

  async function handleGenerateSignature() {
    const urlWithoutSignature = getUrlGateway(data);

    const valueToGetArgon2iHash = gateway_token + urlWithoutSignature;
    const argon2iHash = await getArgon2i(valueToGetArgon2iHash);
    const signature = utf8_to_b64(argon2iHash);

    setURL(urlWithoutSignature);

    setUrlGateway(getUrlGateway(data, signature));

    setData((oldData) => {
      return { ...oldData, signature };
    });
    setUrlGenerated(true);
  }

  return (
    <>
      {/* <ContainerRow style={{ justifyContent: "center" }}>
        <ContainerFlexWidth
          widthPercent={20}
          style={{ marginRight: 20, marginBottom: 20 }}
        >
          <Button
            onClick={() => setTypeFormSelected("url")}
            style={{
              width: "100%",
              textTransform: "none",
              background: typeFormSelected === "url" ? "#1976d2" : "#c4c4c4",
            }}
            variant="contained"
          >
            Selected Form to URL
          </Button>
        </ContainerFlexWidth>

        <ContainerFlexWidth widthPercent={20}>
          <Button
            onClick={() => setTypeFormSelected("json")}
            style={{
              width: "100%",
              textTransform: "none",
              background: typeFormSelected === "json" ? "#1976d2" : "#c4c4c4",
            }}
            variant="contained"
          >
            Select Form to Request JSON
          </Button>
        </ContainerFlexWidth>
      </ContainerRow> */}

      <Container>
        <Form
          base_url={base_url}
          setBaseUrl={setBaseUrl}
          gateway_token={gateway_token}
          setGateway_token={setGateway_token}
          data={data}
          setUrlGenerated={setUrlGenerated}
          handleGenerateURL={() => handleGenerateSignature()}
          setData={setData}
          typeFormSelected={typeFormSelected}
        />
        <ContainerResult>
          {urlGenerated && (
            <>
              {typeFormSelected === "url" && (
                <RequestJson
                  type={typeFormSelected}
                  style={{ marginBottom: 20 }}
                  urlGateway={urlGateway}
                  label="URL to Gateway Web:"
                  textButton="Open URL Gateway"
                />
              )}

              {typeFormSelected === "json" && (
                <RequestJson
                  type={typeFormSelected}
                  style={{ marginBottom: 20 }}
                  dataRequest={data}
                  url={url}
                  label="JSON Post Request:"
                  textButton="Copy JSON"
                />
              )}
            </>
          )}
          <Button
            size="large"
            onClick={() => handleGenerateSignature()}
            style={{ width: "100%", textTransform: "none" }}
            variant="contained"
          >
            {`Generate ${typeFormSelected.toUpperCase()}`}
          </Button>
        </ContainerResult>
      </Container>
    </>
  );
}

export default App;
