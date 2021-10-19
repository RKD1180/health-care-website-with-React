import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Details from "../Details/Details";

const ServiceDetails = () => {
  const { id } = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `/data.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);

  const result = serviceDetails.find((res) => res.id === { id });
  console.log(result);

  return (
    <div>
      <h2>
        Details:{id} {result}
      </h2>
    </div>
  );
};

export default ServiceDetails;
