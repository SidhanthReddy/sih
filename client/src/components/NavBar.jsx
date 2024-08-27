import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const [activeContainer, setActiveContainer] = useState(null);

  const toggleContainer = (container) => {
    setActiveContainer(prev => (prev === container ? null : container));
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow-lg w-full">
        <div className="px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Alumni Portal Link */}
            <a href="/" className="text-2xl gradient-text font-bold px-4 py-2 rounded h-full flex items-center">
              Alumni Portal
            </a>

            {/* Navigation Buttons */}
            <div className="flex-1 flex items-center justify-center">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-8">
                  <button
                    onClick={() => toggleContainer('home')}
                    className="text-gray-700 hover:bg-gray-200 px-3 py-2 gradient-text rounded-md text-sm font-medium"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => toggleContainer('about')}
                    className="text-gray-700 hover:bg-gray-200 px-3 py-2 gradient-text rounded-md text-sm font-medium"
                  >
                    About
                  </button>
                  <button
                    onClick={() => toggleContainer('contact')}
                    className="text-gray-700 hover:bg-gray-200 px-3 py-2 gradient-text rounded-md text-sm font-medium"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>

            {/* Login Button */}
            <button
              onClick={() => navigate('/login')}
              className='text-gray-700 hover:bg-gray-200 px-3 py-2 gradient-text rounded-md text-sm font-medium'
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Containers */}
      {activeContainer && (
        <div className="bg-white shadow-lg w-full mt-2 p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {activeContainer === 'home' && (
              <>
                <div>
                  <h2 className="text-xl font-bold mb-2">Dashboard</h2>
                  <a
                    href="/dashboard/profile"
                    className="block text-lg text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
                  >
                    Profile
                  </a>
                  <a
                    href="/dashboard/messages"
                    className="block text-lg text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
                  >
                    Messages
                  </a>
                  <a
                    href="/dashboard/notifications"
                    className="block text-lg text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
                  >
                    Notifications
                  </a>
                </div>
              </>
            )}

            {activeContainer === 'about' && (
              <>
                <div>
                  <h2 className="text-xl font-bold mb-2">Mission</h2>
                  <a
                    href="/about/mission"
                    className="block text-lg text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
                  >
                    Our Mission
                  </a>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Team</h2>
                  <a
                    href="/about/team"
                    className="block text-lg text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
                  >
                    Meet the Team
                  </a>
                </div>
              </>
            )}

            {activeContainer === 'contact' && (
              <>
                <div>
                  <h2 className="text-xl font-bold mb-2">Email</h2>
                  <a
                    href="mailto:support@example.com"
                    className="block text-lg text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
                  >
                    Email Us
                  </a>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Phone</h2>
                  <a
                    href="tel:+1234567890"
                    className="block text-lg text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
                  >
                    Call Us
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
