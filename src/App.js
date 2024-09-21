import { Home } from "./Pages/Home";
import { Data } from "./Pages/Data";
import { NoPageFound } from "./Pages/NopageFound";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Productform from "./Components/Productform";
import { Content } from "./Pages/content";
import { Profile } from "./Pages/Profile";
import { User } from "./Pages/User";

function App() {
  return (
    <nav>
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="/Home">
                  Home
                </a>

                <a class="nav-link" href="/Profile">
                  Profile
                </a>
                <a class="nav-link" href="/User">
                  User
                </a>
                <a class="nav-link" href="/content">
                  Content
                </a>
                <a class="nav-link" href="/Product">
                  Add Product
                </a>
                <a class="nav-link" href="/Data">
                  Data
                </a>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Data" element={<Data/>} />
          <Route path="/Content" element={<Content/>} />
          <Route path="/User" element={<User/>} />
          <Route path="/Product" element={<Productform />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
    </nav>
  );
}

export default App;
