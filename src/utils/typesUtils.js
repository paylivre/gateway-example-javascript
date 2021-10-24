// 0000 - 0 - Nenhum
// 0001 - 1 - Pix
// 0010 - 2 - Boleto
// 0011 - 3 - Boleto, Pix 
// 0100 - 4 - TED
// 0101 - 5 - TED, Pix
// 0110 - 6 - TED, Boleto
// 0111 - 7 - TED, Boleto, PIX
// 1000 - 8 - Wallet
// 1001 - 9 - Wallet, Pix
// 1010 - 10 - Wallet, Boleto
// 1011 - 11 - Wallet, Boleto, Pix
// 1100 - 12 - Wallet, Ted
// 1101 - 13 - Wallet, Ted, Pix
// 1110 - 14 - Wallet, Ted, Boleto
// 1111 - 15 - Wallet, Ted, Boleto, Pix (Todas)

// 0 - TED
// 1 - Boleto
// 4 - PIX
// 5 - Wallet
export const typesList = {
  WIRETRANFER:0,
  BILLET:1,
  PIX:4,
  WALLET:5
}

export function getTypeInteger(typesCheckeds){
  const binTypePix = typesCheckeds[4]?"1":"0"
  const binTypeBillet = typesCheckeds[1]?"1":"0"
  const binTypeWireTransfer = typesCheckeds[0]?"1":"0"
  const binTypeWallet = typesCheckeds[5]?"1":"0"
  const typeInBinary =   binTypeWallet + binTypeWireTransfer + binTypeBillet + binTypePix
  const typeInInteger = parseInt(typeInBinary, 2)
  return typeInInteger.toString()
}

