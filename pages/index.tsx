import { PROPERTYLISTINGSAMPLE } from "../constants";
import { PropertyProps } from "../interfaces";

export default function Home() {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, index: number) => (
        <div key={index} className="bg-white rounded shadow overflow-hidden">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">{property.name}</h2>
            <p className="text-sm text-gray-600">
              {property.address.city}, {property.address.country}
            </p>
            <p className="text-sm">Rating: {property.rating}</p>
            <div className="flex flex-wrap gap-2 my-2">
              {property.category.map((cat, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                >
                  {cat}
                </span>
              ))}
            </div>
            <p className="text-lg font-semibold">${property.price} / night</p>
          </div>
        </div>
      ))}
    </div>
  );
}
