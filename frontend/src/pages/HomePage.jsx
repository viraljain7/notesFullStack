import React from "react";
import toast from "react-hot-toast";

function HomePage() {
  return (
    <button className="btn" onClick={() => toast.success('Button clicked!')}  >Click Me</button>
  )
 
}
export default HomePage;
