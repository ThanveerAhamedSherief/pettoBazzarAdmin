import React, { useState } from 'react';

const ProductView = () => {
    const images = [
        "https://via.placeholder.com/400x300?text=Image+1",
        "https://via.placeholder.com/400x300?text=Image+2",
        "https://via.placeholder.com/400x300?text=Image+3"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevious = () => {
        const newIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(newIndex);
    };

    return (
        <div className="max-w-2xl mx-auto my-10 p-6 bg-gray-800 rounded-lg shadow-md">
          <button className="mb-4 text-right left-0 top-0" onClick={() => setOpenView(!openView)}>
          <IoMdCloseCircle className="text-indigo-700 text-xl" />
        </button>
            <div className="relative">
                <img 
                    className="w-full h-64 object-cover rounded-t-lg" 
                    src={images[currentImageIndex]} 
                    alt="Product"
                />
                <button 
                    onClick={handlePrevious} 
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
                >
                    &lt;
                </button>
                <button 
                    onClick={handleNext} 
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
                >
                    &gt;
                </button>
            </div>
            <div className="p-6 max-h-96 overflow-y-auto">
                <h2 className="text-2xl font-semibold text-gray-800">Product Name</h2>
                <p className="text-gray-600 mt-4">
                    This is a great product that you will love. It has many amazing features and benefits that make it a must-have item. Here are some details:
                </p>
                <ul className="list-disc list-inside mt-4">
                    <li>Feature 1: Lorem ipsum dolor sit amet.</li>
                    <li>Feature 2: Consectetur adipiscing elit.</li>
                    <li>Feature 3: Integer nec odio.</li>
                    <li>Feature 4: Praesent libero.</li>
                    <li>Feature 5: Sed cursus ante dapibus diam.</li>
                    <li>Feature 6: Sed nisi.</li>
                    <li>Feature 7: Nulla quis sem at nibh elementum imperdiet.</li>
                    <li>Feature 8: Duis sagittis ipsum.</li>
                    <li>Feature 9: Praesent mauris.</li>
                    <li>Feature 10: Fusce nec tellus sed augue semper porta.</li>
                </ul>
                <div className="mt-4">
                    <span className="text-gray-800 text-xl font-bold">$99.99</span>
                </div>
                <button 
                    className="mt-6 w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductView;