import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import * as yup from 'yup'

import { authenticate } from '../../store/reducers/auth'
import { useAppSelector } from '../../hooks'

import { ILoginProps } from '../../types'
import { FormContainer, FormTitle } from './styled'

import Logo from '../../components/Logo'
import FormField from '../FormField'
import Button from '../../components/Button'
import LinkView from '../../components/LinkView'
import ErrorView from '../../components/ErrorView'

const LoginForm = () => {
  const dispatch = useDispatch()
  const { error, loading } = useAppSelector((state) => state.auth)

  const validationSchema = yup.object().shape({
    login: yup.string().required('Обязательное поле'),
    sublogin: yup.string(),
    password: yup.string().required('Обязательное поле')
  })

  const doLogin = (values: ILoginProps) => {
    dispatch(authenticate(values))
  }

  return (
    <>
      <Logo />
      <FormContainer>
        <FormTitle>API-консолька</FormTitle>

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
          {(props) => {
            return (
              <Form>
                {error && <ErrorView />}
                <FormField
                  title={'Логин'}
                  type={'text'}
                  name={'login'}
                  value={props.values.login}
                  handleChange={props.handleChange}
                  handleBlur={props.handleBlur}
                />
                <FormField
                  title={'Сублогин'}
                  type={'text'}
                  name={'sublogin'}
                  value={props.values.sublogin}
                  handleChange={props.handleChange}
                  handleBlur={props.handleBlur}
                />
                <FormField
                  title={'Пароль'}
                  type={'password'}
                  name={'password'}
                  value={props.values.password}
                  handleChange={props.handleChange}
                  handleBlur={props.handleBlur}
                />
                <Button
                  title={'Войти'}
                  loading={loading}
                  disabled={!props.isValid && !props.dirty}
                  submit={props.handleSubmit}
                />
              </Form>
            )
          }}
        </Formik>
      </FormContainer>

      <LinkView />
    </>
  )
}

export default LoginForm
