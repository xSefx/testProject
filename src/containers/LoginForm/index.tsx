import React, { useCallback } from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'

import { authenticate } from '../../store/reducers/auth'
import { useAppSelector, useAppDispatch } from '../../hooks'

import { ILoginProps } from '../../types'
import { FormContainer, FormTitle } from './styled'

import Logo from '../../components/Logo'
import FormField from '../FormField'
import Button from '../../components/Button'
import LinkView from '../../components/LinkView'
import ErrorView from '../../components/ErrorView'
import { ENTER, LOGIN, PASSWORD, SUBLOGIN, TITLE } from '../../constants'

const validationSchema = yup.object().shape({
  login: yup.string().required('Обязательное поле'),
  sublogin: yup.string(),
  password: yup.string().required('Обязательное поле')
})

const LoginForm = () => {
  const dispatch = useAppDispatch()
  const { error, loading } = useAppSelector((state) => state.auth)

  const doLogin = useCallback((values: ILoginProps) => {
    dispatch(authenticate(values))
  }, [])

  return (
    <>
      <Logo />
      <FormContainer>
        <FormTitle>{TITLE}</FormTitle>

        <Formik
          initialValues={{
            login: '',
            sublogin: '',
            password: ''
          }}
          validateOnBlur
          onSubmit={(values) => {
            doLogin(values)
          }}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              {error && <ErrorView />}
              <FormField
                title={LOGIN}
                type={'text'}
                name={'login'}
                value={props.values.login}
                handleChange={props.handleChange}
                handleBlur={props.handleBlur}
              />
              <FormField
                title={SUBLOGIN}
                type={'text'}
                name={'sublogin'}
                value={props.values.sublogin}
                handleChange={props.handleChange}
                handleBlur={props.handleBlur}
              />
              <FormField
                title={PASSWORD}
                type={'password'}
                name={'password'}
                value={props.values.password}
                handleChange={props.handleChange}
                handleBlur={props.handleBlur}
              />
              <Button
                title={ENTER}
                loading={loading}
                disabled={!(props.dirty && props.isValid)}
                submit={props.handleSubmit}
              />
            </Form>
          )}
        </Formik>
      </FormContainer>

      <LinkView />
    </>
  )
}

export default LoginForm
