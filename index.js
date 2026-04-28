// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')
const languageToggleButtons = document.querySelectorAll('[data-lang-switch]')

const supportedLanguages = ['en', 'es']
const defaultLanguage = 'en'
const languageStorageKey = 'preferred-language'

let activeLanguage = defaultLanguage
let caseStudyImages = []
let galleryRefs = null

const translations = {
  en: {
    'meta.title': 'Juan Canseco Portfolio',
    'meta.description':
      'Portfolio of Juan Canseco, a software developer focused on C#, Spring Boot, Angular, and clean architecture.',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'hero.description':
      'Technology professional with experience in mobile development using Java and the Android SDK. I have worked with tools and approaches such as Material Design, Android Jetpack, RxJava, Google Maps API integration, and application optimization. After taking a break from my path as a developer for personal reasons, I continued growing in the technology field through a leadership role as a Service Desk Team Leader. I am currently focused on returning to software development, strengthening my skills, and continuing to advance in my technical career.',
    'hero.cta': 'View Projects',
    'about.heading': 'About Me',
    'about.subheading':
      'A developer returning to software development through real projects, steady practice, and a focus on building reliable solutions.',
    'about.title': 'Get to know me',
    'about.paragraph1':
      "I'm <strong>Juan Canseco</strong>, a technology professional with a background in <strong>Java and Android development</strong> and experience with Material Design, Android Jetpack, RxJava, and API integrations. After stepping away from development for personal reasons, I continued growing in tech as a <strong>Service Desk Team Leader</strong>, where I strengthened my ownership, communication, and problem-solving skills.",
    'about.paragraph2':
      "Today I'm focused on building with <strong>C#, .NET, Spring Boot, and Angular</strong>. I care about <strong>architecture</strong>, <strong>maintainability</strong>, and continuous improvement. I bring a steady, resilient mindset to my work: learn from each challenge, improve with every project, and keep delivering stronger solutions over time.",
    'about.cta': 'See My Work',
    'about.skills': 'Core Skills',
    'projects.heading': 'Projects',
    'projects.subheading':
      "Let me share a bit about the projects I've been working on during my journey back into development. Each one has taught me something new and helped me grow.",
    'projects.gamehub.description':
      'A real-time multi-channel chat application built to learn modern C# and .NET practices in depth. It combines Clean Architecture, CQRS-style application flow, SignalR, RabbitMQ, Redis, and automated tests in one project.',
    'projects.inventory.description':
      'A full-stack inventory management application that i started a while ago and later revisited with a stronger architectural focus. The frontend uses Angular, CoreUI, and NgRx, while the backend uses Spring Boot, JWT auth, permissions, reporting, and a feature-based structure.',
    'projects.schedule.description':
      'A Windows Forms scheduling system delivered for a secondary school. It manages teachers, subjects, classrooms, groups, and weekly schedules with SQLite, and it became a key learning project for understanding where my architecture still needed to improve.',
    'projects.status': 'Live demo: work in progress',
    'projects.caseStudy': 'Case Study',
    'footer.social': 'Social',
    'footer.description':
      'A developer rebuilding momentum through practical projects in C#, Spring Boot, and Angular, with a steady focus on architecture, maintainability, and continuous improvement.',
    'footer.copyright': '\u00A9 Copyright 2026. Juan Canseco',
    'common.projectOverview': 'Project Overview',
    'common.videoWalkthrough': 'Video Walkthrough',
    'common.screenshots': 'Screenshots',
    'common.toolsUsed': 'Tools Used',
    'common.projectLinks': 'Project Links',
    'common.viewCode': 'View Code',
    'common.frontendCode': 'Frontend Code',
    'common.apiCode': 'API Code',
    'common.playWalkthrough': 'Play walkthrough',
    'common.galleryDialog': 'Project image gallery',
    'common.galleryClose': 'Close',
    'common.galleryCloseAria': 'Close image gallery',
    'common.galleryPrev': 'Prev',
    'common.galleryPrevAria': 'Previous image',
    'common.galleryNext': 'Next',
    'common.galleryNextAria': 'Next image',
    'common.galleryOpenFor': 'Open project image gallery for',
    'common.galleryFallbackImage': 'Project image',
    'common.videoFallbackTitle': 'Project walkthrough',
    'project1.meta.title': 'GameHub Case Study',
    'project1.meta.description':
      'Case study for GameHub, a real-time multi-channel chat application built with ASP.NET Core, Blazor WebAssembly, and SignalR.',
    'project1.hero.description':
      'A real-time multi-channel chat application built to push my C# and .NET skills further with Clean Architecture, SignalR, reliable messaging patterns, and a modern Blazor front end.',
    'project1.hero.status': 'Live demo in progress',
    'project1.showcase.alt': 'GameHub application screenshot',
    'project1.overview.paragraph1':
      'GameHub is the project where things started to click for me in modern <strong>C#</strong> and <strong>.NET</strong>. I did not want another simple CRUD app, so I picked a chat application because it gave me room to work on real-time communication, authentication, backend structure, and frontend experience all at once.',
    'project1.overview.paragraph2':
      'What I like most about this project is that it let me practice ideas I care about in a more realistic setting: <strong>Clean Architecture</strong>, a <strong>CQRS-style flow</strong>, <strong>SignalR</strong>, <strong>Redis</strong>, <strong>RabbitMQ</strong>, and <strong>MassTransit</strong>. I also added automated tests with <strong>Testcontainers</strong> because I wanted the project to feel closer to the kind of codebase I would be proud to build in a team environment.',
    'project1.overview.paragraph3':
      'More than anything, GameHub represents confidence. It is the project where I feel I finally implemented <strong>clean architecture</strong> in a way that made sense to me, and it gave me a lot of motivation to keep pushing deeper into backend engineering.',
    'project1.video.iframeTitle': 'GameHub walkthrough',
    'project1.video.previewAlt': 'GameHub walkthrough preview',
    'project1.video.title':
      'Watch the GameHub demo directly from this case study.',
    'project1.screenshots.image1': 'GameHub screenshot 1',
    'project1.screenshots.image2': 'GameHub screenshot 2',
    'project1.screenshots.image3': 'GameHub screenshot 3',
    'project1.screenshots.image4': 'GameHub screenshot 4',
    'project1.screenshots.image5': 'GameHub screenshot 5',
    'project1.screenshots.image6': 'GameHub screenshot 6',
    'project1.screenshots.image7': 'GameHub screenshot 7',
    'project1.screenshots.image8': 'GameHub screenshot 8',
    'project1.screenshots.image9': 'GameHub screenshot 9',
    'project1.screenshots.image10': 'GameHub screenshot 10',
    'project1.links.status':
      'Live demo is still a work in progress while I continue polishing the application and deployment story.',
    'project1.footer.description':
      'Building software with a stronger focus on architecture, maintainability, and practical learning through real projects.',
    'project2.meta.title': 'Inventory App Case Study',
    'project2.meta.description':
      'Case study for Inventory App, a full-stack inventory management project with Angular and Spring Boot.',
    'project2.hero.description':
      'A full-stack inventory system that started a few years ago and later became a refactoring project for architecture, state management, and cleaner feature boundaries on both the frontend and backend.',
    'project2.hero.status': 'Live demo in progress',
    'project2.showcase.alt': 'Inventory App screenshot',
    'project2.overview.paragraph1':
      'Inventory App has been with me from a while ago, so this one feels personal. It started as an earlier full-stack project, and coming back to it after time away gave me the chance to see my old decisions more honestly and improve them instead of just pushing forward blindly.',
    'project2.overview.paragraph2':
      'On the <strong>frontend</strong>, I started with the <strong>CoreUI</strong> Angular template and later refactored it toward a more <strong>feature-based structure</strong> with <strong>NgRx</strong>, guards, facades, filters, pagination, and admin flows. It is also one of the places where I have been learning more about <strong>signals</strong> and modern Angular patterns by actually using them in a real project.',
    'project2.overview.paragraph3':
      'On the <strong>backend</strong>, the API uses <strong>Spring Boot</strong>, <strong>JWT auth</strong>, <strong>Spring Security</strong>, <strong>MySQL</strong>, and <strong>Testcontainers</strong>. It originally started with a layered approach, but later I took the time to move it toward a more <strong>vertical slice / feature-based direction</strong>. It is still a work in progress, but it already shows how much my thinking has changed compared to when I first started it.',
    'project2.video.iframeTitle': 'Inventory App walkthrough',
    'project2.video.previewAlt': 'Inventory App walkthrough preview',
    'project2.video.title':
      'Watch the Inventory App demo directly from this page.',
    'project2.screenshots.image1': 'Inventory App screenshot 1',
    'project2.screenshots.image2': 'Inventory App screenshot 2',
    'project2.screenshots.image3': 'Inventory App screenshot 3',
    'project2.screenshots.image4': 'Inventory App screenshot 4',
    'project2.screenshots.image5': 'Inventory App screenshot 5',
    'project2.screenshots.image6': 'Inventory App screenshot 6',
    'project2.screenshots.image7': 'Inventory App screenshot 7',
    'project2.screenshots.image8': 'Inventory App screenshot 8',
    'project2.screenshots.image8': 'Inventory App screenshot 9',
    'project2.links.status':
      'Live demo is still a work in progress while I finish remaining modules and deployment.',
    'project2.footer.description':
      'Learning in public through projects that let me refactor, ship, and become more intentional about architecture.',
    'project3.meta.title': 'Sistema de Horarios Case Study',
    'project3.meta.description':
      'Case study for Sistema de Horarios, a Windows Forms scheduling system built in C# and SQLite for a secondary school.',
    'project3.hero.description':
      'A desktop application for managing school timetables, built with C#, .NET, Windows Forms, and SQLite, and delivered for a real secondary school use case.',
    'project3.hero.status': 'Live demo in progress',
    'project3.showcase.alt': 'Sistema de Horarios screenshot',
    'project3.overview.paragraph1':
      'Sistema de Horarios is a scheduling application I built for a secondary school. It handles teachers, subjects, groups, classrooms, and weekly timetables through a desktop workflow built with <strong>Windows Forms</strong> and <strong>SQLite</strong>.',
    'project3.overview.paragraph2':
      'This project means a lot to me because it was <strong>finished and delivered</strong>. It was not just a learning sandbox. It solved a real need, and that changes the way you think about software. You care a lot more about whether the flow works, whether the data makes sense, and whether the user can actually rely on it.',
    'project3.overview.paragraph3':
      'It was also an honest learning project for me. I tried to apply clean architecture ideas, but I did not fully respect the boundaries the way I wanted to. That became an important lesson, and it is one of the reasons later projects like GameHub feel more deliberate. I still like showing this one because it represents both <strong>delivery</strong> and <strong>growth</strong>.',
    'project3.video.iframeTitle': 'Sistema de Horarios walkthrough',
    'project3.video.previewAlt': 'Sistema de Horarios walkthrough preview',
    'project3.video.title':
      'Watch the Sistema de Horarios demo directly from this case study.',
    'project3.screenshots.image1': 'Sistema de Horarios screenshot 1',
    'project3.screenshots.image2': 'Sistema de Horarios screenshot 2',
    'project3.screenshots.image3': 'Sistema de Horarios screenshot 3',
    'project3.screenshots.image4': 'Sistema de Horarios screenshot 4',
    'project3.screenshots.image5': 'Sistema de Horarios screenshot 5',
    'project3.screenshots.image6': 'Sistema de Horarios screenshot 6',
    'project3.screenshots.image7': 'Sistema de Horarios screenshot 7',
    'project3.screenshots.image8': 'Sistema de Horarios screenshot 8',
    'project3.links.status':
      'Live demo is shown as a work in progress because this project was built as a desktop application rather than a deployed web app.',
    'project3.footer.description':
      'Projects like this one are part of how I track both my progress and the lessons that shaped my current approach to software.',
  },
  es: {
    'meta.title': 'Portafolio de Juan Canseco',
    'meta.description':
      'Portafolio de Juan Canseco, desarrollador de software enfocado en C#, Spring Boot, Angular y arquitectura limpia.',
    'nav.home': 'Inicio',
    'nav.about': 'Sobre m\u00ED',
    'nav.projects': 'Proyectos',
    'hero.description':
      'Profesional de tecnolog\u00EDa con experiencia en desarrollo m\u00F3vil usando Java y el SDK de Android. He trabajado con herramientas y enfoques como Material Design, Android Jetpack, RxJava, integraci\u00F3n con Google Maps API y optimizaci\u00F3n de aplicaciones. Despu\u00E9s de tomar una pausa en mi camino como desarrollador por motivos personales, segu\u00ED creciendo en tecnolog\u00EDa a trav\u00E9s de un rol de liderazgo como Service Desk Team Leader. Actualmente estoy enfocado en volver al desarrollo de software, fortalecer mis habilidades y seguir avanzando en mi carrera t\u00E9cnica.',
    'hero.cta': 'Ver Proyectos',
    'about.heading': 'Sobre M\u00ED',
    'about.subheading':
      'Un desarrollador que est\u00E1 regresando al desarrollo de software a trav\u00E9s de proyectos reales, pr\u00E1ctica constante y un enfoque en construir soluciones confiables.',
    'about.title': 'Con\u00F3ceme',
    'about.paragraph1':
      'Soy <strong>Juan Canseco</strong>, un profesional de tecnolog\u00EDa con experiencia en <strong>desarrollo Java y Android</strong> y trabajo con Material Design, Android Jetpack, RxJava e integraciones con APIs. Despu\u00E9s de alejarme del desarrollo por motivos personales, segu\u00ED creciendo en tecnolog\u00EDa como <strong>Service Desk Team Leader</strong>, donde fortalec\u00ED mis habilidades de responsabilidad, comunicaci\u00F3n y resoluci\u00F3n de problemas.',
    'about.paragraph2':
      'Hoy estoy enfocado en desarrollar con <strong>C#, .NET, Spring Boot y Angular</strong>. Me importan la <strong>arquitectura</strong>, la <strong>mantenibilidad</strong> y la mejora continua. Llevo a mi trabajo una mentalidad constante y resiliente: aprender de cada reto, mejorar con cada proyecto y entregar soluciones m\u00E1s s\u00F3lidas con el tiempo.',
    'about.cta': 'Ver Mi Trabajo',
    'about.skills': 'Habilidades Clave',
    'projects.heading': 'Proyectos',
    'projects.subheading':
      'Aqu\u00ED comparto algunos de los proyectos en los que he trabajado durante mi regreso al desarrollo. Cada uno me ha ense\u00F1ado algo nuevo y me ha ayudado a crecer.',
    'projects.gamehub.description':
      'Una aplicaci\u00F3n de chat en tiempo real y multicanal creada para aprender a fondo pr\u00E1cticas modernas de C# y .NET. Re\u00FAne Clean Architecture, un flujo de aplicaci\u00F3n estilo CQRS, SignalR, RabbitMQ, Redis y pruebas automatizadas en un solo proyecto.',
    'projects.inventory.description':
      'Una aplicaci\u00F3n full stack de gesti\u00F3n de inventario iniciada en 2023 y retomada despu\u00E9s con un enfoque arquitect\u00F3nico m\u00E1s s\u00F3lido. El frontend usa Angular, CoreUI y NgRx, mientras que el backend usa Spring Boot, autenticaci\u00F3n JWT, permisos, reportes y una estructura basada en funcionalidades.',
    'projects.schedule.description':
      'Un sistema de horarios en Windows Forms desarrollado para una escuela secundaria. Administra docentes, materias, salones, grupos y horarios semanales con SQLite, y fue un proyecto clave para entender en qu\u00E9 \u00E1reas mi arquitectura todav\u00EDa necesitaba mejorar.',
    'projects.status': 'Demo en vivo: en progreso',
    'projects.caseStudy': 'Caso de Estudio',
    'footer.social': 'Redes',
    'footer.description':
      'Un desarrollador que est\u00E1 recuperando impulso con proyectos pr\u00E1cticos en C#, Spring Boot y Angular, con un enfoque constante en arquitectura, mantenibilidad y mejora continua.',
    'footer.copyright': '\u00A9 Copyright 2026. Juan Canseco',
    'common.projectOverview': 'Resumen del Proyecto',
    'common.videoWalkthrough': 'Recorrido en Video',
    'common.screenshots': 'Capturas',
    'common.toolsUsed': 'Herramientas Usadas',
    'common.projectLinks': 'Enlaces del Proyecto',
    'common.viewCode': 'Ver C\u00F3digo',
    'common.frontendCode': 'C\u00F3digo Frontend',
    'common.apiCode': 'C\u00F3digo API',
    'common.playWalkthrough': 'Ver recorrido',
    'common.galleryDialog': 'Galer\u00EDa de im\u00E1genes del proyecto',
    'common.galleryClose': 'Cerrar',
    'common.galleryCloseAria': 'Cerrar galer\u00EDa de im\u00E1genes',
    'common.galleryPrev': 'Anterior',
    'common.galleryPrevAria': 'Imagen anterior',
    'common.galleryNext': 'Siguiente',
    'common.galleryNextAria': 'Imagen siguiente',
    'common.galleryOpenFor': 'Abrir galer\u00EDa de im\u00E1genes del proyecto para',
    'common.galleryFallbackImage': 'Imagen del proyecto',
    'common.videoFallbackTitle': 'Recorrido del proyecto',
    'project1.meta.title': 'Caso de Estudio de GameHub',
    'project1.meta.description':
      'Caso de estudio de GameHub, una aplicaci\u00F3n de chat multicanal en tiempo real construida con ASP.NET Core, Blazor WebAssembly y SignalR.',
    'project1.hero.description':
      'Una aplicaci\u00F3n de chat multicanal en tiempo real creada para llevar m\u00E1s lejos mis habilidades en C# y .NET con Clean Architecture, SignalR, patrones confiables de mensajer\u00EDa y un frontend moderno en Blazor.',
    'project1.hero.status': 'Demo en vivo en progreso',
    'project1.showcase.alt': 'Captura de la aplicaci\u00F3n GameHub',
    'project1.overview.paragraph1':
      'GameHub es el proyecto donde empec\u00E9 a sentir que las cosas hac\u00EDan clic para m\u00ED en <strong>C#</strong> y <strong>.NET</strong> modernos. No quer\u00EDa otra app CRUD simple, as\u00ED que eleg\u00ED una aplicaci\u00F3n de chat porque me daba espacio para trabajar comunicaci\u00F3n en tiempo real, autenticaci\u00F3n, estructura backend y experiencia frontend al mismo tiempo.',
    'project1.overview.paragraph2':
      'Lo que m\u00E1s me gusta de este proyecto es que me permiti\u00F3 practicar ideas que me importan en un contexto m\u00E1s realista: <strong>Clean Architecture</strong>, un <strong>flujo estilo CQRS</strong>, <strong>SignalR</strong>, <strong>Redis</strong>, <strong>RabbitMQ</strong> y <strong>MassTransit</strong>. Tambi\u00E9n agregu\u00E9 pruebas automatizadas con <strong>Testcontainers</strong> porque quer\u00EDa que el proyecto se sintiera m\u00E1s cercano al tipo de c\u00F3digo que me gustar\u00EDa construir en un entorno de equipo.',
    'project1.overview.paragraph3':
      'M\u00E1s que nada, GameHub representa confianza. Es el proyecto donde siento que por fin implement\u00E9 <strong>clean architecture</strong> de una forma que tuvo sentido para m\u00ED, y me dio mucha motivaci\u00F3n para seguir profundizando en el desarrollo backend.',
    'project1.video.iframeTitle': 'Recorrido de GameHub',
    'project1.video.previewAlt': 'Vista previa del recorrido de GameHub',
    'project1.video.title':
      'Mira la demo de GameHub directamente desde este caso de estudio.',
    'project1.screenshots.image1': 'Captura de GameHub 1',
    'project1.screenshots.image2': 'Captura de GameHub 2',
    'project1.screenshots.image3': 'Captura de GameHub 3',
    'project1.screenshots.image4': 'Captura de GameHub 4',
    'project1.screenshots.image5': 'Captura de GameHub 5',
    'project1.screenshots.image6': 'Captura de GameHub 6',
    'project1.screenshots.image7': 'Captura de GameHub 7',
    'project1.screenshots.image8': 'Captura de GameHub 8',
    'project1.screenshots.image9': 'Captura de GameHub 9',
    'project1.screenshots.image10': 'Captura de GameHub 10',
    'project1.links.status':
      'La demo en vivo sigue en progreso mientras contin\u00FAo puliendo la aplicaci\u00F3n y la estrategia de despliegue.',
    'project1.footer.description':
      'Construyendo software con un enfoque m\u00E1s fuerte en arquitectura, mantenibilidad y aprendizaje pr\u00E1ctico a trav\u00E9s de proyectos reales.',
    'project2.meta.title': 'Caso de Estudio de Inventory App',
    'project2.meta.description':
      'Caso de estudio de Inventory App, un proyecto full stack de gesti\u00F3n de inventario con Angular y Spring Boot.',
    'project2.hero.description':
      'Un sistema full stack de inventario que comenz\u00F3 hace algunos a\u00F1os y despu\u00E9s se convirti\u00F3 en un proyecto de refactorizaci\u00F3n para arquitectura, manejo de estado y l\u00EDmites m\u00E1s limpios por funcionalidad tanto en frontend como en backend.',
    'project2.hero.status': 'Demo en vivo en progreso',
    'project2.showcase.alt': 'Captura de Inventory App',
    'project2.overview.paragraph1':
      'Inventory App me acompa\u00F1a desde hace un rato, as\u00ED que este proyecto se siente personal. Comenz\u00F3 como un proyecto full stack de una etapa anterior, y volver a \u00E9l despu\u00E9s de un tiempo me dio la oportunidad de ver mis decisiones pasadas con m\u00E1s honestidad y mejorarlas en lugar de seguir avanzando a ciegas.',
    'project2.overview.paragraph2':
      'En el <strong>frontend</strong>, empec\u00E9 con la plantilla de Angular de <strong>CoreUI</strong> y despu\u00E9s la refactoric\u00E9 hacia una <strong>estructura basada en funcionalidades</strong> con <strong>NgRx</strong>, guards, facades, filtros, paginaci\u00F3n y flujos administrativos. Tambi\u00E9n es uno de los lugares donde he estado aprendiendo m\u00E1s sobre <strong>signals</strong> y patrones modernos de Angular us\u00E1ndolos en un proyecto real.',
    'project2.overview.paragraph3':
      'En el <strong>backend</strong>, la API usa <strong>Spring Boot</strong>, <strong>autenticaci\u00F3n JWT</strong>, <strong>Spring Security</strong>, <strong>MySQL</strong> y <strong>Testcontainers</strong>. Originalmente comenz\u00F3 con un enfoque por capas, pero despu\u00E9s me tom\u00E9 el tiempo de moverla hacia una direcci\u00F3n m\u00E1s <strong>vertical slice / basada en funcionalidades</strong>. Sigue siendo un trabajo en progreso, pero ya muestra cu\u00E1nto ha cambiado mi forma de pensar desde que la inici\u00E9.',
    'project2.video.iframeTitle': 'Recorrido de Inventory App',
    'project2.video.previewAlt': 'Vista previa del recorrido de Inventory App',
    'project2.video.title':
      'Mira la demo de Inventory App directamente desde esta p\u00E1gina.',
    'project2.screenshots.image1': 'Captura de Inventory App 1',
    'project2.screenshots.image2': 'Captura de Inventory App 2',
    'project2.screenshots.image3': 'Captura de Inventory App 3',
    'project2.screenshots.image4': 'Captura de Inventory App 4',
    'project2.screenshots.image5': 'Captura de Inventory App 5',
    'project2.screenshots.image6': 'Captura de Inventory App 6',
    'project2.screenshots.image7': 'Captura de Inventory App 7',
    'project2.screenshots.image8': 'Captura de Inventory App 8',
    'project2.screenshots.image9': 'Captura de Inventory App 9',
    'project2.links.status':
      'La demo en vivo sigue en progreso mientras continúo puliendo la aplicación y la estrategia de despliegue.',
    'project2.footer.description':
      'Aprendiendo en p\u00FAblico con proyectos que me permiten refactorizar, entregar y ser m\u00E1s intencional con la arquitectura.',
    'project3.meta.title': 'Caso de Estudio de Sistema de Horarios',
    'project3.meta.description':
      'Caso de estudio de Sistema de Horarios, un sistema de horarios en Windows Forms construido con C# y SQLite para una escuela secundaria.',
    'project3.hero.description':
      'Una aplicaci\u00F3n de escritorio para administrar horarios escolares, construida con C#, .NET, Windows Forms y SQLite, y entregada para un caso de uso real en una escuela secundaria.',
    'project3.hero.status': 'Demo en vivo en progreso',
    'project3.showcase.alt': 'Captura de Sistema de Horarios',
    'project3.overview.paragraph1':
      'Sistema de Horarios es una aplicaci\u00F3n de horarios que constru\u00ED para una escuela secundaria. Maneja docentes, materias, grupos, salones y horarios semanales mediante un flujo de escritorio hecho con <strong>Windows Forms</strong> y <strong>SQLite</strong>.',
    'project3.overview.paragraph2':
      'Este proyecto significa mucho para m\u00ED porque fue <strong>terminado y entregado</strong>. No fue solo un sandbox de aprendizaje. Resolvi\u00F3 una necesidad real, y eso cambia la forma en que piensas sobre el software. Te importa mucho m\u00E1s si el flujo funciona, si los datos tienen sentido y si el usuario realmente puede confiar en \u00E9l.',
    'project3.overview.paragraph3':
      'Tambi\u00E9n fue un proyecto de aprendizaje muy honesto para m\u00ED. Intent\u00E9 aplicar ideas de clean architecture, pero no respet\u00E9 por completo los l\u00EDmites como quer\u00EDa. Eso se volvi\u00F3 una lecci\u00F3n importante, y es una de las razones por las que proyectos posteriores como GameHub se sienten m\u00E1s intencionales. Aun as\u00ED me gusta mostrar este proyecto porque representa tanto <strong>entrega</strong> como <strong>crecimiento</strong>.',
    'project3.video.iframeTitle': 'Recorrido de Sistema de Horarios',
    'project3.video.previewAlt':
      'Vista previa del recorrido de Sistema de Horarios',
    'project3.video.title':
      'Mira la demo de Sistema de Horarios directamente desde este caso de estudio.',
    'project3.screenshots.image1': 'Captura de Sistema de Horarios 1',
    'project3.screenshots.image2': 'Captura de Sistema de Horarios 2',
    'project3.screenshots.image3': 'Captura de Sistema de Horarios 3',
    'project3.screenshots.image4': 'Captura de Sistema de Horarios 4',
    'project3.screenshots.image5': 'Captura de Sistema de Horarios 5',
    'project3.screenshots.image6': 'Captura de Sistema de Horarios 6',
    'project3.screenshots.image7': 'Captura de Sistema de Horarios 7',
    'project3.screenshots.image8': 'Captura de Sistema de Horarios 8',
    'project3.links.status':
      'La demo en vivo aparece como trabajo en progreso porque este proyecto fue construido como una aplicaci\u00F3n de escritorio y no como una app web desplegada.',
    'project3.footer.description':
      'Proyectos como este forman parte de c\u00F3mo sigo mi progreso y las lecciones que moldearon mi enfoque actual del software.',
  },
}

