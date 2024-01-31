import { LOGO_IMAGE } from "../utils/constants";

const Header = () => {
  return (
    <div className="px-20 w-screen py-2 absolute bg-gradient-to-b from-black z-10">
      <div className="flex">
        <img src={LOGO_IMAGE} alt="logo" className="w-44 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
