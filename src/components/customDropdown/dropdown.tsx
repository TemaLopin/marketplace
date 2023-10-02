import { CrossIcon } from '@/assets/crossIcon'
import { FC, LegacyRef, useRef, useState } from 'react'
import styled from 'styled-components'
import useOutsideClick from '../hook/useOutsideClick'

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
`
const DropdownTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
  border: 1px solid #0004;

  position: relative;

  svg {
  }
`
const DropdownInput = styled.input`
  height: 100%;
  width: 80%;
  border: none;
  outline: none;
`

const Options = styled.div`
  width: 300px;
  top: 50px;
  position: absolute;
`
const OptionElement = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 6px 8px;
  border-bottom: 1px solid #0004;

  background-color: #fff;
  border-top: none;

  transition: all 0.5s;

  &:hover {
    background-color: #787878;
    color: #fff;
  }
`

type DropElement = { name: string } & { [key: string]: any }
type DropdownProps = {
  options: DropElement[]
  callback: (elem: DropElement) => void
}

const CustomDropDown: FC<DropdownProps> = ({ options, callback }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedElem, setSelectedElem] = useState<DropElement>({ name: '' })
  const [search, setSearch] = useState('')

  const inputRef = useRef(null)

  useOutsideClick([inputRef.current], () => setIsOpen(false))

  const handleSelect = (elem: DropElement) => {
    callback(elem)
    setSelectedElem(elem)
    setSearch(elem.name)
    console.log('🚀 !@#$ elem:', elem)
  }
  const handleSearch = () => {}

  return (
    <Body>
      <DropdownTitle ref={inputRef}>
        <DropdownInput
          
          onFocus={() => setIsOpen(true)}
          onChange={({ target: { value } }) => setSearch(value)}
          value={selectedElem.name}
        />
        <CrossIcon />
      </DropdownTitle>
      {isOpen && (
        <Options data-animch>
          {options
            .filter((option) => option.name.includes(search))
            .map((option, index) => (
              <OptionElement key={index} onClick={() => handleSelect(option)}>
                {option.name}
              </OptionElement>
            ))}
        </Options>
      )}
    </Body>
  )
}

export default CustomDropDown
