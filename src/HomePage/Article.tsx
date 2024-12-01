import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { BsSave2 } from "react-icons/bs";
import Button from "../Button";
import { useState } from "react";

type Props = {
};

function Article({}: Props) {

    const [liked, setLiked ] = useState<boolean>(false);
    const [commentActive,setCommentActive] = useState<boolean>(false);

  return (
    <div className="h-full w-1/2 card card-compact bg-gray-700 m-20 p-5 shadow-xl">
      <div className="flex justify-left items-center gap-5 mb-5">
        <CgProfile className="text-5xl mb-[-20px]" />
        <h1 className="text-white pb-4 pt-7 text-3xl">Sigma123</h1>
      </div>
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center py-5 text-3xl">
          <div className="flex gap-5">
          <Button
            onClick={() => {
                setLiked((prev) => !prev);
            }}
            >
                <FaRegHeart className={`${liked ? 'text-red-500' : 'text-white'}`} />
            </Button>
            <Button  onClick={() => {
                setCommentActive((prev) => !prev);
            }}>
                <FaRegComment className={`${commentActive ? 'text-white' :  'text-gray-500'}`} />
            </Button> 
            <HiOutlinePaperAirplane />
          </div>
          <BsSave2 />
        </div>
        <h2 className="card-title">Flekixca123</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end"></div>
        {commentActive?
         <div>KOMENTAR</div>
         :
         <></>
         }
      </div>
    </div>
  );
}

export default Article;
