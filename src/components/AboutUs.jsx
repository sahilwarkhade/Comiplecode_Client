import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          About Us
        </h2>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-gray-400">
            Our real-time collaborative code editor is designed to bring
            developers together. Whether you're building software, debugging
            code, or brainstorming solutions, our platform provides the tools
            to make teamwork seamless and efficient.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center -mx-4">
          {/* Feature 1: Real-Time Code Editor */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/200x150"
                alt="Real-Time Code Editor"
                className="mx-auto mb-4 rounded"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                Real-Time Code Editor
              </h3>
              <p className="text-gray-400">
                Write, edit, and debug code simultaneously with your team in
                real time. See changes instantly without delays.
              </p>
            </div>
          </div>

          {/* Feature 2: Real-Time Chat */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/200x150"
                alt="Real-Time Chat"
                className="mx-auto mb-4 rounded"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                Real-Time Chat
              </h3>
              <p className="text-gray-400">
                Collaborate with team members using built-in real-time chat,
                ensuring clear communication without switching tools.
              </p>
            </div>
          </div>

          {/* Feature 3: Team Collaboration */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/200x150"
                alt="Team Collaboration"
                className="mx-auto mb-4 rounded"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                Team Collaboration
              </h3>
              <p className="text-gray-400">
                Work together on projects with advanced tools for version
                control, role-based permissions, and shared environments.
              </p>
            </div>
          </div>

          {/* Feature 4: Secure and Reliable */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/200x150"
                alt="Secure and Reliable"
                className="mx-auto mb-4 rounded"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                Secure and Reliable
              </h3>
              <p className="text-gray-400">
                Your data is protected with end-to-end encryption, ensuring a
                secure and private collaboration environment.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="/signup"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition"
          >
            Start Collaborating Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
