"use client";

import { useState } from "react";
import axios from "axios";

export default function RechargePage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [serviceType, setServiceType] = useState("SMS");
  const [message, setMessage] = useState("");

  const handleRecharge = async () => {
    try {
      const response = await axios.post("/api/recharge", {
        phoneNumber,
        amount,
        serviceType,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Recharge failed.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Recharge SMS</h1>
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleRecharge}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Recharge
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
