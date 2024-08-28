import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteAlert from './DeleteAlert';
import ConfirmAlert from './ConfirmAlert';

function Table() {
  const [alumni, setAlumni] = useState([]);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [showConfirmAlert, setShowConfirmAlert] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/alumni');
        console.log('Fetched data:', response.data);
        if (Array.isArray(response.data)) {
          setAlumni(response.data);
        } else {
          console.error('Unexpected data format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleConfirm = async () => {
    try {
      if (selectedId) {
        const response = await axios.put(`http://localhost:4000/api/alumni/${selectedId}/verify`);
        console.log('Alumni updated:', response.data);
        setAlumni(alumni.map(item => item._id === selectedId ? { ...item, verified: true } : item));
        setShowConfirmAlert(false); // Hide confirm alert after updating
      }
    } catch (error) {
      console.error('Error updating alumni:', error);
    }
  };

  const handleReject = async () => {
    try {
      if (selectedId) {
        const response = await axios.delete(`http://localhost:4000/api/alumni/${selectedId}/verify`);
        console.log('Alumni Deleted:', response.data);
        setAlumni(alumni.filter(item => item._id !== selectedId));
        setShowDeleteAlert(false); // Hide delete alert after deletion
      }
    } catch (error) {
      console.error('Error Deleting alumni:', error);
    }
  };

  const handleConfirmClick = (id) => {
    setSelectedId(id);
    setShowConfirmAlert(true);
  };

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setShowDeleteAlert(true);
  };

  return (
    <div className="w-screen">
      <div className="overflow-x-auto py-5 px-8 w-7/8">
        <table className="w-5/6 border-collapse bg-white text-left text-sm text-gray-500 mt-8 ml-auto mr-auto rounded-lg">
          <thead className="bg-gray-50 border-b border-gray-300 rounded-t-lg">
            <tr className="rounded-lg">
              <th scope="col" className="px-6 py-4 font-medium text-gray-900 border-b border-gray-300">Name</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900 border-b border-gray-300">Email</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900 border-b border-gray-300">LinkedIn</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900 border-b border-gray-300">Twitter</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900 border-b border-gray-300">Instagram</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900 border-b border-gray-300">Verified</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900 border-b border-gray-300"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {alumni.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b border-gray-300">{item.NameToBeSent}</td>
                <td className="px-6 py-4 border-b border-gray-300">{item.EmailToBeSent}</td>
                <td className="px-6 py-4 border-b border-gray-300">{item.Linkden_Link || 'N/A'}</td>
                <td className="px-6 py-4 border-b border-gray-300">{item.Twitter_Link || 'N/A'}</td>
                <td className="px-6 py-4 border-b border-gray-300">{item.InstaGram_Link || 'N/A'}</td>
                <td className="px-6 py-4 border-b border-gray-300">
                  <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${item.verified ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                    {item.verified ? 'Verified' : 'Not Verified'}
                  </span>
                </td>
                <td className="flex justify-end gap-4 px-6 py-4 font-medium">
                  <button
                    className="text-blue-600"
                    onClick={() => handleConfirmClick(item._id)}
                  >
                    Confirm
                  </button>
                  <button
                    className="text-red-600"
                    onClick={() => handleDeleteClick(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showDeleteAlert && (
          <DeleteAlert
            deleteaction={handleReject}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
        {showConfirmAlert && (
          <ConfirmAlert 
            confirmaction={handleConfirm}
            onClose={() => setShowConfirmAlert(false)}
          />
        )}
      </div>
      <div className="w-5/6 mx-auto my-8 flex items-center gap-4 before:h-px before:flex-1 before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300 after:content-['']">
        End
      </div>
    </div>
  );
}

export default Table;
