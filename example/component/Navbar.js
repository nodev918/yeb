import { Home } from "./views/Home.js";
import { Register } from "./views/Register.js";
import { Post } from "./views/Post.js";
import { Profile } from "./views/Profile.js";

const Navbar = function () {
  Home();
  Register();
  Post();
  Profile();
};

export { Navbar };
