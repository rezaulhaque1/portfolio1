import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const ExperienceContainer = styled.div`
  padding: 120px 0 80px;
`;

const ExperienceSection = styled.div`
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background: ${props => props.theme.colors.primary};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      left: 31px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;

  &:nth-child(odd) {
    left: 0;
  }

  &:nth-child(even) {
    left: 50%;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;

    &:nth-child(even) {
      left: 0;
    }
  }
`;

const TimelineContent = styled.div`
  padding: 20px;
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: ${props => props.theme.colors.primary};
    border-radius: 50%;
    top: 20px;
    right: -60px;
    z-index: 1;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      left: -50px;
      right: auto;
    }
  }
`;

const TimelineDate = styled.div`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text};
`;

const TimelineCompany = styled.h4`
  font-size: 1rem;
  color: ${props => props.theme.colors.lightText};
  margin-bottom: 1rem;
`;

const TimelineDescription = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  color: ${props => props.theme.colors.lightText};
`;

const TimelineDescriptionItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.6;
`;

const Experience = () => {
  const experiences = [
    {
      date: 'Feb 2023 – Jul 2023',
      title: 'Full Stack Developer Intern',
      company: 'Aligly Technology',
      description: [
        'Built full-stack web applications using React.js, Node.js, and Express.js',
        'Integrated RESTful APIs and deployed modules using AWS',
        'Collaborated with Agile teams to improve UI/UX and backend efficiency',
      ],
    },
    // Add more experiences as needed
  ];

  return (
    <ExperienceContainer>
      <ExperienceSection>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </Title>
        <Timeline>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TimelineContent>
                <TimelineDate>{experience.date}</TimelineDate>
                <TimelineTitle>{experience.title}</TimelineTitle>
                <TimelineCompany>{experience.company}</TimelineCompany>
                <TimelineDescription>
                  {experience.description.map((item, i) => (
                    <TimelineDescriptionItem key={i}>{item}</TimelineDescriptionItem>
                  ))}
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </ExperienceSection>
    </ExperienceContainer>
  );
};

export default Experience; 