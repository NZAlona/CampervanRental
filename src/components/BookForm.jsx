import css from '../components/BookForm.module.css';
import * as Yup from 'yup';
import { Field, Formik, Form, ErrorMessage } from 'formik';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const FormSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

// const DatePickerField = ({ field, form }) => {
//   const { name, value } = field;
//   const { setFieldValue, setFieldTouched } = form;

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker
//         value={value ? dayjs(value) : null}
//         onChange={date => setFieldValue(name, date ? date.toISOString() : '')}
//         onBlur={() => setFieldTouched(name, true)}
//         TextField={params => <TextField {...params} className={css.dt} />}
//       />
//     </LocalizationProvider>
//   );
// };

const DatePickerField = ({ field, form }) => {
  const { name, value } = field;
  const { setFieldValue, setFieldTouched } = form;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value ? dayjs(value) : null}
        onChange={date => setFieldValue(name, date ? date.toISOString() : '')}
        minDate={dayjs()}
        onBlur={() => setFieldTouched(name, true)}
        label="Booking date"
        slotProps={{
          textField: {
            sx: {
              backgroundColor: 'rgba(247, 247, 247, 1)',
              width: '401px',
              borderRadius: '12px',
              border: '1px solid transparent',
              '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: '10px',
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default function BookForm() {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={{
          firstName: '',
          email: '',
          data: '',
          comment: '',
        }}
        validationSchema={FormSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        {() => (
          <Form className={css.frm}>
            <div className={css.formGroup}>
              <div className={css.errorContainer}>
                <ErrorMessage name="firstName" component="span" className={css.error} />
              </div>
              <Field id="firstName" name="firstName" placeholder="Name" className={css.field} />
            </div>

            <div className={css.formGroup}>
              <div className={css.errorContainer}>
                <ErrorMessage name="email" component="span" className={css.error} />
              </div>
              <Field
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                className={css.field}
              />
            </div>

            <div className={css.formGroup}>
              <Field name="data" component={DatePickerField} />
            </div>

            <div className={css.formGroup}>
              <Field
                as="textarea"
                name="comment"
                rows="4"
                cols="50"
                placeholder="Comment"
                className={css.comment}
              />
            </div>

            <button type="submit" className={css.btn}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

// export default function BookForm() {
//   return (
//     <>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <div className={css.wrapper}>
//           <h2 className={css.title}>Book your campervan now</h2>
//           <p className={css.text}>Stay connected! We are always ready to help you.</p>
//           <Formik
//             initialValues={{
//               firstName: '',
//               email: '',
//               data: '',
//               comment: '',
//             }}
//             validationSchema={FormSchema}
//             onSubmit={(values, actions) => {
//               console.log(values);
//               actions.resetForm();
//             }}
//           >
//             <Form className={css.frm}>
//               <div className={css.formGroup}>
//                 <div className={css.errorContainer}>
//                   <ErrorMessage name="firstName" component="span" className={css.error} />
//                 </div>

//                 <Field id="firstName" name="firstName" placeholder="Name" className={css.field} />
//               </div>

//               <div className={css.formGroup}>
//                 <div className={css.errorContainer}>
//                   <ErrorMessage name="email" component="span" className={css.error} />
//                 </div>
//                 <Field
//                   id="email"
//                   name="email"
//                   placeholder="Email"
//                   type="email"
//                   className={css.field}
//                 />
//               </div>

//               <Field id="data" name="data" placeholder="Booking date" className={css.field} />
//               <DatePicker />

//               <Field
//                 as="textarea"
//                 name="comment"
//                 rows="4"
//                 cols="50"
//                 placeholder="Comment"
//                 className={css.comment}
//               />
//               <button type="submit" className={css.btn}>
//                 Submit
//               </button>
//             </Form>
//           </Formik>
//         </div>
//       </LocalizationProvider>
//     </>
//   );
// }
