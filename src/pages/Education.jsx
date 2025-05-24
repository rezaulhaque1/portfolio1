import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const EducationContainer = styled.div`
  padding: 120px 0 80px;
`;

const EducationSection = styled.div`
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

const TimelineDegree = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text};
`;

const TimelineSchool = styled.h4`
  font-size: 1rem;
  color: ${props => props.theme.colors.lightText};
  margin-bottom: 1rem;
`;

const TimelineDescription = styled.p`
  color: ${props => props.theme.colors.lightText};
  line-height: 1.6;
`;

const Education = () => {
  const education = [
    {
      date: '2023 – 2026',
      degree: 'Bachelor of Technology – Computer Science & Engineering',
      school: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (R.G.P.V)',
      description: 'Currently pursuing B.Tech in Computer Science & Engineering with focus on software development and computer systems.',
    },
    {
      date: '2019 – 2022',
      degree: 'Diploma in Mechanical Engineering',
      school: 'Jamia Millia Islamia, New Delhi',
      description: 'Completed diploma in Mechanical Engineering with focus on practical applications and industrial training.',
    },
  ];

  return (
    <EducationContainer>
      <EducationSection>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </Title>
        <Timeline>
          {education.map((edu, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TimelineContent>
                <TimelineDate>{edu.date}</TimelineDate>
                <TimelineDegree>{edu.degree}</TimelineDegree>
                <TimelineSchool>{edu.school}</TimelineSchool>
                <TimelineDescription>{edu.description}</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </EducationSection>
    </EducationContainer>
  );
};

export default Education; 