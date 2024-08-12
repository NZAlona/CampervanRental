import svg from '../../public/symbol-defs.svg';
import css from '../components/VansFeature.module.css';

export default function VansFeature({ features }) {
  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>
          <svg width={20} height={20} className={css.icon}>
            <use href={svg + '#icon-users'}></use>
          </svg>
          <span> {features.adults} Adults</span>
        </li>
        <li className={css.item}>
          <svg width={20} height={20} className={`${css.icon} ${css.icn}`}>
            <use href={svg + '#icon-link'}></use>
          </svg>
          <span className={css.spn}> {features.transmission}</span>
        </li>
        <li className={css.item}>
          <svg width={20} height={20} className={css.icon}>
            <use href={svg + '#icon-petrol'}></use>
          </svg>
          <span className={css.spn}> {features.engine}</span>
        </li>
        <li className={css.item}>
          <svg width={20} height={20} className={`${css.icon} ${css.icn}`}>
            <use href={svg + '#icon-fork'}></use>
          </svg>
          <span> Kitchen</span>
        </li>
        <li className={css.item}>
          <svg width={20} height={20} className={`${css.icon} ${css.icn}`}>
            <use href={svg + '#icon-bed'}></use>
          </svg>
          <span>{features.details.beds} Beds</span>
        </li>
        <li className={css.item}>
          <svg width={20} height={20} className={css.icon}>
            <use href={svg + '#icon-AC'}></use>
          </svg>
          <span>AC</span>
        </li>
        <li className={`${css.item} ${css.extraStyle}`}>
          <svg width={20} height={20} className={`${css.icon} ${css.icn}`}>
            <use href={svg + '#icon-Group-1'}></use>
          </svg>
          <span>{features.details.airConditioner} Air conditioner</span>
        </li>
        <li className={`${css.item} ${css.extraStyle}`}>
          <svg width={20} height={20} className={`${css.icon} ${css.icn}`}>
            <use href={svg + '#icon-icon-park-outline_cd'}></use>
          </svg>
          <span>CD</span>
        </li>
        <li className={css.item}>
          <svg width={20} height={20} className={`${css.icon} ${css.icn}`}>
            <use href={svg + '#icon-solar_radio-linear'}></use>
          </svg>
          <span>Radio</span>
        </li>
        <li className={css.item}>
          <svg width={20} height={20} className={`${css.icon} ${css.icn}`}>
            <use href={svg + '#icon-icon-park-outline_hand-painted-plate'}></use>
          </svg>
          <span>{features.details.hob} Hob</span>
        </li>
      </ul>
    </>
  );
}
