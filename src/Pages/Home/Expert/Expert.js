import React from 'react';
import './Expert.css'

const Expert = ({expert}) => {
      const {name, img, expertize} = expert;
      return (
            <div className="mb-3 col-lg-3 col-sm-6 col-12">
                  <div className="border border-dark rounded w-100 bg-light">
                  <img className="w-100" src={img} alt="" />
                  <h4 className="text-dark pt-3 fs-5 fw-bold" >{name}</h4>
                  <h5 className="text-info fs-6 mb-3">{expertize}</h5>
                  </div>
            </div>
      );
};

export default Expert;