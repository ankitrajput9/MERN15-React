import React from "react";

const UsersCard = ({ data }) => {
  const firstLetter = data.name.firstname.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">

      {/* Dashboard Container */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ================= USER PROFILE CARD ================= */}
        <div className="bg-white rounded-xl shadow-xl p-6 text-center relative">

          {/* Avatar */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
            <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center text-3xl font-semibold text-white shadow-md">
              {firstLetter}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-semibold text-gray-800">
              @{data.username}
            </h2>

            <p className="text-sm text-gray-400 mt-1">
              User Dashboard
            </p>

            <div className="my-6 border-t" />

            {/* User Details */}
            <div className="grid grid-cols-2 gap-6 text-sm">
              <Info label="Name" value={data.name.firstname} />
              <Info label="Email" value={data.email} />
              <Info label="Password" value={data.password} />
              <Info label="City" value={data.address.city} />
            </div>
          </div>
        </div>

        {/* ================= STATS SECTION ================= */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">

          <StatCard title="User Interactions" value="1,248" />
          <StatCard title="Products Purchased" value="86" />
          <StatCard title="Total Orders" value="54" />
          <StatCard title="Revenue Generated" value="$12,450" />

          {/* Extra Info Row */}
          <div className="sm:col-span-2 bg-white rounded-xl shadow-md p-6 flex justify-between">
            <ExtraInfo label="Last Login" value="2 hours ago" />
            <ExtraInfo label="Account Status" value="Active" />
            <ExtraInfo label="Membership" value="Premium" />
          </div>

        </div>
      </div>
    </div>
  );
};

/* ================= SMALL REUSABLE UI PARTS ================= */

const Info = ({ label, value }) => (
  <div>
    <p className="text-gray-400 text-xs">{label}</p>
    <p className="text-gray-700 font-medium mt-1 truncate">{value}</p>
  </div>
);

const StatCard = ({ title, value }) => (
  <div className="bg-white rounded-xl shadow-md p-6">
    <p className="text-sm text-gray-500">{title}</p>
    <h2 className="text-3xl font-semibold text-gray-800 mt-2">
      {value}
    </h2>
  </div>
);

const ExtraInfo = ({ label, value }) => (
  <div className="text-center">
    <p className="text-xs text-gray-400">{label}</p>
    <p className="text-sm font-semibold text-gray-700 mt-1">
      {value}
    </p>
  </div>
);

export default UsersCard;
