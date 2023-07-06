import React from 'react'

export const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={props.img} style={{ height: "165px" }} alt="..." />
      <div className="card-body">
        <h5 className="card-title">M/V Miracle Mile</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-warning">Book Now</a>
      </div>
    </div>
  );
};

