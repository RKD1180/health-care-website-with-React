import React from "react";
import img from "../../img/hel1.jpg";

const Myself = () => {
  return (
    <div>
      <h2 className="mt-4 mb-3">My Self</h2>
      <div className="container">
        <div className="row">
          <div class="card mb-3">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                My name is Raton Kumar Das. I am from Bangladesh,Dhaka,Rajshahi.
                I am a website Designer and Developer. I know
                Html,Css,Js,React,Django,Wordpress. I complete my Bsc in Cse
                from Varendra Universite. I am also a freelacer.
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

export default Myself;
