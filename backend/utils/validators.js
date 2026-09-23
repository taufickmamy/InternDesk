const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
function isEmailValid(email) {
  return typeof email === 'string' && EMAIL_REGEX.test(email);
}
 
// Au moins 8 caractères, une majuscule, un chiffre
function isPasswordStrong(motDePasse) {
  return (
    typeof motDePasse === 'string' &&
    motDePasse.length >= 8 &&
    /[A-Z]/.test(motDePasse) &&
    /[0-9]/.test(motDePasse)
  );
}
 
module.exports = { isEmailValid, isPasswordStrong };