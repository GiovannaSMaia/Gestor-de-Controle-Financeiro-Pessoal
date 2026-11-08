export function filterTransactions(transactions, searchQuery, filterCategory) {
  return transactions.filter(item => {
    const matchesSearch = item.desc
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCat =
      filterCategory === 'Todas' ||
      item.cat === filterCategory;

    return matchesSearch && matchesCat;
  });
}
