# Global Horizons Travel Services - Nuxt.js

A modern travel website built with Nuxt.js, Vue 3, and Tailwind CSS.

## 🚀 Features

- **Hero Slider** with dynamic content and auto-advancing slides
- **Interactive Search Bar** with working date picker
- **Responsive Design** optimized for all devices
- **Vue Components** for maintainable, reusable code
- **Tailwind CSS** for modern styling
- **SEO Optimized** with Nuxt.js

## 📦 Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Visit your site:**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build for Production

```bash
# Build the application
npm run build

# Generate static files
npm run generate

# Preview the production build
npm run preview
```

## 📁 Project Structure

```
├── components/          # Reusable Vue components
│   ├── NavBar.vue      # Navigation component
│   ├── HeroSlider.vue  # Hero slider with search
│   └── SearchBar.vue   # Search functionality
├── pages/              # Nuxt.js pages (file-based routing)
│   └── index.vue       # Home page
├── assets/css/         # Global styles
│   └── main.css        # Custom CSS and animations
├── public/             # Static assets
│   └── glo.png         # Logo
└── nuxt.config.ts      # Nuxt configuration
```

## ✨ Key Components

### NavBar.vue

- Responsive navigation with mobile menu
- Glassmorphism design with scroll effects
- Vue router integration

### HeroSlider.vue

- Auto-advancing image carousel
- Dynamic content for each slide
- Mobile-optimized controls

### SearchBar.vue

- Working date picker (HTML5 date input)
- Destination search with smart routing
- Session storage for search persistence

## 🎨 Styling

The project uses:

- **Tailwind CSS** for utility-first styling
- **Custom CSS** in `assets/css/main.css` for animations and glassmorphism effects
- **Responsive design** with mobile-first approach

## 🔧 Configuration

Key files:

- `nuxt.config.ts` - Nuxt.js configuration
- `package.json` - Dependencies and scripts
- `assets/css/main.css` - Custom styles

## 📱 Mobile Support

Fully responsive design with:

- Touch-friendly navigation
- Optimized hero section for mobile
- iOS-safe input sizing (16px minimum to prevent zoom)

## 🚀 Next Steps

This is the foundation for migrating your travel website to Nuxt.js. You can now:

1. **Test the current functionality** to ensure everything works
2. **Add the pricing calculator** for tour packages
3. **Convert other pages** (tours, hotels, flights, visas)
4. **Add backend functionality** (booking system, payments)

## 💡 Development Tips

- **Hot reload** is enabled - changes appear instantly
- **Vue DevTools** recommended for debugging
- **Component auto-import** is configured
- **TypeScript** support is ready to use
