"use client";
import { useState } from 'react';

type CreateApartmentProps = {
    onCreate: (name: string) => void;
  };
  
  const CreateApartment = ({ onCreate }: CreateApartmentProps) => {
    const [newApartmentName, setNewApartmentName] = useState('');
  
    const handleCreate = () => {
      if (newApartmentName.trim()) {
        onCreate(newApartmentName);
        setNewApartmentName('');
      }
    };
  
    return (
      <div className="flex mb-4">
        <input 
          className="flex-grow p-2 border border-gray-300 text-cyan-950 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text" 
          placeholder="New apartment name" 
          value={newApartmentName} 
          onChange={(e) => setNewApartmentName(e.target.value)} 
        />
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleCreate}
        >
          Create New Apartment
        </button>
      </div>
    );
  };

  export default CreateApartment;