const getStoredLanguage = () => {
  try {
    return localStorage.getItem(languageStorageKey)
  } catch (error) {
    return null
  }
}

const saveLanguage = (language) => {
  try {
    localStorage.setItem(languageStorageKey, language)
  } catch (error) {
    // Ignore storage errors and keep the in-memory selection.
  }
}

const getTranslation = (language, key) =>
  translations[language]?.[key] ?? translations[defaultLanguage]?.[key] ?? ''

const updateLanguageButtons = (language) => {
  languageToggleButtons.forEach((button) => {
    const isActive = button.dataset.langSwitch === language
    button.classList.toggle('lang-toggle__btn--active', isActive)
    button.setAttribute('aria-pressed', String(isActive))
  })
}

const updateGalleryTriggerLabels = () => {
  if (!caseStudyImages.length) {
    return
  }

  const openLabel = getTranslation(activeLanguage, 'common.galleryOpenFor')
  const fallbackLabel = getTranslation(
    activeLanguage,
    'common.galleryFallbackImage'
  )

  caseStudyImages.forEach((image) => {
    const imageLabel = image.alt || fallbackLabel
    image.setAttribute('aria-label', `${openLabel} ${imageLabel}`)
  })
}

const updateGalleryUiTranslations = () => {
  if (!galleryRefs) {
    return
  }

  const {
    closeGalleryButton,
    gallery,
    galleryCaption,
    galleryDialog,
    galleryImage,
    nextGalleryButton,
    previousGalleryButton,
  } = galleryRefs

  galleryDialog.setAttribute(
    'aria-label',
    getTranslation(activeLanguage, 'common.galleryDialog')
  )
  closeGalleryButton.textContent = getTranslation(
    activeLanguage,
    'common.galleryClose'
  )
  closeGalleryButton.setAttribute(
    'aria-label',
    getTranslation(activeLanguage, 'common.galleryCloseAria')
  )
  previousGalleryButton.textContent = getTranslation(
    activeLanguage,
    'common.galleryPrev'
  )
  previousGalleryButton.setAttribute(
    'aria-label',
    getTranslation(activeLanguage, 'common.galleryPrevAria')
  )
  nextGalleryButton.textContent = getTranslation(
    activeLanguage,
    'common.galleryNext'
  )
  nextGalleryButton.setAttribute(
    'aria-label',
    getTranslation(activeLanguage, 'common.galleryNextAria')
  )

  if (gallery.classList.contains('project-gallery--open')) {
    galleryCaption.textContent =
      galleryImage.alt ||
      getTranslation(activeLanguage, 'common.galleryFallbackImage')
  }
}

