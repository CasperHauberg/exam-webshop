import React from "react";
import Card from "./Card/Card";

import "jquery";
import "popper.js";
import "bootstrap";
import firebase from "firebase";

class App extends React.Component {
  getData() {
    var firebaseConfig = {
      apiKey: "AIzaSyC68HML9atAc4tEC2NbJTl-oR4khYZrJN0",
      authDomain: "slothmachine-303e3.firebaseapp.com",
      databaseURL: "https://slothmachine-303e3.firebaseio.com",
      projectId: "slothmachine-303e3",
      storageBucket: "slothmachine-303e3.appspot.com",
      messagingSenderId: "729958760674",
      appId: "1:729958760674:web:00fb7352d98579e55d1ebb",
    };

    firebase.initializeApp(firebaseConfig);

    var database = firebase.database().ref("/Keys"); // Reference to database path - "/Keys" are the path

    database.once("value").then((snapshot) => {
      const keys = snapshot.val(); // Snapshot.val() is the actual data
      let storedKey = Object.keys(keys)[Object.keys(keys).length - 1]; // Turns object keys into an array and returns the last key in the array
      database = firebase.database().ref("/ActiveKey"); // Change the database refence to active key
      database.set(storedKey); // Sets the storedKey to the new path.
    });
  }

  render() {
    const titles = [
      "Sloth Codes",
      "Sloth Machines",
      "Sloth Figures",
      "Sloth Keychains",
    ];

    return (
      <div className="App bg-light">
        <div className="container">
          <div className="row">{titles.forEach}</div>
        </div>
      </div>
    );
  }
}

export default App;
