import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Shop } from "./Pages/Shop";
import { MyList } from "./Pages/MyList";
import { BrowserRouter } from "react-router-dom";
import Header from "./component/Header";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/list" element={<MyList />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
