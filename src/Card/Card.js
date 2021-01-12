import React from "react";

function Card(props) {
  return (
    <div className="col-md-3 mb-5">
      <div className="card rounded shadow">
        <img
          src={props.img}
          loading="lazy"
          className="card-img-top mb-2"
          style={{
            height: "250px",
            objectFit: "cover",
            objectPosition: "center",
          }}
          alt="#"
        />
        <div className="card-body">
          <h5 className="card-title mb-2">{props.title}</h5>
          <div className="card-text mb-3 text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
            dolorem repudiandae consequuntur aut. Error debitis consectetur
            voluptas ex iste ipsam!
          </div>
          <button
            href="#"
            className="btn btn-block btn-primary"
            onClick={props.add}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
