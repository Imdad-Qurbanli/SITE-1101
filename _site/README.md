# My Personal Portfolio Website

A modern, responsive personal portfolio website showcasing my skills, projects, and experience. This website is built with clean, modularized code using HTML5, CSS3, and vanilla JavaScript.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Multiple Pages**: Home, About, Projects, and Resume pages
- **Navigation Bar**: Sticky navigation with mobile hamburger menu
- **Social Links**: Icons linking to GitHub and Codecademy profiles
- **Projects Showcase**: Dedicated projects page with project cards featuring descriptions and screenshots
- **Clean Code**: Modularized and well-organized file structure
- **Modern Styling**: Professional color scheme with smooth transitions and animations
- **Scroll Effects**: Smooth scrolling and scroll-to-top button

## Pages

### Home Page (`index.html`)
- Profile photo
- Personal introduction
- Featured projects preview
- Call-to-action buttons
- Social media links

### About Page (`about.html`)
- Personal background and journey
- Skills and qualifications
- Activities and achievements timeline
- Social connection section

### Projects Page (`projects.html`)
- Project 1: Interactive Web Application
- Hour of Code Project
- Additional projects section
- Detailed project cards with descriptions and technology tags

### Resume Page (`resume.html`)
- Professional summary
- Technical skills breakdown
- Education section
- Work experience and achievements
- PDF download option

## Project Structure

```
portfolio/
├── index.html              # Home page
├── about.html              # About page
├── projects.html           # Projects page
├── resume.html             # Resume page
├── css/
│   └── style.css          # All styling (responsive design included)
├── js/
│   └── script.js          # JavaScript for interactivity
├── assets/
│   ├── images/            # Image assets folder
│   │   ├── profile.jpg
│   │   ├── project1.jpg
│   │   ├── project2.jpg
│   │   ├── project3.jpg
│   │   └── about.jpg
│   └── resume.pdf         # Resume PDF (optional)
├── README.md              # This file
└── .gitignore             # Git ignore file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript**: Vanilla JS for interactivity (no frameworks)
- **Font Awesome**: Icons for social media and features
- **Responsive Design**: Mobile-first approach with media queries

## Getting Started

### Prerequisites
- A modern web browser
- A code editor (VS Code, Sublime Text, etc.)
- Git (for version control)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/my-portfolio.git
cd my-portfolio
```

2. Open the project in your code editor:
```bash
code .
```

3. Serve the website locally:
- Use VS Code Live Server extension, or
- Use Python's built-in server:
```bash
python -m http.server 8000
```

4. Open your browser and navigate to:
```
http://localhost:8000
```

## Features in Detail

### Responsive Design
- Desktop view (1200px and above)
- Tablet view (769px - 1199px)
- Mobile view (480px - 768px)
- Extra small devices (below 480px)

### Navigation
- Sticky navigation bar
- Mobile hamburger menu
- Active page highlighting
- Smooth scroll behavior

### Interactivity
- Mobile menu toggle
- Scroll-to-top button
- Smooth animations
- Intersection observer for fade-in effects

## Customization

### Update Profile Information
1. Replace `assets/images/profile.jpg` with your own photo
2. Update text content in each HTML file
3. Update social media links in the footer

### Change Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #00a8e8;
    --dark-color: #1a1a1a;
    --light-color: #f5f5f5;
    --gray-color: #666666;
    --accent-color: #ff6b6b;
}
```

### Add New Pages
1. Create a new `.html` file
2. Copy the structure from an existing page
3. Add link to the navigation menu in all pages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## GitHub Repository

This project is hosted on GitHub. Make sure to:
1. Create a public repository
2. Push all files to GitHub
3. Update the GitHub links in the footer

## Future Enhancements

- [ ] Blog section
- [ ] Contact form with backend
- [ ] Dark mode toggle
- [ ] Advanced animations
- [ ] Video showcase
- [ ] Client testimonials
- [ ] Skills visualization

## License

This project is open source and available under the MIT License.

## Contact

Feel free to reach out through:
- GitHub: [Your GitHub Profile](https://github.com)
- Codecademy: [Your Codecademy Profile](https://codecademy.com)

## Author

Created with ❤️ by [Your Name]

---

**Last Updated**: December 2025
