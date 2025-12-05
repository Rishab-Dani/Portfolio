
import { FaGithub, FaGraduationCap, FaJava, FaLinkedin, FaTwitter,} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { SiDocker, SiFlutter } from "react-icons/si";


export const experienceData = [
  {
    title: "Internship",
    company: "JAIN Launchpad",
    location: "Bengaluru, Karnataka, India",
    description: [
      "Designed, Developed, and Maintained robust Mobile application, ensuring high performance and scalability.",
    ],
    date: "Sep 2025 - Nov 2025",
  },
  {
    title: "Internship",
    company: "Soharon Infotech",
    location: "Erode, Tamil Nadu, India",
    description: [
      "Built responsive and user-friendly interfaces using HTML, CSS, and JavaScript.", 
      "Collaborated with team members to implement industry-standard development practices."
],
    date: "May 2024 - Jun 2024",
  },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Rishab-Dani",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rishab-dani/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=rishab12445@gmail.com&su=Hello&body=I%20want%20to%20connect%20with%20you",
    icon: MdMail,
  },
  {
    label: "Twitter",
    href: "https://x.com/rishab12445?t=9SS2MXwFJREM_Bn0btmHYA&s=09",
    icon: FaTwitter,
  },
] as const;

export const projects = [
  {
    title: "Event Management System",
    description:
      "Led a team of 5 to develop a responsive event registration and tracking platform. Integrated Firebase Real-time Database & Authentication for secure, real-time operations. Oversaw both front-end and back-end development, ensuring timely delivery.",
    tags: ["HTML", "CSS", "JS", "PHP", "MYSQL", "Firebase"],
    github: "https://github.com/Rishab-Dani/Event-Management-System",
    image: "/images/EventManagementSystem.gif", 
  },
  {
    title: "Employee Management System",
    description:
      "An Employee Management System built using Java, Spring Boot, H2 Database, and Thymeleaf. The application allows adding, updating, viewing, and deleting employee records with a clean, server-rendered UI. It showcases CRUD operations, MVC architecture, and efficient backend-frontend integration.",
    tags: ["HTML","CSS", "Java", "Sring Boot", "Thymeleaf", "H2 Database"],
    github: "https://github.com/Rishab-Dani/EMS---CRUD-in-SpringBoot",
    image: "/images/ems.png", 
  },
    {
    title: "Expense Tracker App",
    description:
      "A simple and intuitive Expense Tracker mobile app built using Flutter and Dart. It allows users to record, categorize, and manage daily expenses with ease. Includes clean UI, local data storage, and interactive charts for visualizing spending patterns.",
    tags: ["Dart","Flutter"],
    github: "https://github.com/Rishab-Dani/Expense_Tracker",
    image: "/images/expense tracker.png", 
  },

] as const;

export const certificates = [
  {
    id: 1,
    title: "Web Development",
    institution: "Soharon Infotech",
    duration: "Issued: May 2024",
    description: "Completed comprehensive training on web development technologies including HTML, CSS, JavaScript, PHP, and MySQL.",
    link: "https://drive.google.com/file/d/1n64m2GKKPXasJeKsz9fomc1sDYQ2alT0/view?usp=sharing",
    icon: FaGraduationCap,
  },
  {
    id: 2,
    title: "Flutter",
    institution: "Udemy",
    duration: "Issued: Dec 2025",
    description: "Demonstrated knowledge of Zero Trust architecture, security principles, and access control best practices.",
    link: "https://www.udemy.com/certificate/UC-98b7d1a2-ed4c-489a-8e7a-7f9ef4e06222/",
    icon: SiFlutter,
  },
  {
    id: 3,
    title: "CI/CD with Jenkins and Docker",
    institution: "Udemy",
    duration: "Issued: Sep 2025",
    description: "Completed advanced training on implementing CI/CD pipelines using Jenkins and Docker.",
    link: "https://www.udemy.com/certificate/UC-fc4237ed-3fd1-4ee4-8666-3be5bb0ffd80/",
    icon: SiDocker,
  },
  {
    id: 4,
    title: "Java",
    institution: "Udemy",
    duration: "Issued: June 2025",
    description: "Completed advanced Java and with Object Oriented Programming (OOP), Classes, Objects, Encapsulation, Inheritance, Polymorphism, SOLID and more.",
    link: "https://www.udemy.com/certificate/UC-2aedd53d-fab6-4460-bf60-6e1c4feb18c1/",
    icon: FaJava,
  },
  {
    id: 5,
    title: "MySQL",
    institution: "Udemy",
    duration: "Issued: July 2025",
    description: "Master SQL Basics, Data Retrieval, Advanced Queries, Joins, and Optimisation + Hands-on Exercises. SQL for Data Analysis",
    link: "https://www.udemy.com/certificate/UC-8ab87287-a4c7-4944-a03d-472d301cba5a/",
    icon: FaGraduationCap,
  },
];

type EducationItem = {
  id: number;
  title: string;
  institution: string;
  duration: string;
  cgpa?: string;      
  hsc?: string;
  sslc?: string;
  description: string;
};

export const educationData: EducationItem[] = [
  {
    id: 1,
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Excel College for Computer Applications, Tamil Nadu",
    duration: "2022 - 2025",
    cgpa:"CGPA : 7.5%",
    description:
      "Enthusiastic and detail-oriented Java & Web Developer with hands-on experience in building responsive web applications and Java based software solutions. Skilled in Java, Spring Boot, MySQL, Flutter and modern front-end technologies.",
  },
  {
    id: 2,
    title: "Higher Secondary School",
    institution: "Government Higher Secondary School Mettur",
    duration: "2021 - 2022",
    hsc:"HSLC : 70%" ,
    sslc:"SSLC : 75%",
    description: "Completed Higher Secondary education in the Maths-Biology group, building a strong foundation in Mathematics, Physics, Chemistry, and Biology.",
  },
];
