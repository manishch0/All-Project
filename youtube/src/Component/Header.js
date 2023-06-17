import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { json } from "react-router-dom";
// import { json } from "react-router-dom";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/Constant";
import { cacheResult } from "../Utils/searchSlice";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  // console.log(searchQuery);
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getQuerySearch();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getQuerySearch = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestion(json[1]);
    dispatch(
      cacheResult({
        [searchQuery]: json[1],
      })
    );
  };
  const dispatch = useDispatch();
  const toggleMenuHandle = () => {
    dispatch(toggleMenu());
  };
  return (
    // <header className="grid grid-flow-col items-center">
    <header className="flex justify-between items-center p-2 shadow-lg">
      <div className="flex gap-8 items-center ">
        <img
          onClick={() => toggleMenuHandle()}
          className="h-8 w-8 cursor-pointer"
          alt="HumbugerIcon"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg"
        />
        <a href="/">
          <img
            className="h-12 w-15"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
            alt="YouTube logo"
          />
        </a>
      </div>
      <div>
        <div className="flex ml-4">
          <input
            className="w-full h-7 border-solid border border-gray-600 rounded-full rounded-r"
            placeholder="Search"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={(e) => {
              setShowSuggestion(true);
            }}
            onBlur={(e) => {
              setShowSuggestion(false);
            }}
          />
          <button className=" border-solid border border-gray-600 rounded-full rounded-l">
            Search
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed mx-3 py-5 px-2 bg-white w-48 border border-gray-100 rounded-lg shadow-lg">
            <ul>
              {suggestion.map((e, i) => (
                <li key={i} className="py-2 shadow-sm hover:bg-gray-100">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          className="h-8 w-8 mr-4"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrAeGZS6pC90zXGR17NB8g4E_ICBdZYh8YA&usqp=CAU"
          alt="Avtar image"
        />
      </div>
    </header>
  );
}

export default Header;
