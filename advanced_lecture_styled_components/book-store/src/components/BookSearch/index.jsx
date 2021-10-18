import {
  Wrapper,
  Heading,
  Form,
  Button
} from './styles';
import { TopBar as Sticky } from '../Header/styles';
import Input from '../Input';

const BookSearch = (props) => {
  const { titleValue, setTitleValue, authorValue, setAuthorValue, handleSearch } = props;
  return (
    <Wrapper>
      <Sticky isSticky/>
      <Heading>Looking for something?</Heading>
      <Form>
        <Input
          label="book title"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
        <Input
          label="author"
          value={authorValue}
          onChange={(e) => setAuthorValue(e.target.value)}
        /> 
        <Button 
          type="submit" 
          onClick={handleSearch}
        >
          Search
        </Button>
      </Form>
    </Wrapper>
  )
}

export default BookSearch;