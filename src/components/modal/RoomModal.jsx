import React, { useState } from 'react';
import { Modal } from './Modal';
import Maintenance from '../Maintenance';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {v4 as uuidv4} from 'uuid';

export function RoomModal({ isOpen, onClose }) {
  const [username, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');
  // const [maintenance, setMaintenance]=useState(false);
  const navigate = useNavigate();

  const handleCreateRoom = (e) => {
        e.preventDefault();
        const id = uuidv4();
        setRoomId(id);
        toast.success('Created a new room');
  }

  const handleJoinRoom = () => {
      if (!roomId || !username) {
          toast.error('Please enter a room id and username');
          return;
      }
      navigate(`/editor/${roomId}`, {
          state: {
              username,
          }
      })
      onClose()
  }

  const handleInputEnter = (e) => {
      if (e.code === 'Enter') {
          joinRoom();
      } 
  }
  // if(maintenance){
  //     return(
  //         <Maintenance/>
  //     )
  // }
  // const handleCreateRoom = (e) => {
  //   if (!username.trim()) {
  //     alert('Please enter a username');
  //     return;
  //   }
  //   e.preventDefault();
  //   const id = uuidv4();
  //   setRoomId(id);
  //   toast.success('Created a new room');
    
  //   console.log('Creating room with username:', username);
  //   onClose();
  // };

  // const handleJoinRoom = () => {
  //   if (!username.trim() || !roomId.trim()) {
  //     alert('Please enter both username and room ID');
  //     return;
  //   }
  //   if (!roomId || !username) {
  //       toast.error('Please enter a room id and username');
  //       return;
  //   }
  //   navigate(`/editor/${roomId}`, {
  //       state: {
  //           username,
  //       }
  //   })
  //   console.log('Joining room:', roomId, 'with username:', username);
  //   onClose();
  // };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white text-center">Join Collaboration</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your username"
              autocomplete="off"
            />
          </div>
          
          <div>
            <label htmlFor="roomId" className="block text-sm font-medium text-gray-300 mb-1">
              Room ID
            </label>
            <input
              type="text"
              id="roomId"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter room ID to join no need to enter if you are creating new one"
              autocomplete="off"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={handleCreateRoom}
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
          >
            Create Room
          </button>
          <button
            onClick={handleJoinRoom}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors duration-200"
          >
            Join Room
          </button>
        </div>
      </div>
    </Modal>
  );
}
