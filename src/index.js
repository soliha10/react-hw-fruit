import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Smth from "./App";

const students = [
  { url: "https://img.freepik.com/free-vector/watermelon-fresh-fruit-icon-isolated-design_18591-82726.jpg", name: "Watermelon" },
  { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVn7Squg2tb-nb8gbUyOqXvGcEHZlToz3ftQ&s", name: "Orange" },
  { url: "https://img.freepik.com/free-vector/vibrant-red-cherry-isolated-vector_1308-133424.jpg", name: "Cherry" },
  { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCyvfJIPkCc0LWU1H634sRUpf5W4P-BOZ_uQ&s", name: "Lemon " },
  { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_uZXgDvpoo7BiAxsljjlUORt46-n5VviLRw&s", name: "Blueberry" },

]


ReactDOM.render(

  <React.StrictMode>
    {/* <Smth data={{ status:"active", title:"React" }}  />
    <Smth title="Angular"/>
    <Smth title="vue"/> */}
    {/* <h2>Hi i'm a child</h2> */}
    <h1 className="site-title">Fruits</h1>
    <ul className="fruits-list">
      {students.map((value) => {
        return <Smth data={value} />
      })}
    </ul>



  </React.StrictMode>,
  document.getElementById("root")


);