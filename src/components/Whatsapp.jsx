import React from "react";

const Whatsapp = React.memo(() => {
    const phoneNumber = "919778180794";
  
    return (
      <a
        href={`https://wa.me/${phoneNumber}`}
        className="fixed bottom-[5vh] right-[5vh]"
      >
        <figure className=" z-50 w-[60px] h-[60px] p-2">
          <img src="whatsapp.png" alt="" />
        </figure>
      </a>
    );
  });

  Whatsapp.displayName = "Whatsapp"
  
  export default Whatsapp;
  