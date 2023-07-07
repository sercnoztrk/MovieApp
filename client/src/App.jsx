import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import SideBar from "./components/Sidebar/SideBar";
import MoviePage from "./pages/moviePage/MoviePage";
import MoviesPage from "./pages/moviesPage/MoviesPage";
import "./styles/globalStyles.css";

function App() {
  const [isSearchItemsShow, setIsSearchItemsShow] = useState(false);
  const [mode, setMode] = useState("dark");
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (mode === "light") { return document.documentElement.classList.remove("dark") }
    else { document.documentElement.classList.add("dark") }
  }, [mode]);
  return (
    <BrowserRouter>
      <div onClick={() => setIsSearchItemsShow(false)} className={`${ !isSearchItemsShow && "hidden" } fixed z-40 w-full h-full bg-black backdrop-blur-sm dark:bg-opacity-60 bg-opacity-25`}/>
        <div onClick={() => setOpenMenu(false)} className={`${ !openMenu && "hidden" } fixed z-[51] w-full h-full bg-black lg:hidden backdrop-blur-sm dark:bg-opacity-70 bg-opacity-25`}/>
          <div className={`dark:text-textDark text-textLight ${mode === "dark" ? "gradient-06" : "lightTheme"} `}>
            <NavBar
              isSearch={isSearchItemsShow}
              setIsSearch={setIsSearchItemsShow}
              setMode={setMode}
              mode={mode}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
            <div className="flex">
              <SideBar
                mode={mode}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                setMode={setMode}
              />
              <div className="w-full flex flex-col">
                <Switch>
                  <Route path={"/series"} component={() => <SeriesPage />} />
                  <Route path={"/movies/:id"} exact component={() => <MoviePage />}/>
                  <Route path={"/genres/:id"} exact component={() => <MoviesByGenre />}/>
                  <Route path={"/movies"} exact component={() => <MoviesPage />} />
                  <Route path={"/genres"} exact component={() => <Genres />} />
                  <Route path={"/"} exact component={() => <Explore />} />
                </Switch>
              </div>
            </div>
          </div>
    </BrowserRouter>
  );
}

export default App;