const updateInteractiveTranslations = () => {
  updateGalleryTriggerLabels()
  updateGalleryUiTranslations()
}

const applyLanguage = (language) => {
  const safeLanguage = supportedLanguages.includes(language)
    ? language
    : defaultLanguage

  activeLanguage = safeLanguage

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n
    element.textContent = getTranslation(safeLanguage, key)
  })

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const key = element.dataset.i18nHtml
    element.innerHTML = getTranslation(safeLanguage, key)
  })

  document.querySelectorAll('[data-i18n-content]').forEach((element) => {
    const key = element.dataset.i18nContent
    element.setAttribute('content', getTranslation(safeLanguage, key))
  })

  document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
    const mappings = element.dataset.i18nAttr
      .split(';')
      .map((mapping) => mapping.trim())
      .filter(Boolean)

    mappings.forEach((mapping) => {
      const [attribute, key] = mapping.split(':')

      if (!attribute || !key) {
        return
      }

      element.setAttribute(
        attribute.trim(),
        getTranslation(safeLanguage, key.trim())
      )
    })
  })

  document.documentElement.lang = safeLanguage === 'es' ? 'es-MX' : 'en'
  updateLanguageButtons(safeLanguage)
  updateInteractiveTranslations()
}

if (languageToggleButtons.length) {
  const storedLanguage = getStoredLanguage()
  const initialLanguage = supportedLanguages.includes(storedLanguage)
    ? storedLanguage
    : defaultLanguage

  applyLanguage(initialLanguage)

  languageToggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedLanguage = button.dataset.langSwitch

      if (!supportedLanguages.includes(selectedLanguage)) {
        return
      }

      applyLanguage(selectedLanguage)
      saveLanguage(selectedLanguage)
    })
  })
}

