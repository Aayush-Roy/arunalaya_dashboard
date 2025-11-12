
// // import { Package, DollarSign, Clock, TrendingUp } from "lucide-react";
// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import AppointmentsList from "./AppointmentsList";

// // function Dashboard() {
// //   const [services, setServices] = useState([]);

// //   // ✅ Fetch services from backend
// //   const fetchServices = async () => {
// //     try {
// //       const res = await axios.get("http://localhost:5000/api/services");
// //       setServices(res.data);
// //       console.log("✅ Fetched services:", res.data);
// //     } catch (err) {
// //       console.error("❌ Error fetching services:", err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchServices();
// //   }, []);

// //   // ✅ Stats Calculations
// //   const totalServices = services.length;
// //   const totalRevenue = services.reduce(
// //     (sum, service) => sum + (service.price || 0),
// //     0
// //   );
// //   const avgDuration = services.length
// //     ? Math.round(
// //         services.reduce((sum, s) => sum + (s.durationMins || 0), 0) /
// //           services.length
// //       )
// //     : 0;

// //   const stats = [
// //     {
// //       label: "Total Services",
// //       value: totalServices,
// //       icon: Package,
// //       color: "from-blue-500 to-cyan-400",
// //     },
// //     {
// //       label: "Total Revenue",
// //       value: `₹${totalRevenue.toFixed(2)}`,
// //       icon: DollarSign,
// //       color: "from-green-500 to-emerald-400",
// //     },
// //     {
// //       label: "Avg Duration",
// //       value: `${avgDuration} mins`,
// //       icon: Clock,
// //       color: "from-purple-500 to-pink-400",
// //     },
// //     {
// //       label: "Growth",
// //       value: "+12%",
// //       icon: TrendingUp,
// //       color: "from-orange-500 to-yellow-400",
// //     },
// //   ];

// //   return (
// //     <div className="space-y-8">
// //       {/* Header */}
// //       <div>
// //         <h1 className="text-3xl font-bold text-white tracking-wide">
// //           Dashboard Overview
// //         </h1>
// //         <p className="text-gray-400">
// //           Welcome back! Here’s what’s happening with your services.
// //         </p>
// //       </div>

// //       {/* Stat Cards */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //         {stats.map((stat) => {
// //           const Icon = stat.icon;
// //           return (
// //             <div
// //               key={stat.label}
// //               className="relative bg-gradient-to-br from-[#1a1a1a] to-[#121212] border border-gray-800 rounded-2xl p-6 hover:shadow-[0_0_15px_#f8831033] transition-all duration-300"
// //             >
// //               {/* Accent Line */}
// //               <div
// //                 className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${stat.color} rounded-t-2xl`}
// //               ></div>

// //               <div className="flex items-center justify-between mb-3">
// //                 <div
// //                   className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-20 text-white`}
// //                 >
// //                   <Icon size={24} />
// //                 </div>
// //               </div>
// //               <h3 className="text-gray-400 text-sm font-medium mb-1">
// //                 {stat.label}
// //               </h3>
// //               <p className="text-3xl font-bold text-white">{stat.value}</p>
// //             </div>
// //           );
// //         })}
// //       </div>

// //       {/* Recent Activity */}
// //       <div className="bg-[#1e1e1e] border border-gray-800 rounded-2xl p-6 shadow-xl shadow-black/30">
// //         <h2 className="text-xl font-semibold text-white mb-5 flex items-center gap-2">
// //           <Package className="text-[#f88310]" /> Recent Activity
// //         </h2>

