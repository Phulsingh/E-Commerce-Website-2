import React from "react";

const BestSeller = () => {
  const products = [
    {
      id: 1,
      name: "Dove intense Repair Shampoo",
      price: 128,
      originalPrice: 130,
      quantity: "180 ml",
      discount: "2%",
      image:
        "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724856971/Grocery/DesktopImage/ygt8gkg2ntwrkbz3ecrr.webp",
    },
    {
      id: 2,
      name: "Himalaya Anti hairfal shampoo",
      price: 125,
      originalPrice: 150,
      quantity: "200 ml",
      discount: "2%",
      image:
        "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724856904/Grocery/DesktopImage/spts91ruoego82nynz2g.webp",
    },
    {
      id: 3,
      name: "TRE Semme Hair Fall Defense",
      price: 73,
      originalPrice: 90,
      quantity: "85 ml",
      discount: "0%",
      image:
        "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724856653/Grocery/DesktopImage/zrepmjz4waniiwokacjq.webp",
    },
    {
      id: 4,
      name: "Coconut Water",
      price: 10,
      originalPrice: 15,
      quantity: "1 pc",
      discount: "33%",
      image:
        "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724856561/Grocery/DesktopImage/hl8pkwpntj3uyq8heipi.webp",
    },
    {
        id: 5,
        name: "Coconut Water",
        price: 60,
        originalPrice: 90,
        quantity: "1 pc",
        discount: "33%",
        image:
          "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724856269/Grocery/DesktopImage/gw5g7bbtslavkr1tolpj.webp",
      },
      {
        id: 6,
        name: "Coconut Water",
        price: 60,
        originalPrice: 90,
        quantity: "1 pc",
        discount: "33%",
        image:
          "https://res.cloudinary.com/dpplqvnx6/image/upload/v1724856082/Grocery/DesktopImage/laemc1zuntvyqifiaymi.webp",
      },
  ];

  return (
    <>
      {products.length > 0 && (
        <div className="w-full h-full px-3 md:px-10 mt-3 md:mt-5">
          <p className="text-xl md:text-2xl font-bold">Best Seller</p>
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

export default BestSeller;
