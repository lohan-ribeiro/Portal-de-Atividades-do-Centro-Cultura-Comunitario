import {Route, Routes, BrowserRouter} from "react-router-dom"

// ROTAS PÚBLICAS
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import HomePage from '../pages/homepage/HomePage'
import Login from "../pages/admin/LoginAdmin"
import NotFound from '../pages/NotFound'

// ROTAS PRIVADAS
import Admin from "../pages/admin/Admin"

// PROTEÇÃO PARA ROTAS PRIVADAS
import PrivateRoutes from "./PrivateRoutes"

// Layouts personalizadas
import LayoutEmpty from "../pages/layouts/LayoutEmpty"
import LayoutOnlyFooter from "../pages/layouts/LayoutOnlyFooter"
import LayouFull from "../pages/layouts/LayoutFull"

function AppRoutes() {
 
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    {/* rotas públicas */}
                    <Route element={<LayouFull />}>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/contact" element={<Contact />}/>
                        <Route path="/login" element={<Login />}/>
                    </Route>

                    <Route element={<LayoutOnlyFooter />}>
                    </Route>

                    {/* rotas privadas */}
                    <Route element={<PrivateRoutes/>}>
                        <Route element={<LayouFull />}>
                            <Route path="/admin" element={<Admin />}/>
                        </Route>
                    </Route>

                    {/* rota nao encontrada */}
                    <Route element={<LayoutEmpty />}>
                        <Route path="*" element={<NotFound />}/>
                    </Route>

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes