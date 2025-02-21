import React ,{ useState } from "react";
import MyNavbar from "../Components/Navbar";
import styled from "styled-components";
import Footer from "../Components/Footer";

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
`;

const Sidebar = styled.div`
  width: 250px;
  position: sticky;
  top: 80px;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid #e5e7eb;
  padding: 20px;
`;

const SidebarItem = styled.div<{ active: boolean }>`
  padding: 10px 15px;
  font-size: 1.1rem;
  cursor: pointer;
  color: ${({ active }) => (active ? "#000" : "#6b7280")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  background: ${({ active }) => (active ? "#f3f4f6" : "transparent")};
  border-radius: 5px;
  margin-bottom: 8px;
  &:hover {
    background: #f3f4f6;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: #99A7F1;
  margin-top: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #99A7F1;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  background: #99A7F1;
  ;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Badge = styled.span`
  background: #fde68a;
  color: #6b7280;
  padding: 4px 10px;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 5px;
  margin-right: 10px;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  background: #99A7F1;
  margin-top:10px;

`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin: 10px 0;
  background: #99A7F1;

`;

const Started = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  margin-top: 5px;
  background: #99A7F1;

`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  color: #99A7F1;

`;

const categories = [
  "All Projects",
  "Frontend",
  "Backend",
  "DevOps",
  "Go",
  "Python",
  "Node.js",
  "Java",
  "C++",
  "Linux",
  "PHP",
  "Spring Boot",
];

const projectsData: { [key: string]: { title: string; description: string; level: string; tag: string; started: number }[] } = {
  DevOps: [
    { title: "Server Performance Stats", description: "Write a script to analyze basic server performance stats.", level: "Beginner", tag: "CLI", started: 1637 },
    { title: "Log Archive Tool", description: "Build a tool to archive logs from the CLI with the date and time.", level: "Beginner", tag: "CLI", started: 703 },
    { title: "Nginx Log Analyser", description: "Write a simple tool to analyze logs from the command line.", level: "Beginner", tag: "CLI", started: 174 },
    { title: "GitHub Pages Deployment", description: "Write a GitHub Actions workflow to deploy a static website.", level: "Beginner", tag: "CI / CD", started: 181 },
  ],
  Frontend: [
    { title: "Portfolio Website", description: "Build a personal portfolio with animations.", level: "Intermediate", tag: "React", started: 1200 },
    { title: "UI Library", description: "Create a reusable UI component library.", level: "Advanced", tag: "Vue", started: 800 },
  ],
  Backend: [
    { title: "REST API", description: "Build a RESTful API for a blog application.", level: "Intermediate", tag: "Node.js", started: 900 },
    { title: "GraphQL API", description: "Create a GraphQL API for a social network.", level: "Advanced", tag: "GraphQL", started: 600 },
  ],
  Python: [
    { title: "Web Scraper", description: "Build a Python script to scrape data from websites.", level: "Beginner", tag: "BeautifulSoup", started: 1400 },
  ],
  Go: [
    { title: "CLI Task Manager", description: "Develop a command-line task manager.", level: "Beginner", tag: "Go", started: 300 },
  ],
  "Node.js": [
    { title: "Task Management API", description: "Create a task management system backend.", level: "Intermediate", tag: "Node.js", started: 600 },
    { title: "File Upload Service", description: "Develop a file upload and storage system.", level: "Advanced", tag: "Express.js", started: 500 },
  ],
  Java: [
    { title: "Bank Management System", description: "Develop a simple banking management system.", level: "Intermediate", tag: "Java", started: 700 },
    { title: "Library Management System", description: "Build a digital library management app.", level: "Intermediate", tag: "Java", started: 600 },
  ],
  "C++": [
    { title: "Tic-Tac-Toe", description: "Create a simple Tic-Tac-Toe game.", level: "Beginner", tag: "C++", started: 500 },
    { title: "File Compression Tool", description: "Develop a file compression tool.", level: "Advanced", tag: "C++", started: 400 },
  ],
};


const ProjectIdeas: React.FC = () => {
const [activeCategory, setActiveCategory] = useState("DevOps");
  return (
   <>
   <MyNavbar />
      <Title>Project Ideas</Title>
      <Subtitle>Browse the ever-growing list of project ideas and solutions.</Subtitle>
      <Container>
        <Sidebar>
          {categories.map((category, index) => (
            <SidebarItem key={index} active={activeCategory === category} onClick={() => setActiveCategory(category)}>
              {category}
            </SidebarItem>
          ))}
        </Sidebar>
        <Content>
         <HeaderRow>
           <h2>Projects in {activeCategory}</h2>
           <p>Matches found ({projectsData[activeCategory]?.length || 0})</p>
           </HeaderRow>
          <Grid>
            {projectsData[activeCategory]?.map((project, index) => (
              <Card key={index}>
                <Badge>{project.level}</Badge>
                <Badge>{project.tag}</Badge>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <Started>👥 {project.started} Started</Started>
              </Card>
            ))}
          </Grid>
        </Content>
      </Container>

   <Footer />
   </>
  );
};

export default ProjectIdeas;
