import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import "../MyCard/MyCard.css";
import "../context/Theme.css";
import { ThemeContext } from "../context/ThemeContext";

function MyCard() {

    const { DarkMode } = useContext(ThemeContext);

    const themeClass = DarkMode ? 'dark-theme' : 'light-theme';
  return (
  <>
  <h3> This is an identity card</h3>
  <Card className={`custom-card ${DarkMode && themeClass}`}>
      <Card.Header className="header"><h5> Identity Card </h5></Card.Header>
     
      <Card.Body>
       <p>My name is Sara</p>
      </Card.Body>
    </Card>
    </>
  );
}
export default MyCard;

