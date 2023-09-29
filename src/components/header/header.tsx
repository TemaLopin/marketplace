import styled from 'styled-components'
import CustomDropDown from '../customDropdown/dropdown'
import UserProfile from '../profile/profile'

const Background = styled.div`
  height: 70px;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #000;
  margin-bottom: 10px;
`
const Container = styled.div`
  width: 1000px;
  margin: 0px auto;
`
const Body = styled.div`
  display: flex;
  justify-content: space-between;
`

const Header = () => {
  return (
    <Background>
      <Container>
        <Body>
          <h1>Marketplace</h1>
          <CustomDropDown
            options={new Array(8).fill({ name: 'jfvdskjnkjfs' })}
            callback={() => {}}
          />
          <h1>Search</h1>

          <UserProfile />
        </Body>
      </Container>
    </Background>
  )
}

export default Header
