// import css from '../components/CatalogPage.module.css';

import SideBar from '../components/SideBar';
import { fetchCampervans } from '../redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampervans());
  }, [dispatch]);

  return (
    <>
      <SideBar />
    </>
  );
}
