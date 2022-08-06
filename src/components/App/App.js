import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Promo from "../Promo/Promo.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe.js";
import Footer from "../Footer/Footer.js";
import PopupWithMenu from "../PopupWithMenu/PopupWithMenu.js";
import Profile from "../Profile/Profile.js";
import PageNotFound from "../PageNotFound/PageNotFoun.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import Main from "../Main/Main.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import {
  register,
  authorize,
  updateProfile,
  getProfile,
  getSavedMovies,
  createMovie,
  deleteMovie,
} from "../../utils/MainApi.js";
import {
  CurrentUserContext,
  currentUserDefault,
} from "../../contexts/currentUserContext.js";
import { moviesApi } from "../../utils/MoviesApi.js";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [usersMovies, setUsersMovies] = useState([]);
  const [isPopupWithMenuOpen, setIsPopupWithMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [infoTooltip, setInfoTooltip] = useState(false);
  const [message, setMessage] = useState("");
  const [preloader, setPreloader] = useState(false);
  const [currentUser, setCurrentUser] = useState(currentUserDefault);

  const history = useHistory();
  let location = useLocation().pathname;
  const handlerPopupWithMenuClick = () => {
    setIsPopupWithMenuOpen(true);
  };

  function fetchMovies() {
    setPreloader(true);
    moviesApi
      .getMovies()
      .then((res) => {
        setMovies(res);
        localStorage.setItem("movies", JSON.stringify(res));
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setPreloader(false);
      });
  }

  function getMovies(array, key) {
    const filterMoviesList = array.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(key.toLowerCase()) ||
        movie.description.toLowerCase().includes(key.toLowerCase())
      );
    });
    if (filterMoviesList.length === 0 && location === "/movies") {
      showInfoToolTip("Ничего не найдено");
    }
    if (filterMoviesList.length === 0 && location === "/saved-movies") {
      showInfoToolTip("У вас отсутствуют сохраненные фильмы");
    }
    return filterMoviesList;
  }

  function handlerSearchSubmit(key) {
    fetchMovies();
    setTimeout(() => setPreloader(false), 5000);
    setSearchMovies(getMovies(movies, key));
    localStorage.setItem(
      "searchMovies",
      JSON.stringify(getMovies(movies, key))
    );
  }

  function handlerSavedSearchSubmit(key) {
    setTimeout(() => setPreloader(false), 5000);
    setUsersMovies(getMovies(usersMovies, key));
  }

  function addMovie(movie) {
    createMovie(movie)
      .then((res) => {
        const newUsersdMovie = res;
        setUsersMovies([...usersMovies, newUsersdMovie]);
      })
      .catch((err) => console.log(err));
  }

  function removeMovie(movie) {
    const id = usersMovies.find((item) => item.movieId === movie.id)._id;
    deleteMovie(id)
      .then((res) => {
        getUsersMovies();
      })
      .catch((err) => console.log(err));
  }

  function removeSavedMovie(movie) {
    const id = usersMovies.find((item) => item.movieId === movie.movieId)._id;
    deleteMovie(id)
      .then((res) => {
        getUsersMovies();
      })
      .catch((err) => console.log(err));
  }

  function handleLikeMovie(movie, isLiked) {
    console.log(movie);
    isLiked ? removeMovie(movie) : addMovie(movie);
  }

  function getUsersMovies() {
    getSavedMovies()
      .then((usersmovies) => {
        setUsersMovies(usersmovies);
      })
      .catch((err) => console.log(err));
  }

  function checkLiked(movie) {
    return usersMovies.some((usersMovies) => usersMovies.movieId === movie.id);
  }

  function sortShortMovies(movies) {
    const shortMoviesArray = movies.filter((movie) => movie.duration <= 40);
    return shortMoviesArray;
  }

  const closeAllPopups = () => {
    setIsPopupWithMenuOpen(false);
    setInfoTooltip(false);
  };

  const showInfoToolTip = (error) => {
    setMessage(error);
    setTimeout(() => setMessage(""), 5000);
  };
  const handleLogin = (email, password) => {
    return authorize(email, password)
      .then((data) => {
        if (!data.token) {
          showInfoToolTip(
            "При авторизации произошла ошибка. Токен не передан или передан не в том формате."
          );
        }
        localStorage.setItem("token", data.token);
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((error) => {
        if (error === 400) {
          showInfoToolTip("Вы ввели некорректные данные");
        } else if (error === 401) {
          showInfoToolTip("Вы ввели неправильный логин или пароль");
        } else {
          setMessage("На сервере произошла ошибка");
        }
      });
  };
  const handleRegister = (name, email, password) => {
    return register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })

      .catch((error) => {
        if (error === 409) {
          showInfoToolTip("Пользователь с таким email уже существует");
        } else if (error === 400) {
          showInfoToolTip("Вы ввели некорректные данные");
        } else {
          showInfoToolTip("На сервере произошла ошибка");
        }
      });
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("movies");
    localStorage.removeItem("moviesSearch");
    setLoggedIn(false);
    history.push("/");
  };

  const handleUpdateUser = (email, name) => {
    updateProfile(email, name)
      .then((res) => {
        showInfoToolTip("Данные профиля успешно обновлены!");
      })
      .catch((error) => {
        if (error === 409) {
          showInfoToolTip("Email уже используется другим пользователем");
        } else {
          showInfoToolTip("При обновлении профиля произошла ошибка");
        }
      });
  };

  function checkToken() {
    const token = localStorage.getItem("token");
    if (token) {
      getProfile(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res);
            history.push(location);
          }
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("token");
          history.push("/");
        });
    }
  }

  function handleNotFoundButton() {
    history.push("/");
  }
  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    getProfile()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch(console.log);
  }, [loggedIn]);

  useEffect(() => {
    const localMovies = localStorage.getItem("movies");
    if (localMovies) {
      try {
        setMovies(JSON.parse(localMovies));
        const searchMovies = JSON.parse(localStorage.getItem("searchMovies"));
        if (searchMovies) {
          setSearchMovies(searchMovies);
        }
      } catch (err) {
        localStorage.removeItem("movies");
        fetchMovies();
      }
    } else {
      fetchMovies();
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    } else {
      Promise.all([getUsersMovies(), getProfile(token)]).catch(console.log);
    }
  }, [loggedIn]);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Header
              onPopupWithMenu={handlerPopupWithMenuClick}
              loggedIn={loggedIn}
            />
            <main className="main">
              <Promo />
              <AboutProject />
              <Techs />
              <AboutMe />
            </main>
            <Footer />
          </Route>
          <ProtectedRoute path="/movies" loggedIn={loggedIn}>
            <Route path="/movies">
              <Main
                onPopupWithMenu={handlerPopupWithMenuClick}
                loggedIn={loggedIn}
                movies={searchMovies}
                onSubmitSearch={handlerSearchSubmit}
                toggleMovieLike={handleLikeMovie}
                checkLiked={checkLiked}
                savedmovie={usersMovies}
                sortShortMovies={sortShortMovies}
                allMovies={searchMovies}
                message={message}
                preloader={preloader}
                setPreloader={setPreloader}
              />
              <Footer />
            </Route>
          </ProtectedRoute>
          <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
            <Route path="/saved-movies">
              <SavedMovies
                onPopupWithMenu={handlerPopupWithMenuClick}
                loggedIn={loggedIn}
                movies={usersMovies}
                onSubmitSearch={handlerSavedSearchSubmit}
                toggleMovieLike={removeSavedMovie}
                checkLiked={checkLiked}
                sortShortMovies={sortShortMovies}
                allMovies={usersMovies}
                message={message}
                preloader={preloader}
                setPreloader={setPreloader}
              />
              <Footer />
            </Route>
          </ProtectedRoute>
          <ProtectedRoute path="/profile" loggedIn={loggedIn}>
            <Route path="/profile">
              <Header onPopupWithMenu={handlerPopupWithMenuClick} />
              <Profile
                handleSignOut={handleSignOut}
                onUpdateUser={handleUpdateUser}
                message={message}
                user={currentUser}
              />
            </Route>
          </ProtectedRoute>
          <Route path="/sign-up">
            <Register handleRegister={handleRegister} message={message} />{" "}
          </Route>{" "}
          <Route path="/sign-in">
            <Login handleLogin={handleLogin} message={message} />
          </Route>
          <Route path="*">
            <PageNotFound onClick={handleNotFoundButton} />
          </Route>{" "}
        </Switch>
        <PopupWithMenu
          isOpen={isPopupWithMenuOpen}
          onClose={closeAllPopups}
          closePopup={closeAllPopups}
        />{" "}
      </CurrentUserContext.Provider>{" "}
    </div>
  );
}

export default App;
