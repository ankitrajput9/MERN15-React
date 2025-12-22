import React from "react";

const UsersCard = ({data}) => {

  const firstLetter = data.name.firstname.charAt(0).toUpperCase();

  return (
    <div className="h-[60vh] flex items-center justify-center  px-4">

      {/* Outer Container */}
      {/* <div className="w-full max-w-xl bg-[#f7fafc] rounded-2xl p-10"> */}

        {/* Card */}
        <div className="w-full bg-yellow-300/10 rounded-xl shadow-2xl p-5 text-center relative">

          {/* Avatar */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
            <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center text-3xl font-semibold text-white shadow-md">
              {firstLetter}
            </div>
          </div>

          {/* Content */}
          <div className="mt-12">

            {/* Username */}
            <h2 className="text-xl font-semibold text-gray-800">
              @{data.username}
            </h2>

            {/* Location / subtitle */}
            <p className="text-sm text-gray-400 mt-1">
              User Profile
            </p>

            {/* Divider */}
            <div className="my-6 border-t" />

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-6 text-sm">

              <Info label="Name" value={data.name.firstname} />
              <Info label="Email" value={data.email} />
              <Info label="Password" value={data.password} />
              <Info label="Address" value={data.address.city} />

            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

const Info = ({ label, value }) => (
  <div>
    <p className="text-gray-400 text-xs">{label}</p>
    <p className="text-gray-700 font-medium mt-1 truncate">{value}</p>
  </div>
);

export default UsersCard;
