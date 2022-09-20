import React from "react";
import logo from "./logo.svg";
import "./App.css";

import styled from "@emotion/styled";

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

function App() {
  return (
    <div className="App">
      <Button>hello</Button>
    </div>
  );
}

export default App;