if (hamMenuBtn && smallMenu && headerHamMenuBtn && headerHamMenuCloseBtn) {
  hamMenuBtn.addEventListener('click', () => {
    if (smallMenu.classList.contains('header__sm-menu--active')) {
      smallMenu.classList.remove('header__sm-menu--active')
    } else {
      smallMenu.classList.add('header__sm-menu--active')
    }

    if (headerHamMenuBtn.classList.contains('d-none')) {
      headerHamMenuBtn.classList.remove('d-none')
      headerHamMenuCloseBtn.classList.add('d-none')
    } else {
      headerHamMenuBtn.classList.add('d-none')
      headerHamMenuCloseBtn.classList.remove('d-none')
    }
  })
}

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

if (headerLogoConatiner) {
  headerLogoConatiner.addEventListener('click', () => {
    location.href = 'index.html'
  })
}

// Inline YouTube embed support for project pages.
const projectVideoButtons = document.querySelectorAll('.project-video')

const buildYouTubeEmbedUrl = (button) => {
  const explicitEmbedUrl = button.dataset.youtubeSrc?.trim()

  if (explicitEmbedUrl) {
    const embedUrl = new URL(explicitEmbedUrl)
    embedUrl.searchParams.set('autoplay', '1')
    embedUrl.searchParams.set('rel', '0')
    return embedUrl.toString()
  }

  const youtubeId = button.dataset.youtubeId?.trim()

  if (!youtubeId) {
    return ''
  }

  return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`
}

projectVideoButtons.forEach((button) => {
  const youtubeId = button.dataset.youtubeId?.trim()
  const embedUrl = buildYouTubeEmbedUrl(button)
  const watchUrl =
    button.dataset.youtubeWatchUrl?.trim() ||
    (youtubeId ? `https://www.youtube.com/watch?v=${youtubeId}` : '')

  if (!embedUrl) {
    return
  }

  button.classList.add('project-video--ready')

  const badge = button.querySelector('.project-video__badge')
  if (badge) {
    badge.textContent = getTranslation(activeLanguage, 'common.playWalkthrough')
  }

  button.addEventListener('click', () => {
    if (window.location.protocol === 'file:' && watchUrl) {
      window.open(watchUrl, '_blank', 'noopener,noreferrer')
      return
    }

    const iframe = document.createElement('iframe')
    iframe.className = 'project-details__video-iframe'
    iframe.src = embedUrl
    iframe.title =
      button.dataset.videoTitle ||
      getTranslation(activeLanguage, 'common.videoFallbackTitle')
    iframe.allow =
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    iframe.referrerPolicy = 'strict-origin-when-cross-origin'
    iframe.allowFullscreen = true
    iframe.loading = 'lazy'

    button.replaceWith(iframe)
  })
})

