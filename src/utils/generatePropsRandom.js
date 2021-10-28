import { v4 as uuidv4 } from "uuid";

export function getRandomHash(size) {
  const randomMerchantTransactionId = uuidv4().replace(/-/g, "");
  return randomMerchantTransactionId.substring(0, size);
}

export function getRandomMerchantTransactionId() {
  return getRandomHash(10);
}

export function getRandomUserAccountId() {
  return getRandomHash(6);
}
