# 🚀 Portafolio Personal - Iker Alvis VelosThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Portafolio web moderno con diseño glassmorphism, construido con Next.js 15, TypeScript, Tailwind CSS y Framer Motion.## Getting Started

## ✨ CaracterísticasFirst, run the development server:

- 🎨 **Diseño Glassmorphism**: Efectos de vidrio esmerilado y transparencias```bash

- 🌐 **Multiidioma**: Español e Inglés (next-intl)npm run dev

- ⚡ **Animaciones suaves**: Framer Motion# or

- 📱 **Responsive**: Mobile-first designyarn dev

- 🎯 **Accesibilidad**: Focus visible, navegación con teclado, aria labels# or

- 🔥 **Rendimiento**: Next.js 15 con Turbopackpnpm dev

- 💅 **Tipografía moderna**: Inter (estilo Vercel)# or

bun dev

## 🛠️ Stack Tecnológico```

- **Framework**: Next.js 15 (React 19)Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- **Lenguaje**: TypeScript

- **Estilos**: Tailwind CSS v4You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

- **Animaciones**: Framer Motion

- **Internacionalización**: next-intlThis project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

- **Iconos**: Lucide React

- **Package Manager**: pnpm## Learn More

## 📦 InstalaciónTo learn more about Next.js, take a look at the following resources:

```bash- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

# Instalar dependencias- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

pnpm install

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

# Modo desarrollo

pnpm dev## Deploy on Vercel



# Build para producciónThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

pnpm build

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Iniciar en producción
pnpm start
```

## 📂 Estructura del Proyecto

```
mi-portafolio/
├── src/
│   ├── app/              # App Router de Next.js
│   │   ├── layout.tsx    # Layout principal
│   │   ├── page.tsx      # Página de inicio
│   │   └── globals.css   # Estilos globales
│   ├── components/       # Componentes reutilizables
│   │   ├── sections/     # Secciones de la página
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Contact.tsx
│   │   └── LanguageSwitch.tsx
│   ├── contexts/         # React Contexts
│   │   └── LocaleContext.tsx
│   ├── data/            # Datos del portafolio
│   │   └── portfolio.ts
│   └── i18n/            # Configuración de idiomas
│       ├── request.ts
│       └── locales/
│           ├── es.json
│           └── en.json
├── public/              # Archivos estáticos
│   ├── profile.png      # Foto de perfil
│   └── cv-iker-alvis.pdf # CV en PDF
└── package.json
```

## 🎯 Módulos Implementados

### ✅ Módulo 1: Configuración Inicial (COMPLETADO)

- ✅ Instalación de dependencias
- ✅ Configuración de tema oscuro
- ✅ Configuración de Tailwind CSS
- ✅ Configuración de i18n (ES/EN)
- ✅ Estructura de datos
- ✅ Estilos glassmorphism

### ✅ Módulo 2: Hero Section (COMPLETADO)

- ✅ Presentación personal con foto
- ✅ Nombre y rol
- ✅ Biografía
- ✅ Enlaces a redes sociales
- ✅ CTAs (Ver proyectos, Contactar)
- ✅ Animaciones con Framer Motion
- ✅ Indicador de scroll

### ✅ Módulo 3: About Section (COMPLETADO)

- ✅ Stack tecnológico organizado por categorías
- ✅ Cards con efecto glass
- ✅ Animaciones stagger

### ✅ Módulo 4: Experience Section (COMPLETADO)

- ✅ Timeline de experiencia laboral
- ✅ Timeline de educación
- ✅ Cards con iconos y detalles
- ✅ Layout responsive

### ✅ Módulo 5: Projects Section (COMPLETADO)

- ✅ Grid de proyectos
- ✅ Cards con efecto glass
- ✅ Tecnologías usadas
- ✅ Enlaces a repos y demos
- ✅ Placeholder para proyectos futuros

### ✅ Módulo 6: Contact Section (COMPLETADO)

- ✅ Botón de descarga de CV
- ✅ Enlaces a redes sociales
- ✅ Footer con información
- ✅ Animaciones

### 🔄 Próximos Módulos

- 🔲 Header con navegación sticky
- 🔲 Barra de progreso de scroll
- 🔲 Mejoras en animaciones
- 🔲 Optimización de imágenes
- 🔲 SEO avanzado

## 📝 Personalización

### Datos Personales

Edita el archivo `src/data/portfolio.ts` para actualizar:

- Información personal
- Enlaces a redes sociales
- Stack tecnológico
- Experiencia y educación
- Proyectos

### Traducciones

Edita los archivos en `src/i18n/locales/`:

- `es.json` - Español
- `en.json` - Inglés

### Estilos

El archivo `src/app/globals.css` contiene:

- Variables de tema
- Colores personalizados
- Clases de utilidad glass
- Animaciones CSS

### Foto de Perfil

Reemplaza `public/profile.png` con tu foto (recomendado: 400x400px)

### CV

Reemplaza `public/cv-iker-alvis.pdf` con tu CV actualizado

## 🎨 Paleta de Colores

- **Fondo**: #000000 (Negro)
- **Texto primario**: #ffffff (Blanco)
- **Texto secundario**: #666666 (Gris)
- **Acento**: #0070f3 (Azul)
- **Glass**: rgba(255, 255, 255, 0.05) con blur

## 🌐 URLs

- **Desarrollo**: http://localhost:3000
- **Producción**: [A configurar en Vercel]

## 📄 Licencia

Este proyecto es personal y está bajo licencia MIT.

## 👤 Autor

**Iker Alvis Velos**

- GitHub: [Tu GitHub]
- LinkedIn: [Tu LinkedIn]
- Email: [Tu Email]

---

Hecho con ❤️ usando Next.js y Tailwind CSS
