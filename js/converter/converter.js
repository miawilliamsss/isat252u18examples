// Converts °C to °F
const CtoF = c => c * 9 / 5 + 32;

// Converts °F to °C
const FtoC = f => (f - 32) * 5 / 9;

module.exports = {
  CtoF,
  FtoC
};