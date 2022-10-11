import { Link } from "react-router-dom"

function Header(){
    return(
        <nav className="App">
            <li>
                <Link to='/'>Trang chủ </Link>
                <Link to='/gioi-thieu'>Giới thiệu </Link>
                <Link to='/san-pham'>Sản phẩm </Link>
                <Link to='/tin-tuc'>Tin tức </Link>
                <Link to='/lien-he'>Liên hệ </Link> 
            </li>
        </nav>
    )
}

export default Header