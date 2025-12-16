import { useState } from "react";

const RescheduleModal = ({ booking, onClose }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleReschedule = () => {
    if (!date || !time) return alert("Select date & time");

    // 🔥 Backend API later
    console.log("Rescheduled", booking._id, date, time);

    alert("Booking Rescheduled");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-[#181818] p-6 rounded-xl w-[400px]">
        <h3 className="text-white text-lg font-bold mb-4">
          Reschedule Booking
        </h3>

        <input
          type="date"
          className="w-full p-2 mb-3 rounded bg-[#222] text-white"
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="text"
          placeholder="Time (eg: 3:00 PM)"
          className="w-full p-2 mb-4 rounded bg-[#222] text-white"
          onChange={(e) => setTime(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="text-gray-400">
            Cancel
          </button>
          <button
            onClick={handleReschedule}
            className="bg-green-600 px-4 py-2 rounded text-white"
          >
            Reschedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default RescheduleModal;
