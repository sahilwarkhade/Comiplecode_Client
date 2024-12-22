import React from 'react';
import { Modal } from './Modal';

export function VideoModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="aspect-video">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="Product Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Modal>
  );
}
