import { FaImdb,  } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Spin } from "antd";

const ItemCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie?._id}`} state={ movie }>
      <div className={`flex flex-col w-[140px]  y9:w-[182px]`}>
        <div className="relative group text-textDark">
          <img src={movie?.poster} alt="" className={`w-[140px] h-[205px] y9:w-[182px] y9:h-[268px] rounded-xl`}/>
          <div className="absolute hidden y9:flex z-20  inset-0  rounded-xl origin-bottom scale-y-0 group-hover:scale-y-100 group-hover:bg-opacity-80   group-hover:bg-screenDark  duration-200 cursor-pointer ">
            <div className=" flex flex-col justify-between">
              <div>
                <p className=" px-5 pt-5 font-bold">
                  Year : {movie?.year.$numberInt}
                </p>
                <p className=" px-5 pt-1 font-semibold">
                  {movie?.runtime?.$numberInt || "--"} minutes
                </p>
                <div className="flex flex-wrap mt-2 mx-2 text-sm font-semibold">
                  {movie?.genres.slice(0, 3).map((genre, index) => (
                      <p className="mr-2 backdrop-blur-sm  bg-gray-200 bg-opacity-10 py-1 px-3 mt-2 rounded-sm hover:bg-screenDark " key={index}>
                        {genre}
                      </p>
                  ))}
                </div>
              </div>
              <div className="text-center pb-6  w-[180px] px-3 ">
                <button className=" btn py-2 w-full rounded-md  backdrop-blur-sm  font-bold hover:rounded-xl">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[140px] text-center y9:w-[180px]  flex self-center  justify-center text-[17px] ">
          <p>{movie?.title}</p>
        </div>
        <div className="text-[18px] text-[#ebaf1a] flex justify-center ">
          <FaImdb className="self-center mx-1" />
          <p className="self-center font-semibold">{movie?.imdb.rating.$numberDouble}</p>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
