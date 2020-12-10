import React from "react";
import placeholder from "./placeholder.jpg";

function Card(props) {
  return (
    <div className="col-md-3">
      <div className="card rounded shadow">
        <img src={placeholder} className="card-img-top mb-2" alt="#" />
        <div className="card-body">
          <h5 className="card-title mb-2">{props.title}</h5>
          <div className="card-text mb-3 text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
            dolorem repudiandae consequuntur aut. Error debitis consectetur
            voluptas ex iste ipsam!
          </div>
          <a href="#" className="btn btn-block btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
