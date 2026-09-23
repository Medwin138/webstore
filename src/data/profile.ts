export interface Project {
  slug: string;
  name: string;
  icon: string;
  description: string;
  platform: string;
  github?: string;
  appSlug?: string;
}

export const profile = {
  name: "Edwin Laguna",
  role: "Software Engineer | QA Automation Engineer",
  headline: "Crea. Automatiza. Simplifica.",
  summary:
    "Ingeniero de Software especializado en automatización de pruebas, desarrollo de herramientas y soluciones digitales para resolver problemas reales.",
  technologies: [
    "Java",
    "Python",
    "Selenium",
    "Appium",
    "REST API",
    "Postman",
    "Cucumber",
    "Jira",
    "Git",
    "GitHub Actions",
    "AWS",
    "SQL",
  ],
  experience: {
    years: "7+ años en QA Automation",
    sectors: ["Banca", "Salud", "Software empresarial", "APIs", "Automatización", "CI/CD"],
  },
  stats: {
    apps: 8,
    downloads: 9245,
    projects: 6,
    years: 7,
  },
};

export const projects: Project[] = [
  {
    slug: "pdf-manager",
    name: "PDF Manager",
    icon: "📄",
    description: "Gestor de documentos PDF para Android, Windows y Linux.",
    platform: "Android · Windows · Linux",
    github: "https://github.com/",
    appSlug: "pdf-manager",
  },
  {
    slug: "qa-automation-tool",
    name: "QA Automation Tool",
    icon: "🤖",
    description: "Automatización de pruebas web y móvil con Selenium y Appium.",
    platform: "Windows · Linux",
    github: "https://github.com/",
    appSlug: "qa-automation-tool",
  },
  {
    slug: "api-testing-tool",
    name: "API Testing Tool",
    icon: "🧪",
    description: "Cliente y tester de APIs REST para equipos de QA.",
    platform: "Windows · Linux · Web",
    appSlug: "api-testing-tool",
  },
  {
    slug: "image-converter",
    name: "Image Converter",
    icon: "🖼️",
    description: "Conversión de imágenes por lotes con compresión avanzada.",
    platform: "Windows · Linux",
    appSlug: "image-converter",
  },
  {
    slug: "password-vault",
    name: "Password Vault",
    icon: "🔐",
    description: "Gestor de contraseñas cifradas con desbloqueo biométrico.",
    platform: "Android · Windows · Linux",
    appSlug: "password-vault",
  },
  {
    slug: "notes-keeper",
    name: "Notes Keeper",
    icon: "📝",
    description: "Notas rápidas con sincronización local y modo oscuro.",
    platform: "Android · Windows",
    appSlug: "notes-keeper",
  },
];