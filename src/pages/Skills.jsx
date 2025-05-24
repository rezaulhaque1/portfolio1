import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaDatabase,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
} from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiPostgresql, SiMysql } from 'react-icons/si';

const SkillsContainer = styled.div`
  padding: 120px 0 80px;
`;

const SkillsSection = styled.div`
  max-width: 1200px;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: ${props => props.theme.colors.background};
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const SkillName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text};
`;

const SkillDescription = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.lightText};
`;

const Skills = () => {
  const skills = [
    {
      icon: <FaReact />,
      name: 'React.js',
      description: 'Frontend development with React and Next.js',
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js',
      description: 'Backend development with Express.js',
    },
    {
      icon: <SiJavascript />,
      name: 'JavaScript',
      description: 'Modern ES6+ features and best practices',
    },
    {
      icon: <FaAws />,
      name: 'AWS',
      description: 'Cloud services and deployment',
    },
    {
      icon: <FaGitAlt />,
      name: 'Git',
      description: 'Version control and collaboration',
    },
    {
      icon: <FaDatabase />,
      name: 'Databases',
      description: 'MySQL, PostgreSQL, MongoDB',
    },
    {
      icon: <FaJava />,
      name: 'Java',
      description: 'Object-oriented programming',
    },
    {
      icon: <FaPython />,
      name: 'Python',
      description: 'Scripting and automation',
    },
    {
      icon: <FaHtml5 />,
      name: 'HTML5',
      description: 'Semantic markup and accessibility',
    },
    {
      icon: <FaCss3Alt />,
      name: 'CSS3',
      description: 'Responsive design and animations',
    },
    {
      icon: <FaDocker />,
      name: 'Docker',
      description: 'Containerization and deployment',
    },
    {
      icon: <SiMongodb />,
      name: 'MongoDB',
      description: 'NoSQL database management',
    },
  ];

  return (
    <SkillsContainer>
      <SkillsSection>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </Title>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillName>{skill.name}</SkillName>
              <SkillDescription>{skill.description}</SkillDescription>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsSection>
    </SkillsContainer>
  );
};

export default Skills; 