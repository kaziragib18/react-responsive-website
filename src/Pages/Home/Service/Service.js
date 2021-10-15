import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
      // const {servive} = props;
      const { id, name, price, img, description } = service;
      return (
            <div className="service__card pb-3">
                  <img className="service__img" src={img} alt="" />
                  <h4 className="pt-3  fs-5 fw-bold">{name}</h4>
                  <h5 className="fs-6 fw-bold">Price: <span className="text-danger">{price}</span> USD</h5>
                  <h5 className="p-2 fs-6">{description}</h5>
                  <Link to={`/booking/${id}`}>
                  <button className="btn btn-dark border rounded-pill px-4">Book {name.toLowerCase()}</button>
                  </Link>
            </div>
      );
};

export default Service;