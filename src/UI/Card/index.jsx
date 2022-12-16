import React from "react";
import {Link} from "react-router-dom";

const Card = ({data:{flag, population, capital, region, name}}) => {
  return (
    <>
    <Link to={`/countries/${name}`}>
    <div className="card">
        <img
          src={flag}
          alt="flag"
          className="card-img"
        />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <ul>
            <li>
              <strong>Population:</strong>{population}
            </li>
            <li>
              <strong>Region:</strong>
              {region}
            </li>
            <li>
              <strong>Capital:</strong>
              {capital}
            </li>
          </ul>
        </div>
      </div>
    </Link>
    </>
  );
};

export default Card;
