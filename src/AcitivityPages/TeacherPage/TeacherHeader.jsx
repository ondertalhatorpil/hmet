// TeacherHeader.jsx
import React from 'react'
import Logo from '../../pages/HomePages/assets//images//Öğretmen Logo.png'
import Header from '../../components/Header/Header'

const TeacherHeader = () => {
    const customMenuItems = [
        {
            title: 'Hocalarımız',
            section: 'teachers' 
        },
        {
            title: 'Seminerler',
            section: 'seminar'
        }
    ];

    return (
        <Header
      logo={Logo}
      menuItems={customMenuItems}
      buttonText="KAYIT OL"
      registerLink="https://form.onder.org.tr/app/form?id=pURS7Q" 
    />
    )
}

export default TeacherHeader