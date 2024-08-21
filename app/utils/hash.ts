export function truncateHash(hash, startLength = 6, endLength = 4) {
  if (hash.length <= startLength + endLength) {
    return hash;
  }

  const start = hash.substring(0, startLength);
  const end = hash.substring(hash.length - endLength, hash.length);

  return `${start}...${end}`;
}
