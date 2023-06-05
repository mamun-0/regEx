const phoneNumberRegEx = /^(\+?880|0)1[345678]\d{8}$/;
const postCodeRegEx = /^\d{4}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidPhone(str) {
  return phoneNumberRegEx.test(str);
}
function isValidPost(str) {
  return postCodeRegEx.test(str);
}
function isValidEmail(str) {
  return emailRegex.test(str);
}
export { isValidPhone, isValidPost, isValidEmail };
