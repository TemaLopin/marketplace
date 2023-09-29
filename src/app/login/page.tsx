'use client'

import DefaultInput from '@/components/customInput/defaultInput'
import PasswordInput from '@/components/customInput/passwordInput'
import { useAppDispatch } from '@/components/hook/redux'
import { setUser } from '@/redux/slice/user'
import { store } from '@/redux/store'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Provider } from 'react-redux'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;
`

const Body = styled.div`
  height: 400px;
  width: 400px;
  background-color: #333333;
  padding: 40px;

  color: #fff;

  border-radius: 10px;
  box-shadow: 4px 5px 4px 2px #000;
`

const Title = styled.p`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
`

const SubmitButton = styled.button`
  margin: 10px auto;

  position: relative;
  cursor: pointer;

  color: #000;
  background-color: #fff;

  font-size: 18px;
  font-weight: 700;
  border-radius: 5px;
  padding: 4px 10px;

  box-sizing: border-box;
`

const Login = () => {
  const dispatch = useAppDispatch()
  const { push } = useRouter()

  const [login, setLogin] = useState({
    name: '',
    password: '',
  })

  const handleSubmit = () => {
    dispatch(setUser(login))
    console.log('🚀 !@#$ redirect:', 'redirect')
    push('/catalog')
  }

  return (
    <Container>
      <Body>
        <Title>SIGN IN</Title>
        <DefaultInput
          value={login.name}
          onChange={({ target: { value: name } }) =>
            setLogin({ ...login, name })
          }
          placeholder='Login'
        />
        <PasswordInput
          value={login.password}
          onChange={({ target: { value: password } }) =>
            setLogin({ ...login, password })
          }
          placeholder='Password'
        />
        <SubmitButton onClick={handleSubmit}>SUBMIT</SubmitButton>
      </Body>
    </Container>
  )
}

export default Login
