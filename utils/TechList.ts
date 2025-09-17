import { StaticImageData } from "next/image";

import nextjs from "@/assets/tech/nextjs-icon.png";
import react from "@/assets/tech/react-js-icon.png";
import typescript from "@/assets/tech/typescript-programming-language-icon.png";
import javascript from "@/assets/tech/javascript-programming-language-icon.png";
import node from "@/assets/tech/node-js-icon.png";
import express from "@/assets/tech/express-js-icon.png";
import docker from "@/assets/tech/docker-icon.png";
import postgres from "@/assets/tech/postgresql-icon.png";
import mongo from "@/assets/tech/mongodb-icon.png";
import database from "@/assets/tech/database-icon.png";
import tailwind from "@/assets/tech/tailwind-css-icon.png";
import mui from "@/assets/tech/material-ui-icon.png";
import css from "@/assets/tech/css-icon.png";
import sass from "@/assets/tech/sass-icon.png";
import bootstrap from "@/assets/tech/bootstrap-5-logo-icon.png";
import angular from "@/assets/tech/angular-icon.png";
import vue from "@/assets/tech/vue-js-icon.png";
import php from "@/assets/tech/php-programming-language-icon.png";
import wordpress from "@/assets/tech/wordpress-icon.png";
import hugo from "@/assets/tech/hugo-icon.png";
import jquery from "@/assets/tech/jquery-icon.png";
import firebase from "@/assets/tech/google-firebase-icon.png";

export type TechItem = { name: string; image: StaticImageData };

export const techStack: TechItem[] = [
  // Frontend
  { name: "Next.js", image: nextjs },
  { name: "React.js", image: react },
  { name: "TypeScript", image: typescript },
  { name: "JavaScript", image: javascript },
  { name: "Angular", image: angular },
  { name: "Vue.js", image: vue },

  // Backend & Infrastructure
  { name: "Node.js", image: node },
  { name: "Express.js", image: express },
  { name: "Docker", image: docker },
  { name: "PostgreSQL", image: postgres },
  { name: "MongoDB", image: mongo },
  { name: "Firebase", image: firebase },
  { name: "SQLite", image: database },

  // Styling & UI
  { name: "Tailwind CSS", image: tailwind },
  { name: "Material-UI", image: mui },
  // { name: "CSS3", image: css },
  // { name: "Sass", image: sass },
  { name: "Bootstrap 5", image: bootstrap },

  // CMS & Other
  { name: "PHP", image: php },
  { name: "Hugo", image: hugo },
  { name: "WordPress", image: wordpress },
  { name: "jQuery", image: jquery },
];
