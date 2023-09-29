import styled from 'styled-components'
import DefaultInput from '../customInput/defaultInput'
import CustomSearchInput from '../customInput/searchInput'
import { FC } from 'react'

const Container = styled.div`
  width: 30%;
`

const Box = styled.div`
  margin-bottom: 10px;
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

type FilterPropsT = {
  callback: (data: any) => void
  data: { [key: string]: any }
}
const Filter: FC<FilterPropsT> = ({ callback, data }) => {
  const handleChange = () => {
    const filter = {}
    localStorage.setItem('filter', JSON.stringify(filter))
  }

  return (
    <Container>
      <Box>
        <CustomSearchInput value='' handleChange={(data) => {}} />
      </Box>
      <Box>
        <DefaultInput type='checkbox' />
        <label>Has in market</label>
      </Box>
      <Box>
        <DefaultInput type='checkbox' />
        <label>Has in market</label>
      </Box>
      <Box>
        <p>Price</p>
        <FlexRow>
          <DefaultInput maxLength={6} />
          <DefaultInput maxLength={6} />
        </FlexRow>
      </Box>
    </Container>
  )
}

export default Filter
