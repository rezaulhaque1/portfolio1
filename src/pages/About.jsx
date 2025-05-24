import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaLanguage, FaGraduationCap } from 'react-icons/fa';

const AboutContainer = styled.div`
  padding: 120px 0 80px;
`;

const AboutSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.text};
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageSection = styled(motion.div)`
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  box-shadow: ${props => props.theme.shadows.lg};
`;

const InfoSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Bio = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.lightText};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Icon = styled.div`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
`;

const InfoText = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.text};
`;

const ResumeButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.75rem 2rem;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease;
  box-shadow: ${props => props.theme.shadows.sm};
  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutSection>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </Title>
        <Content>
          <ImageSection
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProfileImage src="/profile.jpg" alt="Md Rezaul Haque" />
          </ImageSection>
          <InfoSection
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Bio>
              Self-driven Full Stack Web Developer with hands-on experience in React.js, Node.js, and AWS. 
              Completed a 6-month internship and built AI-powered web applications. 
              Seeking a challenging role to apply and enhance technical skills.
            </Bio>
            <ResumeButton href="/Resume_MdRezaulHaque.pdf" target="_blank">
              View Resume
            </ResumeButton>
            <InfoItem>
              <Icon>
                <FaMapMarkerAlt />
              </Icon>
              <InfoText>New Delhi, India</InfoText>
            </InfoItem>
            <InfoItem>
              <Icon>
                <FaLanguage />
              </Icon>
              <InfoText>English (Fluent), Hindi (Fluent)</InfoText>
            </InfoItem>
            <InfoItem>
              <Icon>
                <FaGraduationCap />
              </Icon>
              <InfoText>
                B.Tech in Computer Science & Engineering<br />
                Rajiv Gandhi Proudyogiki Vishwavidyalaya (R.G.P.V)<br />
                2023 – 2026
              </InfoText>
            </InfoItem>
          </InfoSection>
        </Content>
      </AboutSection>
    </AboutContainer>
  );
};

export default About; 