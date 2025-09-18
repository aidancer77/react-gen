import React from 'react';
import './Navigation.css';

function Navigation({ navVisible }) {

  // if()
  return (
    <nav className="navbar navbar-expand-lg navbar-light border-secondary border-bottom">
      {/* <a className="navbar-brand" href="#">Navbar</a> */}
      <div className="container-fluid pe-3">
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
          <form className="">
            <button className="btn btn-outline-dark p-1" type="submit">Выход</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;