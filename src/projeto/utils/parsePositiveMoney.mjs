// Aceita reais com vírgula, ponto decimal ou agrupamento brasileiro de milhares.
export function parsePositiveMoney(value) {
  const text = String(value).trim();
  if (!/^(?:\d+(?:[,.]\d{1,2})?|\d{1,3}(?:\.\d{3})+(?:,\d{1,2})?)$/.test(text)) {
    return NaN;
  }
  const grouped = /^\d{1,3}(?:\.\d{3})+(?:,\d{1,2})?$/.test(text);
  const normalized = (grouped ? text.replaceAll('.', '') : text).replace(',', '.');
  const amount = Number(normalized);
  const cents = Math.round(amount * 100);
  return amount > 0 && Number.isFinite(amount) && Number.isSafeInteger(cents)
    ? cents / 100 : NaN;
}
