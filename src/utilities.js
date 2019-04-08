const findIndex = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      return i;
    }
  }
  return -1;
};

export const forEach = (obj, fn) => {
  const hasOwn = Object.hasOwnProperty;

  Object.keys(obj).forEach(key => {
    if (hasOwn.call(obj, key)) {
      fn(obj[key], key, obj);
    }
  });
};

export const truncate = (str, maxLength, suffix = '') =>
  str.length > maxLength
    ? str.substring(0, maxLength - suffix.length) + suffix
    : str;

export const hasObjectItem = (arr, name, value) =>
  findIndex(arr, ({ [name]: val }) => val === value) >= 0;
