import React from 'react'

export const Navbar = () => {
	return (
		// <!-- Navbar -->
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			{/* <!-- Container wrapper --> */}
			<div className="container-fluid">
				{/* <!-- Toggle button --> */}
				<button
					className="navbar-toggler"
					type="button"
					data-mdb-toggle="collapse"
					data-mdb-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<i className="fas fa-bars"></i>
				</button>
				{/* <!-- Collapsible wrapper --> */}
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					{/* <!-- Navbar brand --> */}
					<a className="navbar-brand mt-2 mt-lg-0" href="#">
						<img
							src="https://static.thenounproject.com/png/164595-200.png"
							height="40"
							alt="MDB Logo"
							loading="lazy"
						/>
					</a>
					{/* <!-- Left links --> */}
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link" href="#">Dashboard</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Team</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Book a Charter</a>
						</li>
						<li className="nav-item">
							{/* <a className="btn btn-outline-dark btn-sm rounded-1" href="#" role="button">Sign Up</a> */}
						</li>
					</ul>
					{/* <!-- Left links --> */}
				</div>
				{/* <!-- Collapsible wrapper --> */}

				{/* <!-- Right elements --> */}
				<div className="d-flex align-items-center">
					{/* <!-- Icon --> */}
					<a className="btn btn-dark btn-sm rounded-1" href="#" role="button">Sign Up</a>
					<a className="text-reset me-3" href="#">
						{/* <i class="fa-solid fa-right-to-bracket"></i> */}
					</a>

					{/* <!-- Notifications --> */}
					<div className="dropdown">
						<a
							className="text-reset me-3 dropdown-toggle hidden-arrow"
							href="#"
							id="navbarDropdownMenuLink"
							role="button"
							data-mdb-toggle="dropdown"
							aria-expanded="false"
						>
							<i className="fas fa-bell"></i>
							<span className="badge rounded-pill badge-notification bg-danger">1</span>
						</a>
						<ul
							className="dropdown-menu dropdown-menu-end"
							aria-labelledby="navbarDropdownMenuLink"
						>
							<li>
								<a className="dropdown-item" href="#">Some news</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">Another news</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">Something else here</a>
							</li>
						</ul>
					</div>
					{/* <!-- Avatar --> */}
					<div className="dropdown">
						<a
							className="dropdown-toggle d-flex align-items-center hidden-arrow"
							href="#"
							id="navbarDropdownMenuAvatar"
							role="button"
							data-mdb-toggle="dropdown"
							aria-expanded="false"
						>
							<img
								src="https://static.thenounproject.com/png/4314581-200.png"
								className="rounded-circle"
								height="25"
								alt="Black and White Portrait of a Man"
								loading="lazy"
							/>
						</a>
						<ul
							className="dropdown-menu dropdown-menu-end"
							aria-labelledby="navbarDropdownMenuAvatar"
						>
							<li>
								<a className="dropdown-item" href="#">My profile</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">Settings</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">Logout</a>
							</li>
						</ul>
					</div>
				</div>
				{/* <!-- Right elements --> */}
			</div>
			{/* <!-- Container wrapper --> */}
		</nav>
		// <!-- Navbar -->
	);
};