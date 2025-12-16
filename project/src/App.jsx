// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar';
// import Dashboard from './pages/Dashboard';
// import CreateService from './pages/CreateService';
// import AllServices from './pages/AllServices';
// import AllBookings from './pages/AllBookings';
// import AppointmentsList from './pages/AppointmentsList';
// import DashboardBookings from './pages/DashboardBookings';
// import AllAgents from './pages/AllAgents';
// import AgentDetails from './pages/AgentsDetails';


// function App() {
//   const [services, setServices] = useState([
//     {
//       id: '1',
//       title: 'UI/UX Design Consultation',
//       description: 'Professional UI/UX design consultation for your web or mobile application. Get expert advice on user experience, interface design, and usability.',
//       price: 150,
//       durationMins: 60,
//       image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
//       category: 'Design',
//     },
//     {
//       id: '2',
//       title: 'Web Development',
//       description: 'Full-stack web development services using modern technologies. Build responsive, scalable, and high-performance web applications.',
//       price: 200,
//       durationMins: 120,
//       image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
//       category: 'Development',
//     },
//     {
//       id: '3',
//       title: 'Brand Strategy',
//       description: 'Comprehensive brand strategy and identity development. Define your brand voice, values, and visual identity for maximum impact.',
//       price: 250,
//       durationMins: 90,
//       image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
//       category: 'Branding',
//     },
//   ]);

//   const handleAddService = (newService) => {
//     setServices((prev) => [...prev, newService]);
//   };

//   const handleUpdateService = (updatedService) => {
//     setServices((prev) =>
//       prev.map((service) => (service.id === updatedService.id ? updatedService : service))
//     );
//   };

//   const handleDeleteService = (serviceId) => {
//     if (window.confirm('Are you sure you want to delete this service?')) {
//       setServices((prev) => prev.filter((service) => service.id !== serviceId));
//     }
//   };

//   return (
//     <Router>
//       <div className="flex min-h-screen bg-[#181818]">
//         <Sidebar />

//         <div className="flex-1 flex flex-col">
//           <Navbar />

//           <main className="flex-1 p-8">
//             <Routes>
//               <Route path="/" element={<Dashboard  />} />
//               <Route
//                 path="/create"
//                 element={<CreateService onAddService={handleAddService} />}
//               />
//               <Route
//                 path="/services"
//                 element={
//                   <AllServices
//                     services={services}
//                     onUpdateService={handleUpdateService}
//                     onDeleteService={handleDeleteService}
//                   />
//                 }
//               />
//               <Route
//               path='/bookings'
//               element={<AllBookings/>}
//               />
//               <Route
//               path='/appointment'
//               element={<AppointmentsList/>}
//               />
//                <Route
//               path='/status'
//               element={<DashboardBookings/>}
//               />
//               <Route
//               path='/agents'
//               element={<AllAgents/>}
//               />
              
//               <Route
//               path='/agents/:agentId'
//               element={<AgentDetails/>}
//               />
//             </Routes>
           
            
            
//           </main>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoutes";
import RoleRoute from "./components/RoleRoutes";

import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import CreateService from "./pages/CreateService";
import AllServices from "./pages/AllServices";
import AllBookings from "./pages/AllBookings";
import AppointmentsList from "./pages/AppointmentsList";
import DashboardBookings from "./pages/DashboardBookings";
import AllAgents from "./pages/AllAgents";
import AgentDetails from "./pages/AgentsDetails";
import FrontDeskAssignBookings from "./pages/FrontDeskAssignBookings";

function App() {
  return (
    <Router>
      <Routes>
        {/* LOGIN */}
        <Route path="/login" element={<Auth />} />

        {/* DASHBOARD */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div className="flex min-h-screen bg-[#181818]">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                  <Navbar />
                  <main className="flex-1 p-8">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />

                      {/* ADMIN ONLY */}
                      <Route
                        path="/create"
                        element={
                          <RoleRoute allowedRoles={["admin"]}>
                            <CreateService />
                          </RoleRoute>
                        }
                      />

                      <Route
                        path="/services"
                        element={
                          <RoleRoute allowedRoles={["admin"]}>
                            <AllServices />
                          </RoleRoute>
                        }
                      />
                       <Route
                        path="/bookings"
                        element={
                          <RoleRoute allowedRoles={["frontdesk", "admin"]}>
                            <AllBookings />
                          </RoleRoute>
                        }
                      />

                      

                      {/* FRONT DESK + MANAGER */}
                      <Route
                        path="/bookings"
                        element={
                          <RoleRoute allowedRoles={["frontdesk", "manager"]}>
                            <AllBookings />
                          </RoleRoute>
                        }
                      />
                      <Route
  path="/frontdesk-assign"
  element={
    <RoleRoute allowedRoles={["frontdesk"]}>
      <FrontDeskAssignBookings />
    </RoleRoute>
  }
/>

                      <Route
                        path="/appointment"
                        element={
                          <RoleRoute allowedRoles={["frontdesk", "manager"]}>
                            <AppointmentsList />
                          </RoleRoute>
                        }
                      />

                      <Route
                        path="/status"
                        element={<DashboardBookings />}
                      />

                      {/* MANAGER + ADMIN */}
                      <Route
                        path="/agents"
                        element={
                          <RoleRoute allowedRoles={["admin", "manager"]}>
                            <AllAgents />
                          </RoleRoute>
                        }
                      />

                      <Route
                        path="/agents/:agentId"
                        element={
                          <RoleRoute allowedRoles={["admin", "manager"]}>
                            <AgentDetails />
                          </RoleRoute>
                        }
                      />
                    </Routes>
                  </main>
                </div>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
