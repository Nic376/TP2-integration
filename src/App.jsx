import React from "react"
import CatScreen from "./cat/CatScreen";
import Header from "./Header/Header";
import '@fontsource/roboto';


class App extends React.Component {
  render() {
   return (
    <div className="wrapper">
      <Header />
      <CatScreen />
    </div>
   )
  }
}

export default App;
