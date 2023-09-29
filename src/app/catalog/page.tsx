'use client'
import Filter from '@/components/filters/filter'
import Header from '@/components/header/header'
import { List } from '@/components/marketList/list'
import { useState } from 'react'
import styled from 'styled-components'

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 1000px;
  margin: 0px auto;
`

const Container = styled.div``

const New = () => {
  const [state, setState] = useState()

  return (
    <Container>
      <Header />
      <Body>
        {/* <div>Filter</div>
        <div>Catalog</div> */}
        <Filter callback={(data) => {}} data={{}}/>
        <List />
      </Body>
      {/* <footer>pagination</footer> */}
    </Container>
  )
}

export default New
