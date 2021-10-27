import React, { useEffect, useState } from 'react';

const ManageServices = () => {
      const [services, setServices] = useState([]);

      useEffect(() => {
            fetch('https://intense-lake-63088.herokuapp.com/services')
                  .then(res => res.json())
                  .then(data => setServices(data))
      }, []);

      const handleDelete = id => {
            const url = `https://intense-lake-63088.herokuapp.com/services/${id}`;
            fetch(url, {
                  method: 'DELETE'
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        if (id) {
                              alert('Service Deleted!');
                              const remaining = services.filter(service => service._id !== id);
                              setServices(remaining);
                        }
                  })
      }

      return (
            <div className="d-flex justify-content-center flex-column justify-content-center ">
                  <h2 className="text-light p-3">This is Manage Services page</h2>
                  {
                        services.map(service => <div className=" text-light p-4 border m-2"
                              key={service._id}>
                              <h3>{service.name}</h3>
                              <button onClick={() =>handleDelete(service._id)} className="btn btn-danger">Delete</button>
                        </div>)
                  }
            </div>
      );
};

export default ManageServices;