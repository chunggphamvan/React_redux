import React, { useState } from 'react';
import './ReduxItem.css';
import PropTypes from 'prop-types'; //tạo kiểu dữ liệu

const ReduxItem = ({ id, name, price, isUpdate, funcUpdate, funcCancel, funcEdit, funcDelete}) => {
  const [nameTemp, setNameTemp] = useState(name);
  const [priceTemp, setPriceTemp] = useState(price);
  const changeName = (e) => {
    setNameTemp(e.target.value);
  };
  const changePrice = (e) => {
    setPriceTemp(e.target.value);
  };
  return (
    <>
      {isUpdate ? (
        <tr>
          <td className="ReduxItem__Id">{id}</td>
          <td className="ReduxItem__Name">
            <input className="form-control" type="text" value={nameTemp} onChange={(e) => changeName(e)}
            />
          </td>
          <td className="ReduxItem__Price">
            <input className="form-control" type="number" value={priceTemp} onChange={(e) => changePrice(e)} 
            />
          </td>
          <td className="ReduxItem__Button">
            <input className="btn btn-primary" type="button" value="Update" onClick={() => funcUpdate(id, nameTemp, priceTemp)}
            />
            <input className="btn btn-default" type="button" value="Cancel" onClick={funcCancel}
            />
          </td>
        </tr>
      ) : (
        <tr>
          <td className="ReduxItem__Id">{id}</td>
          <td className="ReduxItem__Name">{name}</td>
          <td className="ReduxItem__Price">{price}$</td>
          <td className="ReduxItem__Button">
            <input className="btn btn-warning" type="button" value="Edit" onClick={funcEdit}
            />
            <input className="btn btn-danger" type="button" value="Delete" onClick={funcDelete}
            />
          </td>
        </tr>
      )}
    </>
  );
};

export default ReduxItem;

ReduxItem.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isUpdate: PropTypes.func.isRequired,
  funcUpdate: PropTypes.func.isRequired,
  funcCancel: PropTypes.func.isRequired,
  funcEdit: PropTypes.func.isRequired,
  funcDelete: PropTypes.func.isRequired,
};//tạo kiểu dữ liệu