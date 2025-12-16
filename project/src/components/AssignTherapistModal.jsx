// import { useState } from "react";

// const AssignTherapistModal = ({ booking, agents, onClose }) => {
//   const [selectedAgent, setSelectedAgent] = useState("");

//   const handleAssign = () => {
//     if (!selectedAgent) return alert("Select therapist");

//     // 🔥 Backend API later
//     console.log("Assigned", selectedAgent, "to", booking._id);

//     alert("Therapist Assigned");
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
//       <div className="bg-[#181818] p-6 rounded-xl w-[400px]">
//         <h3 className="text-white text-lg font-bold mb-4">
//           Assign Therapist
//         </h3>

//         <select
//           className="w-full p-2 rounded bg-[#222] text-white mb-4"
//           onChange={(e) => setSelectedAgent(e.target.value)}
//         >
//           <option value="">Select Therapist</option>
//           {agents.map((a) => (
//             <option key={a._id} value={a._id}>
//               {a.name} — {a.specialization}
//             </option>
//           ))}
//         </select>

//         <div className="flex justify-end gap-3">
//           <button onClick={onClose} className="text-gray-400">
//             Cancel
//           </button>
//           <button
//             onClick={handleAssign}
//             className="bg-blue-600 px-4 py-2 rounded text-white"
//           >
//             Assign
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AssignTherapistModal;
import { useState } from "react";

const AssignTherapistModal = ({ agents, onClose }) => {
  const [selectedAgent, setSelectedAgent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAssign = async () => {
    if (!selectedAgent) return alert("Select therapist");

    try {
      setLoading(true);

      const res = await fetch(
        "https://arunalayabackendv2-1.onrender.com/api/bookings/assign-bulk",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("agentToken")}`,
          },
          body: JSON.stringify({
            agentId: selectedAgent,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      alert(`✅ ${data.assignedCount} bookings assigned`);
      onClose();
    } catch (err) {
      alert(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#181818] p-6 rounded-xl w-[400px]">
        <h3 className="text-white text-lg font-bold mb-4">
          Assign All Pending Bookings
        </h3>

        <select
          className="w-full p-2 rounded bg-[#222] text-white mb-4"
          value={selectedAgent}
          onChange={(e) => setSelectedAgent(e.target.value)}
        >
          <option value="">Select Therapist</option>
          {agents.map((a) => (
            <option key={a._id} value={a._id}>
              {a.name} — {a.specialization}
            </option>
          ))}
        </select>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="text-gray-400">
            Cancel
          </button>

          <button
            onClick={handleAssign}
            disabled={loading}
            className="bg-blue-600 px-4 py-2 rounded text-white disabled:opacity-50"
          >
            {loading ? "Assigning..." : "Assign All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignTherapistModal;
