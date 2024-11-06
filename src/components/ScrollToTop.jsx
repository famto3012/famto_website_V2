import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import React from "react";

const ScrollToTop = React.memo(() => {
  return (
    <div
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="fixed bottom-[20px] right-[20px] bg-[#00ced1] p-3 z-50 rounded-full cursor-pointer"
    >
      <ExpandLessIcon className="text-white" />
    </div>
  );
});

ScrollToTop.displayName = "ScrollToTop";

export default ScrollToTop;
