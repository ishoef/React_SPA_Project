import React from 'react';

const Footer = () => {
    return (
        <div className='w-full h-[300px] flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <img src="https://i.ibb.co/zTvwtSyr/Auction-Gallery.png" alt="" />
                <div className='flex gap-4 font-semibold'>
                    <p>Bid.</p>
                    <p>Win.</p>
                    <p>Own.</p>
                </div>
                <div>
                    <ul className="flex gap-14 textarea-md">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Auctions</li>
                        <li className="cursor-pointer">Categories</li>
                        <li className="cursor-pointer">How to works</li>
                    </ul>
                </div>
                <p>© 2025 AuctionHub. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;