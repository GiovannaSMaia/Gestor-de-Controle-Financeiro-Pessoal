import { useState } from 'react';
import { initialTransactionsData } from '../data/initialTransactionsData.js';
import { initialPendingTransactions } from '../data/initialPendingTransactions.js';

export default function useTransactions() {
  let [transactions, setTransactions] =
    useState(initialTransactionsData);

  let [pendingItems, setPendingItems] =
    useState(initialPendingTransactions);

  const handleAddTransaction = newTx => {
    setTransactions(prev => [
      newTx,
      ...prev
    ]);
  };

  const handleAcceptPending = (
    item,
    chosenCat
  ) => {
    setPendingItems(prev =>
      prev.filter(p => p.id !== item.id)
    );

    setTransactions(prev => [
      {
        id: item.id,
        desc: item.desc,
        valor: item.valor,
        hora: 'Hoje',
        cat: chosenCat
      },
      ...prev
    ]);
  };

  const handleDiscardPending = id => {
    setPendingItems(prev =>
      prev.filter(p => p.id !== id)
    );
  };

  return { transactions, pendingItems, handleAddTransaction, handleAcceptPending, handleDiscardPending };
}
