import { v4 as uuidv4 } from 'uuid';

export function getRandomMerchantTransactionId() {
  const randomMerchantTransactionId = uuidv4().replace(/-/g, '');
  return randomMerchantTransactionId.substring(0, 10);
}

export function getRandomUserAccountId() {
  const randomMerchantTransactionId = uuidv4().replace(/-/g, '');
  return randomMerchantTransactionId.substring(0, 6);
}