// //         {services.length === 0 ? (
// //           <div className="text-center py-12">
// //             <Package size={50} className="mx-auto text-gray-600 mb-4" />
// //             <p className="text-gray-400 text-lg mb-1">No services yet</p>
// //             <p className="text-gray-500 text-sm">
// //               Create your first service to see it here!
// //             </p>
// //           </div>
// //         ) : (
// //           <div className="space-y-3">
// //             {services
// //               .slice(-5)
// //               .reverse()
// //               .map((service) => (
// //                 <div
// //                   key={service._id}
// //                   className="flex items-center justify-between p-4 bg-[#111111] border border-gray-800 rounded-xl hover:bg-[#181818] transition-colors duration-300"
// //                 >
// //                   <div className="flex items-center gap-4">
// //                     <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-700 bg-[#1f1f1f] flex items-center justify-center">
// //                       {service.image ? (
// //                         <img
// //                           src={service.image}
// //                           alt={service.title}
// //                           className="w-full h-full object-cover"
// //                         />
// //                       ) : (
// //                         <Package size={20} className="text-gray-600" />
// //                       )}
// //                     </div>
// //                     <div>
// //                       <h4 className="text-white font-semibold">
// //                         {service.title}
// //                       </h4>
// //                       <p className="text-gray-500 text-sm">
// //                         {service.category || "Uncategorized"}
// //                       </p>
// //                     </div>
// //                   </div>
// //                   <div className="text-right">
// //                     <p className="text-[#f88310] font-semibold">
// //                       ₹{service.price}
// //                     </p>
// //                     <p className="text-gray-500 text-sm">
// //                       {service.durationMins || 0} mins
// //                     </p>
// //                   </div>
// //                   {/* <AppointmentsList/> */}
// //                 </div>
// //               ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Dashboard;
// import {
//   Package,
//   DollarSign,
//   Clock,
//   TrendingUp,
// } from "lucide-react";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// function Dashboard() {
//   const [services, setServices] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [chartData, setChartData] = useState([]);

//   // ✅ Fetch services
//   const fetchServices = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/services");
//       setServices(res.data);
//     } catch (err) {
//       console.error("❌ Error fetching services:", err);
//     }
//   };

//   // ✅ Fetch bookings
//   const fetchBookings = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/bookings");
//       setBookings(res.data);
//     } catch (err) {
//       console.error("❌ Error fetching bookings:", err);
//     }
//   };

//   useEffect(() => {
//     fetchServices();
//     fetchBookings();
//   }, []);

//   // ✅ Stats Calculations
//   const totalServices = services.length;
//   const totalRevenue = services.reduce(
//     (sum, s) => sum + (s.price || 0),
//     0
//   );
//   const avgDuration = services.length
//     ? Math.round(
//         services.reduce((sum, s) => sum + (s.durationMins || 0), 0) /
//           services.length
//       )
//     : 0;

//   const stats = [
//     {
//       label: "Total Services",
//       value: totalServices,
//       icon: Package,
//       color: "from-blue-500 to-cyan-400",
//     },
//     {
//       label: "Total Revenue",
//       value: `₹${totalRevenue.toFixed(2)}`,
//       icon: DollarSign,
//       color: "from-green-500 to-emerald-400",
//     },
//     {
//       label: "Avg Duration",
//       value: `${avgDuration} mins`,
//       icon: Clock,
//       color: "from-purple-500 to-pink-400",
//     },
//     {
//       label: "Growth",
//       value: "+12%",
//       icon: TrendingUp,
//       color: "from-orange-500 to-yellow-400",
//     },
//   ];

//   // ✅ Prepare Monthly Chart Data from bookings
//   useEffect(() => {
//     if (bookings.length === 0) return;

//     // Group bookings by month
//     const monthly = {};

//     bookings.forEach((b) => {
//       const date = new Date(b.date);
//       const month = date.toLocaleString("default", { month: "short" });

//       if (!monthly[month]) {
//         monthly[month] = { month, booked: 0, canceled: 0 };
//       }

//       if (b.status.toLowerCase() === "cancelled" || b.status.toLowerCase() === "canceled") {
//         monthly[month].canceled += 1;
//       } else {
//         monthly[month].booked += 1;
//       }
//     });

//     const result = Object.values(monthly);
//     setChartData(result);
//   }, [bookings]);

//   return (
//     <div className="space-y-8">
//       {/* Header */}
//       <div>
//         <h1 className="text-3xl font-bold text-white tracking-wide">
//           Dashboard Overview
//         </h1>
//         <p className="text-gray-400">
//           Welcome back! Here’s what’s happening with your services.
//         </p>
//       </div>

//       {/* Stat Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {stats.map((stat) => {
//           const Icon = stat.icon;
//           return (
//             <div
//               key={stat.label}
//               className="relative bg-gradient-to-br from-[#1a1a1a] to-[#121212] border border-gray-800 rounded-2xl p-6 hover:shadow-[0_0_15px_#f8831033] transition-all duration-300"
//             >
//               <div
//                 className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${stat.color} rounded-t-2xl`}
//               ></div>
//               <div className="flex items-center justify-between mb-3">
//                 <div
//                   className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-20 text-white`}
//                 >
//                   <Icon size={24} />
//                 </div>
//               </div>
//               <h3 className="text-gray-400 text-sm font-medium mb-1">
//                 {stat.label}
//               </h3>
//               <p className="text-3xl font-bold text-white">{stat.value}</p>
//             </div>
//           );
//         })}
//       </div>

