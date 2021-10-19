import React from "react";
import img from "../../img/hel2.jpg";

const AboutUs = () => {
  return (
    <div>
      <h2 className="mt-4 mb-3">About Us</h2>
      <div className="container">
        <div className="row">
          <div class="card mb-3">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                we additionally paintings very closely with our community
                healthcare group who provide antenatal, postnatal and nursing
                services and different specialist provision inclusive of the
                quitters scheme.
              </p>
              <p class="card-text">
                This 24 month benefit covers all ranges of basic upkeep.
                Notwithstanding every one of the things included on the Full
                administration we cover things that are frequently suggested for
                substitution like clockwork.
              </p>
              <p class="card-text">
                Ipsum dolor sit amet, consectetur adipisicing elit. Minus sit
                voluptates, quis. Soluta libero quam natus veritatis est
                inventore, ipsam, ex vitae sequi nihil eos dicta itaque sit
                praesentium, id error! Ullam, reiciendis at omnis atque.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
