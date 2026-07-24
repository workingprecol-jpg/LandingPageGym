# GymFlow — Landing Page

Landing page de **GymFlow Management Suite**, sistema de gestión integral para gimnasios
(finanzas, inventario y miembros en un solo lugar).

## Stack

- [React 19](https://react.dev) (componentes funcionales con hooks)
- [Vite 8](https://vitejs.dev)
- [TailwindCSS 4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) (scroll-reveal y micro-interacciones)
- [Lucide React](https://lucide.dev) (iconografía)

## Desarrollo

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura

```
src/
├── App.jsx                # Composición de la página + fondo global
├── index.css              # Tailwind, paleta de marca y keyframes
├── main.jsx
└── components/
    ├── Header.jsx         # Barra sticky con logo y botón Admin (glass)
    ├── Hero.jsx           # Título, CTAs y mockup del dashboard
    ├── Features.jsx       # Grid de 6 módulos del sistema
    ├── Plans.jsx          # Planes Básico / Pro / Premium
    ├── Contact.jsx        # Formulario + datos de contacto
    ├── Footer.jsx
    └── Reveal.jsx         # Utilidades compartidas (scroll-reveal, eyebrow)
```
