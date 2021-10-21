import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, cancelTodo, deleteTodo, editTodo, updateTodo,} from '../../redux/actions';
import ReduxItem from './ReduxItem';

const ReduxUI = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleCreate = (e) => {
    const id = data.length === 0 ? 1 : data[data.length - 1].id + 1;
      setName('');
      setPrice('');
      dispatch(addTodo({ id: id, name: name,  price: price, isUpdate: false }));
  };

  const handleEdit = (id) => {
    dispatch(editTodo(id));
  };

  const handleCancel = (id) => {
    dispatch(cancelTodo(id));
  };

  const handleUpdate = (id, name, price) => {
    dispatch(
      updateTodo({
        id: id,
        name: name,
        price: price,
        isUpdate: false,
      })
    );
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <h1 className="title">App Redux</h1>
      <input className="form-control" type="text" value={name} placeholder="Enter name" onChange={(e) => changeName(e)} 
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
            {Array.isArray(data) &&//kiểm tra điều kiện data(state), có dữ liệu thì mới chạy
              data.map((item) => (
                <ReduxItem
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

export default ReduxUI;