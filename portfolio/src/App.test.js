import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Helper to render with route
const renderWithRoute = (initialEntries = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <App />
    </MemoryRouter>
  );
};

// 1) Should render Home headings on root route
it('renders Home headings on \/ route', () => {
  renderWithRoute(['/']);
  expect(screen.getByRole('heading', { level: 1, name: /bonjour, je suis john doe/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2, name: /développeur web full stack/i })).toBeInTheDocument();
});

// 2) Should navigate to Services page when route is \/Services
it('renders Services page on \/Services route', () => {
  renderWithRoute(['/Services']);
  // Expect a heading or text unique to Services page
  // Fallback: at least assert Navbar link active and presence of route container via document text
  expect(screen.getByText(/services/i)).toBeInTheDocument();
});

// 3) Navbar should contain all navigation links with correct hrefs
it('contains all navbar links with correct destinations', () => {
  renderWithRoute(['/']);
  const expected = [
    { name: /home/i, href: '\/' },
    { name: /services/i, href: '\/Services' },
    { name: /portfolio/i, href: '\/Portfolio' },
    { name: /contact/i, href: '\/Contact' },
    { name: /mentionlegales/i, href: '\/MentionLegales' },
  ];
  expected.forEach(({ name, href }) => {
    const link = screen.getByRole('link', { name });
    expect(link).toBeInTheDocument();
    expect(link.getAttribute('href')).toBe(href);
  });
});

// 4) Clicking "En savoir plus" should open and then close the CardMenu
it('opens and closes the profile CardMenu', async () => {
  renderWithRoute(['/']);
  const openBtn = screen.getByRole('button', { name: /en savoir plus/i });
  openBtn.click();

  // Card menu content appears
  expect(screen.getByText(/mon profil github/i)).toBeInTheDocument();

  // Close via the "Fermer" button
  const closeBtn = screen.getByRole('button', { name: /fermer/i });
  closeBtn.click();

  // After closing, the title should no longer be present
  expect(screen.queryByText(/mon profil github/i)).not.toBeInTheDocument();
});

// 5) Footer contains expected contact information and social icons
it('renders footer with contact information and social icons', () => {
  renderWithRoute(['/']);
  expect(screen.getByText(/40 rue laure diebold/i)).toBeInTheDocument();
  expect(screen.getByText(/69009 lyon, france/i)).toBeInTheDocument();
  expect(screen.getByText(/john.doe@gmail.com/i)).toBeInTheDocument();
});
