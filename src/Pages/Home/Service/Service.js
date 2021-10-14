import React from 'react';

const Service = ({ service }) => {
      // const {servive} = props;
      const { name, price, img, description } = service;
      return (
            <div className="service__card">
                  <img className="service__img" src={img} alt="" />
                  <h4 className="pt-3  fs-5 fw-bold">{name}</h4>
                  <h5 className="fs-6 fw-bold">Price: <span className="text-danger">{price}</span> USD</h5>
                  <h5 className="p-2 fs-6">{description}</h5>
            </div>
      );
};

export default Service;