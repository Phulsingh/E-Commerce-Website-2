import React from "react";

const OragnicFruits = () => {
  const products = [
    {
      id: 1,
      name: "Organic Banana dwrfa",
      price: 50,
      originalPrice: 60,
      quantity: "6 pc",
      discount: "17%",
      image:
        "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724858776/Grocery/DesktopImage/zq7n7q5musigt3xjhafd.webp",
    },
    {
      id: 2,
      name: "Organic Kiwi",
      price: 60,
      originalPrice: 90,
      quantity: "3 pc",
      discount: "33%",
      image:
        "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724858797/Grocery/DesktopImage/kfa1gavnlyiuhvsu7he4.webp",
    },
    {
      id: 3,
      name: "Organic Tender coconut",
      price: 52,
      originalPrice: 60,
      quantity: "500 g",
      discount: "33%",
      image:
        "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724858720/Grocery/DesktopImage/i9qqfxvti2sw45rm15em.webp",
    },
    {
      id: 4,
      name: "Oragnic grapes green",
      price: 160,
      originalPrice: 210,
      quantity: "1 kg",
      discount: "33%",
      image:
        "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724858783/Grocery/DesktopImage/e8pgtpjfkpp3nuku5iom.webp",
    },
    {
        id: 5,
        name: "Organic Pomergrnate",
        price: 60,
        originalPrice: 90,
        quantity: "1 pc",
        discount: "33%",
        image:
          "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724858726/Grocery/DesktopImage/elll9pkc7vmikdmln33n.webp",
      },
      {
        id: 6,
        name: "Organic Apple",
        price: 300,
        originalPrice: 400,
        quantity: "1 kg",
        discount: "0%",
        image:
          "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724858744/Grocery/DesktopImage/p3t9w5htyfvdtu86iwv8.webp",
      },
  ];

  return (
    <>
      {products.length > 0 && (
        <div className="w-full h-full px-3 md:px-10 mt-3 md:mt-5">
          <p className="text-xl md:text-2xl font-bold">Oragnic Fruits</p>
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
                  <div className="absolute   top-0 left-0 w-32 bg-green-800 text-white text-sm rounded-br-xl px-2 py-1">
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

export default OragnicFruits;
