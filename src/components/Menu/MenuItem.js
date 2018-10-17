import React from "react";

const MenuItem = ({ name, price, desc }) => (
  <div className="w-full sm:w-1/2 md:w-2/5 mx-auto mb-8 text-center sm:text-left text-gold">
    <h3 className="pb-2">
      {name}
      <span className="ml-4 font-normal">{price}</span>
    </h3>
    <p className="italic">{desc}</p>
  </div>
);

export default MenuItem;
