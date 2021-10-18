import { 
  Wrapper, 
  HalfDivs, 
  Title, 
  GeneralText, 
  BookImg 
} from './styles';
import { formatAuthors } from '../../helpers';

const BookCard = (props) => {
  const { title, authors, img, isForSale, ...rest} = props;
  const formattedAuthors = formatAuthors(authors)
  return (
    <Wrapper {...rest}>
      <HalfDivs dotted />
      <HalfDivs>
        <Title>{title}</Title>
        <GeneralText>{formattedAuthors}</GeneralText>
      </HalfDivs>
      <BookImg src={img}/>

    </Wrapper>
  )
}

export default BookCard;