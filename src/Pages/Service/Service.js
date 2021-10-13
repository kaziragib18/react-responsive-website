import React from 'react';

const Service = ({service}) => {
      // const {servive} = props;
      const {name, price, img, description} = service;
      return (
            <div className="service__card">
                  <img className="service__img" src={img} alt="" />
                  <h4>{name}</h4>
                  <h5>Price: {price}</h5>
                  <h5>{description}</h5>
            </div>
      );
};

export default Service;