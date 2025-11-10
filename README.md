# Team Portfolio

A clean, minimalistic, modern and sleek team portfolio website built with Next.js, Tailwind CSS, and Anime.js.

## Features

- Modern, responsive design with smooth animations
- Built with Next.js 16 App Router
- Styled with Tailwind CSS
- Interactive animations powered by Anime.js
- Optimized for Vercel deployment
- Dark mode support
- SEO-friendly

## Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS
- **Animations:** Anime.js
- **Language:** TypeScript
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Kantosaurus/Team-Portfolio.git
cd Team-Portfolio
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

## Project Structure

```
Team-Portfolio/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section with animations
│   ├── Navigation.tsx   # Navigation bar
│   └── TeamMemberCard.tsx # Team member cards
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.js       # Next.js configuration
```

## Customization

### Adding Team Members

Edit the `teamMembers` array in `app/page.tsx`:

```typescript
const teamMembers = [
  {
    name: 'Your Name',
    role: 'Your Role',
    bio: 'Your bio description',
    image: '/team/your-image.jpg',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
  },
  // Add more team members...
];
```

### Changing Colors

Modify the Tailwind configuration in `tailwind.config.ts` or use Tailwind's built-in color classes in the components.

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the build settings
6. Click "Deploy"

### Environment Variables

No environment variables are required for the basic setup. If you add external APIs or services, configure them in the Vercel dashboard under "Settings" > "Environment Variables".

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Performance

This portfolio is optimized for performance with:
- Server-side rendering (SSR)
- Optimized animations with Anime.js
- Lazy loading of components
- Tailwind CSS purging for minimal CSS bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
