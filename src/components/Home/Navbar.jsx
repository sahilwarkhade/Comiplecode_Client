import React, { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';
import { useModal } from '../../hooks/useModal';
import { RoomModal } from '../modal/RoomModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const roomModal = useModal();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-200 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center animate-slide-in">
              <Code2 className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">CompileCode</span>
            </div>
            
            <div className="hidden sm:flex sm:items-center sm:space-x-8 animate-fade-in">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-200">Features</a>
              {/* <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-200">Pricing</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About</a> */}
              <button
                onClick={roomModal.openModal}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition-colors duration-200"
              >
                Get Started
              </button>
            </div>

            <div className="sm:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm">
            <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200">Features</a>
            {/* <a href="#pricing" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200">Pricing</a>
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200">About</a> */}
            <button
              onClick={roomModal.openModal}
              className="w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 bg-indigo-600 rounded-md"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
      <RoomModal isOpen={roomModal.isOpen} onClose={roomModal.closeModal} />
    </>
  );
}