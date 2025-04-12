import React from 'react';

const HeroSection = () => {
    return (
        <div className='flex justify-center items-center bg-[url(https://i.ibb.co/23xxwZKJ/Banner-min.jpg)] bg-no-repeat bg-cover bg-center  w-full h-[650px] '>
            <div className='w-[80%] mx-auto'>
                <div className='flex flex-col items-start gap-4 w-150'>
                    <h1 className='text-white text-5xl font-semibold'>Bid on Unique Items from Around the World</h1>
                    <p className='text-[#ffffff80] text-xl'>Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
                    <button className='btn rounded-full text-[16px]'>Explore Auctions</button>
                </div>
            </div>            
        </div>
    );
};

export default HeroSection;