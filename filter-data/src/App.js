import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "./products";

class Container extends React.Component {
  render() {
    return (
      <>
        <SearchBox />
      </>
    );
  }
}
class SearchBox extends React.Component {
  render() {
    return (
      <>
        <div className="border border-2 border-primary p-3">
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <div>
            <input type="checkbox" id="filter" name="filter" />
            <label htmlFor="filter">Only show products in stock</label>
          </div>
        </div>
      </>
    );
  }
}

class DisplayProducts extends React.Component {
  render() {
    const rows=[];
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

class ProductCatagoryRow extends React.Component {
  render() {
    const catagory = this.props.catagory;
    return (
      <>
        <tr>
          <th>{catagory}</th>
        </tr>
      </>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? (
      product.name
    ) : (
      <span className="text-danger">{product.name}</span>
    );
    return (
      <>
        <tr>
          <td>{name}</td>
          <td>{product.price}</td>
        </tr>
      </>
    );
  }
}

function App() {
  return (
    <div className="box">
      <Container />
    </div>
  );
}

export default App;
