import React from "react"
import { Route, Routes } from "react-router-dom"

import Beranda from "./pages/Beranda"
import Chat from "./pages/Chat"
import Login from "./pages/Login"

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Beranda />} />
      <Route path="chat" element={<Chat />} />
      <Route path="login" element={<Login />} />
    </Routes>
  )
}

export default App
