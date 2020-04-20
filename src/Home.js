import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

function Home({ history }) {
  console.log('Home');
  const itemDetails = [
    {
      name: 'Item 1',
      price: '210',
      tax: 'true'
    },
    {
      name: 'Item 2',
      price: '500',
      tax: 'true'
    },
    {
      name: 'Item 3',
      price: '1000',
      tax: 'false'
    }
  ];
  const storedItems = () => {
    const localItems = JSON.parse(localStorage.getItem('products'));
    if (!localItems) {
      localStorage.setItem('products', JSON.stringify(itemDetails));
      return itemDetails;
    }
    return localItems;
  };

  const [items, setItems] = useState(storedItems());

  const goToAddItem = () => {
    history.push('/items');
  };
  const logout = () => {
    localStorage.clear();
    history.push('/');
  };
  const deleteItem = id => {
    const products = JSON.parse(localStorage.getItem('products'));
    const updatedProducts = products.filter((product, index) => index !== id);
    setItems(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    return alert('Deleted Successfully');
  };

  return (
    <div>
      <button className="logout-button" onClick={() => logout()}>
        Logout
      </button>
      <div className="header">
        <span className="sub-title"> List of Products</span>
        <table className="table">
          <thead className="display-table-header">
            <tr>
              <th></th>
              <th>Name of the product</th>
              <th>Price</th>
              <th>Tax(included)</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => {
                        deleteItem(index);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.tax}</td>
                  <td>
                    <Link
                      to={{
                        pathname: `/items/${item.name}/${item.price}/${item.tax}/${index}`
                      }}
                    >
                      Update
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          className="button-field button-add"
          type="text"
          onClick={() => goToAddItem()}
        >
          Add
        </button>
      </div>
    </div>
  );
}
export default withRouter(Home);
