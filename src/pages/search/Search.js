import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Content from '../../components/HOC/Content';
import RenderProp from "./RenderProp";
import { colorSelector } from '../../utils/colorSelector'

function Search(props) {
  const {str} = props.match.params
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState('')
  const states = useSelector(state => state)
  let data = states[str]
  const handleSubmit = (e) => {
    e.preventDefault();
    let results = data.filter(datum => ( datum.name === search || datum.product_name === search || datum.customer === search ))
    setSearchResults(results)
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const displaySearchResults = x => {
      let data = x ? x.map(result => (
        <Link to={`/${str}/${result.id}`} className={`item-sm d-block w-75 px-4 py-2 my-3 ${colorSelector()}`} key={result.id}>
          <h3>{Object.entries(result)[0][1]}</h3>
          <p>ID: {result.id}</p>
        </Link>
        )): ''
      return data
  }
  return (
    <main className="my-2 my-md-4">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-2">
          <Link to={`/${str}`} className="back" >&larr;</Link>
          </div>
          <div className="col-7">
            <div className="form-group">
              <input
                type="text"
                className="form-control search"
                name="name"
                id="name"
                aria-describedby="helpId"
                placeholder="Search..."
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-3 col-md-1">
            <button type="submit" className="btn btn-block btn-primary search-btn">
              <i className='fa fa-search'></i>
            </button>
          </div>
        </div>
      </form>
      <RenderProp>
          {displaySearchResults(searchResults)}
      </RenderProp>
    </main>
  );
}

export default Content(Search);
