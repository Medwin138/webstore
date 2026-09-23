export type Platform = "android" | "windows" | "linux" | "otras";

export type Category = "productividad" | "herramientas" | "desarrollo" | "multimedia";

export interface AppFile {
  platform: Platform;
  format: string;
  size: string;
  url?: string;
}

export interface AppRelease {
  version: string;
  date: string;
  notes: string;
}

export interface AppInformation {
  slug: string;
  name: string;
  icon: string;
  iconImage?: string;
  shortDescription: string;
  description: string;
  category: Category;
  platforms: Platform[];
  version: string;
  size: string;
  updatedAt: string;
  downloads: number;
  rating: number;
  featured: boolean;
  developer: string;
  features: string[];
  screenshots?: string[];
  requirements: Record<Platform, string>;
  files: AppFile[];
  releases: AppRelease[];
}

export const platforms: { value: Platform | "todas"; label: string; emoji: string }[] = [
  { value: "todas", label: "Todas", emoji: "🗂️" },
  { value: "android", label: "Android", emoji: "📱" },
  { value: "windows", label: "Windows", emoji: "🪟" },
  { value: "linux", label: "Linux", emoji: "🐧" },
  { value: "otras", label: "Otras", emoji: "💻" },
];

export const categories: { value: Category | "todas"; label: string }[] = [
  { value: "todas", label: "Todas" },
  { value: "productividad", label: "Productividad" },
  { value: "herramientas", label: "Herramientas" },
  { value: "desarrollo", label: "Desarrollo" },
  { value: "multimedia", label: "Multimedia" },
];

