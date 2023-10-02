'use client'

import { EditIcon } from '@/assets/editIcon'
import { useAppSelector } from '@/components/hook/redux'
import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation'
import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }

  margin-bottom: 20px;
`

const ProfileImage = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const ProfileBody = styled.div`
  height: 50px;
  width: 50px;
  position: relative;
  cursor: pointer;
`
const Text = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;

  margin-right: 10px;
  p {
    font-size: 14px;
    margin-right: 20px;
  }
  span {
    font-size: 12px;
    margin-right: 20px;
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

const EditIconStyle = styled(EditIcon)`
  width: 20px;
  height: 20px;

  transition: all 0.3s;
  &:hover {
    background-color: #0002;
    border-radius: 50%;
  }
`

const UserList = styled.div``

const User = () => {
  const pathname = usePathname()
  const photo =
    'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg'

  return (
    <Container>
      <div>
        <ProfileBody>
          <ProfileImage src={photo} alt='photo' />
        </ProfileBody>
        <Text>
          <p>Name LastName</p>
          <span>kdfnslknfsdlknf@mail.ru</span>
          <span>Role: Admin</span>
        </Text>
      </div>
      <Link href={pathname + '/' + 'id'}>
        <EditIconStyle />
      </Link>
    </Container>
  )
}

const Users = () => {
  const { user } = useAppSelector((state) => state.user)
  const role = user?.role || 'client'

  // if (role === 'client') redirect('/profile')

  return (
    <UserList>
      {new Array(8).fill({ name: 'ssafsafsaf' }).map((user) => (
        <User />
      ))}
    </UserList>
  )
}

export default Users
