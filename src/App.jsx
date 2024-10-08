import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import FavoritePage from './pages/FavoritePage';
import AppBar from './components/AppBar';
import css from './App.module.css';

function App() {
  return (
    <>
      <div className={css.wrapper}>
        <AppBar />

        {/* /* First create Routes(Route) and then add above navigation to different  pages via nav and NavLink * */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />

          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
