import React from 'react';
import { FaPhoneVolume, FaMapLocationDot, FaFacebook } from "react-icons/fa6";
import { IoMailUnread, IoLogoWhatsapp } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";

import './Contact.css'

const Contact = ({
    title = "İLETİŞİM",
    description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    contactInfo = {
        phone: "0 (212) 521 19 58",
        email: "onder@onder.org.tr",
        address: "Akşemsettin Mh. Şair Fuzuli Sk. No: 22 Fatih – İstanbul",
    },
    mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d28.944230!3d41.015205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzU0LjciTiAyOMKwNTYnMzkuMiJF!5e0!3m2!1str!2str!4v1703436000000!5m2!1str!2str",
    socialLinks = {
        instagram: "#",
        facebook: "#",
        whatsapp: "#"
    },
    boxTitle = "İletişim",
    boxDescription = "Bize buradan ulaşabilirsiniz"
}) => {
    return (
        <div className='contact-container'>
            <div className='contact-inner-container'>
                <h1>{title}</h1>
                <p>{description}</p>

                <div className='contact-box'>
                    <div className='contact-info-section'>
                        <h3 className='contact-box-title'>{boxTitle}</h3>
                        <p className='contact-box-desc'>{boxDescription}</p>

                        <div className='contact-list'>
                            {[
                                { icon: <FaPhoneVolume />, text: contactInfo.phone },
                                { icon: <IoMailUnread />, text: contactInfo.email },
                                { icon: <FaMapLocationDot />, text: contactInfo.address }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className='contact-list-item'
                                    style={{ '--index': index }}
                                >
                                    {React.cloneElement(item.icon, { className: 'contact-icon' })}
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className='social-media-icons'>
                            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                                <AiFillInstagram className="social-icon" />
                            </a>
                            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="social-icon" />
                            </a>
                            <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                                <IoLogoWhatsapp className="social-icon" />
                            </a>
                        </div>
                    </div>

                    <div className='contact-map'>
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src={mapUrl}
                            style={{ borderRadius: '12px' }}
                            title="Location Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;