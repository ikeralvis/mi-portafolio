# 🚀 Guía Completa de SEO para tu Portfolio

## ✅ Lo que YA está implementado:

### 1. **Metadata Optimizada**

- ✅ Meta title y description profesionales
- ✅ Keywords relevantes (React, Next.js, Liferay, etc.)
- ✅ Open Graph para redes sociales (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Canonical URL
- ✅ Robots meta tags (index, follow)

### 2. **Structured Data (JSON-LD)**

- ✅ Schema.org Person markup
- ✅ Información profesional (jobTitle, worksFor, alumniOf)
- ✅ Skills y tecnologías
- ✅ Enlaces a redes sociales

### 3. **Archivos SEO**

- ✅ `robots.txt` - Permite indexación
- ✅ `sitemap.xml` - Mapa del sitio

---

## 📋 Pasos INMEDIATOS para aparecer en Google:

### **Paso 1: Google Search Console** (PRIORITARIO)

1. Ve a https://search.google.com/search-console
2. Añade tu propiedad: `https://ikeralvis-dev.vercel.app`
3. Verifica propiedad (método HTML tag o DNS)
4. Envía el sitemap: `https://ikeralvis-dev.vercel.app/sitemap.xml`
5. Solicita indexación manual de la URL principal

**Tiempo estimado:** 2-7 días para aparecer en Google

---

### **Paso 2: Crear imagen Open Graph** (Importante para compartir)

Crea una imagen `/public/og-image.png` (1200x630px) con:

- Tu foto o logo
- Nombre: "Iker Alvis Veloso"
- Título: "Frontend Developer"
- Tecnologías: React, Next.js, TypeScript

**Herramientas:**

- Canva: https://canva.com (plantilla "Open Graph")
- Figma: Diseño personalizado
- OG Image Generator: https://og-playground.vercel.app/

---

### **Paso 3: Verificar en herramientas SEO**

#### **A) Rich Results Test (Google)**

https://search.google.com/test/rich-results

- Pega tu URL: `https://ikeralvis-dev.vercel.app`
- Verifica que aparezca tu información de Person

#### **B) Meta Tags Validator**

https://metatags.io/

- Verifica cómo se ve en redes sociales

#### **C) Lighthouse (Chrome DevTools)**

```bash
# O en tu navegador:
F12 > Lighthouse > Generar reporte
```

---

## 🎯 Optimizaciones Adicionales Recomendadas:

### **1. Añadir Google Analytics** (Opcional)

```typescript
// En layout.tsx, dentro de <head>:
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `
}} />
```

### **2. Mejorar Performance**

- ✅ Next.js Image optimization (ya implementado)
- ⚠️ Comprimir imágenes de proyectos (TinyPNG)
- ⚠️ Lazy loading para secciones

### **3. Contenido relevante**

- ✅ Biografía profesional (ya tienes)
- ✅ Proyectos con descripciones (ya tienes)
- ✅ Stack tecnológico (ya tienes)
- 💡 Considera añadir un blog (futuro)

### **4. Enlaces externos (Backlinks)**

- Añade tu portfolio en tu LinkedIn
- Comparte en redes sociales
- Añade en tu firma de GitHub
- Incluye en tu CV

---

## 🌐 Dominio Propio (Opcional - €12-15/año)

### **¿Vale la pena?**

✅ **SÍ**, si quieres:

- Marca personal más profesional
- Mejor posicionamiento SEO
- URL memorable: `ikeralvis.dev`

### **Dominios recomendados:**

1. **ikeralvis.dev** (~€12/año) - Para developers ⭐
2. **iker-alvis.com** (~€10/año) - Más universal
3. **ikeralvis.me** (~€15/año) - Personal

### **Dónde comprar:**

- **Namecheap** (recomendado) - Barato y fácil
- **Cloudflare Registrar** - Precio al costo
- **Google Domains** (Squarespace)

### **Conectar dominio a Vercel:**

1. Compra el dominio
2. En Vercel > Settings > Domains
3. Añade tu dominio personalizado
4. Copia los DNS que te da Vercel
5. Pégalos en tu registrador de dominios
6. Espera 24-48h para propagación

**¡Vercel gestiona el SSL automáticamente!**

---

## 📊 Checklist SEO:

- [x] Meta tags optimizados
- [x] Open Graph configurado
- [x] Twitter Cards
- [x] Structured Data (JSON-LD)
- [x] robots.txt
- [x] sitemap.xml
- [x] Canonical URLs
- [ ] Google Search Console configurado (TÚ)
- [ ] Imagen og-image.png creada (TÚ)
- [ ] Dominio propio (OPCIONAL)
- [ ] Google Analytics (OPCIONAL)

---

## 🎯 Próximos Pasos AHORA:

### **1. Crear og-image.png** (15 minutos)

Ve a Canva y crea una imagen 1200x630px con tu info.

### **2. Registrar en Google Search Console** (10 minutos)

https://search.google.com/search-console

### **3. Verificar con herramientas** (5 minutos)

- https://metatags.io/
- https://search.google.com/test/rich-results

### **4. Compartir en redes** (5 minutos)

- LinkedIn (actualiza tu perfil)
- GitHub (añade en bio)
- Twitter/X

---

## ⏱️ Tiempos de indexación esperados:

- **Google Search Console:** 2-7 días
- **Google búsqueda orgánica:** 1-4 semanas
- **Compartir en redes:** Inmediato

---

## 💡 Tips adicionales:

1. **Actualiza tu LinkedIn:** Añade el link a tu portfolio
2. **GitHub Profile:** Añade en tu bio y README
3. **Comparte proyectos:** Cada vez que subas algo nuevo
4. **Mantén actualizado:** Añade proyectos nuevos regularmente
5. **Blog (futuro):** Escribe sobre tecnologías que usas

---

## 🆘 Soporte:

- Vercel Docs: https://vercel.com/docs
- Next.js SEO: https://nextjs.org/learn/seo/introduction-to-seo
- Google Search Central: https://developers.google.com/search

---

**¿Necesitas ayuda con algún paso específico?** 🚀