export const apps: AppInformation[] = [
  {
    slug: "pdf-manager",
    name: "PDF Herramienta",
    icon: "📄",
    iconImage: "/webstore/apps/pdf-manager/app-icon.png",
    shortDescription: "Editor, visor y utilidades para PDF en Android.",
    description:
      "PDF Herramienta es una aplicación nativa de Android para gestionar tus documentos PDF: visor fluido con navegación libre, editor con texto, dibujo, resaltado y formas, firma manuscrita con librería de firmas, conversión de imágenes a PDF y unión de hasta 3 documentos. Abre cualquier PDF desde exploradores, correo o gestores de archivos y guarda los resultados directamente en Descargas.",
    category: "productividad",
    platforms: ["android", "windows", "linux"],
    version: "3.1.1",
    size: "8.5 MB",
    updatedAt: "23/09/2026",
    downloads: 1248,
    rating: 4.8,
    featured: true,
    developer: "Edwin Laguna",
    features: [
      "Añadir texto con 8 fuentes, tamaño, color y rotación",
      "Dibujar, resaltar, subrayar y formas (línea, flecha, rectángulo…)",
      "Firmar con librería de firmas y colocación con arrastre y pellizco",
      "Detectar texto real del PDF para reescribirlo igual",
      "Imágenes a PDF desde galería o cámara",
      "Unir PDF con vista previa en vivo",
    ],
    screenshots: [
      "/webstore/apps/pdf-manager/main.png",
      "/webstore/apps/pdf-manager/editor.png",
      "/webstore/apps/pdf-manager/dialogo.png",
      "/webstore/apps/pdf-manager/splash.png",
      "/webstore/apps/pdf-manager/imagenes.png",
    ],
    requirements: {
      android: "Android 6+",
      windows: "Windows 10+",
      linux: "Ubuntu 20.04+ / AppImage",
      otras: "Navegador moderno",
    },
    files: [
      {
        platform: "android",
        format: "APK",
        size: "8.5 MB",
        url: "https://github.com/Medwin138/pdf-herramienta/releases/latest/download/PDFHerramienta-v3.1.1.apk",
      },
      { platform: "windows", format: "EXE", size: "42 MB" },
      { platform: "linux", format: "AppImage", size: "38 MB" },
    ],
    releases: [
      {
        version: "v3.1.1",
        date: "23/09/2026",
        notes:
          "Guardar como unificado en Editar, Firmar, Unir e Imágenes; firma seleccionada al colocar con rotación y escala con dos dedos.",
      },
      { version: "v1.2.0", date: "23/09/2026", notes: "Nuevo motor de búsqueda y correcciones de rendimiento." },
      { version: "v1.1.0", date: "12/08/2026", notes: "Conversión a imagen y firma digital." },
      { version: "v1.0.0", date: "30/06/2026", notes: "Primera versión pública." },
    ],
  },
  {
    slug: "image-converter",
    name: "Image Converter",
    icon: "🖼️",
    shortDescription: "Convierte imágenes entre formatos en segundos.",
    description:
      "Convierte imágenes entre JPG, PNG, WEBP y otros formatos manteniendo la calidad. Procesamiento por lotes, redimensionado y compresión sin perder nitidez.",
    category: "multimedia",
    platforms: ["windows", "linux"],
    version: "2.0.1",
    size: "24 MB",
    updatedAt: "15/09/2026",
    downloads: 986,
    rating: 4.6,
    featured: true,
    developer: "Edwin Laguna",
    features: ["Conversión por lotes", "Redimensionado", "Compresión avanzada", "Vista previa en tiempo real"],
    requirements: {
      android: "No disponible",
      windows: "Windows 10+",
      linux: "Ubuntu 20.04+",
      otras: "No disponible",
    },
    files: [
      { platform: "windows", format: "EXE", size: "24 MB" },
      { platform: "linux", format: "AppImage", size: "21 MB" },
    ],
    releases: [
      { version: "v2.0.1", date: "15/09/2026", notes: "Soporte para WEBP y corrección de errores." },
      { version: "v2.0.0", date: "02/09/2026", notes: "Nueva interfaz y procesamiento por lotes." },
      { version: "v1.0.0", date: "11/07/2026", notes: "Primera versión pública." },
    ],
  },
  {
    slug: "file-manager",
    name: "File Manager",
    icon: "🗂️",
    shortDescription: "Organiza archivos y carpetas con rapidez.",
    description:
      "Gestor de archivos inteligente con búsqueda instantánea, clasificación automática y acciones por lotes. Ideal para mantener tu equipo ordenado.",
    category: "herramientas",
    platforms: ["android", "windows"],
    version: "1.0.4",
    size: "18 MB",
    updatedAt: "08/09/2026",
    downloads: 1540,
    rating: 4.7,
    featured: false,
    developer: "Edwin Laguna",
    features: ["Búsqueda instantánea", "Clasificación automática", "Acciones por lotes", "Compresión ZIP"],
    requirements: {
      android: "Android 8+",
      windows: "Windows 10+",
      linux: "No disponible",
      otras: "No disponible",
    },
    files: [
      { platform: "android", format: "APK", size: "18 MB" },
      { platform: "windows", format: "EXE", size: "26 MB" },
    ],
    releases: [
      { version: "v1.0.4", date: "08/09/2026", notes: "Correcciones de estabilidad." },
      { version: "v1.0.0", date: "19/08/2026", notes: "Primera versión pública." },
    ],
  },
  {
    slug: "qa-automation-tool",
    name: "QA Automation Tool",
    icon: "🤖",
    shortDescription: "Automatiza pruebas de interfaces web y móvil.",
    description:
      "Plataforma para diseñar y ejecutar pruebas automatizadas con Selenium y Appium sin escribir código complejo. Registro de ejecuciones, reportes y CI/CD listos para usar.",
    category: "desarrollo",
    platforms: ["windows", "linux", "otras"],
    version: "3.1.0",
    size: "96 MB",
    updatedAt: "20/09/2026",
    downloads: 742,
    rating: 4.9,
    featured: true,
    developer: "Edwin Laguna",
    features: ["Grabación de flujos", "Reportes automáticos", "Integración con CI/CD", "Soporte multiplataforma"],
    requirements: {
      android: "No disponible",
      windows: "Windows 10+",
      linux: "Ubuntu 20.04+",
      otras: "Acceso por navegador",
    },
    files: [
      { platform: "windows", format: "EXE", size: "96 MB" },
      { platform: "linux", format: "AppImage", size: "88 MB" },
    ],
    releases: [
      { version: "v3.1.0", date: "20/09/2026", notes: "Nuevo grabador visual." },
      { version: "v3.0.0", date: "01/09/2026", notes: "Soporte para Appium." },
      { version: "v2.0.0", date: "15/07/2026", notes: "Rediseño completo." },
    ],
  },
  {
    slug: "api-testing-tool",
    name: "API Testing Tool",
    icon: "🧪",
    shortDescription: "Prueba y documenta tus APIs REST.",
    description:
      "Cliente de API REST con variables de entorno, colecciones, tests automáticos y generación de documentación. Pensado para equipos de QA y desarrollo.",
    category: "desarrollo",
    platforms: ["windows", "linux", "otras"],
    version: "2.2.0",
    size: "64 MB",
    updatedAt: "17/09/2026",
    downloads: 631,
    rating: 4.8,
    featured: false,
    developer: "Edwin Laguna",
    features: ["Colecciones y variables", "Tests automáticos", "Generación de documentación", "Historial de peticiones"],
    requirements: {
      android: "No disponible",
      windows: "Windows 10+",
      linux: "Ubuntu 20.04+",
      otras: "Acceso por navegador",
    },
    files: [
      { platform: "windows", format: "EXE", size: "64 MB" },
      { platform: "linux", format: "AppImage", size: "58 MB" },
      { platform: "otras", format: "Web", size: "—" },
    ],
    releases: [
      { version: "v2.2.0", date: "17/09/2026", notes: "Soporte para websockets." },
      { version: "v2.0.0", date: "25/08/2026", notes: "Nueva interfaz." },
    ],
  },
  {
    slug: "notes-keeper",
    name: "Notes Keeper",
    icon: "📝",
    shortDescription: "Notas rápidas con sincronización local.",
    description:
      "Aplicación mínima y elegante para guardar notas y tareas. Búsqueda instantánea, etiquetas y copias de seguridad automáticas.",
    category: "productividad",
    platforms: ["android", "windows"],
    version: "1.1.0",
    size: "12 MB",
    updatedAt: "05/09/2026",
    downloads: 2103,
    rating: 4.5,
    featured: false,
    developer: "Edwin Laguna",
    features: ["Búsqueda instantánea", "Etiquetas", "Copias de seguridad", "Modo oscuro"],
    requirements: {
      android: "Android 8+",
      windows: "Windows 10+",
      linux: "No disponible",
      otras: "No disponible",
    },
    files: [
      { platform: "android", format: "APK", size: "12 MB" },
      { platform: "windows", format: "EXE", size: "18 MB" },
    ],
    releases: [
      { version: "v1.1.0", date: "05/09/2026", notes: "Copia de seguridad automática." },
      { version: "v1.0.0", date: "20/07/2026", notes: "Primera versión pública." },
    ],
  },
  {
    slug: "screen-recorder",
    name: "Screen Recorder",
    icon: "🎥",
    shortDescription: "Graba tu pantalla con calidad profesional.",
    description:
      "Grabación de pantalla con webcam, micrófono y edición básica integrada. Ideal para tutoriales, demos y vídeos de QA.",
    category: "multimedia",
    platforms: ["windows", "linux"],
    version: "1.0.2",
    size: "36 MB",
    updatedAt: "10/09/2026",
    downloads: 875,
    rating: 4.4,
    featured: false,
    developer: "Edwin Laguna",
    features: ["Grabación con webcam", "Micrófono integrado", "Edición básica", "Exportación MP4"],
    requirements: {
      android: "No disponible",
      windows: "Windows 10+",
      linux: "Ubuntu 20.04+",
      otras: "No disponible",
    },
    files: [
      { platform: "windows", format: "EXE", size: "36 MB" },
      { platform: "linux", format: "AppImage", size: "32 MB" },
    ],
    releases: [
      { version: "v1.0.2", date: "10/09/2026", notes: "Correcciones de audio." },
      { version: "v1.0.0", date: "28/08/2026", notes: "Primera versión pública." },
    ],
  },
  {
    slug: "password-vault",
    name: "Password Vault",
    icon: "🔐",
    shortDescription: "Guarda tus contraseñas de forma segura.",
    description:
      "Gestor de contraseñas cifradas con generador seguro y desbloqueo biométrico. Tus credenciales bajo cifrado local, sin nube obligatoria.",
    category: "herramientas",
    platforms: ["android", "windows", "linux"],
    version: "1.3.0",
    size: "15 MB",
    updatedAt: "18/09/2026",
    downloads: 1120,
    rating: 4.9,
    featured: true,
    developer: "Edwin Laguna",
    features: ["Cifrado local", "Generador de contraseñas", "Desbloqueo biométrico", "Modo sin conexión"],
    requirements: {
      android: "Android 9+",
      windows: "Windows 10+",
      linux: "Ubuntu 20.04+",
      otras: "No disponible",
    },
    files: [
      { platform: "android", format: "APK", size: "15 MB" },
      { platform: "windows", format: "EXE", size: "22 MB" },
      { platform: "linux", format: "AppImage", size: "20 MB" },
    ],
    releases: [
      { version: "v1.3.0", date: "18/09/2026", notes: "Desbloqueo biométrico." },
      { version: "v1.2.0", date: "01/09/2026", notes: "Importación desde CSV." },
      { version: "v1.0.0", date: "15/07/2026", notes: "Primera versión pública." },
    ],
  },
];

export function getAppBySlug(slug: string): AppInformation | undefined {
  return apps.find((app) => app.slug === slug);
}

export const featuredApps = apps.filter((app) => app.featured);

export const totalDownloads = apps.reduce((sum, app) => sum + app.downloads, 0);