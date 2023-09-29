import { FC, InputHTMLAttributes } from 'react'
import styled from 'styled-components'

const InputStyled = styled.input`
  &:not([type='checkbox']) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    padding: 8px;
    width: 100%;
    border: none;
    background: transparent;
    outline: none;
    border-radius: 4px;
    border: 1px solid #0003;

    background-color: #fff;

    margin-bottom: 20px;
    margin-right: 5px;

    
  }

  &[type='number'] {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  &[type='checkbox'] {
    margin-right: 5px;
  }
`

type DefaultInputT = InputHTMLAttributes<HTMLInputElement>

const DefaultInput: FC<DefaultInputT> = (props) => (
  <InputStyled type='number' {...props} />
)

export default DefaultInput
