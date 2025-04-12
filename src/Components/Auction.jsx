import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Auction = ({hearts, item, handleHeart}) => {

    const {title, currentBidPrice, timeLeft, image} = item;

    const toogleBtn = () => {
        if (hearts.includes(item)) {
            return true;
        } else {
            return false;
        }
    }
  
    return (
        <tr>
            <td>
                <div className="flex gap-4">
                    <img className="w-16 h-16" src={image} alt="" />
                    <h1 className="text-[16px] text-[#0E2954]">{title}</h1>
                </div>
            </td>
            <td className="text-center text-[16px] text-[#0E2954]">${currentBidPrice}</td>
            <td className="text-center text-[16px] text-[#0E2954]">{timeLeft}</td>
            <td className="text-center text-[#0E2954]">
                <button onClick={() => handleHeart(item)} disabled={toogleBtn()} className={toogleBtn() ? "cursor-not-allowed" : "cursor-pointer"}>
                   { toogleBtn() ? <FaHeart size={20} color="red" /> : <CiHeart size={25} /> 
                    }
                </button>
            </td>
        </tr>
    );
};

export default Auction;