import React from "react";

import "jquery";
import "popper.js";
import "bootstrap";
import firebase from "./firebase";

import Card from "./Card/Card";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Landing/Landing";
import About from "./About/About";
import Footer from "./Footer/Footer";

import placeholder from "./img/placeholder.jpg";
import keychain from "./img/sloth-keychain.jpg";
import machine from "./img/sloth-machine.jpg";
import codes from "./img/sloth-codes.jpg";

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
        <Navbar />
        <Landing getData={this.getData} />
        <div className="container mb-5">
          <h1 className="text-center mb-3">Our newest products</h1>

          <div className="row">
            <Card title="Sloth Codes" img={codes} />
            <Card title="Sloth Machines" img={machine} />
            <Card title="Sloth Figures" img={placeholder} />
            <Card title="Sloth Keychains" img={keychain} />
          </div>
        </div>
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
