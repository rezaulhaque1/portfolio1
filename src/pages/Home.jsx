import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
`;

const HeroSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const HeroContent = styled.div`
  text-align: center;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    text-align: left;
  }
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.lightText};
  margin-bottom: 2rem;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: flex-start;
  }
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const HeroImage = styled(motion.div)`
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm Md Rezaul Haque
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Full Stack Developer | JavaScript Enthusiast
          </Subtitle>
          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SocialLink href="https://github.com/rezaulhaque1" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/md-rezaul-haque-b08b27214" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="mailto:mdrezaulhaquejmi@gmail.com">
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
        </HeroContent>
        <HeroImage
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Add your hero image here */}
        </HeroImage>
      </HeroSection>
    </HomeContainer>
  );
};

export default Home; 