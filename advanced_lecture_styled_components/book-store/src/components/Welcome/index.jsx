import {
  Hero,
  Heading,
  Paragraph,
  ButtonContainer,
  Button
} from './styles';
import {TopBar as Sticky} from '../Header/styles';

const Welcome = (props) => {

  return (
    <Hero>
    <Sticky isSticky />
      <Heading>Find your next read</Heading>
      <Paragraph>Welcome to Mulder's Books where we currate the Arrakis' largest selection of paranormal publications. Not looking for something strange? Don't worry, we also carry your more conventional reads!</Paragraph>
      <ButtonContainer>
        <Button>search collection</Button>
        <Button secondary>email us</Button>
      </ButtonContainer>
    </Hero>
  )
}

export default Welcome;