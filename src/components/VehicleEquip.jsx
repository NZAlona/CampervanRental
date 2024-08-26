import { useSelector } from 'react-redux';
import { useState } from 'react';
import svg from '../../public/symbol-defs.svg';
import css from '../components/VehicleEquip.module.css';
import { SlLocationPin } from 'react-icons/sl';
import { selectItems } from '../redux/selectors';
import CamperCard from './CamperCard.jsx';
import CampersList from '../components/CampersList';

const equipmentIcons = {
  AC: 'icon-AC',
  Automatic: 'icon-link',
  Kitchen: 'icon-fork',
  TV: 'icon-tv',
  Shower: 'icon-bath',
};

const equipmentTypeIcons = {
  Van: 'icon-cmwin',
  'Fully integrated': 'icon-cmdoor',
  Alcove: 'icon-camper',
};

export default function VehicleEquip() {
  const allVehicles = useSelector(selectItems);

  const [filters, setFilters] = useState({
    AC: false,
    Automatic: false,
    kitchen: false,
    TV: false,
    shower: false,
    carType: '',
    location: '',
  });

  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleLocationChange = e => {
    const { value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      location: value,
    }));
  };

  const handleCheckboxChange = e => {
    const { name, checked } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const handleRadioChange = e => {
    const { value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      carType: value,
    }));
  };

  const handleSearch = () => {
    const results = allVehicles.filter(vehicle => {
      const matchesEquipment = Object.keys(filters).every(filter => {
        switch (filter) {
          case 'AC':
            if (
              filters[filter] === true &&
              filters[filter] !== Boolean(vehicle.details['airConditioner'])
            )
              return false;
            break;
          case 'Automatic':
            if (filters[filter] && vehicle.transmission.toLowerCase() !== filter.toLowerCase())
              return false;
            break;
          case 'carType':
            if (
              filters.carType !== '' &&
              filters[filter].toLowerCase().replace(/\s/g, '') !== vehicle.form.toLowerCase()
            )
              return false;
            break;
          case 'location':
            if (
              filters.location !== '' &&
              !vehicle.location.toLowerCase().includes(filters.location.toLowerCase())
            )
              return false;
            break;

          default:
            if (filters[filter] === true && filters[filter] !== Boolean(vehicle.details[filter]))
              return false;
            break;
        }
        return true;
      });

      return matchesEquipment;
    });

    console.log('Filtered Vehicles:', results);
    setFilteredVehicles(results);
    setHasSearched(true);
  };

  return (
    <>
      <div>
        <div className={css.container}>
          <label className={css.lbl}>Location</label>
          <div className={css.wrapper}>
            <input
              type="text"
              className={css.inp}
              placeholder="Enter city"
              value={filters.location}
              onChange={handleLocationChange}
            />
            <div className={css.iconContainer}>
              <SlLocationPin className={css.iconS} />
            </div>
          </div>
        </div>

        <div>
          <p className={css.gap}>Filters</p>
          <h3 className={css.title}>Vehicle Equipment</h3>
          <hr className={css.line} />

          <ul className={css.checkBoxList}>
            {['AC', 'Automatic', 'kitchen', 'TV', 'shower'].map(equipment => (
              <li
                key={equipment}
                className={`${css.item} ${filters[equipment] ? css.checked : ''}`}
              >
                <label className={css.padd}>
                  <input
                    type="checkbox"
                    name={equipment}
                    value={equipment}
                    checked={filters[equipment]}
                    onChange={handleCheckboxChange}
                    className={css.check}
                  />
                  <svg width={32} height={32} className={css.icon}>
                    <use
                      href={`${svg}#${
                        equipmentIcons[equipment.charAt(0).toUpperCase() + equipment.slice(1)]
                      }`}
                    />
                  </svg>
                  <span className={`${css.txt} ${css.spn}`}>
                    {equipment.charAt(0).toUpperCase() + equipment.slice(1)}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={css.title}>Vehicle Type</h3>
          <hr className={css.line} />

          <ul className={css.checkBoxList}>
            {['Van', 'Fully integrated', 'Alcove'].map(type => (
              <li
                key={type}
                className={`${css.item} ${filters.carType === type ? css.checked : ''}`}
              >
                <label>
                  <input
                    type="radio"
                    name="carType"
                    value={type}
                    checked={filters.carType === type}
                    onChange={handleRadioChange}
                    className={css.check}
                  />
                  <svg width={40} height={28}>
                    <use href={`${svg}#${equipmentTypeIcons[type]}`} />
                  </svg>
                  <span className={css.txt}>{type}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <button onClick={handleSearch} className={css.btn}>
          Search
        </button>
      </div>

      <div>
        <div>
          <ul className={css.list}>
            {hasSearched ? (
              filteredVehicles.length > 0 ? (
                <CamperCard filteredVehicles={filteredVehicles} />
              ) : (
                <li>
                  <span className={css.text}>No vehicles match the selected criteria</span>
                </li>
              )
            ) : (
              <div>
                <CampersList />
              </div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
