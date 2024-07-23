import css from './HomePage.module.css';
import photo from '../image/Vehicles_Sweden_Campervan_blanco.png';
import { Link } from 'react-router-dom';

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
            budget and needs
          </h2>

          <Link to="/catalog" className={css.linkReset}>
            <button type="button" className={css.btn}>
              Book It Now
            </button>
          </Link>

          <img
            src={photo}
            width="850"
            height="520"
            className={css.photo}
            alt="photo of campervan"
          />
        </section>
      </>
    );
  }
}
