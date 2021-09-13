import React from "react"
import CartesChats from "./CartesChats/CartesChats";
import CatScreen from "./cat/CatScreen";
import Header from "./Header/Header";


class App extends React.Component {

  render() {
   return (
     <div>
      <Header />
      <CartesChats />
      <CatScreen />
    </div>
   )
  }

}

export default App;
