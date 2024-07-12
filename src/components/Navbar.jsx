import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-white">
      <nav className="bg-white px-4 py-3 md:px-6 md:py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center">
          {/* College Logo */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxtd6RZUcCcfZxnRvDRXcr9oXjcp2KX6-H9Q&s"
            alt="College Logo"
            className="h-8 w-8"
          />
          {/* College Name with Custom Font and Increased Text Size */}
          <span className="ml-2 text-gray-800 font-medium text-2xl">NITH RESULT</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
