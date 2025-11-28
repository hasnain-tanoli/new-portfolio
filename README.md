# Modern Developer Portfolio

A modern, minimal, blazing-fast developer portfolio website built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Dark/Light Theme**: Dark mode as default with light mode toggle and system preference detection
- **Fully Responsive**: Mobile-first design with responsive breakpoints
- **Accessibility Compliant**: WCAG AA compliant with keyboard navigation support
- **Performance Optimized**: Core Web Vitals optimized with minimal JavaScript
- **Modern Animations**: Smooth micro-interactions powered by Framer Motion
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Keyboard Navigation**: Full keyboard shortcut support
- **Reading Progress**: Visual progress indicator for blog posts
- **Command Palette**: Quick navigation with Ctrl/Cmd+K

## 🎨 Design Philosophy

- Minimalist with purposeful whitespace
- Developer-oriented aesthetic (terminal meets modern web)
- Subtle micro-interactions that feel native
- Content-first approach with scannable layouts

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS with custom theme configuration
- **Animations**: Framer Motion
- **Typography**: Geist font family
- **Content**: MDX for blog posts
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
/
├── app/
│   ├── layout.tsx (root layout with nav/footer)
│   ├── page.tsx (home)
│   ├── projects/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── info/
│       └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   ├── ProjectCard.tsx
│   ├── BlogCard.tsx
│   └── ...
├── lib/
│   └── theme.ts (theme management)
└── styles/
    └── globals.css
```

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Unique Features

- Animated cursor dot that follows mouse movement
- Current time display in footer
- "Last updated" timestamp
- Keyboard shortcuts (Ctrl/Cmd+G then H/P/B/I/C)
- Command palette (Ctrl/Cmd+K)
- Easter egg in console for developers
- Status indicator (🟢 Available for work)
- Reading progress bar on blog posts
- Spotify now playing widget
- GitHub contribution graph

## 📱 Pages

1. **Home** (`/`) - Hero section, featured projects, recent posts
2. **Projects** (`/projects`) - Filterable project showcase
3. **Blog** (`/blog`) - Searchable and tag-filtered blog posts
4. **Blog Post** (`/blog/[slug]`) - Individual blog post with syntax highlighting
5. **Contact** (`/contact`) - Contact form with availability info
6. **Info** (`/info`) - About, experience, skills, and uses

## ⌨️ Keyboard Shortcuts

- `Ctrl/Cmd+G` then `H` - Go to Home
- `Ctrl/Cmd+G` then `P` - Go to Projects
- `Ctrl/Cmd+G` then `B` - Go to Blog
- `Ctrl/Cmd+G` then `I` - Go to Info
- `Ctrl/Cmd+G` then `C` - Go to Contact
- `Ctrl/Cmd+K` - Open command palette
- `ESC` - Close modals/palettes

## 🎨 Theme Customization

The portfolio comes with a carefully crafted dark theme as default and a light theme alternative. All theme colors are defined in `globals.css` and can be easily customized.

## 📈 Performance

- Core Web Vitals optimized
- Lazy loading for images
- Font optimization with `font-display: swap`
- Minimal JavaScript bundle
- Static generation where possible

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.