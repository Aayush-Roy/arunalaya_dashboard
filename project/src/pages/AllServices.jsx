
// import { useEffect, useState } from 'react';
// import { Search, Filter } from 'lucide-react';
// import ServiceCard from '../components/ServiceCard';
// import ServiceForm from '../components/ServiceForm';
// import axios from 'axios';

// function AllServices({ onUpdateService, onDeleteService }) {
//   const [showForm, setShowForm] = useState(false);
//   const [services, setServices] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [editingService, setEditingService] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   // ✅ Fetch services
//   const fetchServices = async () => {
//     try {
//       const res = await axios.get('https://arunalayabackendv2-1.onrender.com/api/services');
//       setServices(res.data);
//     } catch (err) {
//       console.error('Error fetching services:', err);
//     }
//   };

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const categories = ['all', ...new Set(services.map((s) => s.category))];

//   const filteredServices = services.filter((service) => {
//     const matchesSearch =
//       service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       service.description.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory =
//       selectedCategory === 'all' || service.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const handleEdit = (service) => {
//     setEditingService(service);
//     setShowForm(true);
//   };

//   const handleDelete = async (id) => {
//     console.log(id);
//     if (window.confirm('Are you sure you want to delete this service?')) {
//       try {
//         await axios.delete(`http://localhost:5000/api/services/${id}`);
//         alert('🗑️ Service deleted!');
//         fetchServices();
//       } catch (err) {
//         console.error('Error deleting service:', err);
//         alert('❌ Failed to delete service');
//       }
//     }
//   };

//   const handleUpdate = async (updatedService) => {
//     try {
//       const id = editingService._id || editingService.id;
//       if (!id) return alert('Invalid service ID');
//       await axios.put(`http://localhost:5000/api/services/${id}`, updatedService);
//       alert('✅ Service updated successfully!');
//       setEditingService(null);
//       fetchServices();
//     } catch (err) {
//       console.error('Error updating service:', err);
//       alert('❌ Failed to update service');
//     }
//   };

//   const handleCancelEdit = () => setEditingService(null);

//   // ✅ Edit Mode
//   if (editingService) {
//     return (
//       <div className="max-w-2xl backdrop-blur-lg bg-[#1b1b1b]/70 border border-gray-800 rounded-2xl shadow-xl p-8 transition-all duration-300">
//         <div className="mb-8 text-center">
//           <h1 className="text-3xl font-semibold text-white mb-1 tracking-wide">
//             ✏️ Edit Service
//           </h1>
//           <p className="text-gray-400 text-sm">Update your service details below</p>
//         </div>

//         <ServiceForm
//           service={editingService}
//           onSubmit={handleUpdate}
//           onCancel={handleCancelEdit}
//         />
//       </div>
//     );
//   }

//   // ✅ All Services Page
//   return (
//     <div className="space-y-8 animate-fadeIn">
//       {/* Header */}
//       <div>
//         <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
//           All Services
//         </h1>
//         <p className="text-gray-400 text-sm">Manage, edit, or remove your listings</p>
//       </div>

//       {/* Filters */}
//       <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-[#1e1e1e]/70 border border-gray-800 rounded-2xl p-4 backdrop-blur-md">
//         <div className="relative w-full md:w-1/2">
//           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
//           <input
//             type="text"
//             placeholder="Search by name or description..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full bg-transparent border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white focus:border-[#f88310] outline-none transition-all"
//           />
//         </div>

//         <div className="relative w-full md:w-1/3">
//           <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
//           <select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="w-full bg-transparent border border-gray-700 rounded-xl pl-12 pr-8 py-3 text-white focus:border-[#f88310] outline-none cursor-pointer transition-all"
//           >
//             {categories.map((category) => (
//               <option key={category} value={category} className="bg-[#1e1e1e]">
//                 {category === 'all' ? 'All Categories' : category}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Service List */}
//       {filteredServices.length === 0 ? (
//         <div className="text-center bg-[#1e1e1e]/70 backdrop-blur-md border border-gray-800 rounded-2xl py-16 shadow-inner">
//           <p className="text-gray-400 mb-2 text-lg">No services found</p>
//           <p className="text-gray-500 text-sm">
//             {services.length === 0
//               ? 'Create your first service to get started'
//               : 'Try adjusting your search or filters'}
//           </p>
//         </div>
//       ) : (
//         <>
//           <div className="flex justify-between text-gray-400 text-sm">
//             <p>
//               Showing <span className="text-[#f88310]">{filteredServices.length}</span> of{' '}
//               {services.length} services
//             </p>
//           </div>