//       {/* 📊 Monthly Bookings Chart */}
//       <div className="bg-[#1e1e1e] border border-gray-800 rounded-2xl p-6 shadow-xl shadow-black/30">
//         <h2 className="text-xl font-semibold text-white mb-5 flex items-center gap-2">
//           📈 Monthly Booking Overview
//         </h2>

//         {chartData.length === 0 ? (
//           <p className="text-gray-500 text-center py-10">No booking data yet</p>
//         ) : (
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart
//               data={chartData}
//               margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
//             >
//               <CartesianGrid strokeDasharray="3 3" stroke="#333" />
//               <XAxis dataKey="month" stroke="#888" />
//               <YAxis stroke="#888" />
//               <Tooltip
//                 contentStyle={{
//                   backgroundColor: "#1e1e1e",
//                   border: "1px solid #333",
//                   color: "#fff",
//                 }}
//               />
//               <Legend wrapperStyle={{ color: "#fff" }} />
//               <Bar dataKey="booked" fill="#22c55e" radius={[5, 5, 0, 0]} />
//               <Bar dataKey="canceled" fill="#ef4444" radius={[5, 5, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         )}
//       </div>

//       {/* Recent Activity */}
//       <div className="bg-[#1e1e1e] border border-gray-800 rounded-2xl p-6 shadow-xl shadow-black/30">
//         <h2 className="text-xl font-semibold text-white mb-5 flex items-center gap-2">
//           <Package className="text-[#f88310]" /> Recent Activity
//         </h2>

