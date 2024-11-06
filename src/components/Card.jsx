import React from "react";

const Card = React.memo(({ image, name, role }) => {
  return (
    <a
      className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition mx-auto w-[280px] md:w-full"
      href="#"
    >
      <div className="flex-shrink-0 h-[200px] md:h-[250px] rounded-t-xl overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          src={image}
          alt="Image Description"
        />
      </div>
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="mt-1 text-gray-500">{role}</p>
      </div>
    </a>
  );
});

Card.displayName = "Card";

export default Card;
