import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import { useAppSelector } from '../hook/redux'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
const FakeImage = styled.div`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#e66465, #9198e5);

  color: #fff;
  font-size: 28px;
  font-weight: 700;
  padding-top: 5px;
`
const ProfileHover = styled.div`
  position: absolute;

  z-index: 10;
  position: absolute;
  top: 40px;
  right: 0px;

  opacity: 0;
  visibility: hidden;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;

  transition: opacity 0.5s;

  svg {
    height: 20px;
    width: 20px;
    fill: #fff;
  }

  a:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  a:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`
const ProfileBody = styled.div`
  height: 50px;
  width: 50px;
  position: relative;
  cursor: pointer;
  &:hover {
    ${ProfileHover} {
      opacity: 1;
      visibility: visible;
    }
  }
`
const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-right: 10px;
  p {
    font-size: 14px;
  }
  span {
    font-size: 12px;
  }
`
const StyleLink = styled(Link)`
  min-width: 100px;
  padding: 8px 10px;

  text-decoration: none;
  color: #000;
  background-color: #fff;

  transition: all 0.5s;
  display: flex;
  width: 100%;

  &:hover {
    background-color: #787878;
    color: #fff;
  }
`

const photo =
  'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg'

const ProfileImage = ({ src, name }: { name: string; src: string }) => {
  const firstLetter = name?.slice(0, 1) || 'T'
  return src.length > 0 ? (
    <Image src={src} alt='photo' />
  ) : (
    <FakeImage>{firstLetter}</FakeImage>
  )
}

const UserProfile = () => {
  const { user } = useAppSelector((state) => state.user)
  const role = user.role || 'client'

  return (
    <Container>
      <Text>
        <p>
          {user.firstName}
          {user.lastName}
        </p>
        <span>{user.email}</span>
      </Text>
      <ProfileBody>
        <ProfileImage name={user?.firstName} src={user.picture} />
        <ProfileHover>
          <StyleLink href='/profile'>Profile</StyleLink>
          {role === 'client' && <StyleLink href='/admin'>Admin</StyleLink>}
          <StyleLink href='/'>Log Out</StyleLink>
        </ProfileHover>
      </ProfileBody>
    </Container>
  )
}

export default UserProfile
