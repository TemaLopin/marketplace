import { GalleryIcon } from '@/assets/galleryIcon'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const ProfileImage = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
const ProfileHover = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;

  background-color: #0006;
  border-radius: 50%;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  transition: opacity 0.5s;

  svg {
    height: 20px;
    width: 20px;
    fill: #fff;
  }
`
const ProfileBody = styled.div`
  position: relative;
  cursor: pointer;
  &:hover {
    ${ProfileHover} {
      opacity: 1;
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

const photo =
  'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg'

const UserProfile = () => {
  const { push } = useRouter()

  const handleClickProfile = () => {
    push('/profile')
  }

  return (
    <Container>
      <Text>
        <p>Name LastName</p>
        <span>kdfnslknfsdlknf@mail.ru</span>
        <span>Role: Admin</span>
      </Text>
      <ProfileBody onClick={handleClickProfile}>
        <ProfileImage src={photo} alt='photo' />
        <ProfileHover>
          <GalleryIcon />
        </ProfileHover>
      </ProfileBody>
    </Container>
  )
}

export default UserProfile
