import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import SecondPage from "./components/SecondPage";
import MenuButtom from "./components/MenuButtom";
export default function App(){
  return (
    <>
    <BrowserRouter>
    <MenuButtom/>
    <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/SP/:id" element={<SecondPage/>}></Route>
    </Routes>
    </BrowserRouter>
    {/* {<HomePage/>} */}
    {/* <SecondPage/> */}
    </>
);
}
