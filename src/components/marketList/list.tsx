import styled from 'styled-components'
import MarketElem from './components/marketElem'

const Container = styled.div``

export const List = ({ data = new Array(10).fill({}) }: any) => {
  return (
    <Container data-animch='6'>
      {data?.map((item: any) => (
        <MarketElem />
      ))}
    </Container>
  )
}
