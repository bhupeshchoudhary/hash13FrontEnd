import React from 'react';
import { Program } from '../../../../types/Navbar';

export const ProgramCard: React.FC<Program> = ({ title, mentor, duration, status, type }) => (
  <div className="p-4 hover:bg-gray-50 rounded-lg transition-colors">
    <div className="flex gap-4">
      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
        <img src="/api/placeholder/64/64" alt="mentor" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-sm text-gray-600">{mentor}</p>
        <div className="flex flex-wrap gap-4 mt-2">
          <span className="text-sm text-gray-600">⏱️ {duration}</span>
          <span className="text-sm text-gray-600">📅 {status}</span>
          <span className="text-sm text-gray-600">🎥 {type}</span>
        </div>
      </div>
    </div>
  </div>
);

export const SideCategories: React.FC<{
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}> = ({ categories, selectedCategory, onCategorySelect }) => (
  <div className="w-48 bg-gray-50 p-4 space-y-2 md:block">
    {categories.map((category) => (
      <div
        key={category}
        className={`p-2 rounded-md cursor-pointer ${
          selectedCategory === category ? "bg-gray-100 font-semibold" : "hover:bg-gray-100"
        }`}
        onClick={() => onCategorySelect(category)}
      >
        {category}
      </div>
    ))}
  </div>
);

export const DropdownOverlay: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  if (!isOpen) return null;
  return (
    <div className="dropdown-overlay" />
  );
};