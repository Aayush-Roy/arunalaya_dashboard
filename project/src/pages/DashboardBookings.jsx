
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function DashboardBookings() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const res = await axios.get("http://localhost:5000/api/bookings", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setBookings(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const updateStatus = async (id, newStatus) => {
//     try {
//       const token = localStorage.getItem("token");

//       await axios.put(
//         `http://localhost:5000/api/bookings/${id}/status`,
//         { status: newStatus },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setBookings((prev) =>
//         prev.map((b) => (b._id === id ? { ...b, status: newStatus } : b))
//       );
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="p-6 text-white">
//       <h1 className="text-3xl font-bold mb-6 tracking-wide">
//         📅 Booking Management
//       </h1>

//       <div className="rounded-xl overflow-hidden shadow-lg bg-[#0d0d0d]/70 backdrop-blur-xl border border-gray-800">
//         <table className="w-full text-left">
//           <thead className="bg-[#141414] border-b border-gray-700">
//             <tr>
//               <th className="p-4 font-semibold">User</th>
//               <th className="p-4 font-semibold">Email</th>
//               <th className="p-4 font-semibold">Service</th>
//               <th className="p-4 font-semibold">Date</th>
//               <th className="p-4 font-semibold">Time</th>
//               <th className="p-4 font-semibold">Status</th>
//               <th className="p-4 font-semibold">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {bookings.map((b, index) => (
//               <tr
//                 key={b._id}
//                 className={`border-b border-gray-800 transition-all duration-300 hover:bg-[#1a1a1a] ${
//                   index % 2 === 0 ? "bg-[#121212]" : "bg-[#101010]"
//                 }`}
//               >
//                 <td className="p-4">{b.user?.name}</td>
//                 <td className="p-4 opacity-80">{b.user?.email}</td>

//                 {/* SLOT: SERVICE */}
//                 <td className="p-4">
//                   {b.service ? (
//                     <div className="flex flex-col">
//                       <span className="font-medium">{b.service.title}</span>
//                       {b.service.price && (
//                         <span className="text-sm text-gray-400">
//                           ₹{b.service.price}
//                         </span>
//                       )}
//                     </div>
//                   ) : (
//                     <span className="text-gray-500 italic">
//                       Not Selected
//                     </span>
//                   )}
//                 </td>

//                 <td className="p-4">
//                   {new Date(b.date).toLocaleDateString()}
//                 </td>

//                 <td className="p-4">{b.timeSlot}</td>

//                 {/* STATUS */}
//                 <td className="p-4 font-semibold">
//                   {b.status === "Pending" && (
//                     <span className="text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full">
//                       Pending
//                     </span>
//                   )}
//                   {b.status === "Accepted" && (
//                     <span className="text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
//                       Accepted
//                     </span>
//                   )}
//                   {b.status === "Rejected" && (
//                     <span className="text-red-400 bg-red-400/10 px-3 py-1 rounded-full">
//                       Rejected
//                     </span>
//                   )}
//                 </td>

//                 {/* ACTION BUTTONS */}
//                 <td className="p-4 flex gap-3">
//                   {b.status === "Pending" && (
//                     <>
//                       <button
//                         onClick={() => updateStatus(b._id, "Accepted")}
//                         className="px-4 py-1.5 rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all shadow-md"
//                       >
//                         Accept
//                       </button>

//                       <button
//                         onClick={() => updateStatus(b._id, "Rejected")}
//                         className="px-4 py-1.5 rounded-lg text-white bg-red-600 hover:bg-red-700 transition-all shadow-md"
//                       >
//                         Reject
//                       </button>
//                     </>
//                   )}

//                   {b.status !== "Pending" && (
//                     <span className="text-gray-500 italic">No Action</span>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default DashboardBookings;
import React, { useEffect, useState } from "react";
import axios from "axios";

function DashboardBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "https://arunalayabackendv2-1.onrender.com/api/agents/bookings/all",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setBookings(res.data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `https://arunalayabackendv2-1.onrender.com/api/bookings/${id}/status`,
        { bookingStatus: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setBookings((prev) =>
        prev.map((b) =>
          b._id === id ? { ...b, bookingStatus: newStatus } : b
        )
      );
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 tracking-wide">
        📅 Booking Management
      </h1>

      <div className="rounded-xl overflow-hidden shadow-lg bg-[#0d0d0d]/70 backdrop-blur-xl border border-gray-800">
        <table className="w-full text-left">
          <thead className="bg-[#141414] border-b border-gray-700">
            <tr>
              <th className="p-4 font-semibold">User</th>
              <th className="p-4 font-semibold">Email</th>
              <th className="p-4 font-semibold">Service</th>
              <th className="p-4 font-semibold">Date</th>
              <th className="p-4 font-semibold">Time</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b, index) => (
              <tr
                key={b._id}
                className={`border-b border-gray-800 transition-all duration-300 hover:bg-[#1a1a1a] ${
                  index % 2 === 0 ? "bg-[#121212]" : "bg-[#101010]"
                }`}
              >
                {/* USER */}
                <td className="p-4">{b.userId?.name}</td>
                <td className="p-4 opacity-80">{b.userId?.email}</td>

                {/* SERVICE */}
                <td className="p-4">
                  <div className="flex flex-col">
                    <span className="font-medium">
                      {b.serviceId?.title || "Unknown Service"}
                    </span>
                    {b.serviceId?.price && (
                      <span className="text-sm text-gray-400">
                        ₹{b.serviceId.price}
                      </span>
                    )}
                  </div>
                </td>

                {/* DATE */}
                <td className="p-4">
                  {new Date(b.selectedDate).toLocaleDateString()}
                </td>

                {/* TIME */}
                <td className="p-4">{b.selectedTime}</td>

                {/* STATUS */}
                <td className="p-4 font-semibold">
                  {b.bookingStatus === "pending" && (
                    <span className="text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full">
                      Pending
                    </span>
                  )}
                  {b.bookingStatus === "completed" && (
                    <span className="text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                      Completed
                    </span>
                  )}
                  {b.bookingStatus === "cancelled" && (
                    <span className="text-red-400 bg-red-400/10 px-3 py-1 rounded-full">
                      Cancelled
                    </span>
                  )}
                </td>

                {/* ACTION BUTTONS */}
                <td className="p-4 flex gap-3">
                  {b.bookingStatus === "pending" && (
                    <>
                      <button
                        onClick={() => updateStatus(b._id, "completed")}
                        className="px-4 py-1.5 rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all shadow-md"
                      >
                        Mark Completed
                      </button>

                      <button
                        onClick={() => updateStatus(b._id, "cancelled")}
                        className="px-4 py-1.5 rounded-lg text-white bg-red-600 hover:bg-red-700 transition-all shadow-md"
                      >
                        Cancel
                      </button>
                    </>
                  )}

                  {b.bookingStatus !== "pending" && (
                    <span className="text-gray-500 italic">No Action</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardBookings;
