export function isValidCycleDay(value) {
  const text = String(value).trim();
  const day = Number(text);
  return /^\d+$/.test(text) && Number.isInteger(day) && day >= 1 && day <= 28;
}
