import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const ScrollToTop = () => {
  return (
    <div
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="fixed bottom-[20px] right-[20px] bg-[#00ced1] p-3 rounded-full cursor-pointer"
    >
      <ExpandLessIcon className="text-white" />
    </div>
  );
};

export default ScrollToTop;
