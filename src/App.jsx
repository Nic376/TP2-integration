import React from "react"
import CartesChats from "./CartesChats/CartesChats";
import Header from "./Header/Header";


class App extends React.Component {

  render() {
   return (
     <div>
      <Header />
      <CartesChats />
    </div>
   )
  }

}

export default App;
