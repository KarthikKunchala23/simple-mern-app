import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  text-align: center;
  margin-top: 50px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #666;
`;

const MessageBox = styled.div`
  background-color: #f0f4f8;
  border-radius: 8px;
  padding: 20px;
  margin: 20px auto;
  max-width: 400px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Footer = styled.footer`
  margin-top: 40px;
  font-size: 0.9rem;
  color: #999;
`;

function App() {
  const [message, setMessage] = useState("Loading...");

  // Fetch data from the backend
  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from backend:", error);
        setMessage("Unable to connect to the backend. Please try again later.");
      });
  }, []);

  return (
    <Container>
      <Title>Welcome to My MERN Application</Title>
      <Subtitle>A Simple Full-Stack App with a Beautiful UI</Subtitle>

      <MessageBox>
        <p>{message}</p>
      </MessageBox>

      <Footer>
        <p>&copy; 2024 Simple MERN App | Built with React and Styled Components</p>
      </Footer>
    </Container>
  );
}

export default App;
