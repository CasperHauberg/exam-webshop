import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice, faLeaf, faGlobe } from "@fortawesome/free-solid-svg-icons";
import founders from "./founders.jpg";

const About = () => {
  return (
    <section id="#about">
      <div className="container">
        <div className="card rounded shadow">
          <h1 className="text-center my-5">Team Values:</h1>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={founders}
                  style={{ width: "500px" }}
                  alt=""
                  className="rounded"
                />
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-6 text-center">
                    <FontAwesomeIcon
                      icon={faLeaf}
                      size="lg"
                      color="#007BFF"
                      className="mb-2"
                    />
                    <h3 className="text-primary text-center">Sustainable</h3>
                    <p className="text-secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis reiciendis minima nobis est quas voluptatibus
                      accusantium temporibus exercitationem cumque voluptate.
                    </p>
                  </div>
                  <div className="col-6 text-center">
                    <FontAwesomeIcon
                      className="primary"
                      icon={faDice}
                      size="lg"
                      color="#007BFF"
                    />
                    <h3 className="text-primary text-center">Exciting</h3>
                    <p className="text-secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis reiciendis minima nobis est quas voluptatibus
                      accusantium temporibus exercitationem cumque voluptate.
                    </p>
                  </div>
                  <div className="col-6 text-center">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      size="lg"
                      color="#007BFF"
                      className="mb-2"
                    />
                    <h3 className="text-primary text-center">Worldwide</h3>
                    <p className="text-secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis reiciendis minima nobis est quas voluptatibus
                      accusantium temporibus exercitationem cumque.
                    </p>
                  </div>
                  <div className="col-6 text-center">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      size="lg"
                      color="#007BFF"
                      className="mb-2"
                    />
                    <h3 className="text-primary text-center">Quality</h3>
                    <p className="text-secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis reiciendis minima nobis est quas voluptatibus
                      accusantium temporibus exercitationem cumque.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
