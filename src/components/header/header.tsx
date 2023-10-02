import styled from 'styled-components'
import CustomDropDown from '../customDropdown/dropdown'
import UserProfile from '../user/user'

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
`

const Header = () => {
  return (
    <div style={{ borderBottom: '1px solid #0004', marginBottom: '20px' }}>
      <Body>
        <h1>Marketplace</h1>
        <CustomDropDown
          options={new Array(8).fill({ name: 'jfvdskjnkjfs' })}
          callback={() => {}}
        />
        <UserProfile />
      </Body>
    </div>
  )
}

export default Header
