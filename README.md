# John Doe - Portfolio

A modern, responsive portfolio website built with React, Bootstrap, and SCSS. Showcase your projects, services, and professional experience with an elegant design and smooth user experience.

## 🚀 Features

- **Responsive Design** - Mobile-first approach with fully responsive layout
- **Dynamic Navigation** - Smart hamburger menu that appears only on screens < 577px
- **Multi-page Application** - Built with React Router for seamless navigation
- **Service Showcase** - Display your professional services
- **Portfolio Section** - Highlight your best projects
- **Contact Page** - Allow visitors to reach out
- **Legal Compliance** - Mentions Légales (Legal Notices) page
- **Modern Styling** - Bootstrap + SCSS for beautiful, maintainable styles
- **Performance Optimized** - Configured with Web Vitals monitoring

## 🛠️ Tech Stack

- **React** (v19.2.3) - UI library
- **React Router DOM** (v7.13.0) - Client-side routing
- **Bootstrap** (v5.3.8) - CSS framework
- **Bootstrap Icons** (v1.13.1) - Icon library
- **SCSS/Sass** - Advanced styling
- **React Scripts** (v5.0.1) - Build configuration

## 📦 Installation

1. **Clone the repository** (if applicable)

```bash
git clone <repository-url>
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📖 Available Scripts

- `npm start` - Start the development server
- `npm build` - Build the app for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App (⚠️ irreversible)

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   └── Navbar.js         # Navigation with responsive hamburger menu
│   ├── pages/
│   │   ├── Contact.js        # Contact page
│   │   ├── MentionLegales.js # Legal notices
│   │   ├── Portfolio.js      # Portfolio showcase
│   │   └── Services.js       # Services display
│   ├── assets/
│   │   ├── icon/             # Icon assets
│   │   └── img/
│   │       └── portfolio/    # Portfolio images
│   ├── App.js                # Main app component
│   ├── App.scss              # Global styles
│   ├── index.js              # App entry point
│   ├── index.css             # Global CSS
│   └── setupTests.js         # Test configuration
├── package.json
└── README.md
```

## 🎨 Customization

### Navigation Breakpoint

The hamburger menu appears only on screens smaller than 577px. To adjust this breakpoint, edit the media queries in `src/App.scss`:

```scss
@media (max-width: 576px) {
	// Mobile styles
}

@media (min-width: 577px) {
	// Desktop styles
}
```

### Branding

Update "JOHN DOE" in `src/components/Navbar.js` to your name or brand.

### Colors & Styling

Modify `src/App.scss` to customize the color scheme and styling across the application.

## 🌐 Pages

| Page      | Route             | Description                |
| --------- | ----------------- | -------------------------- |
| Home      | `/`               | Landing page               |
| Services  | `/Services`       | Your professional services |
| Portfolio | `/Portfolio`      | Project showcase           |
| Contact   | `/Contact`        | Contact form/information   |
| Legal     | `/MentionLegales` | Legal notices and terms    |

## 🔧 Development Notes

- **Bootstrap Integration** - Bootstrap CSS and JS are loaded from CDN for optimal performance
- **Fixed Navigation** - The navbar is positioned fixed with z-index 1000
- **Testing Ready** - Jest and React Testing Library are pre-configured
- **SASS Support** - Full SCSS support enabled with Sass compiler

## 📱 Responsive Breakpoints

- **Mobile** - < 577px (Hamburger menu)
- **Desktop** - ≥ 577px (Full navigation)

## 🚀 Deployment

Build the optimized production version:

```bash
npm run build
```

This creates a `build` folder ready to be deployed to services like Vercel, Netlify, or GitHub Pages.

## 📄 License

This project is private/personal. Modify the license section as needed.

## 👤 Author

**John Doe**  
Portfolio: [Your Website URL]  
Email: jphndoe@IbetYouDidn'tReadHere.com

---

**Happy coding! 🎉**
