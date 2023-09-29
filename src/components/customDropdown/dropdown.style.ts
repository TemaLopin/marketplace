import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const DropdownText = styled.div<{ isOpen: boolean }>`
  cursor: pointer;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    transition: 0.4s;
    transform: rotate(${({ isOpen }) => (isOpen ? '90deg' : '270deg')});
    font-size: 20px;
    font-style: normal;
    margin-left: 5px;
  }
`

export const Dropdown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  border: 1px solid #dedede;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  background-color: #fff;
  z-index: 2;
`
export const DropdownItem = styled.span<{ isSelected: boolean }>`
  color: black !important;
  border-bottom: 1px solid
    ${({ isSelected }) => (isSelected ? '#c0c0c0' : '#dedede')};
  padding: 2px 5px;
  cursor: pointer;
  background-color: ${({ isSelected }) => isSelected && '#dcdcff'};
  :hover {
    background-color: #ebebeb;
  }
`
export const PlaceholderText = styled.p`
  color: gray;
`
