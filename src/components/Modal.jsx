import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FaStar } from 'react-icons/fa6';
import { SlLocationPin } from 'react-icons/sl';
import css from '../components/Modal.module.css';
import { styled } from '@mui/material/styles';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import VansFeature from './VansFeature';
import BookForm from './BookForm';
import Rating from '../components/Rating';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '982px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  maxHeight: '85vh',
  //   height: '700px',
  overflow: 'scroll',
  borderRadius: '20px',
};

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  marginTop: '44px',
  '& .MuiTabs-indicator': {
    backgroundColor: '#e44848',
  },
});

const AntTab = styled(props => <Tab disableRipple {...props} />)(() => ({
  color: 'black',
  fontWeight: 'bold',
  padding: '0px',
  marginRight: '40px',
  marginBottom: '8px',
  '&.Mui-selected': {
    color: 'black',
  },
}));

export default function CamperModal({ open, handleClose, camper }) {
  const [activeTab, setActiveTab] = useState('features');

  if (!camper) return null;

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className={css.closeWrapper}>
              <span className={css.close} onClick={handleClose}>
                X
              </span>
            </div>
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
                  {camper.gallery.map((van, index) => (
                    <li key={index} className={css.item}>
                      <img src={van} className={css.picture} />
                    </li>
                  ))}
                </ul>
              </div>
              <div id="modal-modal-description" className={css.text}>
                {camper.description}
              </div>

              <AntTabs
                value={activeTab}
                onChange={(event, newValue) => setActiveTab(newValue)}
                aria-label="Tabs"
              >
                <AntTab value="features" label="Features" />
                <AntTab value="reviews" label="Reviews" />
              </AntTabs>
            </div>

            <div className={css.tabWrapper}>
              {activeTab === 'features' && (
                <div role="tabpanel" aria-labelledby="features-tab">
                  <VansFeature features={camper} />
                  <h3 className={css.title}>Vehicle details</h3>
                  <span className={css.line}></span>
                  <ul>
                    <li className={css.item}>
                      <p> Form</p>
                      <p className={css.txt}>{camper.form}</p>
                    </li>
                    <li className={css.item}>
                      <p> Length</p>
                      <p>{camper.length}</p>
                    </li>
                    <li className={css.item}>
                      <p> Width</p>
                      <p>{camper.width}</p>
                    </li>
                    <li className={css.item}>
                      <p>Height</p>
                      <p>{camper.height}</p>
                    </li>
                    <li className={css.item}>
                      <p>Tank</p>
                      <p>{camper.tank}</p>
                    </li>
                    <li className={css.item}>
                      <p>Consumption</p>
                      <p>{camper.consumption}</p>
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === 'reviews' && (
                <div role="tabpanel" aria-labelledby="reviews-tab">
                  <ul className={css.listReview}>
                    {camper.reviews.map((review, index) => (
                      <li key={index}>
                        <div className={css.container}>
                          <div className={css.wrapperLetter}>
                            <span className={css.nameLetter}>{review.reviewer_name[0]}</span>
                          </div>

                          <div className={css.wrapperName}>
                            <h3>{review.reviewer_name}</h3>
                            <Rating rating={review.reviewer_rating} />
                          </div>
                        </div>

                        <p className={css.review}>{review.comment}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <BookForm />
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}
