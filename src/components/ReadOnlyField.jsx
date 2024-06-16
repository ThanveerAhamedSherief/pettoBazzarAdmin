import React from 'react';

const ReadOnlyField = ({ label, value }) => {
    return (
        <div className="mb-4">
            <label className="block text-indigo-700 text-sm font-bold mb-2">
                {label}
            </label>
            <input 
                type="text" 
                value={value} 
                readOnly 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200 cursor-not-allowed"
            />
        </div>
    );
};

export default ReadOnlyField;