import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDice,
  faLeaf,
  faGlobe,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import about1 from "./about1.jpg";
import about2 from "./about2.jpg";
import about3 from "./about3.jpg";

const About = () => {
  return (
    <section id="#about">
      <div className="container">
        <div className="card rounded shadow">
          <h1 className="text-center my-3">Team Values</h1>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 mb-3">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src={about1}
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={about2}
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={about3}
                        alt="Third slide"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="col-md-6 mb-3 d-flex">
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
                      At Sloths X Makerspace, we strive to create products out
                      of the most sustainable materials, which we can find. We
                      think helping the planet is a great common goal
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
                      It is very important for our development that we are able
                      to keep the excitement in our work, that the passion of
                      each team member can shine bright and develop their
                      potential.
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
                      We would like to collaborate with people from all around
                      the world and also spread the Sloths X Makerspace brand to
                      every corner of the planet.
                    </p>
                  </div>
                  <div className="col-6 text-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      size="lg"
                      color="#007BFF"
                      className="mb-2"
                    />
                    <h3 className="text-primary text-center">Quality</h3>
                    <p className="text-secondary">
                      Our team values the quality of the idea, then development,
                      testing of the system on the target audience to ensure we
                      fulfill their needs to the full extend.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-9 d-flex align-items-end justify-content-center">
                      <p className="m-0">
                        Would you like to see further projects, support the
                        sloths with a donation!
                      </p>
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-end">
                      <button className="btn btn-primary p-2">Donate</button>
                    </div>
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
