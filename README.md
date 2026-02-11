# Portafolio Rodolfo Borja

Modern, responsive portfolio website built with Next.js 16, featuring multi-language support (ES/EN), smooth animations, and a clean, professional design.

![Portfolio Screenshot](https://github.com/user-attachments/assets/589f8251-aee1-499a-b00f-dff249c29aed)

## ✨ Features

- 🌐 **Multi-language Support**: Spanish and English with easy language switching
- 🎨 **Modern Design**: Clean, professional interface with gradient accents
- ⚡ **Smooth Animations**: Framer Motion animations for engaging user experience
- 📱 **Fully Responsive**: Optimized for all screen sizes
- 🎯 **SEO Optimized**: Meta tags and semantic HTML
- 🚀 **Fast Performance**: Built with Next.js 16 and Tailwind CSS 4
- 🌙 **Dark Mode Support**: Automatic dark mode based on system preferences

## 🛠️ Technologies

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12
- **Internationalization**: Custom i18n context with JSON translation files
- **UI Components**: Skeleton UI
- **Linting**: ESLint with Next.js config

## 📋 Sections

- **Hero**: Eye-catching introduction with gradient text and call-to-action buttons
- **About**: Personal information and contact details
- **Experience**: Professional timeline with achievements
- **Skills**: Categorized technical and soft skills
- **Projects**: Showcase of featured projects
- **Education**: Academic background and certifications
- **Contact**: Contact form with validation
- **Footer**: Quick links and social media

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Rodolfoborja/portafoliorborja.git
cd portafoliorborja
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

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portafoliorborja/
├── app/
│   ├── components/        # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── i18n/             # Internationalization
│   │   └── I18nContext.tsx
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/
│   └── locales/          # Translation files
│       ├── es/
│       │   └── common.json
│       └── en/
│           └── common.json
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## 🌍 Customizing Content

### Update CV Data

Edit the translation files to update your portfolio content:

- **Spanish**: `public/locales/es/common.json`
- **English**: `public/locales/en/common.json`

### Sections to customize:

1. **Hero** (`hero`): Name, title, and introduction
2. **About** (`about`): Personal description
3. **Experience** (`experience.items`): Work history and achievements
4. **Skills** (`skills.categories`): Technical and soft skills
5. **Projects** (`projects.items`): Portfolio projects
6. **Education** (`education.items`): Academic background
7. **Contact** (`contact.info`): Contact information

### Add New Languages

1. Create a new folder in `public/locales/` (e.g., `fr/`)
2. Copy `common.json` from an existing language
3. Translate the content
4. Update the `I18nContext.tsx` to include the new locale

## 🎨 Customizing Design

### Colors

Update the Tailwind configuration or use custom CSS variables in `app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}
```

### Animations

Modify animation variants in components using Framer Motion:

```typescript
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Rodolfo Borja**
- GitHub: [@Rodolfoborja](https://github.com/Rodolfoborja)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Heroicons](https://heroicons.com/)
