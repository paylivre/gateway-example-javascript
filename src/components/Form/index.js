import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import { Typography } from "@mui/material";
import {
  Container,
  FormLabelCustom,
  ContainerHeight,
  ContainerFlexWidthCustom,
} from "./styles";

import { ContainerRow } from "../styles";

import Input from "../Input";
import RadioGroup from "../RadioGroup";
import { PixKeyTypes } from "../../utils/pixKeyTypes";

import { getRandomMerchantTransactionId } from "../../utils/generatePropsRandom";

import { useForceReloadData } from "../../contexts/forceReloadData";
import InputSwitch from "../Switch";
import packageJson from "../../../package.json";
import { CustomButton } from "../../app/styles";
import { operation_deposit, operation_withdraw } from "../../data/types";
import TypesTransaction from "./components/TypesTransaction";

function Form({
  setData,
  setGateway_token,
  gateway_token,
  setUrlGenerated,
  base_url,
  setBaseUrl,
  typeFormSelected,
  dataDefault,
}) {
  const logo_url_example =
    "https://github.com/paylivre/gateway-example-react-js/blob/master/assets/logo_jackpot_new.png?raw=true";
  const [merchant_id, setMerchantId] = useState(dataDefault.merchant_id);
  const [merchant_transaction_id, setMerchantTransactionId] = useState(
    getRandomMerchantTransactionId()
  );
  const [email, setEmail] = useState(dataDefault.email);
  const [document_number, setDocumentNumber] = useState(
    dataDefault.document_number
  );
  const [account_id, setAccountId] = useState("123654asd");
  const [currency, setCurrency] = useState("BRL");
  const [operation, setOperation] = useState(operation_deposit);
  const [amount, setAmount] = useState("500");
  const [callback_url, setcCallback_url] = useState(
    "https://api.dev.paylivre.com/api/v2/callback"
  );
  const [redirect_url, setRedirect_url] = useState(
    "https://www.merchant_to_you.com"
  );
  const [type, setType] = useState("1");
  const [selected_type, setSelected_type] = useState("4");
  const [checkDataSelectedType, setCheckDataSelectedType] = useState([]);
  const [pix_key_type, setPix_key_type] = useState("");
  const [pix_key, setPix_key] = useState("");
  const [login_email, setLoginEmail] = useState(dataDefault.email);
  const [password, setPassword] = useState("123123123");
  const [logo_url, setLogoUrl] = useState(logo_url_example);
  const [auto_approve, setAuto_approve] = useState(true);
  const { disable, setDisable } = useForceReloadData();

  function checkIsTypeWithdrawValid(Type) {
    switch (Type) {
      case "1": {
        return true;
      }
      case "9": {
        return true;
      }
      default: {
        return false;
      }
    }
  }

  function handleCleanPixKeyData() {
    setPix_key_type("");
    setPix_key("");
  }

  function showingAndSetPixKeyDefault() {
    if (!checkIsTypeWithdrawValid(type)) {
      handleCleanPixKeyData();
    }
  }

  const isDepositWallet =
    typeFormSelected === "json" &&
    operation === operation_deposit &&
    selected_type === "5";

  useEffect(() => {
    // Toda vez que alterar algum dado no data
    setUrlGenerated(false);
    setDisable(false);

    const isWithdraw = operation === operation_withdraw;

    function getType() {
      return type;
    }

    setData((oldData) => {
      return {
        ...oldData,
        account_id,
        amount,
        auto_approve: auto_approve === true ? "1" : "0",
        callback_url,
        currency,
        document_number,
        email,
        merchant_id,
        operation,
        merchant_transaction_id,
        redirect_url,
        selected_type: type === "0" ? "" : selected_type,
        type: getType(),
        login_email: isDepositWallet ? login_email : "",
        password: isDepositWallet ? password : "",
        pix_key_type: isWithdraw ? pix_key_type : "",
        pix_key: isWithdraw ? pix_key : "",
        logo_url,
      };
    });
  }, [
    setData,
    merchant_id,
    merchant_transaction_id,
    email,
    document_number,
    account_id,
    auto_approve,
    currency,
    operation,
    amount,
    callback_url,
    redirect_url,
    setUrlGenerated,
    gateway_token,
    base_url,
    type,
    selected_type,
    pix_key_type,
    pix_key,
    logo_url,
  ]);

  function handleReloadRandomFormatData() {
    setMerchantTransactionId(getRandomMerchantTransactionId());
    setDisable(false);
  }

  function isAutoApproveSelected() {
    return auto_approve === true ? (
      <Typography component="span" color="primary">
        true
      </Typography>
    ) : (
      <Typography component="span" color="error">
        false
      </Typography>
    );
  }

  function handleSetPixKey(string_value) {
    if (string_value === PixKeyTypes.document) {
      setPix_key_type(PixKeyTypes.document);
      setPix_key(document_number);
    }

    if (string_value === PixKeyTypes.email) {
      setPix_key_type(PixKeyTypes.email);
      setPix_key(email);
    }

    if (string_value === PixKeyTypes.phone) {
      setPix_key_type(PixKeyTypes.phone);
      setPix_key("");
    }
  }

  return (
    <Container>
      <ContainerRow
        style={{ marginBottom: 20, height: 50, alignItems: "center" }}
      >
        <ContainerFlexWidthCustom widthPercent={48}>
          <FormLabelCustom style={{ margin: 0 }}>
            Merchant Data:
          </FormLabelCustom>
        </ContainerFlexWidthCustom>
        <ContainerFlexWidthCustom widthPercent={50} style={{}}>
          <Button
            onClick={() => handleReloadRandomFormatData()}
            style={{
              width: "100%",
              textTransform: "none",
            }}
            variant={disable === true ? "contained" : "outlined"}
            color="success"
          >
            Reload Random Data
          </Button>
        </ContainerFlexWidthCustom>
      </ContainerRow>
      <ContainerRow>
        <ContainerFlexWidthCustom widthPercent={48}>
          <Input
            value={merchant_id}
            setValue={(value) => setMerchantId(value)}
            label="Merchant ID:"
          />
          <ContainerHeight height={15} />
        </ContainerFlexWidthCustom>
        <ContainerFlexWidthCustom widthPercent={45}>
          <Input
            value={merchant_transaction_id}
            setValue={(value) => setMerchantTransactionId(value)}
            label="Merchant Transaction ID:"
          />
        </ContainerFlexWidthCustom>
      </ContainerRow>
      <ContainerHeight height={5} />
      <Input
        value={gateway_token}
        setValue={(value) => setGateway_token(value)}
        label="Gateway Token:"
      />
      <FormLabelCustom>User Data:</FormLabelCustom>
      <Input
        value={email}
        setValue={(value) => setEmail(value)}
        label="User Email: (OPTIONAL)"
      />
      <ContainerHeight height={20} />
      <ContainerRow>
        <ContainerFlexWidthCustom widthPercent={48}>
          <Input
            value={document_number}
            setValue={(value) => setDocumentNumber(value)}
            label="User Document - CPF/CNPJ: (OPTIONAL)"
          />
        </ContainerFlexWidthCustom>

        <ContainerFlexWidthCustom widthPercent={48}>
          <Input
            value={account_id}
            setValue={(value) => setAccountId(value)}
            label="User Account ID in Merchant:"
          />
        </ContainerFlexWidthCustom>
      </ContainerRow>
      <FormLabelCustom>Transaction Data:</FormLabelCustom>
      <ContainerRow>
        <ContainerFlexWidthCustom widthPercent={50}>
          <Input
            value={amount}
            setValue={(value) => setAmount(value)}
            label="Amount:"
          />
        </ContainerFlexWidthCustom>
        <ContainerHeight height={15} />
        <ContainerFlexWidthCustom widthPercent={60}>
          <InputSwitch
            label="Auto approve"
            checked={auto_approve}
            onChange={(event) => setAuto_approve(event.target.checked)}
          />
          {isAutoApproveSelected()}
        </ContainerFlexWidthCustom>
        <ContainerFlexWidthCustom widthPercent={60}>
          <RadioGroup
            defaultCheckedValue={currency}
            setChecked={(value) => setCurrency(value)}
            labelGroup="Currency"
            checkData={[
              { value: "BRL", label: "BRL" },
              { value: "USD", label: "USD" },
            ]}
          />
        </ContainerFlexWidthCustom>
      </ContainerRow>
      <ContainerHeight height={15} />
      <RadioGroup
        defaultCheckedValue={operation}
        setChecked={(value) => setOperation(value)}
        labelGroup="Operation"
        checkData={[
          { value: "0", label: "Deposit" },
          { value: "5", label: "Withdraw" },
        ]}
      />
      <ContainerHeight height={15} />
      <FormLabel component="legend">Type passed by merchant</FormLabel>

      <TypesTransaction
        setType={setType}
        operation={operation}
        setCheckDataSelectedType={setCheckDataSelectedType}
        showingAndSetPixKeyDefault={() => showingAndSetPixKeyDefault()}
      />

      {typeFormSelected === "json" && (
        <>
          <ContainerHeight height={15} />
          <RadioGroup
            defaultCheckedValue={selected_type}
            setChecked={(value) => setSelected_type(value)}
            labelGroup="User selected type"
            checkData={checkDataSelectedType}
          />
        </>
      )}
      {isDepositWallet && (
        <>
          <ContainerHeight height={15} />
          <ContainerRow>
            <ContainerFlexWidthCustom widthPercent={48}>
              <Input
                value={login_email}
                setValue={(value) => setLoginEmail(value)}
                label="Email Login Paylivre"
              />
              <ContainerHeight height={15} />
            </ContainerFlexWidthCustom>
            <ContainerFlexWidthCustom widthPercent={45}>
              <Input
                value={password}
                setValue={(value) => setPassword(value)}
                label="Password Login Paylivre"
              />
            </ContainerFlexWidthCustom>
          </ContainerRow>
        </>
      )}
      {operation === operation_withdraw &&
        selected_type === "4" &&
        checkIsTypeWithdrawValid(type) && (
          <>
            <ContainerRow>
              <ContainerFlexWidthCustom widthPercent={48}>
                <ContainerHeight height={25} />
                <RadioGroup
                  defaultCheckedValue={pix_key_type}
                  setChecked={(value) => handleSetPixKey(value)}
                  labelGroup="Pix Key Type(OPTIONAL)"
                  checkData={[
                    { value: PixKeyTypes.document, label: "CPF/CNPJ" },
                    { value: PixKeyTypes.phone, label: "Phone" },
                    { value: PixKeyTypes.email, label: "Email" },
                  ]}
                />
              </ContainerFlexWidthCustom>
              <ContainerFlexWidthCustom widthPercent={48}>
                <ContainerHeight height={30} />
                <Input
                  value={pix_key}
                  setValue={(value) => setPix_key(value)}
                  label="User Pix Key"
                />
              </ContainerFlexWidthCustom>
            </ContainerRow>
            <ContainerRow>
              <span style={{ marginTop: "10px", marginBottom: "10px" }}>
                Note: The Pix Key Type is optional, but if selected it is
                necessary to fill in the User Pix Key Value.
              </span>
            </ContainerRow>
            <ContainerRow>
              <CustomButton
                onClick={() => handleCleanPixKeyData()}
                style={{
                  width: "30%",
                  textTransform: "none",
                }}
                variant="contained"
              >
                Clear Data Pix
              </CustomButton>
            </ContainerRow>
          </>
        )}
      <ContainerHeight height={15} />
      <Input
        value={callback_url}
        setValue={(value) => setcCallback_url(value)}
        label="Callback URL:"
      />
      <ContainerHeight height={20} />
      <Input
        value={redirect_url}
        setValue={(value) => setRedirect_url(value)}
        label="Redirect URL: (OPTIONAL)"
      />
      <ContainerHeight height={15} />
      <FormLabelCustom>Environment:</FormLabelCustom>
      <Input
        value={base_url}
        setValue={(value) => setBaseUrl(value)}
        label="Base URL:"
      />
      <ContainerHeight height={15} />
      <Input
        value={logo_url}
        setValue={(value) => setLogoUrl(value)}
        label="Logo URL: (OPTIONAL)"
      />
      <FormLabel component="legend" style={{ margin: "0.6rem 0" }}>
        v{packageJson.version}
      </FormLabel>
    </Container>
  );
}

export default Form;
