import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import { Typography } from "@mui/material";
import {
  Container,
  FormLabelCustom,
  ContainerHeight,
  ContainerCheckTypes,
  ContainerFlexWidthCustom,
} from "./styles";

import { ContainerRow } from "../styles";

import Input from "../Input";
import RadioGroup from "../RadioGroup";
import Checkbox from "../CheckBox";
import { typesList, getTypeInteger } from "../../utils/typesUtils";
import { PixKeyTypes } from "../../utils/pixKeyTypes";

import { getRandomMerchantTransactionId } from "../../utils/generatePropsRandom";

import { useForceReloadData } from "../../contexts/forceReloadData";
import InputSwitch from "../Switch";

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
  const operation_deposit = "0";
  const operation_withdraw = "5";
  const [merchant_id, setMerchantId] = React.useState(dataDefault.merchant_id);
  const [merchant_transaction_id, setMerchantTransactionId] = React.useState(
    getRandomMerchantTransactionId()
  );
  const [email, setEmail] = React.useState(dataDefault.email);
  const [document_number, setDocumentNumber] = React.useState(
    dataDefault.document_number
  );
  const [account_id, setAccountId] = React.useState("123654asd");
  const [currency, setCurrency] = React.useState("BRL");
  const [operation, setOperation] = React.useState(operation_deposit);
  const [amount, setAmount] = React.useState("500");
  const [callback_url, setcCallback_url] = React.useState(
    "https://www.google.com"
  );
  const [redirect_url, setRedirect_url] = React.useState(
    "https://www.merchant_to_you.com"
  );
  const [typesCheckeds, setTypesCheckeds] = React.useState({
    [typesList.WIRETRANFER]: false,
    [typesList.BILLET]: false,
    [typesList.PIX]: true,
    [typesList.WALLET]: false,
  });
  const [type, setType] = React.useState("1");
  const [selected_type, setSelected_type] = React.useState("4");
  const [checkDataSelectedType, setCheckDataSelectedType] = React.useState([]);
  const [pix_key_type, setPix_key_type] = React.useState(PixKeyTypes.document);
  const [pix_key, setPix_key] = React.useState(dataDefault.document_number);
  const [login_email, setLoginEmail] = React.useState(dataDefault.email);
  const [password, setPassword] = React.useState("123123123");
  const [logo_url, setLogoUrl] = React.useState(logo_url_example);
  const [auto_approve, setAuto_approve] = React.useState("1");

  const { disable, setDisable } = useForceReloadData();

  function setTypesChecked(typeKey, isChecked) {
    const newTypesCheckeds = { ...typesCheckeds, [typeKey]: isChecked };
    setTypesCheckeds(newTypesCheckeds);
    const newType = getTypeInteger(newTypesCheckeds);
    setType(newType);
  }

  useEffect(() => {
    function enableCheckDataSelectedType() {
      const newCheckDataSelectedType = [];
      if (typesCheckeds[4]) {
        newCheckDataSelectedType.push({
          value: typesList.PIX.toString(),
          label: "Pix",
        });
      }
      if (typesCheckeds[1]) {
        newCheckDataSelectedType.push({
          value: typesList.BILLET.toString(),
          label: "Billet",
        });
      }
      if (typesCheckeds[0]) {
        newCheckDataSelectedType.push({
          value: typesList.WIRETRANFER.toString(),
          label: "Wire Transfer",
        });
      }
      if (typesCheckeds[5]) {
        newCheckDataSelectedType.push({
          value: typesList.WALLET.toString(),
          label: "Paylivre Wallet",
        });
      }

      setCheckDataSelectedType(newCheckDataSelectedType);
    }
    enableCheckDataSelectedType();
  }, [typesCheckeds]);

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
      if (operation === operation_withdraw) {
        const typeNumber = Number(type);
        if (Number.isNaN(typeNumber)) {
          return "0";
        }
        if (typeNumber > 1) {
          return "1";
        }
        return type;
      }
      return type;
    }

    setData((oldData) => {
      return {
        ...oldData,
        account_id,
        amount,
        auto_approve,
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
    return auto_approve ? (
      <Typography component="span" color="primary">
        true
      </Typography>
    ) : (
      <Typography component="span" color="error">
        false
      </Typography>
    );
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
            onChange={(event) => setAuto_approve(event.target.checked ? 1 : 0)}
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
      <ContainerCheckTypes>
        <Checkbox
          label="PIX"
          isChecked={typesCheckeds[typesList.PIX]}
          setChecked={(isChecked) => setTypesChecked(typesList.PIX, isChecked)}
        />
        {operation === operation_deposit && (
          <>
            <Checkbox
              label="Billet"
              isChecked={typesCheckeds[typesList.BILLET]}
              setChecked={(isChecked) =>
                setTypesChecked(typesList.BILLET, isChecked)
              }
            />
            <Checkbox
              label="Wire Transfer"
              isChecked={typesCheckeds[typesList.WIRETRANFER]}
              setChecked={(isChecked) =>
                setTypesChecked(typesList.WIRETRANFER, isChecked)
              }
            />
            <Checkbox
              label="Paylivre Wallet"
              isChecked={typesCheckeds[typesList.WALLET]}
              setChecked={(isChecked) =>
                setTypesChecked(typesList.WALLET, isChecked)
              }
            />
          </>
        )}
      </ContainerCheckTypes>
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

      {typeFormSelected === "json" &&
        operation === operation_withdraw &&
        selected_type === "4" && (
          <ContainerRow>
            <ContainerFlexWidthCustom widthPercent={48}>
              <ContainerHeight height={25} />
              <RadioGroup
                defaultCheckedValue={pix_key_type}
                setChecked={(value) => setPix_key_type(value)}
                labelGroup="Pix Key Type"
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
    </Container>
  );
}

export default Form;
