import {Route, Routes, BrowserRouter} from "react-router-dom"

// ROTAS PÚBLICAS
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import HomePage from '../pages/home/Home'
import Login from "../pages/admin/LoginAdmin"
import NotFound from '../pages/NotFound'

// ROTAS PRIVADAS
import Admin from "../pages/admin/Admin"
import CreateActivity from "../pages/admin/CreateActivity"
import EditActivity from "../pages/admin/EditActivity"

// PROTEÇÃO PARA ROTAS PRIVADAS
import PrivateRoutes from "./PrivateRoutes"

// LAYOUTS PERSONALIZADOS
import LayoutEmpty from "../pages/layouts/LayoutEmpty"
import LayoutOnlyFooter from "../pages/layouts/LayoutOnlyFooter"
import LayouFull from "../pages/layouts/LayoutFull"
import AdminLayout from "../pages/layouts/AdminLayout"

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
                            <Route path="/admin" element={<AdminLayout />}>
                                <Route index element={<Admin />} />
                                <Route path="criar-atividade" element={<CreateActivity />}/>
                                <Route path="editar-atividade" element={<EditActivity />}/>
                            </Route>
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