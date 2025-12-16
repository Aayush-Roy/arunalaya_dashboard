
import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";
import { useParams } from "react-router-dom";

export default function AgentDetails({ onBack }) {
  const { agentId } = useParams();

  const [agent, setAgent] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [completedEarnings, setCompletedEarnings] = useState(0);
  const [pendingEarnings, setPendingEarnings] = useState(0);

  const fetchAgent = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/agents/all"
    );
    const found = res.data.data.find((a) => a._id === agentId);
    setAgent(found);
  };

  const fetchBookings = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/agents/bookings",
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MmQ2MDg3Yjc2MjMwOThkOGUzMzU1MSIsImlhdCI6MTc2NDY3MDI5NiwiZXhwIjoxNzY3MjYyMjk2fQ.x1ueJA_js4Zev7Qnc4OQn5OxQp74my4QRhMCNp69GLM`,
        },
      }
    );

    const allBookings = res.data.data;

    const filtered = allBookings.filter(
      (b) => b.agentId === agentId || b.agentId?._id === agentId
    );

    setBookings(filtered);

    // 🚀 Earnings Calculation
    const completed = filtered
  .filter(
    (b) => b.bookingStatus === "completed" && b.paymentStatus === "paid"
  )
  .reduce((sum, b) => sum + (b.finalBillAmount || 0), 0);
  console.log(completed)
const pending = filtered
  .filter((b) => b.bookingStatus !== "completed")
  .reduce((sum, b) => sum + (b.finalBillAmount || 0), 0);

    
    setCompletedEarnings(completed);
    setPendingEarnings(pending);
  };
  
  useEffect(() => {
    if (agentId) {
      fetchAgent();
      fetchBookings();
    }
  }, [agentId]);

  if (!agent) return <p className="text-gray-400">Loading...</p>;

  return (
    <div className="space-y-10 animate-fadeIn">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-300 hover:text-white transition"
      >
        <ArrowLeft /> Back
      </button>

      {/* Agent Profile Section */}
      <div className="bg-[#1e1e1e]/70 border border-gray-800 rounded-2xl p-8 backdrop-blur-md shadow-xl">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#f88310] to-[#ffbb55] flex items-center justify-center text-white text-3xl font-bold">
            {agent.name[0]}
          </div>

          <div>
            <h1 className="text-3xl font-semibold text-white">{agent.name}</h1>
            <p className="text-gray-400">{agent.specialization}</p>

            <div className="text-gray-300 mt-2 text-sm space-y-1">
              <p><span className="text-gray-500">Email:</span> {agent.email}</p>
              <p><span className="text-gray-500">Phone:</span> {agent.phone}</p>
            </div>
          </div>
        </div>

        {/* ➤ Stat Boxes: Total bookings, Completed Earnings, Pending Earnings */}
        <div className="mt-6 grid grid-cols-3 gap-6">

          {/* Total Bookings */}
          <div className="bg-[#2a2a2a] px-6 py-4 rounded-xl border border-gray-700 text-center">
            <h2 className="text-2xl text-[#f88310] font-bold">{bookings.length}</h2>
            <p className="text-gray-400 text-sm">Total Bookings</p>
          </div>

          {/* Completed Earnings */}
          <div className="bg-[#2a2a2a] px-6 py-4 rounded-xl border border-gray-700 text-center">
            <h2 className="text-2xl text-green-400 font-bold">₹{completedEarnings}</h2>
            <p className="text-gray-400 text-sm">Completed Earnings</p>
          </div>

          {/* Pending Earnings */}
          <div className="bg-[#2a2a2a] px-6 py-4 rounded-xl border border-gray-700 text-center">
            <h2 className="text-2xl text-yellow-400 font-bold">₹{pendingEarnings}</h2>
            <p className="text-gray-400 text-sm">Pending Earnings</p>
          </div>

        </div>
      </div>

      {/* BOOKINGS LIST */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">
          Bookings by {agent.name}
        </h2>

        {bookings.length === 0 ? (
          <div className="bg-[#1e1e1e]/70 border border-gray-800 p-12 rounded-2xl text-center text-gray-400">
            No bookings found for this agent
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bookings.map((b) => (
              <div
                key={b._id}
                className="bg-[#1e1e1e]/70 border border-gray-800 rounded-2xl p-6 shadow-xl backdrop-blur-md hover:-translate-y-1 transition-all"
              >
                <img
                  src={b.serviceId?.imageUrl}
                  alt="service"
                  className="w-full h-36 object-cover rounded-xl mb-4"
                />

                <h3 className="text-xl font-semibold text-white">{b.serviceId?.title}</h3>

                <p className="text-gray-400 text-sm mt-1">
                  {b.userId?.name} • {b.userId?.phone}
                </p>

                <div className="space-y-2 mt-4 text-gray-300 text-sm">
                  <p className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#f88310]" />
                    {b.selectedDate}
                  </p>

                  <p className="flex items-center gap-2">
                    <Clock size={16} className="text-[#f88310]" />
                    {b.selectedTime}
                  </p>

                  <p className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#f88310]" />
                    {b.userAddress}
                  </p>
                </div>

                <div className="mt-4">
                  <span
                    className={`px-3 py-1 rounded-lg text-sm ${
                      b.bookingStatus === "completed"
                        ? "bg-green-600/30 text-green-400"
                        : b.bookingStatus === "confirmed"
                        ? "bg-blue-600/30 text-blue-400"
                        : "bg-yellow-600/30 text-yellow-400"
                    }`}
                  >
                    {b.bookingStatus.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
