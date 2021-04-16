import {
  Anchor,
  AppBar,
  Button,
  Content,
  Footer,
  FooterGroup,
  FooterLink,
  TextField,
  ErrorMessage as FPErrorMessage,
} from '../..';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import React from 'react';
import { HiOutlineClipboardList } from 'react-icons/hi';
import * as Yup from 'yup';

export default {
  title: 'Examples/With Formik',
};

export const WithFormik = () => {
  return <App></App>;
};

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(3, 'Too short')
    .max(32, 'Too long')
    .required('Required'),
});

const App = () => {
  return (
    <>
      <AppBar Icon={HiOutlineClipboardList} title="With Formik" />
      <Content>
        <div className="flex justify-center my-12">
          <div className="flex flex-col w-full max-w-lg p-6 bg-white shadow-xl rounded-xl dark:bg-black">
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setTimeout(() => setSubmitting(false), 2000);
              }}
              validationSchema={SignInSchema}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-3">
                  <h1>Login</h1>
                  <div>
                    <Field
                      name="email"
                      as={TextField}
                      fullWidth
                      label="Email"
                      type="email"
                    />
                    <ErrorMessage name="email" component={FPErrorMessage} />
                  </div>
                  <div>
                    <Field
                      name="password"
                      as={TextField}
                      fullWidth
                      label="Password"
                      type="password"
                    />
                    <ErrorMessage name="password" component={FPErrorMessage} />
                  </div>
                  <Anchor href="#" className="block">
                    Forgot your password?
                  </Anchor>
                  <Button type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Content>
      <Footer>
        <FooterGroup label="Formik">
          <FooterLink href="https://formik.org/">Formik</FooterLink>
        </FooterGroup>
      </Footer>
    </>
  );
};
