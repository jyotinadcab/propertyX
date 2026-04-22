import React from "react";

const videos = [
  {
    title: "What is PropertyX",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "How to buy property on PropertyX",
    thumbnail: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Investing through property tokens",
    thumbnail: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop",
  },
];

const Guide = () => {
  return (
    <section className="relative bg-[#ffffff] text-gray-900 px-6 md:px-16 py-12 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-200/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-cyan-200/30 blur-[120px] rounded-full"></div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-wide">
        PropertyX Guide
      </h1>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-500"
          >
            
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-52 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>

              {/* Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-600 w-14 h-14 flex items-center justify-center rounded-full text-white text-xl shadow-lg group-hover:scale-110 transition">
                  ▶
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="p-4">
              <p className="text-center font-medium text-gray-700 group-hover:text-black transition">
                {video.title}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Guide;