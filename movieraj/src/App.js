import { BrowserRouter, Routes,Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          {/* <Route path='/test' element={<Test/>} /> */}
          <Route path='/*' element={<h1>Erorr...</h1>} />

          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
