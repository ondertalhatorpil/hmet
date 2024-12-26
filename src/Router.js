import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";


import HomePages from './pages/HomePages/index'
import Kvkk from './pages/HomePages/kvkk'

import TeacherPage from './AcitivityPages/TeacherPage'
import ManagerPage from './AcitivityPages/ManagerPage'






const Router = () => {

    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePages />} />
                <Route path="/yönetici-akademisi" element={<ManagerPage />}/>
                <Route path="/ögretmen-akademisi" element={<TeacherPage />}/>
                <Route path="/kvkk" element={<Kvkk />}/>
            </Routes>
        </BrowserRouter>
        </>
    )   
}

export default Router