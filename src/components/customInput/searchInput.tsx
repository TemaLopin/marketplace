import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import useOutsideClick from '../hook/useOutsideClick'
import { SearchIcon } from '@/assets/searchIcon'
import { CrossIcon } from '@/assets/crossIcon'


const Container = styled.div``
const SearchContainer = styled.div`
  margin-right: 20px;
  display: flex;
  /* width: 200px; */
  height: 20px;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  font-size: 16px;
  svg {
    margin-right: 5px;
    fill: #808080;
  }
`
const InputContainer = styled.div`
  margin-right: 5px;
  display: flex;
  flex-direction: row;
  /* align-items: flex-start; */
  justify-content: flex-start;
  height: 20px;
  margin-right: 5px;
  padding-bottom: 10px;
  margin-top: 10px;
  margin-bottom: -10px;

  position: relative;
  p {
    margin: 0px;
    cursor: pointer;
    position: absolute;
    top: 0px;
    right: 0px;
  }
  input {
    width: calc(100% - 20px);
    outline: none;
    background-color: none;
    border: none;
  }
  svg {
    /* margin-top: 5px; */
    margin-right: 5px;
    fill: #808080;
    height: 25px;
    width: 25px;
  }
  svg:last-child {
    margin-right: 5px;
    fill: #808080;
    position: absolute;
    height: 20px;
    width: 20px;
    right: -5px;
    top: 0px;
  }
`

const CustomSearchInput = ({
  handleChange,
  value,
  preventReset,
}: {
  value: string
  handleChange: (value: string) => void
  preventReset?: boolean
}) => {
  const [hasFocus, setFocus] = useState(false)
  const inputRef = useRef(null)

  const handleChangeInput = (value: any) => {
    handleChange(value)
  }


  const handleCrossClick = (e: any) => {
    e.stopPropagation()
    setFocus(false)
    handleChange('')
    console.log('qqqqq handle cross clickc')
  }


  return (
    <Container data-animch>
      {hasFocus ? (
        <InputContainer ref={inputRef} data-search>
          <input
            placeholder={'Search ...'}
            value={value}
            onChange={({ target: { value } }) => handleChangeInput(value)}
            autoFocus
            onBlur={() => setFocus(false)}
          />
          <p
            onClick={(e) => {
              handleCrossClick(e)
            }}
            data-theme-close
          >
            <CrossIcon data-hover />
          </p>
        </InputContainer>
      ) : (
        <SearchContainer onClick={() => setFocus(true)}>
          <SearchIcon />
          <p>{value ? value : 'Search'}</p>
        </SearchContainer>
      )}
    </Container>
  )
}

export default CustomSearchInput
