import React, { useState } from "react";

const BloodGroupProfiles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("All");

  const bloodGroupList = [
    {
      name: "মো: বায়েজিদ বোস্তামী",
      fatherName: "মো: সবুর কাদের ভূইয়া",
      bloodGroup: "B+",
      address: "থৈরখোলা, দাউদকান্দি, কুমিল্লা।",
      phone: "01864806279",
      email: "bayazidbostami229@gmail.com",
    },

    {
      name: "Radit Bhuiyan Shuvo",
      fatherName: "Tazul Islam Bhuiyan",
      bloodGroup: "B+",
      address: "Saudi Arabia",
      phone: "+966572914148",
      email: "jjc1357@gmail.com",
    },
    {
      name: "Md Rijoan Maruf",
      fatherName: "Md Ruhul Amin Bhuiyan",
      bloodGroup: "O+",
      address: "Bashundhara R/A, Dhaka",
      phone: "01813606468",
      email: "rijoanmaruf@gmail.com",
    },
    {
      name: "মো: সায়েম ভূঁইয়া",
      fatherName: "মো: জহির উদ্দিন ভূঁইয়া",
      bloodGroup: "AB+",
      address: "থৌরখোলা",
      phone: "8801922061242",
      email: "sayembhuiyan0071@gmail.com",
    },

    {
      name: "মো: সারোয়ার হোসাইন",
      fatherName: "মো: অলিউল্লাহ ভূঁইয়া",
      bloodGroup: "B+",
      address:
        "গ্রাম : থৈরখোলা, পোস্ট : হাটখোলা, উপ: দাউদকান্দি, জেলা: কুমিল্লা",
      phone: "01855589545",
      email: "sarowarm943@gmail.com",
    },
    {
      name: "মো : মেহেদী হাসান ইকরাম",
      fatherName: "মো : রিপন ভূঁইয়া",
      bloodGroup: "O+",
      address: "থৈরখোলা",
      phone: "01639703007",
      email: "mdekram39703007@gmail.com",
    },
    {
      name: "Jony Ahammed",
      fatherName: "Joynal Abedin",
      bloodGroup: "B+",
      address: "Thairkhola",
      phone: "01898917816",
      email: "",
    },
  ];

  // Filtering based on search term and selected blood group
  const filteredList = bloodGroupList.filter((person) => {
    const matchesName = person.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesBloodGroup =
      selectedBloodGroup === "All" || person.bloodGroup === selectedBloodGroup;
    return matchesName && matchesBloodGroup;
  });

  return (
    <div className="container max-w-[1200px] mx-auto p-6">
      <div className="flex mb-6 space-x-4">
        {/* Search by name */}
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />

        {/* Dropdown to filter by blood group */}
        <select
          value={selectedBloodGroup}
          onChange={(e) => setSelectedBloodGroup(e.target.value)}
          className="border border-gray-300 rounded-lg p-2"
        >
          <option value="All">All Blood Groups</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredList.map((person, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4">
              <h2 className="text-white text-2xl font-bold">{person.name}</h2>
              <p className="text-white">{person.bloodGroup}</p>
            </div>
            <div className="p-4">
              <p className="text-gray-700 font-semibold">
                Father's Name:{" "}
                <span className="font-normal">{person.fatherName}</span>
              </p>
              <p className="text-gray-700 font-semibold">
                Address: <span className="font-normal">{person.address}</span>
              </p>
              <p className="text-gray-700 font-semibold">
                Phone: <span className="font-normal">{person.phone}</span>
              </p>
              <p className="text-gray-700 font-semibold">
                Email:{" "}
                <span className="font-normal">{person.email || "N/A"}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodGroupProfiles;
