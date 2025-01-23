import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import Applications from './Applications';
import JobList from './JobList';
import { Route } from 'react-router-dom';

const UserDashboard: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div>
        <JobList />     
      </div>
    </div>
  );
};

export default UserDashboard;