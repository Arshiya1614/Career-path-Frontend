import React from "react";
import { Link } from "react-router-dom";
import MyNavbar from "../Components/Navbar";
import styled from "styled-components";

// Styled Home Page Background
const HomeBackground = styled.div`
  min-height: 100%;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  padding-bottom: 50px;
`;


const ContentSection = styled.div`
  text-align: center;
  margin-top: 30px;
  padding: 20px;
  margin-bottom : 40px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  color: black;
`;

const RoadmapsContainer = styled.div`
  text-align: center;
  padding: 20px;
 background:rgb(26, 36, 61);
  color: white;
`;

const RoadmapTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #38bdf8;
`;

const RoadmapGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  max-width: 900px;
  margin: 0 auto;
`;

const RoadmapCard = styled(Link)`
  display: block;
  background: linear-gradient(135deg, #667eea, #764ba2);
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
  border: 1px solid transparent;
  text-decoration: none;
  color: white;

  &:hover {
    border-color: #38bdf8;
    color: #38bdf8;
  }
`;

const CreateRoadmapButton = styled.div`
  background: none;
  border: 1px dashed #64748b;
  color: #64748b;
  padding: 15px;
  border-radius: 8px;
  margin: 20px auto;
  cursor: pointer;
  font-weight: bold;
  max-width: 900px;
  text-align: center;

  &:hover {
    border-color: white;
    color: white;
  }
`;

const skillBasedRoadmaps = [
  "Computer Science", "React", "Vue", "Angular", "JavaScript", "Node.js", "TypeScript", "Python",
  "SQL", "System Design", "API Design", "ASP.NET Core", "Java", "C++", "Flutter", "Spring Boot",
  "Go Roadmap", "Rust", "GraphQL", "Design and Architecture", "Design System", "React Native",
  "AWS", "Code Review", "Docker", "Kubernetes", "Linux", "MongoDB", "Prompt Engineering",
  "Terraform", "Data Structures & Algorithms", "Git and GitHub", "Redis", "PHP", "Cloudflare"
];

const roleBasedRoadmaps = [
  "Frontend", "Backend", "DevOps", "Full Stack", "AI Engineer", "Data Analyst",
  "AI and Data Scientist", "Android", "iOS", "PostgreSQL", "Blockchain", "QA",
  "Software Architect", "Cyber Security", "UX Design", "Game Developer",
  "Technical Writer", "MLOps", "Product Manager", "Engineering Manager"
];

const projectIdeas = ["Frontend", "Backend", "DevOps"];
const bestPractices = ["Backend Performance" ,"Frontend Performance" ,"API Security" ,"Code Reviews" ,"AWS"];
const questions = ["JavaScript" ,"Node.js","React","Backend","Frontend","Devops"];

const Home: React.FC = () => {
  
  return (
    <HomeBackground>
      <MyNavbar />

      <ContentSection>
        <Title>Developer Roadmaps</Title>
        <Description>
          roadmap.sh is a collaborative platform designed to provide structured roadmaps, 
          comprehensive guides, and curated learning resources. It empowers developers by 
          offering clear pathways to master various technologies, ensuring a well-defined 
          and effective learning journey.
        </Description>
      </ContentSection>

      <RoadmapsContainer>
        <RoadmapTitle>Role-based Roadmaps</RoadmapTitle>
        <RoadmapGrid>
          {roleBasedRoadmaps.map((roadmap, index) => (
            <RoadmapCard key={index} to={`/roadmap/${roadmap.toLowerCase().replace(/ /g, "-")}`}>
              {roadmap}
            </RoadmapCard>
          ))}
        </RoadmapGrid>
        <CreateRoadmapButton>+ Create your own Roadmap</CreateRoadmapButton>
      </RoadmapsContainer>

      
       <RoadmapsContainer>
        <RoadmapTitle>Skill-based Roadmaps</RoadmapTitle>
        <RoadmapGrid>
          {skillBasedRoadmaps.map((roadmap, index) => (
            <RoadmapCard key={index} to={`/roadmap/${roadmap.toLowerCase().replace(/ /g, "-")}`}>
              {roadmap}
            </RoadmapCard>
          ))}
        </RoadmapGrid>
        <CreateRoadmapButton>+ Create your own Roadmap</CreateRoadmapButton>
      </RoadmapsContainer> 

      <RoadmapsContainer style={{ marginTop: "5px" }}>
        <RoadmapTitle>Project Ideas</RoadmapTitle>
        <RoadmapGrid>
          {projectIdeas.map((idea, index) => (
            <RoadmapCard key={index} to={`/idea/${idea.toLowerCase().replace(/ /g, "-")}`}>
              {idea}
            </RoadmapCard>
          ))}
        </RoadmapGrid>
      </RoadmapsContainer> 

      <RoadmapsContainer>
        <RoadmapTitle>Best Practices</RoadmapTitle>
        <RoadmapGrid>
          {bestPractices.map((practices, index) => (
            <RoadmapCard key={index} to={`/bestPractices/${practices.toLowerCase().replace(/ /g, "-")}`}>
              {practices}
            </RoadmapCard>
          ))}
        </RoadmapGrid>
      </RoadmapsContainer> 

      <RoadmapsContainer >
        <RoadmapTitle>Questions</RoadmapTitle>
        <RoadmapGrid>
          {questions.map((questions, index) => (
            <RoadmapCard key={index} to={`/questions/${questions.toLowerCase().replace(/ /g, "-")}`}>
              {questions}
            </RoadmapCard>
          ))}
        </RoadmapGrid>
      </RoadmapsContainer> 
      
      
    </HomeBackground>
  );
};

export default Home;
