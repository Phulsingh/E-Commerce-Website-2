import React from "react";

const  HotProducts = () => {
  const products = [
    {
      id: 1,
      name: "Urad dal Badi",
      price: 150,
      originalPrice: 210,
      quantity: "1kg",
      discount: "29%",
      image:
        "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724844717/Grocery/DesktopImage/havflnlnfsq0dqhlkkeg.webp",
    },
    {
      id: 2,
      name: "Himalaya Anti hairfal shampoo",
      price: 88,
      originalPrice: 95,
      quantity: "500 g",
      discount: "7%",
      image:
        "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724844816/Grocery/DesktopImage/ig5gcz9wbrv4qdklny49.webp",
    },
    {
      id: 3,
      name: "Amawat (Mango Papad)",
      price: 52,
      originalPrice: 90,
      quantity: "250 gm",
      discount: "35%",
      image:
        "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724845061/Grocery/DesktopImage/bxgppdsycjv2zxw1qxmf.webp",
    },
    {
      id: 4,
      name: "Saloni Mustard Oil",
      price: 10,
      originalPrice: 15,
      quantity: "1 l",
      discount: "43%",
      image:
        "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724845282/Grocery/DesktopImage/wfdltkymjxindfpshgs8.webp",
    },
    {
        id: 5,
        name: "Amul cow Ghee Pounch",
        price: 324,
        originalPrice: 350,
        quantity: "1 pc",
        discount: "10%",
        image:
          "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724845363/Grocery/DesktopImage/bnlqiqtbfixcilmm4q3o.webp",
      },
      {
        id: 6,
        name: "Haldiram Namkin - Aloo",
        price: 189,
        originalPrice: 190,
        quantity: "1 kg",
        discount: "1%",
        image:
          "https://res.cloudinary.com/dexterous-technology/image/upload/v1726637815/10_xljxwc.png",
      },
  ];

  return (
    <>
      {products.length > 0 && (
        <div className="w-full h-full px-3 md:px-10 mt-3 md:mt-5">
          <p className="text-xl md:text-2xl font-bold">Hot Products</p>
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
                    <button className="bg-green-100 cursor-pointer flex justify-center items-center text-green-600 rounded-full px-8 text-2xl font-bold hover:bg-green-200">
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

export default HotProducts;
