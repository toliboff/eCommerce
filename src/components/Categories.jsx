import styled from 'styled-components';
import { categories } from '../data';
import { mobile } from '../responsive'
import Category from './Category';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({padding: 0, flexDirection: 'column'})}
`

const Categories = () => {
  console.log(categories);
  return (
    <Container>
      {categories.map((item) =>(<Category item={item} key={item.id} />)) }
    </Container>
  )
}

export default Categories
