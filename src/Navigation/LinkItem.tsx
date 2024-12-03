import React from 'react';
import { BsDisplay } from 'react-icons/bs';
import { GiFlexibleLamp } from 'react-icons/gi';

interface LinkItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
}

const LinkItem: React.FC<LinkItemProps> = ({ icon, label, isActive }) => {
  return (
    <div
      className={`flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 ${
        isActive ? 'bg-base-100' : ''
      } cursor-pointer`}
    >
      <img src={icon} alt={label} className="w-9 h-9 object-contain invert" />
      <h1 className="text-white text-sm font-medium">{label}</h1>
    </div>
  );
};

export default LinkItem;
