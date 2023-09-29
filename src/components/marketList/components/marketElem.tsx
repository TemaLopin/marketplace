import { COLORS } from '@/constants/colors'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 500px 100px;
  align-items: flex-start;

  margin-bottom: 20px;
  margin-left: 20px;

  padding: 10px;

  border-radius: 4px;
  border: 1px solid #0004;
  box-shadow: 2px 2px 4px #0004;
`

const Title = styled(Link)`
  font-family: 'PT Sans', Helvetica, Arial, sans-serif;
  line-height: 22px;
  color: #000;
  text-decoration: none;
  cursor: pointer;

  transition: color 0.3s;

  &:hover {
    color: ${COLORS.orange};
  }
`

const Image = styled.img`
  max-width: 200px;
  max-height: 200px;
`

const Price = styled.p`
  color: ${COLORS.orange};
  font-weight: 700;
`

const Button = styled.button`
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid #0005;
  background-color: transparent;
  font-weight: 700;
  cursor: pointer;

  transition: 0.4s;

  &:hover {
    background-color: ${COLORS.orange};
    color: #fff;
  }
`

const ToolContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  height: 100%;
`

const MarketElem = () => {
  const srcUrl =
    'https://c.dns-shop.ru/thumb/st1/fit/200/200/a754040a063c87b9fd6b9fcf005014b1/cb4865c8cef8deb4597f328c1e027aa1d42c00d233f98aadd819f59401280e28.jpg.webp'

  return (
    <Container>
      <Image src={srcUrl} />
      <Title href={'/'}>
        Ultra HD 4K (3840x2160), IPS, Intel Core i9-13980HX, ядра: 8 + 16 х 2.2
        ГГц, RAM 32 ГБ, SSD 2000 ГБ, GeForce RTX 4090 для ноутбуков 16 ГБ,
        Windows 11 Home Single Language
      </Title>
      <ToolContainer>
        <Price>342223 Rub</Price>
        <Button>BUY</Button>
      </ToolContainer>
    </Container>
  )
}

export default MarketElem
