import React,{useEffect,useState} from 'react';
import {useParams,useNavigate} from "react-router-dom";
import {API} from "../../Api/Api";

const Country = () => {

  const [data,setData] = useState([]);
  const {names}=useParams();
  const goBack=useNavigate();

  useEffect(()=>{
    API.getItem(names).then((res)=>setData(res));
  },[names])
  
    const {flag, population, capital, region,name} =data;

  return (
    <>
     <div className="container">
      <div className="row">
        <div className="col p-3">
          <button className="btn btn-danger" onClick={()=> goBack("/countries")}>
            go back
          </button>
        </div>
      </div>
        <div className="row p-5">
        <h2 className='text-center text-info mb-5'>{name}</h2>
          <div className="col-md-4">
            <img src={flag} alt="" style={{width:"330px"}} />
          </div>
          <div className="col-md-6">
            <ul className="list-group">
            <li className='list-group-item'>
              <strong>Population:</strong>{population}
            </li>
            <li className='list-group-item'>
              <strong>Region:</strong>
              {region}
            </li>
            <li className='list-group-item'>
              <strong>Capital:</strong>
              {capital}
            </li>
            </ul> 
          </div>
        </div>
     </div> 
    </>
  );
};

export default Country;