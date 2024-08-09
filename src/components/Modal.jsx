import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaStar } from 'react-icons/fa6';
import { SlLocationPin } from 'react-icons/sl';
import css from '../components/Modal.module.css';
import { v4 as uuidv4 } from 'uuid';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '982px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  height: '700px',
  overflowY: 'auto',
};

export default function CamperModal({ open, handleClose, camper }) {
  if (!camper) return null;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={css.wrapper}>
            <h2 id="modal-modal-title">{camper.name}</h2>
            <div className={css.position}>
              <p>
                <FaStar color="rgba(255, 197, 49, 1)" size={16} /> {camper.rating} (2 Reviews)
              </p>
              <p>
                <SlLocationPin /> {camper.location}
              </p>
            </div>

            <p className={css.price}> &#x20AC;{camper.price + ',00'}</p>
            <div>
              <ul className={css.list}>
                {camper.gallery.map(van => (
                  <li key={uuidv4()} className={css.item}>
                    <img src={van} className={css.picture} />
                  </li>
                ))}
              </ul>
            </div>
            <div id="modal-modal-description" className={css.text}>
              {camper.description}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
