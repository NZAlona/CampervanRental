import svg from '../../public/symbol-defs.svg';
import css from '../components/VehicleEquip.module.css';

export default function VehicleEquip() {
  return (
    <>
      <p className={css.gap}>Filters</p>
      <h3 className={css.title}>Vehical equipment</h3>
      <hr className={css.line}></hr>

      <ul className={css.checkBoxList}>
        <li className={css.item}>
          <label>
            <input type="checkbox" name="AC" className={css.check} />
            <svg width={32} height={32}>
              <use href={svg + '#icon-AC'}></use>
            </svg>
            <span className={css.txt}>AC</span>
          </label>
        </li>
        <li className={css.item}>
          <label>
            <input type="checkbox" name="Automatic" className={css.check} />
            <svg width={32} height={32} className={css.icon}>
              <use href={svg + '#icon-link'}></use>
            </svg>
            <span className={css.txt}>Automatic</span>
          </label>
        </li>
        <li className={css.item}>
          <label>
            <input type="checkbox" name="Kitchen" className={css.check} />
            <svg width={32} height={32} className={css.icon}>
              <use href={svg + '#icon-fork'}></use>
            </svg>
            <span className={css.txt}>Kitchen</span>
          </label>
        </li>
        <li className={css.item}>
          <label>
            <input type="checkbox" name="TV" className={css.check} />
            <svg width={32} height={32} className={css.icon}>
              <use href={svg + '#icon-tv'}></use>
            </svg>
            <span className={css.txt}>TV</span>
          </label>
        </li>
        <li className={css.item}>
          <label>
            <input type="checkbox" name="Shower" className={css.check} />
            <svg width={32} height={32} className={css.icon}>
              <use href={svg + '#icon-bath'}></use>
            </svg>
            <span className={css.txt}>Shower</span>
          </label>
        </li>
      </ul>

      <h3 className={css.title}>Vehical type</h3>
      <hr className={css.line}></hr>

      <ul className={css.checkBoxList}>
        <li className={css.item}>
          <label>
            <input type="radio" name="carType" value="Van" className={css.check} />
            <svg width={40} height={28}>
              <use href={svg + '#icon-cmwin'}></use>
            </svg>
            <span className={css.txt}>Van</span>
          </label>
        </li>
        <li className={css.item}>
          <label>
            <input type="radio" name="carType" value="Fully integrated" className={css.check} />
            <svg width={40} height={28}>
              <use href={svg + '#icon-cmdoor'}></use>
            </svg>
            <span className={css.spn}>Fully integrated</span>
          </label>
        </li>
        <li className={css.item}>
          <label>
            <input type="radio" name="carType" value="Alcove" className={css.check} />
            <svg width={40} height={28}>
              <use href={svg + '#icon-camper'}></use>
            </svg>
            <span className={css.txt}>Alcove</span>
          </label>
        </li>
      </ul>
    </>
  );
}
