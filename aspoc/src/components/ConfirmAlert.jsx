import React from 'react';

function ConfirmAlert({ confirmaction, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
      {/* Overlay */}
      <div className="fixed inset-0 bg-secondary-700/50"></div>

      {/* Modal Content */}
      <div className="mx-auto overflow-hidden rounded-lg bg-white shadow-xl sm:w-full sm:max-w-xl">
        <div className="relative p-6">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-500">
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
                  d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium text-secondary-900">Unsaved changes</h3>
              <div className="mt-2 text-sm text-secondary-500">
              Are you sure you want to verify this alumni?
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-3">
            {/* Cancel Button */}
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100"
            >
              Cancel
            </button>
            {/* Confirm Button */}
            <button
              type="button"
              onClick={confirmaction}
              className="rounded-lg border border-primary-500 bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-blue-700 focus:ring focus:ring-primary-200"
            >
              Confirm
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmAlert;
