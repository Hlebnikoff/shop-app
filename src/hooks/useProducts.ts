import { useSelector } from "react-redux";
import type { TRootState } from "../store/store";

export const useProducts = () => {
  const products = useSelector((state: TRootState) => state.products.items);
  const loading = useSelector((state: TRootState) => state.products.loading);
  const error = useSelector((state: TRootState) => state.products.error);

  return { products, loading, error };
};