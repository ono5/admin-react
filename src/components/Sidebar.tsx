import "./Sidebar.scss"

const Sidebar = () => {
	return (
		<>
			<div className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">
				<a href="#" className="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">GitLab Runner Admin</a>
				<div className="bottom-border pb-3">
					<h3 className="text-white text-center">D・S・T</h3>
				</div>
				<ul className="navbar-nav flex-column mt-4">
					<li className="nav-item"><a href="#" className="nav-link text-white p-3 mb-2 current"><i className="fas fa-home text-light fa-lg mr-6"></i>&nbsp;&nbsp;&nbsp;&nbsp;DASHBOARD</a></li>
					<li className="nav-item"><a href="#" className="nav-link text-white p-3 mb-2 sidebar-link"><i className="fas fa-user fa-plus fa-lg mr-3"></i>&nbsp;&nbsp;&nbsp;&nbsp;CREATE</a></li>
					<li className="nav-item"><a href="#" className="nav-link text-white p-3 mb-2 sidebar-link"><i className="fas fa-user text-light fa-lg mr-3"></i>&nbsp;&nbsp;&nbsp;&nbsp;PROFILE</a></li>
					<li className="nav-item"><a href="#" className="nav-link text-white p-3 mb-2 sidebar-link"><i className="fas fa-wrench text-light fa-lg mr-3"></i>&nbsp;&nbsp;&nbsp;&nbsp;SETTINGS</a></li>
					<li className="nav-item"><a href="#" className="nav-link text-white p-3 mb-2 sidebar-link"><i className="fas fa-file-alt text-light fa-lg mr-3"></i>&nbsp;&nbsp;&nbsp;&nbsp;DOCUMENTATION</a></li>
				</ul>
			</div>
		</>
	)
}

export default Sidebar
