export const formatCurrency = (val) =>
  new Intl.NumberFormat(`pt-BR`, {
    style: `currency`,
    currency: `BRL`
  }).format(val);
