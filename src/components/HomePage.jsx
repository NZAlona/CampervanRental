import css from './HomePage.module.css';
// import { NavLink } from 'react-router-dom';

export default function HomePage() {
  {
    return (
      <>
        <section className={css.wrapper}>
          <h1 className={css.title}>
            Travel in style and comfort with
            <span className={css.companyName}> Campervan Rental</span>
          </h1>
          <h2 className={css.title}>
            Reliable Ukrainian <span className={css.companyName}>Campervan Rental</span> company
            that makes your trip safe and comfortable with variety of options that would suit any
            budget and needs.{' '}
          </h2>

          <button type="button" className={css.btn}>
            Book It Now
          </button>

          <img
            src="/public/Vehicles_Sweden_Campervan_blanco.png"
            width="850"
            height="550"
            className={css.photo}
          />
        </section>
      </>
    );
  }
}
