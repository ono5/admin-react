import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/js/brands'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/fontawesome'

import Sidebar from './Sidebar'
// import './Nav.scss'

const Nav = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-light">
		<button className="navbar-toggler ml-auto mb-2 bg-light" type="button" data-toggle="collapse" data-target="#myNavbar">
		  <span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="myNavbar">
		  <div className="container-fluid">
			<div className="row">
			  {/* <!-- sidebar --> */}
			  {/* <!-- end of sidebar --> */}
			  <Sidebar />
			  {/* <!-- top-nav --> */}
			  <div className="col-lg-9">

			  </div>
			  {/* <!-- end of top-nav --> */}
			</div>
		  </div>
		</div>
	  </nav>
	)
}

export default Nav
