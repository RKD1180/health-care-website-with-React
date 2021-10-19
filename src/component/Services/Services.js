import React, { useEffect, useState } from "react";
import Home from "../Home/Home";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      {/* Services Section */}

      <div className="container">
        <h2 className="text-primary text-center fw-bold mt-4 mb-4">
          Our Services
        </h2>
        <div className="row">
          {services.map((service) => (
            <Service service={service} key={service.id}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
