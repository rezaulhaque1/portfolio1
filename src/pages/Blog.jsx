import styled from 'styled-components';
import { motion } from 'framer-motion';

const BlogContainer = styled.div`
  padding: 120px 0 80px;
`;
const BlogSection = styled.div`
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
const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;
const BlogCard = styled(motion.div)`
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  padding: 2rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;
const BlogTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text};
`;
const BlogDate = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;
const BlogSummary = styled.p`
  color: ${props => props.theme.colors.lightText};
  margin-bottom: 1rem;
  line-height: 1.6;
`;
const ReadMore = styled.a`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  text-decoration: underline;
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'The Power of Asynchronous JavaScript',
      date: 'May 25, 2024',
      summary: 'Exploring async/await and Promises for cleaner and more efficient asynchronous code in JavaScript.',
      link: '/blog/the-power-of-asynchronous-javascript',
    },
    {
      id: 2,
      title: 'Building RESTful APIs with Node.js and Express',
      date: 'May 20, 2024',
      summary: 'A practical guide to designing and implementing robust RESTful APIs using the Node.js ecosystem.',
      link: '/blog/building-restful-apis-with-nodejs',
    },
    {
      id: 3,
      title: 'State Management in React: Context API vs Redux',
      date: 'May 15, 2024',
      summary: 'Comparing different state management patterns in React and when to use Context API versus Redux.',
      link: '/blog/state-management-in-react',
    },
    {
      id: 4,
      title: 'Containerizing Applications with Docker',
      date: 'May 10, 2024',
      summary: 'An introduction to Docker and how it simplifies application deployment and scaling.',
      link: '/blog/containerizing-applications-with-docker',
    },
    {
      id: 5,
      title: 'Introduction to SQL vs NoSQL Databases',
      date: 'May 5, 2024',
      summary: 'Understanding the key differences between SQL and NoSQL databases and choosing the right one for your project.',
      link: '/blog/introduction-to-sql-vs-nosql',
    },
  ];

  return (
    <BlogContainer>
      <BlogSection>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Blog & Articles
        </Title>
        <BlogGrid>
          {articles.map((article, index) => (
            <BlogCard
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogTitle>{article.title}</BlogTitle>
              <BlogDate>{article.date}</BlogDate>
              <BlogSummary>{article.summary}</BlogSummary>
              <ReadMore href={article.link} target="_blank" rel="noopener noreferrer">
                Read More
              </ReadMore>
            </BlogCard>
          ))}
        </BlogGrid>
      </BlogSection>
    </BlogContainer>
  );
};

export default Blog; 