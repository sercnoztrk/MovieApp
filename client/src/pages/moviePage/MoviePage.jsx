import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";
import { BiLike, BiDislike } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart, AiFillLike, AiFillDislike } from "react-icons/ai";
import { withRouter } from "../../utilities/withRouter";
import Comments from "./Comments";

const MoviePage = () => {
  const [query, setQuery] = useState('Comments');
  const { state } = useLocation();
  const movieData = state;
  const [windowSize, setWindowSize] = useState(window.innerWidth - 290 + "px");
  const [likedd, setlikedd] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth - 290 + "px");
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div>
      {/* <div className="dark:bg-[#101018] h-screen fixed w-full "></div> */}
    <div className="w-full z-0 relative group top-[-84px] dark:bg-[#101018] h-[2000px]  text-screenLight">
      <div className=" absolute z-20 w-full mt-28 px-3 y9:px-7 sm:px-10 md:px-5 lg:px-2 xl:px-10 2xl:px-20  ">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-auto flex justify-center md:justify-start ">
              <div className="flex-col">
                <img src={movieData?.poster} alt="" className="min-w-[180px] max-h-[265px] y9:min-w-[240px] y9:max-h-[352px] lg:min-w-[200px] lg:max-h-[351px]  xl:min-w-[240px] xl:max-h-[352px] self-center  rounded-lg  "/>
                <div className="flex justify-center mt-1 z-10">

                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mr-8">
              <div className=" flex flex-col  mx-2 xl:mx-5   md:flex-row md:justify-between ">
                <div>
                  <div>
                    <p className="text-[25px] y9:text-[28px] font-bold text-center md:text-start  ">
                      {movieData?.title}
                    </p>
                    <div className="flex justify-center md:justify-start text-textPlight ">
                      <p>{movieData?.year.$numberInt}</p>
                      <RxDotFilled className="self-center" />
                      <p>{movieData?.type}</p>
                      <RxDotFilled className="self-center" />
                      <p>{movieData?.runtime.$numberInt}</p>
                    </div>
                    <div className="flex md:hidden mt-3 justify-center gap-2">
                      <div className="border md:border-0 border-border px-1 rounded-lg w-[100px] h-[76px] self-center text-center  backdrop-blur-sm  bg-screenDark bg-opacity-80  ">
                        <div>
                          <p className="text-[29px] text-yellow-400 inline">{movieData?.imdb.rating.$numberDouble}</p>
                          /10
                        </div>
                        <p className="text-sm text-textPDark">{movieData?.imdb.votes.$numberInt} votes</p>
                      </div>
                      <div className=" text-[28px] cursor-pointer text-green-700 md:border-0 border border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark ">
                        {likedd ? (
                          <AiFillLike className="self-center" />
                        ) : (
                          <BiLike className="self-center" />
                        )}
                      </div>
                      <div className=" text-[28px] cursor-pointer text-red-700 border md:border-0 border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark">
                        {likedd ? (
                          <AiFillDislike className="self-center" />
                        ) : (
                          <BiDislike className="self-center" />
                        )}
                      </div>
                      <div className=" text-[28px] cursor-pointer  border md:border-0 border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark" onClick={() => setlikedd(!likedd)}>
                        {likedd ? (
                          <AiFillHeart className="self-center" />
                        ) : (
                          <AiOutlineHeart className="self-center" />
                        )}
                      </div>
                    </div>
                    <div className="flex justify-center md:justify-start mt-5">
                      {movieData?.genres.slice(0, 5).map((genre, index) => (
                        <Link key={index} to="#">
                          <p className="mr-2 backdrop-blur-sm  bg-gray-200  dark:bg-opacity-10 bg-opacity-20 py-1 px-3 mt-2 rounded-sm hover:bg-screenDark  hover:text-screenLight duration-300 ">
                            {genre}
                          </p>
                        </Link>
                      ))}
                    </div>
                    <p className="my-3 text-sm lg:text-[16px] ">
                      Cast :
                      <p className="inline text-[16px] text-gray-600  md:text-textPlight">
                        
                        {movieData?.cast.toString()}
                      </p>
                    </p>
                    <p className="my-3 text-sm lg:text-[16px]">
                      Country :
                      <p className="inline text-[16px]  text-gray-600 md:text-textPlight">
                        
                        {movieData?.countries.toString()}
                      </p>
                    </p>
                    <p className="my-3 text-sm lg:text-[16px]">
                      Language :
                      <p className="inline text-[16px]  text-gray-600 md:text-textPlight">
                        {movieData?.languages.toString()}
                      </p>
                    </p>
                  </div>
                  <div className="mt-2 ">
                    {movieData?.fullplot}
                  </div>
                </div>
                <div className="flex flex-col w-full justify-between mt-4 ">
                  <div className="hidden md:flex md:flex-col md:justify-between self-end ">
                    <div>
                      <div className="flex gap-2 justify-center ">
                        <div className=" text-[28px] cursor-pointer text-green-700 md:border-0 border border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark ">
                          {likedd ? (
                            <AiFillLike className="self-center" />
                          ) : (
                            <BiLike className="self-center" />
                          )}
                        </div>
                        <div className=" text-[28px] cursor-pointer text-red-700 border md:border-0 border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark">
                          {likedd ? (
                            <AiFillDislike className="self-center" />
                          ) : (
                            <BiDislike className="self-center" />
                          )}
                        </div>
                        <div title="add to favrite" className=" text-[28px] cursor-pointer   border md:border-0 border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark" onClick={() => setlikedd(!likedd)}>
                          {likedd ? (
                            <AiFillHeart className="self-center" />
                          ) : (
                            <AiOutlineHeart className="self-center" />
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-2 justify-end ">
                        <div className="border md:border-0 border-border px-1 rounded-lg w-[100px] h-[76px] self-center text-center  backdrop-blur-sm  bg-screenDark bg-opacity-80  hover:bg-screenDark  ">
                          <div>
                            <p className="text-[29px] text-yellow-400 inline">
                              IMDB: {movieData?.imdb.rating.$numberDouble}
                            </p>
                            /10
                          </div>
                          <p className="text-sm text-textPDark ">
                            
                            {movieData?.imdb.votes.$numberInt} votes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28">
          <div className='w-full'>
            <ul className='flex justify-between md:mx-8  xl:mx-28 2xl:mx-36 text-[17px]'>
              {["Comments"].map((item , index)=>(
                <Link to={{pathname:'/movies/1',search:item}} key={index}>
                  <li
                    className={`px-4 py-2  ${query===item && 'bg-[length:100%_2px] font-semibold text-btn'} origin-right bg-left-bottom bg-gradient-to-r from-btn to-btn bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out`} 
                    onClick={()=>setQuery(item)}>{item}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="mx-8">
              {query==='Comments' && <Comments/>}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default withRouter(MoviePage);
