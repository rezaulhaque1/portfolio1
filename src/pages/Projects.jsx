import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsContainer = styled.div`
  padding: 120px 0 80px;
`;

const ProjectsSection = styled.div`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.lightText};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: ${props => props.theme.colors.primary}20;
  color: ${props => props.theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: 0.875rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

// Define static project data
const staticProjects = [
  {
    title: 'AI Voice Assistant for Kitchen',
    description: 'Created a hands-free assistant for tasks like recipe reading and timer setting. Features include voice commands, recipe management, and timer functionality.',
    image: '/project1.jpg',
    tech: ['React.js', 'Node.js', 'Express.js', 'Speech Recognition APIs', 'AWS'],
    github: 'https://github.com/rezaulhaque1',
    demo: '#',
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
    image: '/project2.jpg',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    github: 'https://github.com/rezaulhaque1',
    demo: '#',
  },
  {
    title: 'Task Management System',
    description: 'A collaborative task management system with real-time updates, team management, and progress tracking features.',
    image: '/project3.jpg',
    tech: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Docker'],
    github: 'https://github.com/rezaulhaque1',
    demo: '#',
  },
  {
    title: 'Social Media Dashboard',
    description: 'A comprehensive social media analytics dashboard with data visualization, user engagement metrics, and content scheduling.',
    image: '/project4.jpg',
    tech: ['React.js', 'Node.js', 'Chart.js', 'PostgreSQL', 'AWS'],
    github: 'https://github.com/rezaulhaque1',
    demo: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase skills, projects, and experience.',
    image: '/project5.jpg',
    tech: ['React.js', 'Styled Components', 'Framer Motion'],
    github: 'https://github.com/rezaulhaque1',
    demo: '#',
  },
];

const Projects = () => {
  // Initialize state with static data
  const [projects, setProjects] = useState(staticProjects);
  const [loading, setLoading] = useState(true); // Still show loading initially while fetching
  const [error, setError] = useState(null); // Keep error state for logging

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // This is a fake API endpoint hosted on mocki.io
        // It contains the project data with image URLs.
        const response = await fetch('https://mocki.io/v1/a030c0e6-f2f2-4a39-a2f2-f2f2f2f2f2f2');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // If fetch is successful, update projects state
        setProjects(data);
      } catch (error) {
        // If fetch fails, log error, but projects state remains the initial static data
        setError(error);
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
    // We don't need to worry about cleaning up the fetch here for this simple case
  }, []); // Empty dependency array means this effect runs once on mount

  // We will still show a loading indicator initially
  if (loading) {
    return <ProjectsContainer><ProjectsSection><p style={{ textAlign: 'center' }}>Loading projects...</p></ProjectsSection></ProjectsContainer>;
  }

  // If there was an error during fetch, the static projects will be displayed
  // We can optionally show a small error message, but the request was to show the old data
  // if fetch fails, so we proceed to render the projects grid.

  return (
    <ProjectsContainer>
      <ProjectsSection>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </ProjectLink>
                  {project.demo && (
                    <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Live Demo
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
         {/* Optionally show a fetch error message here if needed */}
         {/* {error && <p style={{ textAlign: 'center', color: 'red', marginTop: '1rem' }}>Error loading latest projects. Displaying static data.</p>} */}
      </ProjectsSection>
    </ProjectsContainer>
  );
};

export default Projects; 