//         {services.length === 0 ? (
//           <div className="text-center py-12">
//             <Package size={50} className="mx-auto text-gray-600 mb-4" />
//             <p className="text-gray-400 text-lg mb-1">No services yet</p>
//             <p className="text-gray-500 text-sm">
//               Create your first service to see it here!
//             </p>
//           </div>
//         ) : (
//           <div className="space-y-3">
//             {services
//               .slice(-5)
//               .reverse()
//               .map((service) => (
//                 <div
//                   key={service._id}
//                   className="flex items-center justify-between p-4 bg-[#111111] border border-gray-800 rounded-xl hover:bg-[#181818] transition-colors duration-300"
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-700 bg-[#1f1f1f] flex items-center justify-center">
//                       {service.image ? (
//                         <img
//                           src={service.image}
//                           alt={service.title}
//                           className="w-full h-full object-cover"
//                         />
//                       ) : (
//                         <Package size={20} className="text-gray-600" />
//                       )}
//                     </div>
//                     <div>
//                       <h4 className="text-white font-semibold">
//                         {service.title}
//                       </h4>
//                       <p className="text-gray-500 text-sm">
//                         {service.category || "Uncategorized"}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-[#f88310] font-semibold">
//                       ₹{service.price}
//                     </p>
//                     <p className="text-gray-500 text-sm">
//                       {service.durationMins || 0} mins
//                     </p>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import {
  Package,
  DollarSign,
  Clock,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch data from APIs
  const fetchData = async () => {
    try {
      const [serviceRes, bookingRes] = await Promise.all([
        axios.get("http://localhost:5000/api/services"),
        axios.get("http://localhost:5000/api/bookings"),
      ]);
      setServices(serviceRes.data);
      setBookings(bookingRes.data);
      setLoading(false);
    } catch (err) {
      console.error("❌ Error fetching dashboard data:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ Real Stats Calculation
  const totalServices = services.length;

  const totalRevenue = bookings.reduce((sum, b) => {
    const price = b.service?.price || 0;
    if (b.status?.toLowerCase() === "confirmed") {
      return sum + price;
    }
    return sum;
  }, 0);

  const avgDuration =
    services.length > 0
      ? Math.round(
          services.reduce((sum, s) => sum + (s.durationMins || 0), 0) /
            services.length
        )
      : 0;

  const totalBookings = bookings.length;
  const confirmed = bookings.filter(
    (b) => b.status?.toLowerCase() === "confirmed"
  ).length;
  const cancelled = bookings.filter(
    (b) => b.status?.toLowerCase() === "cancelled" || b.status?.toLowerCase() === "canceled"
  ).length;
  const pending = bookings.filter(
    (b) => b.status?.toLowerCase() === "pending"
  ).length;

  // 🔥 Growth rate (based on confirmed bookings vs total)
  const growthRate =
    totalBookings > 0 ? ((confirmed / totalBookings) * 100).toFixed(1) + "%" : "0%";

  // ✅ Stats Objects
  const stats = [
    {
      label: "Total Services",
      value: totalServices,
      icon: Package,
      color: "from-blue-500 to-cyan-400",
    },
    {
      label: "Total Revenue",
      value: `₹${totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      color: "from-green-500 to-emerald-400",
    },
    {
      label: "Avg Duration",
      value: `${avgDuration} mins`,
      icon: Clock,
      color: "from-purple-500 to-pink-400",
    },
    {
      label: "Growth",
      value: growthRate,
      icon: TrendingUp,
      color: "from-orange-500 to-yellow-400",
    },
  ];

  // ✅ Prepare Monthly Chart Data
  useEffect(() => {
    if (bookings.length === 0) return;

    const monthly = {};

    bookings.forEach((b) => {
      const date = new Date(b.date);
      const month = date.toLocaleString("default", { month: "short" });

      if (!monthly[month]) {
        monthly[month] = { month, booked: 0, canceled: 0 };
      }

      if (
        b.status?.toLowerCase() === "cancelled" ||
        b.status?.toLowerCase() === "canceled"
      ) {
        monthly[month].canceled += 1;
      } else {
        monthly[month].booked += 1;
      }
    });

    setChartData(Object.values(monthly));
  }, [bookings]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-[70vh] text-gray-400">
        Loading dashboard...
      </div>
    );

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white tracking-wide">
          Dashboard Overview
        </h1>
        <p className="text-gray-400">
          Real-time insights from your services and bookings
        </p>
      </div>

      {/* ✅ Dynamic Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="relative bg-gradient-to-br from-[#1a1a1a] to-[#121212] border border-gray-800 rounded-2xl p-6 hover:shadow-[0_0_15px_#f8831033] transition-all duration-300"
            >
              <div
                className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${stat.color} rounded-t-2xl`}
              ></div>
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-20 text-white`}
                >
                  <Icon size={24} />
                </div>
              </div>
              <h3 className="text-gray-400 text-sm font-medium mb-1">
                {stat.label}
              </h3>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* 📊 Monthly Bookings Chart */}
      <div className="bg-[#1e1e1e] border border-gray-800 rounded-2xl p-6 shadow-xl shadow-black/30">
        <h2 className="text-xl font-semibold text-white mb-5">
          📈 Monthly Booking Overview
        </h2>

        {chartData.length === 0 ? (
          <p className="text-gray-500 text-center py-10">No booking data yet</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e1e1e",
                  border: "1px solid #333",
                  color: "#fff",
                }}
              />
              <Legend wrapperStyle={{ color: "#fff" }} />
              <Bar dataKey="booked" fill="#22c55e" radius={[5, 5, 0, 0]} />
              <Bar dataKey="canceled" fill="#ef4444" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* 🧾 Recent Services */}
      <div className="bg-[#1e1e1e] border border-gray-800 rounded-2xl p-6 shadow-xl shadow-black/30">
        <h2 className="text-xl font-semibold text-white mb-5 flex items-center gap-2">
          <Package className="text-[#f88310]" /> Recent Activity
        </h2>

        {services.length === 0 ? (
          <div className="text-center py-12">
            <Package size={50} className="mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400 text-lg mb-1">No services yet</p>
            <p className="text-gray-500 text-sm">
              Create your first service to see it here!
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {services
              .slice(-5)
              .reverse()
              .map((service) => (
                <div
                  key={service._id}
                  className="flex items-center justify-between p-4 bg-[#111111] border border-gray-800 rounded-xl hover:bg-[#181818] transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-700 bg-[#1f1f1f] flex items-center justify-center">
                      {service.image ? (
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Package size={20} className="text-gray-600" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">
                        {service.title}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {service.category || "Uncategorized"}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[#f88310] font-semibold">
                      ₹{service.price || 0}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {service.durationMins || 0} mins
                    </p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
