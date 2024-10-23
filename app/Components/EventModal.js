import React, { useState, useEffect } from "react";
import Avatar from "@/app/assets/avatar.png";
import Avatar2 from "@/app/assets/avatar2.png";
import Avatar3 from "@/app/assets/avatar3.png";
import Image from "next/image";

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
    <div className="px-4 lg:mx-0 fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-full max-w-md dark:bg-[#484554] dark:text-[#FCF7FF]">
        <div
          className={`flex justify-between p-6 items-center ${
            isEditing ? "mb-4" : ""
          }`}
        >
          <h2 className="text-xl  font-bold">
            {isEditing ? "Edit Event" : event.name}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 border dark:bg-[#ADA9BB] text-[15px] dark:border-[#484554] border-[#E2E8F0] rounded-full w-6"
          >
            X
          </button>
        </div>

        <p className=" -mt-6 ml-6 font-inter text-sm font-normal leading-5 text-left">
          {" "}
          {isEditing ? "" : event.date}
        </p>

        {!isEditing && (
          <div className="flex ml-6 mt-6">
            {" "}
            <Image src={Avatar} alt="Logo" className="w-[32px] z-50 h-8" />
            <Image
              src={Avatar2}
              alt="Logo"
              className="w-[32px]z-5 z-10 h-8  -ml-4"
            />
            <Image src={Avatar3} alt="Logo" className="w-[32px] h-8 -ml-4" />
          </div>
        )}

        {/* Conditionally render inputs for editing mode */}
        {isEditing ? (
          <div className="mx-6">
            <div className="mb-4 ">
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
            <div className="mb-4 ">
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
          </div>
        ) : (
          <div className="mx-6 font-inter text-sm font-normal leading-5 text-left">
            {/* Display event details when not in editing mode */}

            <p>1 Guest Speaker: {event.speaker}</p>
            <p>300 Attendees</p>
          </div>
        )}

        <div className="mt-4 flex justify-end space-x-2 dark:bg-[#ADA9BB] bg-[#F8FAFC] p-[24px] ">
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
              className="px-4 py-2 bg-white text-[#334155] rounded border border-[#E2E8F0]"
            >
              Edit
            </button>
          )}
          <button
            onClick={onDelete}
            className="px-4 py-2 bg-[#F43F5E] text-white rounded"
          >
            Delete
          </button>
          <button
            onClick={onMarkAsCompleted}
            className="px-4 py-2 bg-[#8576FF] text-white rounded"
          >
            Mark as Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
