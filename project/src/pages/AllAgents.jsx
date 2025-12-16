import { useEffect, useState } from "react";
import axios from "axios";
import { Search, Users } from "lucide-react";
import { Link } from "react-router-dom";
export default function AllAgents() {
  const [agents, setAgents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchAgents = async () => {
    try {
      const res = await axios.get(
        // "http://localhost:5000/api/agents/all"
        "https://arunalayabackendv2-1.onrender.com/api/agents/all"
      );
      console.log(res);
      setAgents(res.data.data || []);
    } catch (error) {
      console.error("Error fetching agents:", error);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  const filteredAgents = agents.filter((agent) =>
    agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">All Agents</h1>
        <p className="text-gray-400 text-sm">View all registered physiotherapists</p>
      </div>

      {/* Search */}
      <div className="flex items-center bg-[#1e1e1e]/70 border border-gray-800 rounded-2xl p-4 backdrop-blur-md">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search by name, email or specialization..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white focus:border-[#f88310] outline-none transition-all"
          />
        </div>
      </div>

      {/* Counts */}
      <div className="flex justify-between text-gray-400 text-sm">
        <p>
          Showing <span className="text-[#f88310]">{filteredAgents.length}</span> of{" "}
          {agents.length} agents
        </p>
      </div>

      {/* Agent Cards */}
      {filteredAgents.length === 0 ? (
        <div className="text-center bg-[#1e1e1e]/70 backdrop-blur-md border border-gray-800 rounded-2xl py-16 shadow-inner">
          <p className="text-gray-400 mb-2 text-lg">No agents found</p>
          <p className="text-gray-500 text-sm">Try adjusting your search</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredAgents.map((agent) => (
            <div
              key={agent._id}
              className="bg-[#1e1e1e]/70 border border-gray-800 rounded-2xl p-6 backdrop-blur-lg shadow-xl hover:shadow-[#f8831044] transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f88310] to-[#ffbb55] flex items-center justify-center text-white text-xl font-bold">
                  {agent.name[0]}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">{agent.name}</h2>
                  <p className="text-gray-400 text-sm">{agent.specialization}</p>
                </div>
              </div>

              <div className="text-gray-300 text-sm space-y-1">
                <p><span className="text-gray-500">Email:</span> {agent.email}</p>
                <p><span className="text-gray-500">Phone:</span> {agent.phone}</p>
              </div>
              {/* <Link to={`/agents/${agent._id}`} className="block text-center">
              
              <button className="bg-[#f88310] text-white px-4 py-2 rounded-md mt-6">Details</button>
              </Link> */}
              <Link to={`/agents/${agent._id}`}>
  <button className="bg-[#f88310] text-white px-4 py-2 rounded-md mt-6">
    Details
  </button>
</Link>

            </div>
          ))}
          
        </div>
      )}
    </div>
  );
}
