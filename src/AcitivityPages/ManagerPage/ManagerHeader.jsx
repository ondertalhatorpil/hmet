// ManagerHeader.jsx
import React from 'react'
import Logo from '../../pages/HomePages/assets//images/Yönetici Logo.png'
import Header from '../../components/Header/Header'

const ManagerHeader = () => {
    const customMenuItems = [
        {
            title: 'Hocalarımız',
            section: 'managers'
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
        registerLink="https://form.onder.org.tr/app/form?id=wsGmtA" 
      />
    )
}

export default ManagerHeader