import { useState, useCallback } from 'react';

export const useBasketOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openBasket = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeBasket = useCallback(() => {
    setIsOpen(false);
  }, []);
  return { isOpen, openBasket, closeBasket };
};