import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiNextdotjs } from 'react-icons/si';

const StackContainer = styled.div`
  padding: 120px 0 80px;
`;
const StackSection = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;
const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  color: ${props => props.theme.colors.text};
`;
const StackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  justify-items: center;
`;
const StackCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  padding: 2rem 1rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;
const StackIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;
const StackName = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
`;

const TechStack = () => {
  const stack = [
    { icon: <FaReact />, name: 'React.js' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiExpress />, name: 'Express.js' },
    { icon: <SiJavascript />, name: 'JavaScript' },
    { icon: <FaAws />, name: 'AWS' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <FaDatabase />, name: 'MySQL/PostgreSQL' },
    { icon: <FaDocker />, name: 'Docker' },
  ];
  return (
    <StackContainer>
      <StackSection>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Core Tech Stack
        </Title>
        <StackGrid>
          {stack.map((item, idx) => (
            <StackCard
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <StackIcon>{item.icon}</StackIcon>
              <StackName>{item.name}</StackName>
            </StackCard>
          ))}
        </StackGrid>
      </StackSection>
    </StackContainer>
  );
};

export default TechStack; 