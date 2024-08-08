import css from '../pages/FavoritePage.module.css';
export default function FavoritePage() {
  return (
    <>
      <h1 className={css.title}>
        You have not added any items to your favorites. If you see something you like, simply click
        the heart icon to keep track of it.
      </h1>
    </>
  );
}
