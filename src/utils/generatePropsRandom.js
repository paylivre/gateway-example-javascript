import { v4 as uuidv4 } from 'uuid';

export function getRandomPartnerTransactionId(){
  const randomPartnerTransactionId = uuidv4().replace(/-/g, '');
  return randomPartnerTransactionId.substring(0,10)
}

export function getRandomUserAccountId(){
  const randomPartnerTransactionId = uuidv4().replace(/-/g, '');
  return randomPartnerTransactionId.substring(0,6)
}