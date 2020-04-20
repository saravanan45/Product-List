import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

function Items(props) {
  const { match } = props;
  const id = match.params.id;

  //Set product name readonly or not
  const name = match.params.name ? true : false;

  const [productName, setProductName] = useState(
    match.params.name ? match.params.name : ''
  );
  const [price, setPrice] = useState(
    match.params.price ? match.params.price : ''
  );
  const [tax, setTax] = useState(
    match.params.tax === 'true' ? 'true' : 'false'
  );

  const taxInclusion = e => {
    const tax = e.target.value === 'true' ? 'true' : 'false';
    setTax(tax);
  };

  const addProduct = () => {
    const prod = JSON.parse(localStorage.getItem('products'));
    const duplicate = prod.filter(item => item.name === productName);
    if (duplicate.length) {
      return alert('duplicate error');
    }
    const product = {
      name: productName,
      price,
      tax
    };
    prod.push(product);
    localStorage.setItem('products', JSON.stringify(prod));
    props.history.push('/home');
  };

  const updateProduct = () => {
    const product = {
      name: productName,
      price,
      tax
    };
    const prod = JSON.parse(localStorage.getItem('products'));
    const list = prod.filter((item, index) => {
      if (index == id) {
        return;
      }
      return item;
    });
    list.push(product);
    localStorage.setItem('products', JSON.stringify(list));
    props.history.push('/home');
  };
  return (
    <div className="header">
      <span className="sub-title">Add a product</span>
      <table className="add-table">
        <div className="add-row">
          <span className="add-span">Name</span>
          <input
            className="input-field"
            type="text"
            placeholder="Name of the product"
            value={productName}
            onChange={e => setProductName(e.target.value)}
            readOnly={name}
          />
        </div>
        <div className="add-row">
          <span className="add-span">Price</span>
          <input
            className="input-field"
            type="number"
            placeholder="price"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>
        <div className="add-tax">
          <span className="add-tax-span">Tax(Included)</span>

          <label className="add-tax-div1">
            <input
              className="input-field"
              type="radio"
              value="true"
              checked={tax === 'true'}
              onChange={e => taxInclusion(e)}
            />
            Yes
          </label>
          <label className="add-tax-div2">
            <input
              className="input-field"
              type="radio"
              value="false"
              checked={tax === 'false'}
              onChange={e => taxInclusion(e)}
            />
            No
          </label>
        </div>
      </table>
      {props.match.params.name ? (
        <button
          className="button-field button-add"
          type="submit"
          onClick={() => updateProduct()}
        >
          update
        </button>
      ) : (
        <button
          className="button-field button-add"
          type="submit"
          onClick={() => addProduct()}
        >
          Add
        </button>
      )}
    </div>
  );
}
export default withRouter(Items);
