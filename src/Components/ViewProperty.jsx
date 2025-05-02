import React from 'react';
import PropertyImg from '../assets/Property.jpg';

const ViewProperty = () => {
  return (
    <div className="w-full min-h-screen p-6 md:p-10 flex flex-col md:flex-row gap-6">
    
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img src={PropertyImg} className="rounded-lg w-full h-auto max-w-md shadow-lg" alt="Property" />
      </div>

   
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">Residential Land, Wayanad</h1>

        <div className="flex justify-between text-gray-700 text-lg mb-2">
          <p>Kollam, Maharashtra</p>
          <p className="text-green-600 font-semibold">₹20 - 25 Lakh</p>
        </div>

        <p className="text-sm md:text-base text-gray-600 mb-4">
          This beautiful residential land in Wayanad offers peaceful surroundings and scenic views. Ideal for building your dream home or investing for the future.
        </p>

        <button className="w-full py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition duration-200">
          Book Enquiry
        </button>
      </div>
    </div>
  );
};

export default ViewProperty;
