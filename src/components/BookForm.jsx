import css from '../components/BookForm.module.css';
import * as Yup from 'yup';
import { Field, Formik, Form, ErrorMessage } from 'formik';

const FormSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export default function BookForm() {
  return (
    <>
      <div className={css.wrapper}>
        <h2>Book your campervan now</h2>
        <p>Stay connected! We are always ready to help you.</p>
        <Formik
          initialValues={{
            firstName: '',
            email: '',
            data: '',
            comment: '',
          }}
          validationSchema={FormSchema}
          onSubmit={values => {
            console.log(values);
          }}
        >
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

            <Field id="data" name="data" placeholder="Booking date" className={css.field} />

            <Field
              as="textarea"
              name="message"
              rows="4"
              cols="50"
              placeholder="Comment"
              className={css.comment}
            />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
