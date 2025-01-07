import frontend from "../assets/images/code_frontend.png";
import custom from "../assets/images/code_custom_software.png";
import backend from "../assets/images/code_backend.png";
import api from "../assets/images/code_api.png";
import wordpress from "../assets/images/code_wordpress.png";
import ecommerce from "../assets/images/code_ecommerce.png";
import maleAvatar from "../assets/images/avatar_male.png";
import femaleAvatar from "../assets/images/avatar_female.png";

export const servicesList = [
  {
    title: "Custom App Development",
    description: {
      paraOne:
        "Our custom website development service focuses on creating beautifully designed, fast, and responsive websites that align perfectly with your business goals and vision. We utilize modern frontend technologies such as HTML, CSS, SCSS, and frameworks like Bootstrap, Tailwind CSS, and React to ensure pixel-perfect designs. With JavaScript and TypeScript, we ensure dynamic functionality and smooth user interactions.",
      paraTwo:
        "Whether you need a simple landing page or a complex web application, our team employs best practices in SEO, performance optimization, and accessibility. We deliver websites that provide a seamless user experience across devices, ensuring your site is mobile-friendly and fast-loading. We also use frameworks like Vue.js and Angular for building scalable, interactive user interfaces, offering flexibility and enhanced user engagement. Our approach to custom development ensures your website stands out in both design and functionality, helping you to achieve your business objectives effectively.",
    },

    image: custom,
    url: "/services/custom-website-development",
  },
  {
    title: "Frontend Code Implementation",
    description: {
      paraOne:
        "Our frontend code implementation focuses on delivering pixel-perfect, clean, and optimized frontend solutions. We use a combination of HTML, CSS, SCSS, and popular frameworks like Bootstrap and Tailwind to create responsive, modern, and stylish web interfaces. Our team leverages JavaScript and TypeScript along with frameworks such as React, Vue, and Angular to build dynamic, user-friendly experiences.",

      paraTwo:
        "We prioritize performance, ensuring fast load times and smooth navigation by optimizing assets and code. Whether it’s a single-page application or a complex user interface, we apply best practices in frontend development, including state management with Redux, Redux Toolkit, VueX, and Ngrx. With the use of RxJS, we provide seamless, reactive data flow, ensuring that your users interact with a fluid, responsive interface. Our team guarantees that every aspect of the frontend is not only functional but also delightful to use, creating interfaces that drive user engagement and satisfaction.",
    },

    image: frontend,
    url: "/services/custom-website-development",
  },
  {
    title: "API Development",
    description: {
      paraOne:
        "Our API development service focuses on creating modern and scalable APIs that offer robust performance and flexibility for your applications. We use RESTful architecture or GraphQL to design APIs that integrate seamlessly with both frontend and backend systems. Our expertise in backend technologies like Node.js and Express.js ensures your API performs efficiently under heavy loads. We work with databases like MongoDB and SQL to ensure smooth data management and retrieval.",

      paraTwo:
        "Whether you need public-facing APIs or private APIs for internal use, we tailor our solutions to meet your unique needs. Our team leverages best practices in API security, including OAuth, JWT authentication, and rate limiting, ensuring that your data and services remain safe and protected. We also ensure that the API is scalable, flexible, and can evolve with your business needs. This allows for easy integrations with other platforms and third-party services, enhancing the overall functionality of your application.",
    },
    image: api,
    url: "/services/api-development",
  },
  {
    title: "Node & PHP Backend Development",
    description: {
      paraOne:
        "Our Node.js and PHP backend development services provide powerful, secure, and scalable solutions that ensure your applications run smoothly and efficiently. With Node.js and Express.js, we develop high-performance, asynchronous backend architectures that handle large-scale data and traffic. We also use PHP to build dynamic websites and web applications with secure backend infrastructure. Our team is skilled in working with various databases like MongoDB, SQL, and MySQL, ensuring efficient data storage and management.",

      paraTwo:
        "For state management, we leverage Redux, Redux Toolkit, VueX, and Ngrx for smooth handling of application data. Additionally, we implement RxJS for reactive programming, creating responsive and scalable solutions. Whether you need an API service, content management system, or custom backend logic, we ensure that all backend components are designed to handle the load and deliver optimal performance. Our solutions are secure, with strong attention to user authentication, session management, and database security practices.",
    },
    image: backend,
    url: "/services/node-php-backend-development",
  },
  {
    title: "WordPress Website Development",
    description: {
      paraOne:
        "Leverage the power of WordPress for building highly customizable and manageable websites. Our WordPress development service includes creating both simple websites and complex, feature-rich web platforms. We specialize in developing custom WordPress themes and plugins to meet your unique business needs. Whether you require a blog, portfolio site, or a multi-functional business website, we ensure seamless integration with your branding and business requirements.",
      paraTwo:
        "Our team works with WooCommerce for building powerful e-commerce sites, integrating payment gateways, product management, and user authentication. We optimize WordPress websites for fast loading times, mobile responsiveness, and SEO. Additionally, we implement a secure architecture to protect your site from vulnerabilities. WordPress also makes managing and updating your site easier, so you can focus on growing your business while we handle the technical aspects. With extensive experience in theme customization, plugin development, and site optimization, we offer comprehensive WordPress solutions for all your needs.",
    },
    image: wordpress,
    url: "/services/wordpress-website-development",
  },
  {
    title: "E-commerce Platform Development",
    description: {
      paraOne:
        "Create feature-rich, scalable e-commerce platforms that help your business grow and scale effortlessly. Our team specializes in developing e-commerce solutions using platforms like WooCommerce, Magento, and custom solutions tailored to your unique business needs. We ensure that your online store is built with a modern, mobile-responsive design that enhances the shopping experience. Our expertise includes integrating payment gateways, inventory management systems, product catalogs, and order fulfillment solutions for seamless operations.",

      paraTwo:
        "We use modern frontend technologies like React, Vue, and Angular to create dynamic product pages and interactive shopping carts. Backend systems built with Node.js, Express.js, and PHP ensure robust and secure management of your product and customer data. We also integrate powerful marketing tools, such as email marketing automation, product recommendations, and social media integrations, to boost sales. Our focus is on delivering platforms that provide a smooth, secure, and user-friendly shopping experience, helping you grow your business online.",
    },
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
