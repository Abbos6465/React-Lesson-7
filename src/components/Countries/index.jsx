import React, { useState, useEffect } from "react";
import "./Countries.scss";
import { API } from "../../Api/Api";
import Card from "../../UI/Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    API.getAll().then((result) => {
      setData(result.data);
      if(result.data){
        setLoading(true);
      }
    });
  }, []);

  if(!loading){
    return <h1>LOADING.....</h1>
  }

  return (
    <>
      <div className="container">
        <div className="row p-3">
          <div className="col-md-6 d-flex justify-content-end">
            <input
              type="text"
              placeholder="Enter Country Name"
              p-2
              className="form-control w-50"
            />
          </div>
          <div className="col-md-6 d-flex justify-content-start">
            <select className="form-select w-50 p-2">
              <option selected disabled>
                Filter by Region
              </option>
            </select>
          </div>
          <div className="col-12 mt-4">
            <h3 className="text-center">All countries</h3>
            <div className="wrapper">
                {
                  data.length>0 ? data.map((e,i,a)=>{
                      return <Card data={e} />
                  }):<h4>NOT FOUND</h4>

                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countries;
