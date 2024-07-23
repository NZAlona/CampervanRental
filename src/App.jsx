import { Routes, Route } from 'react-router-dom';
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

        {/* /* First create Routes(Route) and then above add navigation to different our pages via nav and NavLink * */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
