/* eslint-disable no-unused-expressions */
import React from "react";
import { useLocation } from "react-router-dom";
import Form from "../components/Form";
import { getArgon2i } from "../services/argon2i";
import { utf8_to_b64 } from "../utils/base64";
import { DataDefaultDev, DataDefaultPlayground } from "../data/formDataDefault";
import {
  Container,
  ContainerResult,
  CustomButton,
  ContainerFlexWidthCustom,
} from "./styles";

import { ContainerRow } from "../components/styles";

import RequestJson from "../components/RequestJson";
import UrlParametersList from "../components/UrlParametersList";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  const query = useQuery();
  const isDev = query.get("dev") === "1";
  const isDevPlayground = query.get("playground") === "1";
  const dataDefault = !isDev
    ? DataDefaultPlayground
    : isDevPlayground
    ? DataDefaultPlayground
    : DataDefaultDev;

  const [base_url, setBaseUrl] = React.useState(dataDefault.base_url);
  const [data, setData] = React.useState({});
  const [gateway_token, setGateway_token] = React.useState(
    dataDefault.gateway_token
  );
  const [urlGenerated, setUrlGenerated] = React.useState(false);
  const [url, setURL] = React.useState("");
  const [urlGateway, setUrlGateway] = React.useState("");
  const [typeFormSelected, setTypeFormSelected] = React.useState("url");
  const [urlGatewayParameters, setUrlGatewayParameters] = React.useState({});

  function getUrlGateway(DataURL, signature) {
    const merchant_transaction_id = `merchant_transaction_id=${DataURL.merchant_transaction_id}`;
    const merchant_id = `merchant_id=${DataURL.merchant_id}`;
    const account_id = `account_id=${DataURL.account_id}`;
    const amount = `amount=${DataURL.amount}`;
    const currency = `currency=${DataURL.currency}`;
    const operation = `operation=${DataURL.operation}`;
    const callback_url = `callback_url=${DataURL.callback_url}`;
    const redirect_url = `redirect_url=${DataURL.redirect_url}`;
    const mock_type = `type=${DataURL.type}`;
    const mock_auto_approve = `auto_approve=${DataURL.auto_approve}`;
    const Signature = signature ? `&signature=${signature}` : "";
    const logoUrl = DataURL.logo_url ? `&logo_url=${DataURL.logo_url}` : "";
    const email = DataURL.email ? `&email=${DataURL.email}` : "";
    const document_number = DataURL.document_number
      ? `&document_number=${DataURL.document_number}`
      : "";

    setUrlGatewayParameters({
      merchant_transaction_id: DataURL.merchant_transaction_id,
      merchant_id: DataURL.merchant_id,
      account_id: DataURL.account_id,
      amount: DataURL.amount,
      currency: DataURL.currency,
      operation: DataURL.operation,
      callback_url: DataURL.callback_url,
      redirect_url: DataURL.redirect_url,
      mock_type: DataURL.type,
      mock_auto_approve: DataURL.auto_approve,
      signature: signature || "",
      logoUrl: DataURL.logo_url ? DataURL.logo_url : "",
      email: DataURL.email ? DataURL.email : "",
      document_number: DataURL.document_number ? DataURL.document_number : "",
    });

    const UrlGateway = `${base_url}?${merchant_transaction_id}&${merchant_id}&${operation}${email}${document_number}&${amount}&${currency}&${mock_type}&${account_id}&${callback_url}&${redirect_url}&${mock_auto_approve}${Signature}${logoUrl}`;

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
      {isDev && (
        <ContainerRow style={{ justifyContent: "center" }}>
          <ContainerFlexWidthCustom
            widthPercent={20}
            style={{ marginRight: 20, marginBottom: 20 }}
          >
            <CustomButton
              onClick={() => setTypeFormSelected("url")}
              style={{
                width: "100%",
                textTransform: "none",
                background: typeFormSelected === "url" ? "#1976d2" : "#c4c4c4",
              }}
              variant="contained"
            >
              Selected Form to URL
            </CustomButton>
          </ContainerFlexWidthCustom>

          <ContainerFlexWidthCustom widthPercent={20}>
            <CustomButton
              onClick={() => setTypeFormSelected("json")}
              style={{
                width: "100%",
                textTransform: "none",
                background: typeFormSelected === "json" ? "#1976d2" : "#c4c4c4",
              }}
              variant="contained"
            >
              Select Form to Request JSON
            </CustomButton>
          </ContainerFlexWidthCustom>
        </ContainerRow>
      )}
      <Container>
        <Form
          dataDefault={dataDefault}
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
          <CustomButton
            size="large"
            onClick={() => handleGenerateSignature()}
            style={{
              width: "100%",
              textTransform: "none",
              minWidth: "100%",
              marginRight: 0,
            }}
            variant="contained"
          >
            {`Generate ${typeFormSelected.toUpperCase()}`}
          </CustomButton>
          <UrlParametersList parameters={urlGatewayParameters} />
        </ContainerResult>
      </Container>
    </>
  );
}

export default App;
