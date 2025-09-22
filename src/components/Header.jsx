import React, { useState } from 'react';
import grafity from '../assets/imgs/grafity.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='px-4 py-4 md:px-8 md:py-6 lg:px-[60px] lg:py-[40px] flex justify-between items-center w-full'>

      {/* Логотип */}
      <div>
        <img src={grafity} alt="Gravity Team Logo" className="h-8 md:h-10" />
      </div>

      {/* Меню для десктопов (скрыто на маленьких экранах) */}
      <div className='hidden lg:flex items-center gap-5 text-white'>
        <ul className='flex items-center gap-5'>
          <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
          <select name="services" id="services" className='outline-none bg-transparent text-white border-none cursor-pointer'>
            <option value="" className="bg-[#1c1c2e] text-white">Our Services</option>
          </select>
          <li><a href="#work" className="hover:text-gray-300">Work with Us</a></li>
          <li><a href="#blog" className="hover:text-gray-300">Blog</a></li>
        </ul>
      </div>

      {/* Кнопка "Get in touch" для десктопов (скрыта на маленьких экранах) */}
      <div className='hidden lg:flex items-center gap-4'>
        <div className='leander'></div>
        <a href="#contact" className='text-white px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors'>
          GET IN TOUCH
        </a>
      </div>

      {/* Кнопка для мобильного меню */}
      <div className='lg:hidden'>
        <button onClick={() => setIsOpen(!isOpen)} className='text-white p-2 focus:outline-none'>
          {isOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Выпадающее меню для мобильных */}
      {isOpen && (
        <div className='absolute top-[68px] left-0 w-full bg-[#1c1c2e] lg:hidden z-10 p-4'>
          <ul className='flex flex-col items-center gap-4 text-white'>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About Us</a></li>
            <select name="services-mobile" id="services-mobile" className='outline-none bg-transparent text-white border-none cursor-pointer w-full text-center'>
              <option value="" className="bg-[#1c1c2e] text-white">Our Services</option>
            </select>
            <li><a href="#work" onClick={() => setIsOpen(false)}>Work with Us</a></li>
            <li><a href="#blog" onClick={() => setIsOpen(false)}>Blog</a></li>
            <a href="#contact" className='text-white px-4 py-2 border border-white rounded-full mt-4'>
              GET IN TOUCH
            </a>
          </ul>
        </div>
      )}
    </div>
  );
}