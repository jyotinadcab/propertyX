import React from "react";

const blogs = [
  {
    id: 1,
    title: "What is Fractional Real Estate?",
    desc: "Learn how fractional ownership is transforming real estate investment in India.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    date: "April 20, 2026",
  },
  {
    id: 2,
    title: "Why Invest in Wedding Venues?",
    desc: "Explore the booming wedding economy and its investment opportunities.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    date: "April 18, 2026",
  },
  {
    id: 3,
    title: "Tokenization Explained",
    desc: "Understand how blockchain enables transparent and liquid real estate assets.",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop",
    date: "April 15, 2026",
  },
  {
    id: 4,
    title: "Passive Income from Property",
    desc: "Generate recurring income through fractional property ownership.",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1200&auto=format&fit=crop",
    date: "April 12, 2026",
  },

  // ✅ NEW BLOGS ADDED
  {
    id: 5,
    title: "Commercial Real Estate Trends",
    desc: "Discover the latest trends shaping commercial property investments in 2026.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    date: "April 10, 2026",
  },
  {
    id: 6,
    title: "Smart Cities & Real Estate",
    desc: "How smart city developments are creating new investment opportunities.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    date: "April 08, 2026",
  },
];

const Blog = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen font-[Inter]">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Our Blog
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          Insights, ideas, and updates on fractional real estate, investment trends,
          and the future of property ownership.
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden"
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <span className="text-xs text-gray-400">{blog.date}</span>

              <h2 className="mt-2 text-xl font-semibold text-gray-800 group-hover:text-[#2c92ad] transition">
                {blog.title}
              </h2>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {blog.desc}
              </p>

              <button className="mt-4 inline-block text-[#2c92ad] font-medium text-sm hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}

      </div>

      {/* CTA SECTION */}
      <div className="relative bg-gradient-to-r from-[#2c92ad] to-[#247c92] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold">
            Stay Updated
          </h2>
          <p className="mt-3 text-white/90">
            Subscribe to get the latest insights on real estate investing.
          </p>

          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-full w-72 text-gray-800 focus:outline-none"
            />
            <button className="bg-white text-[#2c92ad] px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Blog;