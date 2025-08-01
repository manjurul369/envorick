# EnvoRick Website

A Next.js website for EnvoRick - Converting Plastic Waste into Sustainable Construction Bricks.

## 🚀 Deploy to Vercel

This website is optimized for Vercel deployment. Follow these steps:

### Method 1: Deploy from GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/envorick-website.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure settings
   - Click "Deploy"

### Method 2: Deploy with Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Link to existing project or create new
   - Confirm settings
   - Deploy automatically

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
│   ├── assets/
│   │   ├── gallery/
│   │   ├── team/
│   │   └── posts/
│   └── components/
└── package.json
```

## 🌐 Features

- Responsive design for all devices
- Interactive slideshows with touch controls
- Scroll-triggered animations
- Team member showcase
- Project updates with real images
- Contact section with social links
- Performance metrics with animated counters
- Timeline with snake layout for mobile

## 🔧 Configuration

- **Framework:** Next.js 15.3.3
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Images:** Next.js Image optimization
- **Deployment:** Vercel-ready configuration

## 📞 Contact

For questions about deployment or the project:
- Email: manjurul.ses.bu@gmail.com
- Phone: +8801767-980780

---

Built with ❤️ by Team EnvoRick
