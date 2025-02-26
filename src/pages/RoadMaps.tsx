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
  width: 300px;
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  margin-top: 20px;
`;

const Card = styled.div`
  background: #99A7F1;
  ;
  padding: 8px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-in-out;
  text-align : center;

  &:hover {
    transform: translateY(-5px);
  }
`;



const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  background: #99A7F1;
  margin-top:10px;
  color : white;

`;


const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  color: #99A7F1;

`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 20px;
  color: white;
`;

const categories = [
   "All Roadmaps",
    "Absolute Beginners",
    "Web Development",
    "Frameworks",
    "Languages / Platforms",
    "DevOps",
    "Mobile Development",
    "Databases",
    "Computer Science",
    "Machine Learning",
    "Management",
    "Game Development",
    "Design",
    "Blockchain",
    "Cyber Security"
];

const skillBasedRoadmaps = [
  "GraphQL", "Git and GitHub", "React", "Vue", "Angular", "Spring Boot",
  "ASP.NET Core", "JavaScript", "TypeScript", "Node.js", "PHP", "C++", "Go", "Rust",
  "Python", "Java", "SQL", "Docker", "Kubernetes", "AWS", "Cloudflare", "Linux",
  "Terraform", "React Native", "Flutter", "MongoDB", "Redis", "Computer Science",
  "Data Structures", "System Design", "Design and Architecture", "Code Review",
  "Prompt Engineering", "Design System"
];

const roleBasedRoadmaps = [
  "Frontend Beginner", "Backend Beginner", "DevOps Beginner", "Frontend", "Backend",
  "Full Stack", "API Design", "QA", "DevOps", "Android", "iOS", "PostgreSQL",
  "Software Architect", "Technical Writer", "DevRel Engineer", "AI and Data Scientist",
  "AI Engineer", "Data Analyst", "MLOps", "Product Manager", "Engineering Manager",
  "Client Side Game Dev.", "Server Side Game Dev.", "UX Design", "Blockchain", "Cyber Security"
];

const roadmapData: { [key: string]: { title: string }[] } = {
  
  "Absolute Beginners": [
    { title: "Frontend Beginners" },
    { title: "Backend Beginners" },
    { title: "DevOps Beginners" },
  ],
  "Web Development": [
    { title: "HTML & CSS Mastery" },
    { title: "JavaScript Roadmap" },
    { title: "React.js Developer" },
    { title: "Vue.js Beginner Guide" },
    { title: "Advanced Node.js" },
  ],
  "Frameworks": [
    { title: "React.js Roadmap" },
    { title: "Angular Developer Path" },
    { title: "Vue.js Beginner Guide" },
    { title: "Django & Flask for Python" },
  ],
  "Languages / Platforms": [
    { title: "Java Roadmap" },
    { title: "Python Developer Guide" },
    { title: "C++ Mastery" },
    { title: "JavaScript Full Stack Path" },
  ],
  "DevOps": [
    { title: "Docker & Kubernetes" },
    { title: "CI/CD Pipelines" },
    { title: "Cloud Deployment" },
    { title: "Infrastructure as Code (Terraform)" },
  ],
  "Mobile Development": [
    { title: "Android Development (Kotlin)" },
    { title: "iOS Development (Swift)" },
    { title: "Flutter Mobile Apps" },
    { title: "React Native Guide" },
  ],
  "Databases": [
    { title: "SQL Mastery" },
    { title: "NoSQL Basics (MongoDB)" },
    { title: "Database Optimization" },
    { title: "PostgreSQL & MySQL Guide" },
  ],
  "Computer Science": [
    { title: "Data Structures & Algorithms" },
    { title: "Operating Systems Basics" },
    { title: "Computer Networking" },
    { title: "System Design Roadmap" },
  ],
  "Machine Learning": [
    { title: "Python for Machine Learning" },
    { title: "Deep Learning Roadmap" },
    { title: "AI & Neural Networks" },
    { title: "Computer Vision Guide" },
  ],
  "Management": [
    { title: "Project Management Basics" },
    { title: "Agile & Scrum Mastery" },
    { title: "Product Management Path" },
    { title: "Team Leadership Skills" },
  ],
  "Game Development": [
    { title: "Unity Developer Path" },
    { title: "Unreal Engine Guide" },
    { title: "Game Physics & Mechanics" },
    { title: "Multiplayer Game Development" },
  ],
  "Design": [
    { title: "UI/UX Design Basics" },
    { title: "Graphic Design with Figma" },
    { title: "Web Design Principles" },
    { title: "Typography & Color Theory" },
  ],
  "Blockchain": [
    { title: "Ethereum & Smart Contracts" },
    { title: "Solidity Developer Guide" },
    { title: "NFT Development" },
    { title: "Decentralized Applications (DApps)" },
  ],
  "Cyber Security": [
    { title: "Ethical Hacking Roadmap" },
    { title: "Penetration Testing Guide" },
    { title: "Network Security Basics" },
    { title: "Web Security & Vulnerabilities" },
  ],
};



const RoadMaps: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All Roadmaps");
  return (
   <>
   <MyNavbar />
      <Title>Developers Roadmap</Title>
      <Subtitle>Browse the ever-growing list of up-to-date, community driven roadmaps</Subtitle>
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
           <h4>{activeCategory}</h4>
           </HeaderRow>
           {activeCategory === "All Roadmaps" ? (
            <>
              <SectionTitle>Skill-Based Roadmaps</SectionTitle>
              <Grid>
                {skillBasedRoadmaps.map((roadmap, index) => (
                  <Card key={index}>
                    <CardTitle>{roadmap}</CardTitle>
                  </Card>
                ))}
              </Grid>

              <SectionTitle>Role-Based Roadmaps</SectionTitle>
              <Grid>
                {roleBasedRoadmaps.map((roadmap, index) => (
                  <Card key={index}>
                    <CardTitle>{roadmap}</CardTitle>
                  </Card>
                ))}
              </Grid>
            </>
          ) : (
            <>
              
              <Grid>
                {roadmapData[activeCategory]?.map((rm, index) => (
                  <Card key={index}>
                    <CardTitle>{rm.title}</CardTitle>
                  </Card>
                ))}
              </Grid>
            </>
          )}
        </Content>
      </Container>

   <Footer />
   </>
  );
};

export default RoadMaps;