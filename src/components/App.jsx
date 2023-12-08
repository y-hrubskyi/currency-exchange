import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Layout } from './Layout';
import { fetchBaseCurrencyThunk } from '../redux/operations';
import { setDefaultBaseCurrency } from '../redux/currencySlice';

const HomePage = lazy(() => import('pages/HomePage'));
const RatesPage = lazy(() => import('pages/RatesPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
    };

    function success(pos) {
      dispatch(fetchBaseCurrencyThunk(pos.coords));
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      dispatch(setDefaultBaseCurrency());
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="rates" element={<RatesPage />} />
      </Route>
    </Routes>
  );
};
