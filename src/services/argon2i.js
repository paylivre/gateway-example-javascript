const argon2 = require('argon2-browser');

export async function getArgon2i(pass) {
  const argon2i = await argon2
    .hash({
      pass,
      salt: 'dZk8N6kUaA32XCsS',
      time: 2,
      mem: 16,
      parallelism: 1,
      hashLen: 16,
      type: argon2.ArgonType.Argon2i,
    })
    .then((hash) => hash.encoded)
    .catch((e) => console.error(e.message, e.code));
  return argon2i;
}
