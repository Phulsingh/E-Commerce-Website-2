import React from "react";

const OrganicVeg = () => {
  const products = [
    {
      id: 1,
      name: "Coconut Water",
      price: 60,
      originalPrice: 90,
      quantity: "1 pc",
      discount: "33%",
      image:
        "https://www.bigbasket.com/media/uploads/p/s/40075576_1-fresho-coconut-water.jpg",
    },
    {
      id: 2,
      name: "Coconut Water",
      price: 60,
      originalPrice: 90,
      quantity: "1 pc",
      discount: "33%",
      image:
        "https://www.bigbasket.com/media/uploads/p/s/40075576_1-fresho-coconut-water.jpg",
    },
    {
      id: 3,
      name: "Coconut Water",
      price: 60,
      originalPrice: 90,
      quantity: "1 pc",
      discount: "33%",
      image:
        "https://www.bigbasket.com/media/uploads/p/s/40075576_1-fresho-coconut-water.jpg",
    },
    {
      id: 4,
      name: "Coconut Water",
      price: 60,
      originalPrice: 90,
      quantity: "1 pc",
      discount: "33%",
      image:
        "https://www.bigbasket.com/media/uploads/p/s/40075576_1-fresho-coconut-water.jpg",
    },
  ];

  return (
    <>
      {products.length > 0 && (
        <div className="w-full h-full px-3 md:px-10 mt-3 md:mt-5">
          <p className="text-xl md:text-2xl font-bold">Organic Vegetable</p>
           {/* Wrapper div for responsive layout */}
           <div className="py-3">
            {/* Mobile (horizontal scroll) */}
            <div className="flex gap-4 overflow-x-auto sm:hidden px-2">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="min-w-[80%] flex-shrink-0 border border-gray-200 rounded-lg shadow-sm p-4 text-center relative transform transition-transform duration-300 hover:scale-105"
                >
                  {/* Discount Label */}
                  <div className="absolute top-0 left-0 w-32 bg-green-800 text-white text-sm rounded-br-xl px-2 py-1">
                    {product.discount} off
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-contain mx-auto mb-2"
                  />
                  <h2 className="font-semibold text-base text-left truncate">
                    {product.name}
                  </h2>
                  <div className="text-black flex space-x-3 justify-start items-center font-bold text-sm">
                    <span>₹{product.price}</span>
                    <span className="text-gray-500 line-through text-sm">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm text-gray-600">{product.quantity}</p>
                    <button className="bg-green-100 flex justify-center items-center text-green-600 rounded-full px-8 text-2xl font-bold hover:bg-green-200">
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop (grid layout) */}
            <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 cursor-pointer">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-200 rounded-lg shadow-sm p-4 text-center relative transform transition-transform duration-300 hover:scale-105"
                >
                  {/* Discount Label */}
                  <div className="absolute top-0 left-0 w-32 bg-green-800 text-white text-sm rounded-br-xl px-2 py-1">
                    {product.discount} off
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-contain mx-auto mb-2"
                  />
                  <h2 className="font-semibold text-base text-left truncate">
                    {product.name}
                  </h2>
                  <div className="text-black flex space-x-3 justify-start items-center font-bold text-sm">
                    <span>₹{product.price}</span>
                    <span className="text-gray-500 line-through text-sm">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm text-gray-600">{product.quantity}</p>
                    <button className="bg-green-100 flex justify-center items-center text-green-600 rounded-full px-8 text-2xl font-bold hover:bg-green-200">
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrganicVeg;
