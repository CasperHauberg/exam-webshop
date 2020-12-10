import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import Card from "./Card/Card";
import "jquery";
import "popper.js";
import "bootstrap";
import firebase from "./firebase";

import Card from "./Card/Card";
import Landing from "./Landing/Landing";
import About from "./About/About";
import Footer from "./Footer/Footer";

class App extends React.Component {
  getData() {
    var database = firebase.database().ref("/Keys"); // Reference to database path - "/Keys" are the path

    let storedKey;

    database.once("value").then((snapshot) => {
      const keys = snapshot.val(); // Snapshot.val() is the actual data
      console.log(keys);
      storedKey = Object.keys(keys)[Object.keys(keys).length - 1]; // Turns object keys into an array and returns the last key in the array
      // console.log(storedKey); // returns string;
      database = firebase.database().ref("/inputcode1/SlothCode"); // Change the database refence to active key
      database.set(storedKey); // Sets the storedKey to the new path.

      // Todo #1: Extract value of the keys
    });
  }

  render() {
    return (

    <div className="App bg-light">
    <Navbar/>
        <div className="container">

      <div className="App bg-light">
        <Landing getData={this.getData} />
        <div className="container mb-5">
          <h1 className="text-center mb-3">Our newest products</h1>

          <div className="row">
            <Card title="Sloth Codes" />
            <Card title="Sloth Machines" />
            <Card title="Sloth Figures" />
            <Card title="Sloth Keychains" />
          </div>
        </div>
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
