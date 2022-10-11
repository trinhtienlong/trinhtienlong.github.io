import {Route,Routes} from "react-router-dom"
import TrangChu from "../pages/Homepages"
import GioiThieu from "../pages/About"
import SanPham from "../pages/Product"
import TinTuc from "../pages/News"
import LienHe from "../pages/Contact"
import NotFound from "../pages/NotFound"
import Detail from "../pages/Detail"

function Main(){
    return(
        <Routes>
            <Route path='/' element={<TrangChu/>}/>
            <Route path='/gioi-thieu' element={<GioiThieu/>}/>
            <Route path='/san-pham' element={<SanPham/>}/>
            <Route path='/tin-tuc' element={<TinTuc/>}/>
            <Route path='/lien-he' element={<LienHe/>}/>
            <Route path='products/:id' element={<Detail/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    )
}

export default Main