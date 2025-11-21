<div align="center">

# 🔗 URL Shortener

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**A modern, beautiful URL shortening application with stunning UI/UX**

[Live Demo](#) • [Report Bug](https://github.com/mxyxyz9/url-shorter/issues) • [Request Feature](https://github.com/mxyxyz9/url-shorter/issues)

</div>

---

## ✨ Features

- 🚀 **Lightning Fast** - Shorten URLs in seconds with our intuitive interface
- 🎨 **Beautiful UI** - Modern design with animated gradients and glassmorphism effects
- 📋 **One-Click Copy** - Copy shortened URLs to clipboard instantly
- 📊 **Analytics Ready** - Track clicks and monitor link performance (coming soon)
- 🔒 **Secure & Private** - Enterprise-grade security for your links
- 📱 **Fully Responsive** - Perfect experience on desktop, tablet, and mobile
- 🌙 **Dark Mode** - Eye-friendly dark theme support
- 🎯 **QR Code Generation** - Generate QR codes for easy sharing
- 📝 **Link History** - View and manage your recently shortened URLs
- ⚡ **Real-time Validation** - Instant URL validation with visual feedback

## 🖼️ Screenshots

> Screenshots will be added here showcasing the application's beautiful interface

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.2.4](https://nextjs.org/) - React framework for production
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS 4.1.9](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) - Re-usable component library
- **Animations**: [tw-animate-css](https://www.npmjs.com/package/tw-animate-css) - CSS animations for Tailwind
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- **Gradients**: [@paper-design/shaders-react](https://www.npmjs.com/package/@paper-design/shaders-react) - Stunning gradient effects
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Instrument Serif, Geist)

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (v9+) or **pnpm** (v8+)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mxyxyz9/url-shorter.git
   cd url-shorter
   ```

2. **Navigate to the frontend directory**
   ```bash
   cd fronend
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or if you prefer pnpm
   pnpm install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action! 🎉

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
url-shorter/
├── fronend/              # Frontend application directory
│   ├── app/              # Next.js app directory
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── ui/           # Shadcn UI components
│   │   ├── animations.tsx
│   │   ├── footer.tsx
│   │   ├── gradient-background.tsx
│   │   └── url-shortener.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── public/           # Static assets
│   ├── styles/           # Global styles
│   │   └── globals.css
│   └── package.json      # Dependencies
├── README.md
└── .gitignore
```

## 🎯 Usage

1. **Enter a URL** - Paste your long URL into the input field
2. **Click Shorten** - Press the "Shorten" button or hit Enter
3. **Copy & Share** - Your shortened URL appears instantly - click to copy!
4. **Generate QR Code** - Optionally generate a QR code for easy mobile sharing
5. **View History** - Access your recently shortened URLs anytime

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can specify a different port:
```bash
PORT=3001 npm run dev
```

### Dependencies Installation Fails

Try clearing the cache and reinstalling:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Make sure you're using the correct Node.js version:
```bash
node --version  # Should be v18 or higher
```

## 💡 Development Tips

- **Hot Reload**: The dev server supports hot module replacement - changes appear instantly
- **TypeScript**: Enable strict mode in `tsconfig.json` for better type safety
- **Linting**: Run `npm run lint` to check for code issues
- **Custom Domain**: Configure custom domains for shortened links in production

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and follow the existing code style.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Shadcn UI](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
- Inspired by modern web design trends

---

<div align="center">

**Made with ❤️ by the ShortLink team**

⭐ Star this repo if you find it helpful!

</div>