//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             {filteredServices.map((service) => (
//               <ServiceCard
//                 key={service._id}
//                 service={service}
//                 onEdit={handleEdit}
//                 onDelete={handleDelete}
//               />
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default AllServices;
import { useEffect, useState } from 'react';
import { Search, Filter } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import ServiceForm from '../components/ServiceForm';
import axios from 'axios';

function AllServices({ onUpdateService, onDeleteService }) {
  const [showForm, setShowForm] = useState(false);
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingService, setEditingService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ✅ Fetch services (RESPONSE FIX)
  const fetchServices = async () => {
    try {
      const res = await axios.get('https://arunalayabackendv2-1.onrender.com/api/services');

      // 🔥 FIX HERE → your array is inside res.data.data
      setServices(res.data.data || []);
    } catch (err) {
      console.error('Error fetching services:', err);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const categories = ['all', ...new Set(services.map((s) => s.category))];

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleEdit = (service) => {
    setEditingService(service);
    setShowForm(true);
  };

  // ❗ Delete/update URLs bhi change kar diye — production link use karo
  const BASE_URL = "https://arunalayabackendv2-1.onrender.com/api/services";

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        await axios.delete(`${BASE_URL}/${id}`);
        alert('🗑️ Service deleted!');
        fetchServices();
      } catch (err) {
        console.error('Error deleting service:', err);
        alert('❌ Failed to delete service');
      }
    }
  };

  const handleUpdate = async (updatedService) => {
    try {
      const id = editingService._id;
      if (!id) return alert('Invalid service ID');

      await axios.put(`${BASE_URL}/${id}`, updatedService);

      alert('✅ Service updated successfully!');
      setEditingService(null);
      fetchServices();
    } catch (err) {
      console.error('Error updating service:', err);
      alert('❌ Failed to update service');
    }
  };

  const handleCancelEdit = () => setEditingService(null);

  // Edit Mode
  if (editingService) {
    return (
      <div className="max-w-2xl backdrop-blur-lg bg-[#1b1b1b]/70 border border-gray-800 rounded-2xl shadow-xl p-8 transition-all duration-300">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-white mb-1 tracking-wide">
            ✏️ Edit Service
          </h1>
          <p className="text-gray-400 text-sm">Update your service details below</p>
        </div>

        <ServiceForm
          service={editingService}
          onSubmit={handleUpdate}
          onCancel={handleCancelEdit}
        />
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
          All Services
        </h1>
        <p className="text-gray-400 text-sm">Manage, edit, or remove your listings</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-[#1e1e1e]/70 border border-gray-800 rounded-2xl p-4 backdrop-blur-md">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search by name or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white focus:border-[#f88310] outline-none transition-all"
          />
        </div>

        <div className="relative w-full md:w-1/3">
          <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-transparent border border-gray-700 rounded-xl pl-12 pr-8 py-3 text-white focus:border-[#f88310] outline-none cursor-pointer transition-all"
          >
            {categories.map((category) => (
              <option key={category} value={category} className="bg-[#1e1e1e]">
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Service List */}
      {filteredServices.length === 0 ? (
        <div className="text-center bg-[#1e1e1e]/70 backdrop-blur-md border border-gray-800 rounded-2xl py-16 shadow-inner">
          <p className="text-gray-400 mb-2 text-lg">No services found</p>
          <p className="text-gray-500 text-sm">
            {services.length === 0
              ? 'Create your first service to get started'
              : 'Try adjusting your search or filters'}
          </p>
        </div>
      ) : (
        <>
          <div className="flex justify-between text-gray-400 text-sm">
            <p>
              Showing <span className="text-[#f88310]">{filteredServices.length}</span> of{' '}
              {services.length} services
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service._id}
                service={service}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default AllServices;
