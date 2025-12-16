import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api";

const FrontDeskAssignBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState("");

  const token = JSON.parse(localStorage.getItem("authToken")) || "";

  useEffect(() => {
    fetchPendingBookings();
    fetchAgents();
  }, []);

  const fetchPendingBookings = async () => {
    const res = await axios.get(
      `${API}/agents/bookings/all?status=pending`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setBookings(res.data);
  };

  const fetchAgents = async () => {
    const res = await axios.get(`${API}/agents/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setAgents(res.data);
  };

  const assignBooking = async (bookingId) => {
    if (!selectedAgent) {
      alert("Select an agent first");
      return;
    }

    await axios.put(
      `${API}/agents/bookings/${bookingId}/status`,
      { bookingStatus: "confirmed" },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Booking assigned successfully");
    fetchPendingBookings();
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-6">Assign Bookings</h2>

      {bookings.map((b) => (
        <div
          key={b._id}
          className="bg-[#1f1f1f] p-5 rounded-xl mb-4"
        >
          <p className="font-semibold">{b.serviceId?.title}</p>
          <p className="text-sm text-gray-400">
            {b.selectedDate} • {b.selectedTime}
          </p>

          <div className="flex gap-3 mt-4">
            <select
              className="bg-[#222] p-2 rounded text-white"
              onChange={(e) => setSelectedAgent(e.target.value)}
            >
              <option value="">Select Agent</option>
              {agents.map((a) => (
                <option key={a._id} value={a._id}>
                  {a.name} ({a.specialization})
                </option>
              ))}
            </select>

            <button
              onClick={() => assignBooking(b._id)}
              className="bg-blue-600 px-4 py-2 rounded"
            >
              Assign
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FrontDeskAssignBookings;
