import React from "react";
import BellIcon from "./assets/Bell.png"

const NavBar = () => {
  return (
    <div>

      <header className="bg-[#fff] py-4">
        <div className="flex justify-between items-center w-[80%] mx-auto">
            <div className="cursor-pointer">
                <img src="https://i.ibb.co/zTvwtSyr/Auction-Gallery.png" alt="logo" />
            </div>
            <div>
                <ul className="flex justify-between items-center gap-10 text-xl">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">Auctions</li>
                    <li className="cursor-pointer">Categories</li>
                    <li className="cursor-pointer">How to works</li>
                </ul>
            </div>
            <div className="flex gap-5 items-center">
                <div className="cursor-pointer bg-[#fff] w-12 h-12 flex justify-center items-center rounded-full ">
                    <img src={BellIcon} alt="" />
                </div>
                <div className="avatar cursor-pointer">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                    </div>
                </div>
            </div>
      </header>
    </div>
  );
};

export default NavBar;
