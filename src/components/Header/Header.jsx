import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = ({ logo, menuItems, buttonText, registerLink }) => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const scrollToSection = (sectionId) => {
   const element = document.getElementById(sectionId);
   if (element) {
     const headerOffset = 100;
     const elementPosition = element.getBoundingClientRect().top;
     const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

     window.scrollTo({
       top: offsetPosition,
       behavior: 'smooth',
     });
   }
 };

 const toggleMenu = () => {
   setIsMenuOpen(!isMenuOpen);
   document.body.classList.toggle('menu-open', !isMenuOpen);
 };

 return (
   <header className="fixed top-0 w-full pt-14 z-50 py-6 sm:py-8 lg:py-4 px-4 sm:px-8 lg:px-20 pt-6 sm:pt-8 lg:pt-10 bg-transparent backdrop-blur-md">
     <div className="max-w-7xl mx-auto flex items-center justify-between relative">
       <div className="flex-shrink-0">
         <NavLink to="/">
           <img src={logo} alt="Logo" className="h-16 sm:h-16 lg:h-24 w-auto" />
         </NavLink>
       </div>

       <nav className="hidden lg:flex items-center gap-8">
         <ul className="flex gap-6">
           {menuItems.map((item, index) => (
             <li key={index}>
               <button
                 onClick={() => scrollToSection(item.section)}
                 className="text-white text-base lg:text-base font-medium hover:opacity-80 transition-opacity"
               >
                 {item.title}
               </button>
             </li>
           ))}
         </ul>
         <a
           href={registerLink}
           target="_blank"
           rel="noopener noreferrer"
           className="bg-white/10 border border-white text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-medium transition-all hover:bg-white hover:text-[#006994]"
         >
           {buttonText} →
         </a>
       </nav>

       <button
         onClick={toggleMenu}
         className="lg:hidden text-white p-3 sm:p-4"
         aria-label="Menu"
       >
         {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
       </button>

       {isMenuOpen && (
         <div className="fixed inset-0 top-0 left-0 w-screen h-screen bg-black/90 z-50 flex flex-col items-center justify-center">
           <button
             onClick={toggleMenu}
             className="absolute top-8 right-8 text-white p-3 sm:p-4"
             aria-label="Kapat"
           >
             <X size={28} />
           </button>
           <nav className="flex flex-col items-center gap-8 sm:gap-10 w-full px-6 sm:px-10">
             <ul className="flex flex-col items-center gap-6 sm:gap-8 w-full">
               {menuItems.map((item, index) => (
                 <li key={index} className="w-full text-center">
                   <button
                     onClick={() => {
                       scrollToSection(item.section);
                       toggleMenu();
                     }}
                     className="text-white text-xl sm:text-2xl font-medium hover:opacity-80 transition-opacity w-full"
                   >
                     {item.title}
                   </button>
                 </li>
               ))}
             </ul>
             <a
               href={registerLink}
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-white/10 border border-white text-white px-8 py-4 sm:px-10 sm:py-5 rounded-lg font-medium transition-all hover:bg-white hover:text-[#006994] w-full max-w-xs sm:max-w-sm text-lg sm:text-xl"
             >
               {buttonText} →
             </a>
           </nav>
         </div>
       )}
     </div>
   </header>
 );
};

export default Header;