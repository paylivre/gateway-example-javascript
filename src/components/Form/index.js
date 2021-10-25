import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import { Container, FormLabelCustom, ContainerHeight, ContainerCheckTypes } from './styles';

import { ContainerRow, ContainerFlexWidth } from '../styles';

import Input from '../Input';
import RadioGroup from '../RadioGroup';
import Checkbox from '../CheckBox';
import { typesList, getTypeInteger } from '../../utils/typesUtils';
import { PixKeyTypes } from '../../utils/pixKeyTypes';

import { getRandomMerchantTransactionId, getRandomUserAccountId } from '../../utils/generatePropsRandom';

function Form({ setData, setGateway_token, gateway_token, setUrlGenerated, base_url, setBaseUrl, typeFormSelected }) {
  const operation_deposit = '0';
  const operation_withdraw = '5';
  const [merchant_id, setMerchantId] = React.useState('19');
  const [merchant_transaction_id, setMerchantTransactionId] = React.useState(getRandomMerchantTransactionId());
  const [email, setEmail] = React.useState('person_user_gateway@test.com');
  const [document_number, setDocumentNumber] = React.useState('60712326006');
  const [account_id, setAccountId] = React.useState(getRandomUserAccountId());
  const [currency, setCurrency] = React.useState('BRL');
  const [operation, setOperation] = React.useState(operation_deposit);
  const [amount, setAmount] = React.useState('500');
  const [callback_url, setcCallback_url] = React.useState('https://www.merchant.com');
  const [redirect_url, setRedirect_url] = React.useState('https://www.merchant_to_you.com');
  const [typesCheckeds, setTypesCheckeds] = React.useState({
    [typesList.WIRETRANFER]: false,
    [typesList.BILLET]: false,
    [typesList.PIX]: true,
    [typesList.WALLET]: false,
  });
  const [type, setType] = React.useState('1');
  const [selected_type, setSelected_type] = React.useState('4');
  const [checkDataSelectedType, setCheckDataSelectedType] = React.useState([]);
  const [pix_key_type, setPix_key_type] = React.useState(PixKeyTypes.document);
  const [pix_key, setPix_key] = React.useState('60712326006');

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
          label: 'Pix',
        });
      }
      if (typesCheckeds[1]) {
        newCheckDataSelectedType.push({
          value: typesList.BILLET.toString(),
          label: 'Billet',
        });
      }
      if (typesCheckeds[0]) {
        newCheckDataSelectedType.push({
          value: typesList.WIRETRANFER.toString(),
          label: 'Wire Transfer',
        });
      }
      if (typesCheckeds[5]) {
        newCheckDataSelectedType.push({
          value: typesList.WALLET.toString(),
          label: 'Paylivre Wallet',
        });
      }
      setCheckDataSelectedType(newCheckDataSelectedType);
    }
    enableCheckDataSelectedType();
  }, [typesCheckeds]);

  useEffect(() => {
    const auto_approve = '1';
    // Toda vez que alterar algum dado no data
    setUrlGenerated(false);

    const isWithdraw = operation === operation_withdraw;

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
        selected_type,
        type,
        pix_key_type: isWithdraw ? pix_key_type : '',
        pix_key: isWithdraw ? pix_key : '',
      };
    });
  }, [
    setData,
    merchant_id,
    merchant_transaction_id,
    email,
    document_number,
    account_id,
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
  ]);

  function handleReloadRandomFormtData() {
    setMerchantTransactionId(getRandomMerchantTransactionId());
    setAccountId(getRandomUserAccountId());
  }

  return (
    <Container>
      <ContainerRow style={{ marginBottom: 20, height: 50, alignItems: 'center' }}>
        <ContainerFlexWidth widthPercent={48}>
          <FormLabelCustom style={{ margin: 0 }}>Merchant Data:</FormLabelCustom>
        </ContainerFlexWidth>
        <ContainerFlexWidth widthPercent={50} style={{}}>
          <Button
            onClick={() => handleReloadRandomFormtData()}
            style={{
              width: '100%',
              textTransform: 'none',
            }}
            variant="outlined"
          >
            Reload Random Data
          </Button>
        </ContainerFlexWidth>
      </ContainerRow>
      <ContainerRow>
        <ContainerFlexWidth widthPercent={48}>
          <Input value={merchant_id} setValue={(value) => setMerchantId(value)} label="Merchant ID:" />
          <ContainerHeight height={15} />
        </ContainerFlexWidth>
        <ContainerFlexWidth widthPercent={45}>
          <Input
            value={merchant_transaction_id}
            setValue={(value) => setMerchantTransactionId(value)}
            label="Merchant Transaction ID:"
          />
        </ContainerFlexWidth>
      </ContainerRow>

      <ContainerHeight height={5} />
      <Input value={gateway_token} setValue={(value) => setGateway_token(value)} label="Gateway Token:" />

      <FormLabelCustom>User Data:</FormLabelCustom>
      <Input value={email} setValue={(value) => setEmail(value)} label="User Email:" />
      <ContainerHeight height={20} />
      <ContainerRow>
        <ContainerFlexWidth widthPercent={48}>
          <Input
            value={document_number}
            setValue={(value) => setDocumentNumber(value)}
            label="User Document Number (CPF/CNPJ):"
          />
        </ContainerFlexWidth>

        <ContainerFlexWidth widthPercent={48}>
          <Input value={account_id} setValue={(value) => setAccountId(value)} label="User Account ID in Merchant:" />
        </ContainerFlexWidth>
      </ContainerRow>

      <FormLabelCustom>Transaction Data:</FormLabelCustom>
      <ContainerRow>
        <ContainerFlexWidth widthPercent={48}>
          <Input value={amount} setValue={(value) => setAmount(value)} label="Amount:" />
        </ContainerFlexWidth>

        <ContainerFlexWidth widthPercent={48}>
          <RadioGroup
            defaultCheckedValue={currency}
            setChecked={(value) => setCurrency(value)}
            labelGroup="Currency"
            checkData={[
              { value: 'BRL', label: 'BRL' },
              { value: 'USD', label: 'USD' },
            ]}
          />
        </ContainerFlexWidth>
      </ContainerRow>

      <ContainerHeight height={15} />
      <RadioGroup
        defaultCheckedValue={operation}
        setChecked={(value) => setOperation(value)}
        labelGroup="Operation"
        checkData={[
          { value: '0', label: 'Deposit' },
          { value: '5', label: 'Withdraw' },
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
        {/* <Checkbox
          label="Billet"
          isChecked={typesCheckeds[typesList.BILLET]}
          setChecked={(isChecked) => setTypesChecked(typesList.BILLET, isChecked)}
        />
        <Checkbox
          label="Wire Transfer"
          isChecked={typesCheckeds[typesList.WIRETRANFER]}
          setChecked={(isChecked) => setTypesChecked(typesList.WIRETRANFER, isChecked)}
        />
        <Checkbox
          label="Paylivre Wallet"
          isChecked={typesCheckeds[typesList.WALLET]}
          setChecked={(isChecked) => setTypesChecked(typesList.WALLET, isChecked)}
        /> */}
      </ContainerCheckTypes>
      {typeFormSelected === 'json' && operation === operation_withdraw && (
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

      {typeFormSelected === 'json' && operation === operation_withdraw && (
        <ContainerRow>
          <ContainerFlexWidth widthPercent={48}>
            <ContainerHeight height={25} />
            <RadioGroup
              defaultCheckedValue={pix_key_type}
              setChecked={(value) => setPix_key_type(value)}
              labelGroup="Pix Key Type"
              checkData={[
                { value: PixKeyTypes.document, label: 'CPF/CNPJ' },
                { value: PixKeyTypes.phone, label: 'Phone' },
                { value: PixKeyTypes.email, label: 'Email' },
              ]}
            />
          </ContainerFlexWidth>

          <ContainerFlexWidth widthPercent={48}>
            <ContainerHeight height={30} />
            <Input value={pix_key} setValue={(value) => setPix_key(value)} label="User Pix Key" />
          </ContainerFlexWidth>
        </ContainerRow>
      )}

      <ContainerHeight height={15} />
      <Input value={callback_url} setValue={(value) => setcCallback_url(value)} label="Callback URL:" />
      <ContainerHeight height={20} />

      <Input value={redirect_url} setValue={(value) => setRedirect_url(value)} label="Redirect URL:" />

      <ContainerHeight height={15} />
      <FormLabelCustom>Environment:</FormLabelCustom>
      <Input value={base_url} setValue={(value) => setBaseUrl(value)} label="Base URL" />
    </Container>
  );
}

export default Form;
