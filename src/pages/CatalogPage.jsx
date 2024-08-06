import css from '../pages/CatalogPage.module.css';

import SideBar from '../components/SideBar';
import CampersList from '../components/CampersList';
import { fetchCampervans } from '../redux/operations';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectItems } from '../redux/selectors';

// export default function CatalogPage() {
//   const dispatch = useDispatch();
//   const campers = useSelector(selectItems);
//   const { page, currentPage, limit, loading, error } = useSelector(state => state.vans);

//   useEffect(() => {
//     dispatch(fetchCampervans({ page: 1, limit: 4 }));
//   }, [dispatch, page, limit]);

//   const handleLoadMore = () => {
//     dispatch(fetchCampervans({ page: currentPage + 1, limit }));
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <>
//       <div className={css.container}>
//         <SideBar />
//         <CampersList listCampers={campers} onLoadMore={handleLoadMore} />
//       </div>
//     </>
//   );
// }

export default function CatalogPage() {
  const dispatch = useDispatch();
  const campers = useSelector(selectItems);
  const [displayVans, setDispalyVans] = useState(4);
  const { loading, error } = useSelector(state => state.vans);

  useEffect(() => {
    dispatch(fetchCampervans());
  }, [dispatch]);

  const handleLoadMore = () => {
    setDispalyVans(prevVans => prevVans + 4);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className={css.container}>
        <SideBar />
        <CampersList listCampers={campers} onLoadMore={handleLoadMore} displayVans={displayVans} />
      </div>
    </>
  );
}
