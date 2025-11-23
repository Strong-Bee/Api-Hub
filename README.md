# API Hub Documentation

Modern, developer-friendly API documentation portal built with Next.js 14. A centralized hub for all your internal and external APIs with beautiful documentation inspired by industry leaders like Stripe and Vercel.

![API Hub](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Features

- **Modern Documentation**: Clean, responsive design with dark/light mode support
- **API Explorer**: Interactive API testing and live examples
- **Multi-format Support**: REST, GraphQL, and WebSocket documentation
- **Search & Filter**: Find APIs quickly with advanced search and filtering
- **SDK Integration**: Ready-to-use code examples in multiple languages
- **Developer Focused**: Built with developers' workflow in mind
- **Real-time Updates**: Live status and changelog tracking

## 🏗️ Project Structure

```
api-hub-docs/
├── src/
│   ├── app/                 # App Router (Next.js 14)
│   ├── components/          # Reusable React components
│   ├── lib/                 # Utilities and configurations
│   ├── hooks/               # Custom React hooks
│   ├── store/               # State management
│   ├── types/               # TypeScript definitions
│   └── data/                # Static data and content
├── content/                 # MDX documentation
└── public/                  # Static assets
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library
- **Icons**: Lucide React
- **Font**: Inter
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/api-hub-docs.git
   cd api-hub-docs
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your configuration:

   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Quick Start

### Adding a New API

1. **Add API data** in `src/data/apis.ts`:

   ```typescript
   {
     id: 'your-api',
     name: 'Your API Name',
     category: 'your-category',
     status: 'stable',
     description: 'API description...',
     baseUrl: '/v1',
     tags: ['REST', 'Authentication']
   }
   ```

2. **Create API documentation page** in `src/app/apis/[category]/[apiId]/page.tsx`

3. **Update navigation** in `src/data/navigation.ts`

### Customizing Styles

The project uses CSS variables for theming. Edit `src/app/globals.css` to customize colors:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
}
```

## 📚 Documentation Structure

- **Home**: Landing page with featured APIs and quick start
- **APIs**: Complete directory of all available APIs
- **Documentation**: Getting started guides and tutorials
- **Changelog**: API updates and version history
- **Blog**: Technical articles and updates

## 🎨 Components

### Core Components

- `ApiCard` - Display API information in grid layout
- `ApiSearch` - Search and filter APIs
- `CodeBlock` - Syntax-highlighted code examples
- `EndpointDoc` - API endpoint documentation
- `ResponseSchema` - Response format documentation

### Layout Components

- `Header` - Navigation with search
- `Sidebar` - API navigation sidebar
- `Footer` - Site footer with links

## 🔧 Configuration

### Tailwind CSS

Edit `tailwind.config.js` for custom design system:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
        },
      },
    },
  },
};
```

### Next.js Config

Update `next.config.js` for advanced configurations:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["your-domain.com"],
  },
};
```

## 📱 API Categories

- **Core & Authentication**: User management, auth, and core services
- **Trading & Crypto**: Real-time market data and trading APIs
- **Payments & Finance**: Payment processing and financial data
- **Data & AI**: Analytics, machine learning, and data processing
- **Utilities**: Email, SMS, storage, and helper services

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
2. **Import project** on [Vercel](https://vercel.com)
3. **Configure environment variables**
4. **Deploy!**

### Other Platforms

The project can be deployed on any platform that supports Next.js:

- **Netlify**: Use `@netlify/plugin-nextjs` build plugin
- **AWS**: Use AWS Amplify or deploy manually
- **Docker**: Use the provided `Dockerfile`

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📖 [Documentation](https://docs.api-hub.com)
- 🐛 [Issue Tracker](https://github.com/your-username/api-hub-docs/issues)
- 💬 [Discord Community](https://discord.gg/api-hub)
- 📧 [Email Support](mailto:support@api-hub.com)

## 🙏 Acknowledgments

- Inspired by Stripe's excellent API documentation
- Built with Next.js and Tailwind CSS
- Icons by Lucide React
- Fonts by Google Fonts

---

Built with ❤️ by the API Hub team.
