import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
      const [services, setServices] = useState([])

      useEffect(() => {
            fetch('https://intense-lake-63088.herokuapp.com/services')
                  .then(res => res.json())
                  .then(data => setServices(data));
      }, [])

      return (
           <div id="services">
                 <h2 className="text-primary mt-4 mb-3">Our Services</h2>
                  <div className="service__container">
                  {
                        services.map(service => <Service
                              key={service.id}
                              service={service}>

                        </Service>)
                  }

            </div>
           </div>
      );
};

export default Services;