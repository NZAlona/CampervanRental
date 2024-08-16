import { useSelector } from 'react-redux';
import { useState } from 'react';
import svg from '../../public/symbol-defs.svg';
import css from '../components/VehicleEquip.module.css';
import { SlLocationPin } from 'react-icons/sl';
import { selectItems } from '../redux/selectors';

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
    Kitchen: false,
    TV: false,
    Shower: false,
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
        if (filter !== 'carType' && filter !== 'location') {
          return !filters[filter] || vehicle.equipment.includes(filter);
        }
        return true;
      });

      const matchesCarType = filters.carType ? vehicle.type === filters.carType : true;
      const matchesLocation = filters.location
        ? vehicle.location.toLowerCase().includes(filters.location.toLowerCase())
        : true;

      return matchesEquipment && matchesCarType && matchesLocation;
    });

    console.log('Filtered Vehicles:', results);
    setFilteredVehicles(results);
    setHasSearched(true);
  };

  return (
    <>
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

      <p className={css.gap}>Filters</p>
      <h3 className={css.title}>Vehicle Equipment</h3>
      <hr className={css.line} />

      <ul className={css.checkBoxList}>
        {['AC', 'Automatic', 'Kitchen', 'TV', 'Shower'].map(equipment => (
          <li key={equipment} className={`${css.item} ${filters[equipment] ? css.checked : ''}`}>
            <label className={css.padd}>
              <input
                type="checkbox"
                name={equipment}
                checked={filters[equipment]}
                onChange={handleCheckboxChange}
                className={css.check}
              />
              <svg width={32} height={32} className={css.icon}>
                <use href={`${svg}#${equipmentIcons[equipment]}`} />
              </svg>
              <span className={`${css.txt} ${css.spn}`}>{equipment}</span>
            </label>
          </li>
        ))}
      </ul>

      <h3 className={css.title}>Vehicle Type</h3>
      <hr className={css.line} />

      <ul className={css.checkBoxList}>
        {['Van', 'Fully integrated', 'Alcove'].map(type => (
          <li key={type} className={`${css.item} ${filters.carType === type ? css.checked : ''}`}>
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

      <button onClick={handleSearch} className={css.btn}>
        Search
      </button>

      <div>
        <ul>
          {hasSearched ? (
            filteredVehicles.length > 0 ? (
              filteredVehicles.map(vehicle => (
                <li key={vehicle.id}>
                  {vehicle.type} - {vehicle.equipment.join(', ')} - {vehicle.location}
                </li>
              ))
            ) : (
              <li>No vehicles match the selected criteria.</li>
            )
          ) : null}
        </ul>
      </div>
    </>
  );
}

{
  /* <div className={css.container}>
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
      </ul> */
}
