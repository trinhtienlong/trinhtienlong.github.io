import { Link, Outlet } from "react-router-dom"

function Layout(){
    return(
        <>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <Link to='/' className="logo">
                                    <img src="assets/images/logo.png" alt=""></img>
                                </Link>

                                <div className="search-input">
                                <form id="search" action="#">
                                    <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" />
                                    <i className="fa fa-search"></i>
                                </form>
                                </div>

                                <ul className="nav">
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to="brower">Browse</Link></li>
                                    <li><Link to="details.html">Details</Link></li>
                                    <li><Link to="streams.html">Streams</Link></li>
                                    <li><Link to='profile'>Profile <img src="assets/images/profile-header.jpg" alt=""></img></Link></li>
                                </ul>   
                                <Link className='menu-trigger'>
                                    <span>Menu</span>
                                </Link>

                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <Outlet/>

            <footer>
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p>Copyright © 2036 <Link to="#">Cyborg Gaming</Link> Company. All rights reserved. </p>
                    </div>
                </div>
                </div>
            </footer>
        </>
    )
}

export default Layout