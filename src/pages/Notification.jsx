import React, { useState } from 'react';

const notifications = [
  { id: 1, message: 'New comment on your post' },
  { id: 2, message: 'New follower' },
  { id: 3, message: 'Message from John' },
];

const NotificationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-gray-800 text-white p-2 rounded-full focus:outline-none"
      >
         <p className="pt-1 pr-1 pb-1 pl-1 bg-white text-gray-700 rounded-full transition-all duration-200
                  hover:text-gray-900 focus:outline-none hover:bg-gray-100">
                      <span className="justify-center items-center flex">
                        <span className="justify-center items-center flex">
                          <span className="items-center justify-center flex">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                              stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4
                          0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6
                          0H9"/></svg>
                          </span>
                        </span>
                      </span>
                    </p>
                    <p className="px-1.5 py-0.5 font-semibold text-xs items-center bg-indigo-600 text-white rounded-full inline-flex
                  absolute -top-px -right-1">{notifications.length}</p>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {notifications.length > 0 ? (
              notifications.map(notification => (
                <a
                  key={notification.id}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  {notification.message}
                </a>
              ))
            ) : (
              <div className="block px-4 py-2 text-sm text-gray-700">No notifications</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationMenu;