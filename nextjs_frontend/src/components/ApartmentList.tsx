import { useState } from 'react';
import { Apartment } from '@/components/Shared/interfaces';

type ApartmentItemProps = {
    apartment: Apartment;
    onEdit: (id: number, name: string) => void;
    onDelete: (id: number) => void;
  };
  
  const ApartmentItem = ({ apartment, onEdit, onDelete }: ApartmentItemProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editName, setEditName] = useState(apartment.name);
  
    const handleUpdate = () => {
      onEdit(apartment.id, editName);
      setIsEditing(false);
    };
  
    return (
      <li className="flex items-center p-2 border-b border-gray-200">
        {isEditing ? (
          <>
            <input 
              className="flex-grow p-2 text-cyan-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text" 
              value={editName} 
              onChange={(e) => setEditName(e.target.value)} 
            />
            <button 
              className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={handleUpdate}
            >
              Save
            </button>
          </>
        ) : (
          <>
            <span className="flex-grow">{apartment.name}</span>
            <button 
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button 
              className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={() => onDelete(apartment.id)}
            >
              Delete
            </button>
          </>
        )}
      </li>
    );
  };

type ApartmentListProps = {
    apartments: Apartment[];
    onEdit: (id: number, name: string) => void;
    onDelete: (id: number) => void;
};

const ApartmentList= ({ apartments, onEdit, onDelete }: ApartmentListProps) => {
    return (
      <ul className="list-none p-0">
        {apartments.map(apartment => (
          <ApartmentItem 
            key={apartment.id} 
            apartment={apartment} 
            onEdit={onEdit} 
            onDelete={onDelete} 
          />
        ))}
      </ul>
    );
  };
export default ApartmentList;