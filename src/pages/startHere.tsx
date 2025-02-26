import React from "react";
import styled from "styled-components";
import MyNavbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

// Card data
const roadmapSections = [
  {
    header: "Beginner Roadmaps",
    title: "Are you an Absolute beginner?",
    subtitle: "Here are some beginner-friendly roadmaps you should start with.",
    categories: [
      {
        title: "Frontend Developer",
        description: "Develop the part of web apps that users interact with i.e. things rendered in the browser.",
        path: "/frontend",
      },
      {
        title: "Backend Developer",
        description: "Develop the part hidden from the user e.g. things like APIs, databases, search engines etc.",
        path: "/backend",
      },
      {
        title: "Full Stack Developer",
        description: "Develop both the frontend and backend side of the web apps i.e. the whole development stack.",
        path: "/fullstack",
      },
    ],
  },
  {
    header: "Self-Taught Developer",
    title: "No formal education? No problem!",
    subtitle: "Here's a roadmap for self-learners looking to break into tech.",
    categories: [
      {
        title: "Learning Resources",
        description: "Best books, online courses, and resources to get started.",
        path: "/self-taught/resources",
      },
      {
        title: "Portfolio & Projects",
        description: "Build projects and showcase your skills effectively.",
        path: "/self-taught/projects",
      },
      {
        title: "Job Search Guide",
        description: "How to get a job without a CS degree and stand out.",
        path: "/self-taught/jobsearch",
      },
    ],
  },
  {
    header: "Frontend Developer",
    title: "Master the art of UI & UX",
    subtitle: "Learn HTML, CSS, JavaScript, frameworks, and UI/UX principles.",
    categories: [
      {
        title: "React Developer",
        description: "Learn the most popular JavaScript library for building UIs.",
        path: "/frontend/react",
      },
      {
        title: "Vue.js Developer",
        description: "Build fast and lightweight web apps using Vue.js.",
        path: "/frontend/vue",
      },
      {
        title: "CSS & UI/UX",
        description: "Deep dive into responsive design, animations, and accessibility.",
        path: "/frontend/css-uiux",
      },
    ],
  },
  {
    header: "Backend Developer",
    title: "Power up the web with robust backends",
    subtitle: "Master databases, APIs, authentication, and more.",
    categories: [
      {
        title: "Node.js & Express",
        description: "Learn backend development using JavaScript & Express.js.",
        path: "/backend/nodejs",
      },
      {
        title: "Django & Python",
        description: "Develop powerful backends with Django and Python.",
        path: "/backend/django",
      },
      {
        title: "Databases & SQL",
        description: "Work with MySQL, PostgreSQL, and NoSQL databases.",
        path: "/backend/databases",
      },
    ],
  },
  {
    header: "DevOps Engineer",
    title: "Automate, deploy, and scale applications",
    subtitle: "Learn CI/CD, Docker, Kubernetes, and Cloud Services.",
    categories: [
      {
        title: "Docker & Kubernetes",
        description: "Master containerization and orchestration.",
        path: "/devops/docker",
      },
      {
        title: "CI/CD & Automation",
        description: "Learn GitHub Actions, Jenkins, and pipeline automation.",
        path: "/devops/cicd",
      },
      {
        title: "Cloud Computing",
        description: "AWS, Azure, and Google Cloud platforms for scaling apps.",
        path: "/devops/cloud",
      },
    ],
  },
  {
    header: "Android Developer",
    title: "Build powerful mobile applications",
    subtitle: "Master Android development using Java, Kotlin, and Flutter.",
    categories: [
      {
        title: "Kotlin for Android",
        description: "Develop modern Android apps with Kotlin.",
        path: "/android/kotlin",
      },
      {
        title: "Flutter & Cross-Platform",
        description: "Build mobile apps for both Android and iOS.",
        path: "/android/flutter",
      },
      {
        title: "Jetpack & UI Components",
        description: "Master Jetpack Compose and Android UI best practices.",
        path: "/android/jetpack",
      },
    ],
  },
  {
    header: "AI & Machine Learning",
    title: "The future of technology is AI",
    subtitle: "Learn data science, deep learning, and AI-powered development.",
    categories: [
      {
        title: "Machine Learning Basics",
        description: "Understand ML algorithms and Python libraries.",
        path: "/ai/ml-basics",
      },
      {
        title: "Deep Learning & Neural Networks",
        description: "Work with TensorFlow, PyTorch, and deep learning models.",
        path: "/ai/deep-learning",
      },
      {
        title: "AI in Web Development",
        description: "Integrate AI-powered features into web applications.",
        path: "/ai/ai-web",
      },
    ],
  },
];

// Styled Components
const Container = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

const Section = styled.div`
  margin-top: 50px;
`;

const Header = styled.div`
  background-color: black;
  color: white;
  padding: 10px 15px;
  border-radius: 10px;
  display: inline-block;
  font-size: 25px;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
   color: #99A7F1;

`;

const Subtitle = styled.p`
  color: #666;
  font-size: 16px;
  margin-top: 10px;
   color: #99A7F1;

`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const Card = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: #99A7F1;
  text-align: left;

   &:hover {
    border-color:rgb(80, 105, 233);
    color: rgb(80, 105, 233);
  }
`;

const Divider = styled.hr`
  margin: 40px 0;
  border: none;
  height: 3px;
  background: linear-gradient(to right,rgb(136, 153, 241), transparent);
`;




const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
    background: #99A7F1;

`;

const CardDescription = styled.p`
  color: #555;
  font-size: 14px;
  margin-top: 5px;
    background: #99A7F1;

`;




const StartHere: React.FC = () => {
 const navigate = useNavigate();
  return (
    <>
      <MyNavbar />
      <Container>
        {roadmapSections.map((section, index) => (
          <Section key={index}>
            <Header>{section.header}</Header>
            <Title>{section.title}</Title>
            <Subtitle>{section.subtitle}</Subtitle>
            <Grid>
              {section.categories.map((category, idx) => (
                <Card key={idx} onClick={() => navigate(category.path)}>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </Card>
              ))}
            </Grid>
            {index !== roadmapSections.length - 1 && <Divider />} 
          </Section>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default StartHere;
