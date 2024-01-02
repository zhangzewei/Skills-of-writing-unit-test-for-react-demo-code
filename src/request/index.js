export function getApiData() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("foo");
        }, 300);
      });
    return promise
}