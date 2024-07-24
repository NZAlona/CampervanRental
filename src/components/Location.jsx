import css from '../components/Location.module.css';
import { SlLocationPin } from 'react-icons/sl';

export default function Location() {
  return (
    <>
      <form className={css.forma}>
        <label className={css.lbl}>Location</label>
        <div className={css.wrapper}>
          <input type="text" className={css.inp} placeholder="Enter location" />
          <div className={css.iconContainer}>
            <SlLocationPin className={css.icon} />
          </div>
        </div>
      </form>
    </>
  );
}
