# OddleEats

## Overview

OddleEats is a food discovery and ordering platform built for Singapore's dining scene. It allows users to browse restaurants, place delivery and pickup orders, make reservations, and manage favorites. The platform also features corporate meal solutions and an insider membership program for exclusive dining privileges.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **Routing**: React Router DOM for client-side navigation
- **State Management**: TanStack React Query for server state and caching
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives

### Design System
- Uses HSL color variables defined in `src/index.css`
- Custom gradient variables for primary, hero, and gold accent styles
- Dark mode support via class-based toggle (configured but not actively used)
- Consistent component styling through the `cn()` utility combining clsx and tailwind-merge

### Page Structure
The application follows a consistent layout pattern:
- Fixed navigation bar at top
- Main content area
- Footer with company info and links

Key pages include:
- **Index**: Landing page with hero section and service discovery
- **Explore**: Food browsing and search with category filters
- **Cart/OrderStatus**: Order management flow
- **Authentication**: Sign-in and registration forms
- **Static Pages**: About, Contact, Privacy, Terms

### Component Organization
- `src/components/ui/`: Reusable shadcn/ui components
- `src/components/`: Layout components (Navbar, Footer)
- `src/pages/`: Route-level page components
- `src/hooks/`: Custom React hooks (toast, mobile detection)
- `src/lib/`: Utility functions

### Static Assets
- Images stored in `src/assets/` and imported directly into components
- Public folder contains SEO files (robots.txt, ads.txt) and 404 fallback for SPA routing

## External Dependencies

### Third-Party Services
- **Google AdSense**: Integrated for monetization (publisher ID in index.html)
- **Lovable**: Development platform integration via lovable-tagger plugin

### Key NPM Packages
- **@tanstack/react-query**: Async state management (ready for API integration)
- **@radix-ui/***: Accessible UI primitives for all interactive components
- **embla-carousel-react**: Carousel functionality
- **react-day-picker**: Date selection for reservations
- **date-fns**: Date formatting utilities
- **lucide-react**: Icon library
- **vaul**: Drawer component
- **cmdk**: Command palette component
- **react-hook-form** with **zod**: Form handling (resolvers installed)

### Data Storage
Currently uses static mock data within components. No backend database is connected. The architecture is ready for API integration via React Query.

### Deployment Configuration
- Vite configured for production builds to `dist/` folder
- GitHub Pages SPA routing support via 404.html redirect script
- Development server runs on port 5000 with all hosts allowed