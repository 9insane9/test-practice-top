function capitalize(string) {
  if (typeof string !== 'string' || string.length === 0) {
    return null;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalize