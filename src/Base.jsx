import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App";

const Base = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App type="ipar" />} />
        <Route path="/agrar" exact element={<App type="agrar" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Base;