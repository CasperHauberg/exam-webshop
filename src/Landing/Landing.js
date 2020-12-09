import React from "react";
import classes from "./Landing.module.css";

function Landing(props) {
  return (
    <section className={classes.bg}>
      <div className={classes.overlay}>
        <h1 className="display-2 text-center">Sloths X Makerspace</h1>
        <div>
          <button onClick={props.getData} className="btn btn-primary mr-1">
            Get Sloth Code
          </button>
          <button className="btn btn-primary ml-2">About Sloths</button>
        </div>
      </div>
    </section>
  );
}

export default Landing;
