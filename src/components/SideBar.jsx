import VehicleEquip from './VehicleEquip';
import css from '../components/SideBar.module.css';

export default function SideBar() {
  return (
    <>
      <div className={css.mainCont}>
        <VehicleEquip />
      </div>
    </>
  );
}
