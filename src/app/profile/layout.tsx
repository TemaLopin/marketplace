'use client'
import { COLORS } from '@/constants/colors'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px !important;
`

const UserToolbar = styled.div`
  width: 100%;

  box-shadow: 3px 4px 6px #0004;
  border: 1px solid #0004;
  border-radius: 10px;
  padding: 5px 10px;

  margin-bottom: 20px;

  > div {
    display: flex;
    align-items: center;
  }
`
const LinkToolbar = styled(Link)<{ isSelected: boolean }>`
  text-decoration: none;
  padding: 4px 0px 2px 0px;
  margin-right: 20px;
  margin-bottom: 4px;

  border-bottom: 2px solid
    ${({ isSelected }) => (isSelected ? COLORS.orange : '#fff')};

  color: ${COLORS.orange};
  position: relative;

  &:hover {
    border-bottom: 2px solid ${COLORS.orange};
  }
`

const UserHeader = () => {
  const toolbarElements = [
    {
      name: 'Profile',
      url: '/profile',
      private: ['user', 'admin', 'superadmin'],
    },
    {
      name: 'Settings',
      url: '/profile/settings',
      private: ['user', 'admin', 'superadmin'],
    },
    {
      name: 'Users',
      url: '/profile/users',
      private: ['admin', 'superadmin'],
    },
    {
      name: 'Products',
      url: '/profile/products',
      private: ['admin', 'superadmin'],
    },
  ]

  const ROLE = 'admin'

  const pathname = usePathname()

  return (
    <UserToolbar>
      <div data-animch='3'>
        {toolbarElements
          .filter((tool) => tool.private.includes(ROLE))
          .map((tool) => (
            <LinkToolbar
              isSelected={pathname === tool.url}
              key={tool.url}
              href={tool.url}
            >
              {tool.name}
            </LinkToolbar>
          ))}
      </div>
    </UserToolbar>
  )
}

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <UserHeader />
      {children}
    </Container>
  )
}

export default UserLayout
