// Library Imports

import { Component } from "react";

// jquery, popper.js, bootstrap is nessacary for bootstrap components.

import "popper.js";
import "bootstrap";

// Connection to firebase project.

import firebase from "./firebase";

// Components Imports

import Card from "./Card/Card";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Landing/Landing";
import About from "./About/About";
import Footer from "./Footer/Footer";

// Image Imports

import placeholder from "./img/placeholder.jpg";
import keychain from "./img/sloth-keychain.jpg";
import machine from "./img/sloth-machine.jpg";
import codes from "./img/sloth-codes.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    // Intial State
    this.state = { key: "Fetching Sloth Code . . ." };
  }

  getData = () => {
    var database = firebase.database().ref("/Keys"); // Reference to database path - "/Keys" are the path

    let storedKey;

    database.once("value").then((snapshot) => {
      const keys = snapshot.val(); // Snapshot.val() is the actual data
      console.log(keys); // Debuging
      storedKey = Object.keys(keys)[Object.keys(keys).length - 1]; // Turns object keys into an array and returns the last key in the array
      console.log(storedKey); // returns string;
      database = firebase.database().ref("/inputcode2/SlothCode"); // Change the database refence to active key
      database.set(storedKey); // Sets the storedKey to the new path.
      // Update the state
      setTimeout(() => {
        this.setState({ key: storedKey });
      }, 2000);
    });
  };

  addToCart(title) {
    alert(`A ${title} has been added to your cart!`);
  }

  render() {
    // Function purpose: Render HTML Content
    return (
      <div className="App bg-light">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
          <div className="container">
            <a className="navbar-brand font-large" href="#">
              Sloths X Makerspace
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-2 active">
                  <a className="nav-link font-large" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link font-large" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link font-large" href="#">
                    Shop
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Landing getData={this.getData} />
        <div className="container mb-5">
          <h1 className="text-center my-3">Newest products</h1>

          <div className="row">
            <Card
              title="Sloth Code"
              img={codes}
              add={() => this.addToCart("Sloth Code")}
            />{" "}
            {/* Props = title, img */}
            <Card
              title="Sloth Machine"
              img={machine}
              add={() => this.addToCart("Sloth Machine")}
            />
            <Card
              title="Sloth Figure"
              img={placeholder}
              add={() => this.addToCart("Sloth Figure")}
            />
            <Card
              title="Sloth Keychain"
              img={keychain}
              add={() => this.addToCart("Sloth Keychain")}
            />
          </div>
        </div>
        <About />
        <Footer />

        <div
          className="modal fade"
          id="staticBackdrop"
          data-backdrop="static"
          data-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Your Sloth Code
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body"> {this.state.key}</div>
              <div className="justify-content-start modal-footer">
                Go to{" "}
                <a href="https://www.hahastud.io/react/">
                  www.SlothMachine.com
                </a>{" "}
                to enter code
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
