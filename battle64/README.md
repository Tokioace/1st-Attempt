# 🕹️ Battle64 - Retro Gaming Community Platform

A modern web application built with React, TypeScript, and Vite that celebrates the golden age of retro gaming. Battle64 provides a comprehensive platform for speedrunners, fan artists, and retro gaming enthusiasts.

## ✨ Features

- **🏠 Home Dashboard** - Welcome screen with feature overview
- **👤 User Profiles** - Customizable gaming profiles with stats and achievements
- **🎨 Fanart Gallery** - Share and discover retro gaming artwork
- **⚡ Speedrun Leaderboards** - Track and submit speedrun records
- **❓ Gaming Quiz** - Test your retro gaming knowledge
- **📰 News Feed** - Latest retro gaming news and updates
- **🌙 Dark Mode** - Toggle between light and dark themes
- **📱 Responsive Design** - Works on desktop and mobile devices

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **State Management**: Zustand
- **Styling**: Custom CSS with retro gaming aesthetic
- **Code Quality**: ESLint + Prettier
- **Deployment**: Vercel ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd battle64
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
src/
├── app/                # Global app components (Layout, App)
├── assets/             # Images, icons, sounds
├── components/         # Reusable UI components
│   ├── DarkModeToggle.tsx
│   └── Navigation.tsx
├── features/           # Feature-based modules
│   ├── home/          # Home page
│   ├── profile/       # User profiles
│   ├── fanart/        # Fanart gallery
│   ├── speedruns/     # Speedrun leaderboards
│   ├── quiz/          # Gaming quiz
│   └── news/          # News feed
├── router/            # App routing
│   └── AppRouter.tsx
├── styles/            # CSS stylesheets
│   ├── RetroStyles.css
│   └── RetroStylesDark.css
├── lib/               # Utilities and services
│   └── themeStore.ts
└── main.tsx          # App entry point
```

## 🎨 Design System

Battle64 uses a custom retro gaming design system with:

- **Color Palette**: Green, magenta, yellow on black background
- **Typography**: Monospace fonts for authentic retro feel
- **Components**: Retro-styled buttons, cards, inputs, and navigation
- **Animations**: Subtle hover effects and transitions
- **Dark Mode**: Complete theme switching with persistent state

## 🌐 Routing

The application uses React Router with the following routes:

- `/` - Home page
- `/profile` - User profile
- `/fanart` - Fanart gallery
- `/speedruns` - Speedrun leaderboards
- `/quiz` - Gaming quiz
- `/news` - News feed

## 🔧 Configuration

### Vite Configuration
- Path aliases for clean imports
- Optimized build settings
- Development server configuration

### TypeScript Configuration
- Strict type checking
- Path mapping
- Modern ES2020 target

### ESLint & Prettier
- React and TypeScript rules
- Consistent code formatting
- Pre-commit hooks ready

## 🚀 Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push to main branch

The project includes a `vercel.json` configuration file for optimal deployment settings.

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code structure and naming conventions
- Add TypeScript types for all new components and functions
- Use the retro design system for consistent styling
- Write meaningful commit messages
- Test your changes thoroughly

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by classic retro gaming aesthetics
- Built with modern web technologies
- Community-driven development approach

## 📞 Support

For support, questions, or feature requests, please open an issue on GitHub.

---

**Made with ❤️ for the retro gaming community**
