import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.background};
  padding: 1rem 0;
  box-shadow: ${props => props.theme.shadows.sm};
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  background: ${props => props.theme.colors.background};
  padding: 2rem;
  box-shadow: ${props => props.theme.shadows.lg};
  z-index: 1001;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const ResumeButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: 600;
  text-decoration: none;
  margin-left: 1.5rem;
  transition: background 0.3s ease;
  box-shadow: ${props => props.theme.shadows.sm};
  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/education', label: 'Education' },
    { path: '/blog', label: 'Blog' },
    { path: '/tech-stack', label: 'Tech Stack' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <Nav style={{ background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent' }}>
      <NavContainer>
        <Logo to="/">Md Rezaul Haque</Logo>
        
        <NavLinks>
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path}>
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
        <ResumeButton href="/Resume_MdRezaulHaque.pdf" target="_blank">
          Resume
        </ResumeButton>

        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>

        <MobileMenu
          initial={{ x: '100%' }}
          animate={{ x: isOpen ? 0 : '100%' }}
          transition={{ type: 'tween' }}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </MobileMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 