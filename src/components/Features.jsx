import svg from '../../public/symbol-defs.svg';
export default function Features({ camper }) {
  return (
    <>
      <ul>
        {
          <li>
            <svg width={20} height={20}>
              <use href={svg + '#icon-users'}></use>
            </svg>
            {camper.adults} Adults
          </li>
        }
      </ul>
    </>
  );
}
