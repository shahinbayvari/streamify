import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./context/Store";
import { SearchComponent } from "./components/SearchComponent";
import { MovieListComponent } from "./components/MovieListComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="content">
      <h1>Movie Database</h1>
      <SearchComponent />
      <MovieListComponent />
      </div>
    </Provider>
  );
}

export default App;
