import { use, useState } from "react";
import Auction from "./Auction";
import { RxCross2 } from "react-icons/rx";
import { toast } from 'react-toastify';
import { FaHeart } from "react-icons/fa";

const Auctions = ({itemsPromis}) => {
    
    const items = use(itemsPromis);

    const [hearts, setHeart] = useState([]);
    const [prices, setPrises] = useState(0);
    
    const handleHeart = (item) => {
        setHeart([...hearts, item]);
        const toatalPrices = prices + item.currentBidPrice;
        setPrises(toatalPrices);
        toast('🦄 Item Added to your Favorite Lists!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    
    const hideItemToggle = (id, price) => {
        const newHearts = hearts.filter((item) => item.id !== id);
        setHeart(newHearts);
        const toatalPrices = prices - price;
        setPrises(toatalPrices);
        toast.warn('Item Removed From Favorite!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",    
        });
    }
    
    return (
        <div className='bg-[#ebf0f5] py-20'>
            <div className='w-[80%] mx-auto'>
                <h1 className='text-[#0E2954] text-2xl font-semibold'>Active Auctions</h1>
                <p className='text-[#00000080]'>Discover and bid on extraordinary items</p>
                <div className='flex gap-5 mt-5'>
                    <div className="left-box w-[75%] h-fit bg-white rounded-2xl">
                        
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th className="text-[16px] text-[#00000090]">Items</th>
                                        <th className="text-center text-[16px] text-[#00000090]">Current Bid</th>
                                        <th className="text-center text-[16px] text-[#00000090]">Time Left</th>
                                        <th className="text-center text-[16px] text-[#00000090]">Bid Now</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        items.map(item => <Auction hearts={hearts} handleHeart={handleHeart} key={item.id} item={item}></Auction>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="right-box w-[30%] rounded-2xl">
                        <div className="bg-white rounded-2xl">
                            <div className="flex justify-center items-center gap-4 py-7 text-[#0E2954] text-2xl font-semibold border-b border-b-gray-300">
                                <h1><FaHeart size={20} color="red" /></h1>
                                <h1 className="text-[#0E2954]">Favorite Item</h1>
                            </div>
                            { hearts.length === 0 && (
                                <div className='flex justify-center items-center'>
                                    <div className='flex flex-col gap-6 py-7 '>
                                        <h1 className='text-xl font-semibold text-center text-[#0E2954]'>No favorites yet</h1>
                                        <p className='w-[70%] mx-auto text-[#00000090] text-center'>Click the heart icon on any item to add it to your favorites</p>
                                    </div>
                                </div>
                            )}
                            <div>
                                {
                                    hearts.map((heart) => (
                                        <div>
                                            { hearts.length && (
                                                <div className="flex justify-between items-center mt-4 pb-4 border-b border-b-gray-300 mx-7">
                                                    <div>
                                                            <img className="w-16 h-16" src={heart.image} alt="" />
                                                    </div>
                                                    <div className="flex flex-col gap-4 basis-[70%] ml-4 h-fit" >
                                                        <div className="text-[14px] text-black">{heart.title}</div>
                                                            <div className="flex gap-7 text-[#0E2954]">
                                                                <p>${heart.currentBidPrice}</p>
                                                                <p>Bids: {heart.bidsCount}</p>
                                                            </div>
                                                    </div>
                                                    <div>
                                                        <button onClick={() => hideItemToggle(heart.id, heart.currentBidPrice)} className="cursor-pointer"><RxCross2 color="black" /></button>

                                                    </div>
                                                </div>
                                                )
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='flex justify-between py-4 px-7 text-xl font-semibold border-t border-t-gray-300 text-[#0E2954]'>
                                <p>Total bids Amount</p>
                                <p>${prices}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auctions;