import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";


import HomePages from './pages/HomePages/index'
import Kvkk from './pages/HomePages/kvkk'
import OgretmenCertificate from './AcitivityPages/GenetareCertificate/OgretmenCertificate'
import YoneticiCertificate from './AcitivityPages/GenetareCertificate/YoneticiCertificate'

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
                <Route path="/ogretmen-sertifika-olustur" element={<OgretmenCertificate />}/>
                <Route path="/yonetici-sertifika-olustur" element={<YoneticiCertificate />}/>
                <Route path="/kvkk" element={<Kvkk />}/>
            </Routes>
        </BrowserRouter>
        </>
    )   
}

export default Router