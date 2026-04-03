// hooks/useBasketOverlay.ts
import { useCallback } from 'react';

export const useBasketOverlay = () => {
  const openBasket = useCallback(() => {
    const basketOverlay = document.getElementById('basketOverlay');
    const basketSidebar = document.getElementById('basketSidebar');

    if (basketOverlay) basketOverlay.classList.add('open');
    if (basketSidebar) basketSidebar.classList.add('open');
  }, []);

  const closeBasket = useCallback(() => {
    const basketOverlay = document.getElementById('basketOverlay');
    const basketSidebar = document.getElementById('basketSidebar');

    if (basketOverlay) basketOverlay.classList.remove('open');
    if (basketSidebar) basketSidebar.classList.remove('open');
  }, []);

  return { openBasket, closeBasket };
};