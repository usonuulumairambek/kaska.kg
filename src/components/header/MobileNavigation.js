import React, { useState } from "react";
import Navigation from "./Navigation";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
function MobileNavigation() {
  const [open, setopen] = useState(false);
  return (
    <div>
      {open && <Navigation />}
      {!open ? (
        <HiMenuAlt1 size="50px" onClick={() =>setopen(!open)} />
      ) : (
        <IoClose  size="50px" onClick={()=>setopen(!open)} />
      )}
    </div>
  );
}

export default MobileNavigation;
