import React, { useRef } from "react";
import { Link } from "react-router-dom";
import MyNavbar from "../Components/Navbar";
import styled from "styled-components";
import { RefObject } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Guides from "../Components/Guides";
import Footer from "../Components/Footer";

// Styled Home Page Background
const HomeBackground = styled.div`
  min-height: 100vh; /* Full screen height */
  background: black; /* Set background to black */
  color: white; /* Ensures all text is visible */
  padding-bottom: 50px;
`;

const ContentSection = styled.div`
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  margin-bottom : 50px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #99A7F1; 
`;

const Description = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  color: white;
`;

const RoadmapsContainer = styled.div`
  text-align: center;
  padding: 20px;
  color: white;
`;

const RoadmapTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
   color: #99A7F1;
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
  background: #99A7F1;
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
    border-color:rgb(80, 105, 233);
    color: rgb(80, 105, 233);
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

const sections = [
  {
    title: "Project Ideas",
    items: ["Frontend", "Backend", "DevOps"],
    linkPrefix: "/idea/",
  },
  {
    title: "Best Practices",
    items: ["Backend Performance", "Frontend Performance", "API Security", "Code Reviews", "AWS"],
    linkPrefix: "/bestPractices/",
  },
  {
    title: "Questions",
    items: ["JavaScript", "Node.js", "React", "Backend", "Frontend", "DevOps"],
    linkPrefix: "/questions/",
  }
];
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,  // Show 1 section at a time
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};



const Home: React.FC = () => {

  const roleBasedRef = useRef<HTMLDivElement>(null);
  const skillBasedRef = useRef<HTMLDivElement>(null);
  
  return (
    <HomeBackground>
      <MyNavbar
      roleBasedRef={roleBasedRef as RefObject<HTMLDivElement>} 
      skillBasedRef={skillBasedRef as RefObject<HTMLDivElement>} 
       />

      <ContentSection>
        <Title>Developer Roadmaps</Title>
        <Description>
           career path is a collaborative platform designed to provide structured roadmaps, 
          comprehensive guides, and curated learning resources. It empowers developers by 
          offering clear pathways to master various technologies, ensuring a well-defined 
          and effective learning journey.
        </Description>
      </ContentSection>

      <RoadmapsContainer ref={roleBasedRef}>
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

      
       <RoadmapsContainer ref={skillBasedRef}>
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

        {/* Best Practices Carousel */}
        <Slider {...sliderSettings}>
        {sections.map((section, index) => (
          <RoadmapsContainer key={index}>
            <RoadmapTitle>{section.title}</RoadmapTitle>
            <RoadmapGrid>
              {section.items.map((item, i) => (
                <RoadmapCard key={i} to={`${section.linkPrefix}${item.toLowerCase().replace(/ /g, "-")}`}>
                  {item}
                </RoadmapCard>
              ))}
            </RoadmapGrid>
          </RoadmapsContainer>
        ))}
      </Slider>

      <Guides />
      <Footer />
    </HomeBackground>
  );
};

export default Home;
