import React from "react";

const OrganicVeg = () => {
  const products = [
    {
      id: 1,
      name: "Red Capsicum Organics",
      price: 54,
      originalPrice: 100,
      quantity: "200 gm",
      discount: "28%",
      image:
        "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724855027/Grocery/DesktopImage/nfvgpvyeatfeuj22j4j6.webp",
    },
    {
      id: 2,
      name: "Fresh Machroom Organic",
      price: 48,
      originalPrice: 50,
      quantity: "200 gm",
      discount: "40%",
      image:
        "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724855004/Grocery/DesktopImage/vowcdrtxwx02eg5syg7m.webp",
    },
    {
      id: 3,
      name: "ORGANIC Letter-green salad",
      price: 60,
      originalPrice: 90,
      quantity: "200 g",
      discount: "42%",
      image:
        "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724855054/Grocery/DesktopImage/eewcjrwxsickzt7p81ab.webp ",
    },
    {
      id: 4,
      name: "Lemon Basin Organic",
      price: 18,
      originalPrice: 90,
      quantity: "1 pc",
      discount: "33%",
      image:
        "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724855109/Grocery/DesktopImage/gpjvbtcnxcr4rseka1wa.webp",
    },
    {
      id: 5,
      name: "Red lettuce [Lollo Rosso]",
      price: 99,
      originalPrice: 180,
      quantity: "1 pc",
      discount: "45%",
      image:
        "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724855070/Grocery/DesktopImage/voywwg9z31pp5idrymnl.webp",
    },
    {
      id: 6,
      name: "Brocolic Organic",
      price: 61,
      originalPrice: 100,
      quantity: "1 pc",
      discount: "33%",
      image:
        "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724855041/Grocery/DesktopImage/tat66vjjipzskarrhk2f.webp",
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
                  className="min-w-[25%] flex-shrink-0 border border-gray-200 rounded-lg shadow-sm p-4 text-center relative transform transition-transform duration-300 hover:scale-105"
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
                  <div className="absolute top-0 left-0 w-32 bg-green-800 text-white text-sm rounded-br-xl md:rounded-tr-xl px-2 py-1">
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
