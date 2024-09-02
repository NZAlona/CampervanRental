import css from '../pages/CatalogPage.module.css';
import SideBar from '../components/SideBar';
// import CampersList from '../components/CampersList';
import { fetchCampervans } from '../redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.vans);

  useEffect(() => {
    dispatch(fetchCampervans());
  }, [dispatch]);

  if (loading)
    return (
      <ThreeDots
        visible={true}
        height="95"
        width="95"
        color="#e44848"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  if (error) return <p>Something went wrong. Please reload page</p>;

  return (
    <>
      <div className={css.container}>
        <SideBar />
      </div>
    </>
  );
}
