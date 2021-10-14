import React from 'react';

const Expert = ({expert}) => {
      const {name, img, expertize} = expert;
      return (
            <div className="col-lg-3 col-sm-6 col-12">
                  <img src={img} alt="" />
                  <h4>{name}</h4>
                  <h5 className="text-info">{expertize}</h5>
            </div>
      );
};

export default Expert;