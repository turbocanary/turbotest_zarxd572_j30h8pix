function anotherInsecurePassword() {
  // BAD: the random suffix is not  secure
  var suffix = window.crypto.getRandomValues(new Uint32Array(1))[0] * Math.pow(2,-32);
  var password = "sssAAAA" + suffix;
  return password;
}