import React from "react";
import Content from '../../components/HOC/Content';
import ProductModal from "./ProductModal";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/productAction";
import { Link } from "react-router-dom";
import { colorSelector } from "../../utils/colorSelector";

function Products() {
  let dispatch = useDispatch();
  let products = useSelector((state) => state.products);
  const submitProduct = (product) => {
    product.id = Math.floor(Math.random() * 100 + 1);
    dispatch(addProduct(product));
  };
  return (
    <main className="mt-4">
      <button
        type="button"
        className="btn btn-primary modal-btn"
        data-toggle="modal"
        data-target="#modelProductId"
      >
        NEW
      </button>

      <div className="lists">
        <div className="header py-3">
          <div className="row">
            <div className="col-9 col-lg-11">
              <h4>All Products</h4>
            </div>
              <Link to="/search/products" className="search-link"><i className="fa fa-search"></i></Link>
          </div>
        </div>
        <div className="items mx-auto row">
          {products.length >= 1 ? (
            products.map((product) => (
                <div className="col-md-6 my-2" key={product.id}>
                  <Link to={`/products/${product.id}`} className={`item-sm ${colorSelector()}`}>
                    <div className="item row mx-auto">
                      <div className="col-12 col-lg-8">
                        {product.name}
                      </div>
                      <div className="col-12 col-lg-4">
                        &#8358;{product.price}
                      </div>
                      <div className="col-12">
                        {product.type}
                      </div>
                    </div>
                  </Link>
                </div>
            ))
          ) : (
            <p className="text-center col-12">No Product Available...</p>
          )}
        </div>
      </div>

      <ProductModal submitProduct={submitProduct} />
    </main>
  );
}

export default Content(Products);
