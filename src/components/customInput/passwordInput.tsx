import { styled } from 'styled-components'

import { FC, InputHTMLAttributes, useState } from 'react'
import { CloseEye, OpenEye } from '@/assets/eyeIcons'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  input {
    padding: 8px;
    width: 100%;
    border: none;
    background: transparent;
    outline: none;
    border-radius: 4px;
  }
  div {
    position: absolute;
    right: 10px;
    top: calc(25% - 2px);
    color: #000 !important;
    vertical-align: top;
    height: 24px;
    width: 24px;
    svg {
      cursor: pointer;
    }
  }
  background-color: #fff;
  border-radius: 4px;

  margin-bottom: 20px;
`

type InputProps = InputHTMLAttributes<HTMLInputElement>

const PasswordInput: FC<InputProps> = (props) => {
  const [isViewPassword, setIsViewPassword] = useState(false)

  const handleChangePasswordView = () => setIsViewPassword((prev) => !prev)

  return (
    <Container>
      <input type={isViewPassword ? 'text' : 'password'} {...props} />
      <div onClick={handleChangePasswordView}>
        {isViewPassword ? <OpenEye /> : <CloseEye />}
      </div>
    </Container>
  )
}

export default PasswordInput
