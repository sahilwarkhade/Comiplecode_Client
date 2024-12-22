import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useModal } from '../../hooks/useModal';
import { RoomModal } from '../modal/RoomModal';
import { VideoModal } from '../modal/VideoModal';
import HeroSection from  "../../assets/HeroSection.webp"

export default function Hero() {
  const roomModal = useModal();
  const videoModal = useModal();

  return (
    <>
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left animate-fade-in">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Code Together,</span>
                  <span className="block text-indigo-400">Build Together</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  A powerful collaborative code editor that brings teams together. Write, review, and ship code in real-time with your team.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button
                      onClick={roomModal.openModal}
                      className="group w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                    >
                      Start Coding
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      onClick={videoModal.openModal}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-300 bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                    >
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 pt-20 shadow-2xl">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-2/3 lg:h-2/3 opacity-80 animate-float shadow-2xl"
            src={HeroSection}
            alt="Collaborative coding"
          />
        </div>
      </div>
      <RoomModal isOpen={roomModal.isOpen} onClose={roomModal.closeModal} />
      <VideoModal isOpen={videoModal.isOpen} onClose={videoModal.closeModal} />
    </>
  );
}
