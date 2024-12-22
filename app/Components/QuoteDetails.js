"use client";

export default function QuoteDetails() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-xl font-semibold mb-4">Quote Details</h1>
      <div className="mb-6">
        <h2 className="text-gray-600">Quote Information</h2>
        <p className="text-gray-800">
          RFQ No: <span className="font-medium">#01234</span>
        </p>
        <p className="text-gray-800">
          Title: <span className="font-medium">Request for Equipments</span>
        </p>
        <p className="text-gray-800">
          Status: <span className="text-yellow-500">Awaiting</span>
        </p>
      </div>
      <div>
        <h2 className="text-gray-600">Items</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Item</th>
              <th className="border border-gray-300 p-2">Quantity</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">
                Oxygen Concentrator
              </td>
              <td className="border border-gray-300 p-2">100</td>
              <td className="border border-gray-300 p-2">$200</td>
              <td className="border border-gray-300 p-2">$20,000</td>
            </tr>
            {/* Add more rows dynamically */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
