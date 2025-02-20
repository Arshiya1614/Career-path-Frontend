import React from "react";
import styled from "styled-components";

// Styled Components
const GuidesContainer = styled.div`
  margin-top: 40px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const GuideList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 60%;
  max-width: 800px;
`;

const GuideItem = styled.li`
  display: grid;
  grid-template-columns: 9fr 3fr;
  align-items: center;
  text-align: left;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  &:last-child {
    border-bottom: none;
  }
`;

const GuideTitle = styled.a`
  color: white;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;



const Category = styled.span`
  color: #bbb;
  font-size: 14px;
  text-align: center;
`;

const ViewAllButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: #000;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background: #333;
  }
`;

const guides = [
  { title: "Data Science vs. Computer Science: Which Path to Choose", month: "February", category: "Textual" },
  { title: "Data Science vs. Data Analytics: Which is Right for You?", month: "February", category: "Textual" },
  { title: "Data Science vs Machine Learning: How are they different?", month: "February", category: "Textual" },
  { title: "How to Become a Full Stack Developer: Career Guide", month: "February", category: "Textual" },
  { title: "Go vs Java: Choosing the Right Language for Your Projects", month: "February", category: "Textual" },
  { title: "Java vs JavaScript: Key Differences Explained", month: "January", category: "Textual" },
  { title: "Data Science Lifecycle 101: A Beginners' Ultimate Guide", month: "January", category: "Textual" },
  { title: "Top 50 Full Stack Developer Interview Questions", month: "January", category: "Questions" },
  { title: "Top 50 Popular DevOps Interview Questions (and Answers)", category: "Questions" },
  { title: "50 Popular Backend Developer Interview Questions and Answers", category: "Questions" },
  { title: "Top 30 Popular Front End Developer Interview Questions", category: "Questions" }
];

const Guides: React.FC = () => {
  return (
    <GuidesContainer>
      <h2>Guides</h2>
      <GuideList>
        {guides.map((guide, index) => (
          <GuideItem key={index}>
            <GuideTitle href={`/guides/${guide.title.toLowerCase().replace(/ /g, "-")}`}>
              {guide.title}
            </GuideTitle>
            
            <Category>{guide.category}</Category>
          </GuideItem>
        ))}
      </GuideList>
      <ViewAllButton href="/guides">View All Guides →</ViewAllButton>
    </GuidesContainer>
  );
};

export default Guides;
