import React from 'react';


export default function Header(props) {
 // const { search, oninputchange } = props;



 const dropdownChangeHandler = (event) => {
  // props.onChangeFilter(event.target.value);
  //const selectedFood = event.target.value;

};


  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid  header-style ">
        <h3 className="display-5">Food App</h3>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="https://www.allrecipes.com/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.youtube.com/channel/UCPPIsrNlEkaFQBk-4uNkOaw/playlists">Youtube Links</a>
            </li> 
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
            </li > */}
            <li className="nav-item">
              <select class="nav-item dropdown-toggle "  onChange={dropdownChangeHandler}>
                <option selected>Open this to select Catagory</option>
                <option value="1">Breakfast</option>
                <option value="2">South Indian</option>
                <option value="3">Three</option>
              </select>
            </li>
              
            

          </ul>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
</nav>
   

// {/* <select className="nav-item dropdown">
// <option className="dropdown-item">Egg</option>
// <option className="dropdown-item">Fish</option>
// <option className="dropdown-item">Vegi</option>
// </select> */}

  )
}




