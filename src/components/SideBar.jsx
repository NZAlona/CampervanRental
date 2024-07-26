import Location from './Location';
import VehicleEquip from './VehicleEquip';
import Button from './Button';

export default function SideBar() {
  return (
    <>
      <div>
        <Location />
        <VehicleEquip />
        <Button />
      </div>
    </>
  );
}
