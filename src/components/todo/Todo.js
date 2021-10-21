import React, { useState } from 'react';
import TodoItem from './TodoItem';

const Todo = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [data, setData] = useState([
    { id: 1, name: 'Iphone 7 Plus', price: '800', isUpdate: false },
    { id: 2, name: 'Iphone 8 Plus', price: '1000', isUpdate: false },
    { id: 3, name: 'Iphone X', price: '1600', isUpdate: false },
    { id: 4, name: 'Iphone 11 Pro', price: '2100', isUpdate: false },
  ]);

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleCreate = (e) => {
    const newData = [...data];
    const id = newData.length === 0 ? 1 : newData[newData.length - 1].id + 1;
    const payload = {
      id: id,
      name: name,
      price: price,
      isUpdate: false,
    };
    setName('');
    setPrice('');
    newData.push(payload);
    setData(newData);
  };

  const handleEdit = (id) => {
    const newData = [...data];
    newData.forEach((item) => {
      if (item.id === id) {
        item.isUpdate = true;
        // setName(item.name);
        // setPrice(item.price);
      }
    });
    setData(newData);
  };

  const handleDelete = (id) => {
    const index = data.findIndex((x) => x.id === id);
    if (index < 0) return;
    const newData = [...data]
    newData.splice(index, 1)
    setData(newData);
  };

  const handleUpdate = (id, name, price) => {
    const newData = [...data];
    newData.forEach((item) => {
      if (item.id === id) {
        item.name = name;
        item.price = price;
        item.isUpdate = false;
      }
    });
    setData(newData);
  };


  const handleCancel = (id) => {
    const newData = [...data];
    newData.forEach((item) => {
      if (item.id === id) {
        item.isUpdate = false;
      }
    });
    setData(newData);
  };

  return (
    <>
      <h1 className="title">App Todo</h1>     
      <input
        className="form-control" type="text" value={name} placeholder="Enter name" onChange={(e) => changeName(e)} 
      />
      <input
        className="form-control" type="number" min="0" value={price} placeholder="Enter price" onChange={(e) => changePrice(e)} 
      />
      <input
        className="btn btn-add" type="button" value="Create" onClick={(e) => handleCreate(e)}
      />
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>    
            <h2>List Data</h2>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              {/* <th></th>
              <th></th> */}
            </tr>
          </thead>
            
          <tbody>
            {Array.isArray(data) &&
              data.map((item) => (
                <TodoItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  isUpdate={item.isUpdate}
                  funcEdit={() => handleEdit(item.id)}
                  funcUpdate={handleUpdate}
                  funcCancel={() => handleCancel(item.id)}
                  funcDelete={() => handleDelete(item.id)}
                />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Todo;