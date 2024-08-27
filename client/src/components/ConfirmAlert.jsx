import React from 'react';

function ConfirmAlert({ toggle, onClose }) {
  return (
    <div className="h-80">
      <div>
        {/* Background overlay */}
        <div className="fixed inset-0 z-10 bg-secondary-700/50"></div>

        {/* Modal content */}
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
          <div className="mx-auto overflow-hidden rounded-lg bg-white shadow-xl sm:w-full sm:max-w-xl">
            <div className="relative p-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-secondary-900">
                    Alumni Verification
                  </h3>
                  <div className="mt-2 text-sm text-secondary-500">
                    Registration Successful! Further details will be sent to your mail.
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-3">
                {/* Cancel Button */}
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400"
                >
                  Cancel
                </button>

                {/* Confirm Button */}
                <button
              type="button"
              className="rounded-lg border border-primary-500 bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-blue-700 focus:ring focus:ring-primary-200"
            >
              Confirm
            </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmAlert;
