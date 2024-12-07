import React from "react";

// Define the type for the props
type NavOptionProps = {
  option: string;  // The 'option' prop is expected to be a string
};

const NavOption: React.FC<NavOptionProps> = ({ option }) => {
  return (
    <div className="px-4 py-2 text-white cursor-pointer hover:text-blue-300 transition-colors">
      {option}
    </div>
  );
};

export default NavOption;
