import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      {/* <a className="navbar-brand" href="#">Navbar</a> */}
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex">
            <button className="btn btn-outline-dark p-1" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;