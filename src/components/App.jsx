import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { getUserInfo } from 'api/getUserInfo';

const HomePage = lazy(() => import('pages/HomePage'));
const RatesPage = lazy(() => import('pages/RatesPage'));

export const App = () => {
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
    };

    function success(pos) {
      getUserInfo(pos.coords);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="rates" element={<RatesPage />} />
      </Route>
    </Routes>
  );
};
