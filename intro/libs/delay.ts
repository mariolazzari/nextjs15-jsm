export function delay(ms = 1000, isError = false) {
  return new Promise((res, rej) => {
    setTimeout(isError ? rej : res, ms);
  });
}
