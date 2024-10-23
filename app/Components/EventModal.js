import React, { useState, useEffect } from "react";

const EventModal = ({
  onSave,
  event,
  isOpen,
  onClose,
  onEdit,
  onDelete,
  onMarkAsCompleted,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEvent, setEditedEvent] = useState(event);

  useEffect(() => {
    setEditedEvent(event); // Update the edited event when the modal opens with the selected event
  }, [event]);

  if (!isOpen) return null;

  const handleEditClick = () => {
    setIsEditing(true); // Enter editing mode
  };

  const handleSaveClick = () => {
    onSave(editedEvent); // Save the updated event details
    setIsEditing(false); // Exit editing mode after saving
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEvent((prev) => ({ ...prev, [name]: value })); // Update the edited event fields
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {isEditing ? "Edit Event" : event.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>

        {/* Conditionally render inputs for editing mode */}
        {isEditing ? (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={editedEvent.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={editedEvent.date}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Speaker
              </label>
              <input
                type="text"
                name="speaker"
                value={editedEvent.speaker}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Status
              </label>
              <select
                name="status"
                value={editedEvent.status}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              >
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </>
        ) : (
          <>
            {/* Display event details when not in editing mode */}
            <p>
              <strong>Date:</strong> {event.date}
            </p>
            <p>
              <strong>Speaker:</strong> {event.speaker}
            </p>
            <p>
              <strong>Status:</strong> {event.status}
            </p>
          </>
        )}

        <div className="mt-4 flex justify-end space-x-2">
          {/* Conditionally render Edit/Save button */}
          {isEditing ? (
            <button
              onClick={handleSaveClick}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleEditClick}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Edit
            </button>
          )}
          <button
            onClick={onDelete}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Delete
          </button>
          <button
            onClick={onMarkAsCompleted}
            className="px-4 py-2 bg-purple-500 text-white rounded"
          >
            Mark as Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
