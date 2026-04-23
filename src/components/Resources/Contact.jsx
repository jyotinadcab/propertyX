import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-[Inter]">

      {/* HEADER */}
      <div className="text-center py-16 px-6">
        {/* <span className="inline-block px-4 py-1 text-xs tracking-widest bg-[#e6f4f7] text-[#2c92ad] rounded-full mb-4">
          CONTACT US
        </span> */}

        <h1 className="text-4xl md:text-5xl font-extrabold">
          Get in <span className="text-[#2c92ad]">Touch</span>
        </h1>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Have questions about PropertyX or want to start investing?  
          Reach out to our team — we’d love to help.
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-10">

        {/* LEFT - CONTACT FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c92ad]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c92ad]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c92ad]"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c92ad]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#2c92ad] to-[#247c92] text-white py-3 rounded-full font-semibold hover:shadow-lg hover:scale-[1.02] transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT - CONTACT INFO */}
        <div className="flex flex-col justify-between">

          <div className="space-y-6">

            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <h3 className="font-semibold text-lg text-gray-800">📍 Address</h3>
              <p className="text-gray-600 mt-2">
                PropertyX HQ, Sector 62, Noida, India
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <h3 className="font-semibold text-lg text-gray-800">📧 Email</h3>
              <p className="text-gray-600 mt-2">
                support@propertyx.com
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <h3 className="font-semibold text-lg text-gray-800">📞 Phone</h3>
              <p className="text-gray-600 mt-2">
                +91 98765 43210
              </p>
            </div>

          </div>

          {/* OPTIONAL CTA */}
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-[#2c92ad] to-[#247c92] text-white shadow-lg">
            <h3 className="text-xl font-semibold">
              Start Your Investment Journey 🚀
            </h3>
            <p className="text-sm mt-2 opacity-90">
              Join PropertyX and explore fractional ownership today.
            </p>

            <button className="mt-4 bg-white text-[#2c92ad] px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition">
              Get Started
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Contact;