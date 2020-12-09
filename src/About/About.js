import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleAlt,
  faDice,
  faLeaf,
  faCouch,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
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
          <div className="col-md-4 text-center">
            <FontAwesomeIcon
              className="primary"
              icon={faDice}
              size="lg"
              color="#007BFF"
              className="mb-2"
            />
            <h3 className="text-primary text-center">Exciting</h3>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis reiciendis minima nobis est quas voluptatibus
              accusantium temporibus exercitationem cumque voluptate.
            </p>
          </div>
          <div className="col-md-4 text-center">
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
        </div>
      </div>
    </section>
  );
};

export default About;
