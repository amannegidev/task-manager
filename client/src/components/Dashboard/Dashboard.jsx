import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProjectList from './ProjectList';
import CreateProject from './CreateProject';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/auth/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data); // Store user data
      } catch (error) {
        console.error('Error fetching user data:', error);
        alert('Failed to fetch user data');
        navigate('/login'); // Redirect to login if error occurs
      }
    };

    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/projects', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProjects(response.data);
      } catch (err) {
        console.error('Error fetching projects:', err);
        navigate('/login'); // Redirect if not authenticated
      }
    };
    fetchUserData();
    fetchProjects();
  }, [navigate]);
return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 px-4 py-10">
    <div className="max-w-full mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-12 tracking-tight">
        Project Dashboard
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1.5fr] gap-8">
        {/* User Info */}
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">User Information</h2>
          {user ? (
            <div className="space-y-2 text-gray-700">
              <p><span className="font-medium">Name:</span> {user.name}</p>
              <p><span className="font-medium">Email:</span> {user.email}</p>
              <p><span className="font-medium">Country:</span> {user.country}</p>
            </div>
          ) : (
            <p className="text-gray-500 italic">Loading user info...</p>
          )}
        </div>

        {/* Create Project Form */}
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Create Project</h2>
          <CreateProject />
        </div>

        {/* Project List */}
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Projects</h2>
          <ProjectList projects={projects} />
        </div>
      </div>
    </div>
  </div>
);


};

export default Dashboard;