// Click-to-open image carousel for case-study pages.
caseStudyImages = Array.from(
  document.querySelectorAll(
    '.project-details__showcase-img, .project-details__screenshot-img'
  )
)

if (caseStudyImages.length) {
  const galleryItems = []
  const galleryIndexBySrc = new Map()

  const getGalleryAltBySrc = (src) => {
    const matchingImage = caseStudyImages.find((image) => {
      const imageSrc = image.currentSrc || image.src
      return imageSrc === src
    })

    return (
      matchingImage?.alt ||
      getTranslation(activeLanguage, 'common.galleryFallbackImage')
    )
  }

  caseStudyImages.forEach((image) => {
    const src = image.currentSrc || image.src

    if (!galleryIndexBySrc.has(src)) {
      galleryIndexBySrc.set(src, galleryItems.length)
      galleryItems.push({ src })
    }

    image.dataset.galleryIndex = galleryIndexBySrc.get(src)
    image.tabIndex = 0
    image.setAttribute('role', 'button')
  })

  updateGalleryTriggerLabels()

  const gallery = document.createElement('div')
  gallery.className = 'project-gallery'
  gallery.setAttribute('aria-hidden', 'true')
  gallery.innerHTML = `
    <div class="project-gallery__backdrop" data-gallery-close="true"></div>
    <div class="project-gallery__dialog" role="dialog" aria-modal="true">
      <div class="project-gallery__toolbar">
        <p class="project-gallery__counter" aria-live="polite"></p>
        <button class="project-gallery__close" type="button"></button>
      </div>
      <div class="project-gallery__viewport">
        <button class="project-gallery__nav project-gallery__nav--prev" type="button"></button>
        <img class="project-gallery__image" alt="" />
        <button class="project-gallery__nav project-gallery__nav--next" type="button"></button>
      </div>
      <p class="project-gallery__caption"></p>
    </div>
  `

  document.body.appendChild(gallery)

  const galleryDialog = gallery.querySelector('.project-gallery__dialog')
  const galleryImage = gallery.querySelector('.project-gallery__image')
  const galleryCaption = gallery.querySelector('.project-gallery__caption')
  const galleryCounter = gallery.querySelector('.project-gallery__counter')
  const closeGalleryButton = gallery.querySelector('.project-gallery__close')
  const previousGalleryButton = gallery.querySelector(
    '.project-gallery__nav--prev'
  )
  const nextGalleryButton = gallery.querySelector('.project-gallery__nav--next')

  galleryRefs = {
    closeGalleryButton,
    gallery,
    galleryCaption,
    galleryDialog,
    galleryImage,
    nextGalleryButton,
    previousGalleryButton,
  }

  let activeGalleryIndex = 0
  let activeGalleryTrigger = null

  const updateGallery = () => {
    const activeItem = galleryItems[activeGalleryIndex]
    const activeAlt = getGalleryAltBySrc(activeItem.src)

    galleryImage.src = activeItem.src
    galleryImage.alt = activeAlt
    galleryCaption.textContent = activeAlt
    galleryCounter.textContent = `${activeGalleryIndex + 1} / ${galleryItems.length}`

    const isSingleImageGallery = galleryItems.length === 1
    previousGalleryButton.disabled = isSingleImageGallery
    nextGalleryButton.disabled = isSingleImageGallery
  }

  const openGallery = (index, trigger) => {
    activeGalleryIndex = index
    activeGalleryTrigger = trigger
    updateGallery()
    gallery.classList.add('project-gallery--open')
    gallery.setAttribute('aria-hidden', 'false')
    document.body.classList.add('body--modal-open')
    closeGalleryButton.focus()
  }

  const closeGallery = () => {
    gallery.classList.remove('project-gallery--open')
    gallery.setAttribute('aria-hidden', 'true')
    document.body.classList.remove('body--modal-open')

    if (activeGalleryTrigger) {
      activeGalleryTrigger.focus()
    }
  }

  const showPreviousImage = () => {
    activeGalleryIndex =
      (activeGalleryIndex - 1 + galleryItems.length) % galleryItems.length
    updateGallery()
  }

  const showNextImage = () => {
    activeGalleryIndex = (activeGalleryIndex + 1) % galleryItems.length
    updateGallery()
  }

  caseStudyImages.forEach((image) => {
    const openImageGallery = () => {
      const imageIndex = Number(image.dataset.galleryIndex)
      openGallery(imageIndex, image)
    }

    image.addEventListener('click', openImageGallery)
    image.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        openImageGallery()
      }
    })
  })

  closeGalleryButton.addEventListener('click', closeGallery)
  previousGalleryButton.addEventListener('click', showPreviousImage)
  nextGalleryButton.addEventListener('click', showNextImage)

  gallery.addEventListener('click', (event) => {
    if (event.target.dataset.galleryClose === 'true') {
      closeGallery()
    }
  })

  document.addEventListener('keydown', (event) => {
    if (!gallery.classList.contains('project-gallery--open')) {
      return
    }

    if (event.key === 'Escape') {
      closeGallery()
    }

    if (event.key === 'ArrowLeft') {
      showPreviousImage()
    }

    if (event.key === 'ArrowRight') {
      showNextImage()
    }
  })

  updateInteractiveTranslations()
}
