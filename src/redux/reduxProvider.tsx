'use client'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import styled from 'styled-components'

const Container = styled.div`
  > div {
    width: 1000px;
    margin: 0px auto;
    padding: 0px 10px;
  }

  @media (max-width: 1000px) {
    > div {
      width: 700px;
    }
  }
  @media (max-width: 700px) {
    > div {
      width: 400px;
    }
  }
`

export const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <Container>{children}</Container>
    </Provider>
  )
}
