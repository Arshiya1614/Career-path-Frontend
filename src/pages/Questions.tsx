import React from "react";
import MyNavbar from "../Components/Navbar";
import styled from "styled-components";
import Footer from "../Components/Footer";


const Container = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  margin-bottom : 20px;

`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
 color: #99A7F1;
 text-align : center; 

`;

const Subtitle = styled.p`
  font-size: 1.2rem;
   color: #99A7F1; 
    text-align : center; 

`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
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

const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
    background: #99A7F1;

`;

const CardDetails = styled.p`
  font-size: 1rem;
  color: #6b7280;
    background: #99A7F1;

`;


const Questions: React.FC = () => {
  const categories = [
    { title: "JavaScript", questions: 75, topics: 14 },
    { title: "Node.js", questions: 36, topics: 5 },
    { title: "React", questions: 51, topics: 11 },
    { title: "Backend", questions: 50, topics: 3 },
    { title: "Full-stack", questions: 50, topics: 3 },
    { title: "Frontend", questions: 30, topics: 3 },
    { title: "DevOps", questions: 50, topics: 3 },
  ];

  return (
    <>
      <MyNavbar />
      <Container>
        <Title>Questions</Title>
        <Subtitle>
          Quizzes to help you test and improve your knowledge and skill up
        </Subtitle>
        <Grid>
          {categories.map((category, index) => (
            <Card key={index}>
              <CardTitle>
                {category.title}
              </CardTitle>
              <CardDetails>
                {category.questions} Questions · {category.topics} topics
              </CardDetails>
            </Card>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Questions;
