/**
 * @author ${Amarnathrao Sulake}
 * @description ${Random Passcode generator based on the type and length}
 * @types : {
 *    alphanumeric
 *    number
 *    alphabet
 * }
 */
function generatePasscode(type, length) {
  var alphanumericset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    numset = "0123456789",
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let returnValue = "";
  let passcodeType = null;

  if (type === "number") {
    passcodeType = numset;
  } else if (type === "alphabet") {
    passcodeType = charset;
  } else if (type === "alpha-numeric") {
    passcodeType = alphanumericset;
  }

  for (var i = 0, n = passcodeType.length; i < length; ++i) {
    returnValue += passcodeType.charAt(Math.floor(Math.random() * n));
  }
  return returnValue;
}
