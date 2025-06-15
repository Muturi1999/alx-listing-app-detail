import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const calcNights = () => {
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diff = Math.ceil((+outDate - +inDate) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };

  const total = price * calcNights();

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price}/night</h3>
      <div className="mt-4">
        <label className="block mb-1">Check-in</label>
        <input type="date" className="border p-2 w-full" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
      </div>
      <div className="mt-4">
        <label className="block mb-1">Check-out</label>
        <input type="date" className="border p-2 w-full" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
      </div>
      <div className="mt-4">
        <p>Total payment: <strong>${total}</strong></p>
      </div>
      <button className="mt-4 bg-green-500 text-white w-full py-2 rounded-md">Reserve now</button>
    </div>
  );
};

export default BookingSection;
