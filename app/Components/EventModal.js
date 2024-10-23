import React, { useState } from 'react';

const EventModal = ({ event, isOpen, onClose, onEdit, onDelete, onMarkAsCompleted }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{event.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">X</button>
        </div>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Speaker:</strong> {event.speaker}</p>
        <p><strong>Status:</strong> {event.status}</p>
        <div className="mt-4 flex justify-end space-x-2">
          <button onClick={onEdit} className="px-4 py-2 bg-blue-500 text-white rounded">Edit</button>
          <button onClick={onDelete} className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
          <button onClick={onMarkAsCompleted} className="px-4 py-2 bg-purple-500 text-white rounded">Mark as completed</button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
