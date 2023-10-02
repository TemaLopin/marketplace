'use client'

import { FC } from 'react'
import styled from 'styled-components'

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 4px;
  margin-right: 10px;
`

const Body = styled.div`
  display: flex;

  padding: 10px;
  box-shadow: 3px 4px 8px #0004;
  border: 1px solid #0004;
  border-radius: 10px;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 150px;

  margin-bottom: 10px;

  span {
    font-style: italic;
    font-size: 16px;
  }
`

export type UserFieldPropsT = { field: string; value: string }
const UserField: FC<UserFieldPropsT> = ({ field, value }) => {
  return (
    <Box>
      <p>{field}</p>
      <span>{value}</span>
    </Box>
  )
}

export const USER_FIELDS = [
  {
    path: 'firstName',
    name: 'First name',
  },

  {
    path: 'lastName',
    name: 'Last name',
  },

  {
    path: 'email',
    name: 'Email',
  },

  {
    path: '',
    name: 'Date of Birth',
  },
]

const Profile = () => {
  const photo =
    'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg'

  return (
    <Body>
      <ProfileImage alt='user photo' src={photo} />
      <div data-animch='3'>
        {USER_FIELDS.map(({ name, path }) => (
          <UserField field={name} value='test' />
        ))}
      </div>
      <div data-animch='6'>
        <UserField field='Create At' value='test' />
      </div>
    </Body>
  )
}

export default Profile
