import frontend from "../assets/offer/code.svg";
import custom from "../assets/offer/monitor.svg";
import backend from "../assets/offer/server.svg";
import api from "../assets/offer/plug.svg";
import wordpress from "../assets/offer/layout-template.svg";
import ecommerce from "../assets/offer/shopping-cart.svg";
import maleAvatar from "../assets/images/avatar_male.png";
import femaleAvatar from "../assets/images/avatar_female.png";
import App_hero from "../assets/images/code_custom_software.png";
import Fe_hero from "../assets/images/code_frontend.png";
import Api_hero from "../assets/images/code_api.png";
import Bck_hero from "../assets/images/code_backend.png";
import Wp_hero from "../assets/images/code_wordpress.png";
import Ecom_hero from "../assets/images/code_ecommerce.png";

export const servicesList = [
  {
    title: "App Development",
    subTitle: "Build Engaging, High-Performance Apps",
    description: [
      {
        para: "Our mobile and web application development services focus on delivering intuitive, scalable, and visually appealing applications. From concept to deployment, we create products that work seamlessly across devices, providing an exceptional user experience.",
      },
    ],
    KeyFeatures: [
      "Cross-platform compatibility",
      "Scalable architecture for future growth",
      "Seamless integration with APIs and third-party tools",
      "Secure data handling and encryption Process",
    ],
    process: [
      "Concept & Planning – Define project goals, target audience, and features.",
      "UI/UX Design – Create visually engaging, user-friendly interfaces.",
      "Development – Build high-performance, scalable applications.",
      "Testing & QA – Rigorously test for performance, security, and usability.",
      "Launch & Support – Deploy and maintain your app for long-term success.",
    ],
    bigImag: App_hero,
    image: custom,
    url: "/services/custom-website-development",
  },
  {
    title: "Frontend Code Implementation",
    subTitle: "Crafting Pixel-Perfect User Interfaces",
    description: [
      {
        para: "We specialize in transforming creative designs into functional, responsive frontends that deliver exceptional user experiences. Whether it’s a single-page application or a complex web platform, we code with precision and performance in mind.",
      },
    ],
    KeyFeatures: [
      "Pixel-perfect design implementation",
      "Responsive layouts for all devices",
      "Optimized loading speed and accessibility",
      "Integration with modern frameworks (React, Next.js, Vue.js)",
    ],
    process: [
      "Design Handoff and Analysis",
      "Responsive Layout Development",
      "Component-Based Implementation",
      "Performance Optimization",
      "Integration & Deployment",
    ],
    bigImag: Fe_hero,
    image: frontend,
    url: "/services/custom-website-development",
  },
  {
    title: "API Development",
    subTitle: "Reliable & Scalable API Solutions",
    description: [
      {
        para: "Our API development services ensure seamless data exchange and integration across your applications. We create robust RESTful and GraphQL APIs that are secure, efficient, and future-proof.",
      },
    ],
    KeyFeatures: [
      "RESTful & GraphQL API development",
      "Secure authentication and authorization",
      "High-performance and scalable architecture",
      "Third-party API integrations",
    ],
    process: [
      "Requirement Analysis",
      "API Architecture Design",
      "Secure Endpoint Development",
      "Integration & Testing",
      "Documentation & Support",
    ],
    bigImag: Api_hero,
    image: api,
    url: "/services/api-development",
  },
  {
    title: "Node & PHP Development",
    subTitle: "Powerful, Scalable Backend Solutions",
    description: [
      {
        para: "Our Node.js and PHP development services deliver high-performance, secure, and scalable backends that power your applications. Whether it’s building a robust API, integrating complex business logic, or handling large-scale data processing, we design solutions tailored to your needs.",
      },
    ],
    KeyFeatures: [
      "Scalable architecture for high-traffic applications",
      "RESTful & GraphQL API development",
      "Secure authentication & authorization mechanisms",
      "Seamless integration with databases and third-party services",
    ],
    process: [
      "Discovery & Planning – Define business goals, technical requirements, and architecture approach.",
      "Architecture Design – Create a scalable, modular backend structure optimized for performance",
      "Development & Integration – Build APIs, implement business logic, and integrate with databases",
      "Testing & Optimization – Ensure security, stability, and performance with rigorous testing.",
      "Deployment & Maintenance – Launch, monitor, and continuously improve your backend.",
    ],
    bigImag: Bck_hero,
    image: backend,
    url: "/services/node-php-backend-development",
  },
  {
    title: "WordPress Development",
    subTitle: "Custom, Scalable WordPress Solutions",
    description: [
      {
        para: " We develop high-performance WordPress websites that are easy to manage and tailored to your brand. From simple blogs to complex corporate sites, we deliver secure and scalable solutions.",
      },
    ],
    KeyFeatures: [
      "Custom theme and plugin development",
      "SEO-friendly structure",
      "WooCommerce integration for e-commerce",
      "Performance optimization",
    ],
    process: [
      "Planning & Wireframing",
      "Custom Theme Development",
      "Plugin Integration & Customization",
      "Testing & Optimization",
      "Launch & Maintenance",
    ],
    bigImag: Wp_hero,
    image: wordpress,
    url: "/services/wordpress-website-development",
  },
  {
    title: "E-commerce Development",
    subTitle: "Scalable Online Stores for Your Business",
    description: [
      {
        para: "We design and develop e-commerce platforms that help you sell more and grow faster. From intuitive product catalogs to secure payment gateways, we cover all aspects of online selling.",
      },
    ],
    KeyFeatures: [
      "Custom e-commerce store design",
      "Secure payment gateway integration",
      "Mobile-optimized shopping experience",
      "Inventory and order management systems",
    ],
    process: [
      "Requirement Analysis",
      "Storefront & UX Design",
      "Backend & Payment Integration",
      "Testing & Security Checks",
      "Launch & Sales Optimization",
    ],
    bigImag: Ecom_hero,
    image: ecommerce,
    url: "/services/ecommerce-platform-development",
  },
];

export const feedbacks = [
  {
    name: "Dorothy kane",
    feedback:
      "Thank You very much! You guys are really genius, You delivered my website on time and its working well. I will recommend your services.",
    imageUrl: femaleAvatar,
    // designation: "CEO, TechCorp",
  },
  {
    name: "Simla Nunkoo",
    feedback: "Great service with professional support!",
    imageUrl: femaleAvatar,
    // designation: "CEO, TechCorp",
  },
  {
    name: "Jure Mesec",
    feedback:
      "This service has been outstanding! It completely exceeded my expectations.",
    imageUrl: maleAvatar,
    // designation: "CEO, TechCorp",
  },
  {
    name: "Greta Tepina",
    feedback: "Very satisfied, fast service, professional.",
    imageUrl: femaleAvatar,
    // designation: "CEO, TechCorp",
  },
  {
    name: "Anja Tekavčič",
    feedback:
      "I am very satisfied, friendly staff, helpful and good price. Great!",
    imageUrl: femaleAvatar,
    // designation: "CEO, TechCorp",
  },
];
