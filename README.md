# 📱 WebStore — Edwin Laguna

Tienda de aplicaciones y portfolio profesional de **Edwin Laguna** (Software Engineer / QA Automation). Aplicaciones útiles, herramientas y soluciones digitales para Android, Windows y Linux.

> **Crea. Automatiza. Simplifica.**

## ✨ Secciones

| Ruta | Sección |
| --- | --- |
| `/` | Inicio (hero, destacadas, tecnologías, proyectos, stats) |
| `/apps` | Tienda con buscador y filtros por plataforma/categoría |
| `/apps/[slug]` | Ficha de cada aplicación (características, capturas, requisitos, versiones) |
| `/destacadas` | Aplicaciones destacadas |
| `/proyectos` | Proyectos y enlaces a GitHub |
| `/sobre-mi` | Perfil profesional |
| `/descargas` | Centro de descargas |
| `/contacto` | Contacto y formulario |

## 🚀 Empezar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## 🛠️ Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS 4** (modo oscuro/claro con toggle persistido)
- **lucide-react** (iconografía)
- Datos de ejemplo en `src/data/` (mock hasta conectar el backend)

## 🗺️ Roadmap

- [x] Fase 1 — Diseño e identidad visual (MVP)
- [x] Fase 2 — WebStore (inicio, tienda, fichas, perfil, proyectos)
- [ ] Fase 3 — Backend: PostgreSQL + API
- [ ] Fase 4 — Sistema de archivos (APK/EXE, screenshots)
- [ ] Fase 5 — Panel de administración `/admin`
- [ ] Fase 6 — Seguridad (auth, validación, rate limiting)
- [ ] Fase 7 — Profesionalización (SEO, reviews, analytics)
- [ ] Fase 8 — Monetización

## 📁 Estructura

```
src/
├── app/            # Rutas (App Router)
├── components/     # Navbar, Footer, AppCard, StoreExplorer, ...
├── data/           # Datos mock de apps y perfil
└── hooks/          # useTheme, useLocalStorageValue
```

## 📄 Licencia

Proyecto personal. Todos los derechos reservados.