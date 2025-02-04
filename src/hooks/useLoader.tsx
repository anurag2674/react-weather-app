import { useContext } from 'react';
import { LoaderContext } from '../common/LoaderContext';
export const useLoader: any = () => {
  const loaderContext = useContext(LoaderContext);
  return loaderContext;
};
