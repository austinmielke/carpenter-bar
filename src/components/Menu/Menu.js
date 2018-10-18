import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ menu }) => (
  <section id="menu" className="my-32">
    <div className="container mx-auto text-gold">
      <h2 className="pb-8 mb-8 border-gold border-b-4 text-center text-4xl uppercase tracking-wide">
        Signature Cocktails
      </h2>
      {menu.cocktails.map(cocktail => (
        <MenuItem
          key={cocktail.name}
          name={cocktail.name}
          price={cocktail.price}
          desc={cocktail.desc}
        />
      ))}
    </div>
  </section>
);

export default Menu;
