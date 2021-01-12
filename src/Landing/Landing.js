import React from "react";
import classes from "./Landing.module.css";

function Landing(props) {
  return (
    <section className={classes.bg}>
      <div className={classes.overlay}>
        <h1 className="display-2 text-center mb-3">Try your luck today?</h1>
        <div>
          <button
            type="button"
            onClick={props.getData}
            className="btn btn-primary mr-1"
            data-toggle="modal"
            data-target="#staticBackdrop"
          >
            Get a Slothmachine Code
          </button>
        </div>
      </div>
    </section>
  );
}

export default Landing;
