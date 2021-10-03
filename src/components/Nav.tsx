import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/js/brands'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/fontawesome'

import './Nav.scss'

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
			  <div className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">
				<a href="#" className="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">CodeAndCreate</a>
				<div className="bottom-border pb-3">
				  <a href="#" className="text-white">Home</a>
				</div>
				<ul className="navbar-nav flex-column">
					<li className="nav-item">
						<a href="#" className="nav-link">
							<i className="fas fa-home"></i>
						</a>
					</li>
				</ul>
			  </div>
			  {/* <!-- end of sidebar --> */}

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
