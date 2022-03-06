import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "./products";

class ProductCategoryRow extends React.Component {
  render() {
    //needs only the category as prop
    const category = this.props.category;
    return (
      <>
        <tr>
          <th>{category}</th>
        </tr>
      </>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    //needs product name, price and stocked. so we take product object as props which let us to select (using map in the DisplayProducts) all the attributes and the name which contains a value after checking a condition
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

class DisplayProducts extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(<ProductRow product={product} key={product.category} />);
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockOnlyChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
  render() {
    return (
      <>
        <div className="border border-2 border-primary p-3">
          <div>
            <input
              type="text"
              placeholder="Search"
              value={this.props.filterText}
              onChange={this.handleFilterTextChange}
            />
          </div>
          <div>
            <input
              type="checkbox"
              checked={this.props.inStockOnly}
              onChange={this.handleInStockOnlyChange}
            />
            <label htmlFor="filter">Only show products in stock</label>
          </div>
        </div>
      </>
    );
  }
}




class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterText: "", inStockOnly: false };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
  }
  handleFilterTextChange(filterText) {
    this.setState({ filterText: filterText });
  }

  handleInStockOnlyChange(inStockOnly) {
    this.setState({ inStockOnly: inStockOnly });
  }

  render() {
    return (
      <>
        <SearchBox
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockOnlyChange}
        />
        <DisplayProducts
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </>
    );
  }
}


function App() {
  return (
    <div className="box">
      <Container products={data} />
    </div>
  );
}

export default App;
