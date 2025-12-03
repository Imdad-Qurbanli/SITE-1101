# Portfolio Website Setup Guide

## Quick Start

This guide will help you customize and deploy your personal portfolio website.

## Step 1: Customize Your Website

### Update Personal Information

1. **Edit `index.html`** (Home Page)
   - Replace the welcome text and introduction
   - Update social media links to your actual profiles

2. **Edit `about.html`** (About Page)
   - Add your personal background
   - Update skills and qualifications
   - Include your activities and achievements

3. **Edit `projects.html`** (Projects Page)
   - Update Project 1 details with your actual project
   - Add Hour of Code project information
   - Add additional projects if you have them

4. **Edit `resume.html`** (Resume Page)
   - Update professional summary
   - List your actual skills
   - Add your education details
   - Include your work experience

5. **Update Footer (All Pages)**
   - Replace social media links with your GitHub and Codecademy profiles
   - Add your GitHub repository link

### Add Your Images

1. Replace placeholder images in `assets/images/` with your own:
   - `profile.jpg` - Your profile photo
   - `project1.jpg` - Screenshot of your first project
   - `project2.jpg` - Screenshot of Hour of Code project
   - `project3.jpg` - Additional project image
   - `about.jpg` - An image for the About page

### Customize Styling (Optional)

Edit `css/style.css` to change colors:

```css
:root {
    --primary-color: #0066cc;      /* Main brand color */
    --secondary-color: #00a8e8;    /* Accent color */
    --dark-color: #1a1a1a;         /* Text color */
    --light-color: #f5f5f5;        /* Background color */
    --gray-color: #666666;         /* Secondary text */
    --accent-color: #ff6b6b;       /* Highlight color */
}
```

## Step 2: Test Locally

### Option A: Using VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Your browser will open to `http://localhost:5500`

### Option B: Using Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then visit: `http://localhost:8000`

### Option C: Using Node.js
```bash
# Install http-server globally
npm install -g http-server

# Run in your project directory
http-server
```

## Step 3: Set Up GitHub Repository

### Create a GitHub Account
1. Go to https://github.com
2. Sign up for a free account
3. Verify your email

### Create a Public Repository
1. Click the "+" icon in the top right corner
2. Select "New repository"
3. Name it: `my-portfolio` or similar
4. Make sure it's **PUBLIC**
5. Add a description: "My Personal Portfolio Website"
6. Click "Create repository"

### Push Your Files to GitHub

```bash
# Configure Git (if not already done)
git config user.name "Your Name"
git config user.email "your-email@example.com"

# Initialize the repository (already done in setup)
cd "C:\Users\user\OneDrive\Desktop\test2"
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Personal portfolio website"

# Add remote origin (replace with your repository URL)
git remote add origin https://github.com/your-username/my-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Update Navigation Links to GitHub

Edit the footer in all HTML files and replace `https://github.com` with your actual repository URL:
```html
<a href="https://github.com/your-username/my-portfolio" target="_blank">View on GitHub</a>
```

## Step 4: Deploy Your Website (Hosting Options)

### Option A: GitHub Pages (Free)
1. Go to your repository settings
2. Scroll to "GitHub Pages"
3. Select "main branch" as the source
4. Your site will be live at: `https://your-username.github.io/my-portfolio`

### Option B: Netlify (Free)
1. Go to https://netlify.com
2. Click "New site from Git"
3. Connect your GitHub account
4. Select your portfolio repository
5. Click "Deploy"
6. Your site will be live on a Netlify subdomain

### Option C: Vercel (Free)
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"
5. Your site will be live instantly

### Option D: Traditional Hosting
Use any web hosting provider (Bluehost, GoDaddy, etc.) and upload files via FTP

## Step 5: Update Social Links

Replace placeholder links in all pages:

### HTML to Update
Search for these in all `.html` files:
```html
https://github.com          → https://github.com/your-username
https://codecademy.com      → https://www.codecademy.com/profiles/your-username
```

## Step 6: Make Ongoing Updates

### Adding New Projects
1. Add project image to `assets/images/`
2. Update `projects.html` with new project card
3. Commit and push to GitHub

### Updating Resume
1. Add PDF to `assets/resume.pdf`
2. Or keep resume information in `resume.html`
3. Commit and push to GitHub

### Adding New Pages
1. Create new `.html` file with same structure as existing pages
2. Add navigation link in all pages
3. Update footer links
4. Commit and push to GitHub

## File Structure Reminder

```
my-portfolio/
├── index.html           # Home page
├── about.html           # About page
├── projects.html        # Projects showcase
├── resume.html          # Resume/CV page
├── css/
│   └── style.css       # All styling
├── js/
│   └── script.js       # Interactivity
├── assets/
│   ├── images/         # Your images
│   └── resume.pdf      # Optional resume PDF
├── README.md           # Project documentation
├── .gitignore          # Files to ignore in Git
└── .gitattributes      # Git line endings config
```

## Troubleshooting

### Images Not Showing
- Check file paths in HTML
- Ensure images are in `assets/images/` folder
- Verify filename spelling matches exactly

### Navigation Not Working
- Check that all `.html` files exist
- Verify href paths in navigation menu
- Clear browser cache and refresh

### Styles Not Loading
- Check that `css/style.css` path is correct
- Verify CSS file exists and has content
- Clear browser cache

### Git Push Fails
- Verify you have push access to the repository
- Check your internet connection
- Try: `git pull origin main` first, then push

## Next Steps

1. ✅ Customize your content
2. ✅ Add your images
3. ✅ Test locally
4. ✅ Push to GitHub
5. ✅ Deploy your website
6. ✅ Share your portfolio!

## Resources

- HTML Documentation: https://developer.mozilla.org/en-US/docs/Web/HTML
- CSS Documentation: https://developer.mozilla.org/en-US/docs/Web/CSS
- JavaScript Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- Git Documentation: https://git-scm.com/doc
- GitHub Guides: https://guides.github.com

## Support

If you encounter any issues:
1. Check the README.md in the root folder
2. Review the HTML/CSS/JavaScript comments
3. Check browser console for errors (F12 in most browsers)
4. Search your issue on Stack Overflow

---

**Good luck with your portfolio website! 🚀**
