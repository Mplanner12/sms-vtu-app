"use client";

import { useState } from "react";
import axios from "axios";
import { FaSms } from "react-icons/fa";

export default function RechargePage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleRecharge = async () => {
    try {
      const response = await axios.post("/api/recharge", {
        phoneNumber,
        amount,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage("Recharge failed.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
        <FaSms className="text-6xl text-blue-600 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Recharge SMS</h1>
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="mb-4 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mb-4 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleRecharge}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Recharge
        </button>
        {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
      </div>
    </div>
  );
}
