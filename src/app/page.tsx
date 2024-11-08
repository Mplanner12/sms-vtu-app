import Link from "next/link";
import { FaSms } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <FaSms className="text-6xl text-blue-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          VTU SMS Recharge
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Recharge your VTU SMS quickly and easily.
        </p>
        <Link
          href="/logIn"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login to Recharge
        </Link>
      </div>
    </div>
  );
}
