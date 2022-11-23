import React, { Component} from "react";
import "./App.less";
import Contact from "./Contact";
import Information from "./Information";
import Portfolio from "./Portfolio";
import Menu from "./Menu";

class App extends Component{
  render(){
    return(
      <div className="app">
        <Menu />
        <Information />
        <Portfolio />
        <Contact />
        <footer>
          &copy; {new Date().getFullYear()} Dzmitry Vaniukhin
        </footer>
      </div>
    );
  }
}

export default App;