function format_plural(noun, amount) {
  if (amount !== 1) {
    noun += "s";
  }
  return noun;
}

module.exports = { format_plural };
