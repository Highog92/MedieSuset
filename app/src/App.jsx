import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layouts/Main";
import { Homepage } from "./Pages/Homepage"
import { Camps } from "./pages/Camps"
import { Tickets } from "./pages/Tickets.";
import { Events } from "./pages/Events";
import { PracticalInfo } from "./pages/practicalInfo";
import { Login } from "./pages/Login";

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout title='Homepage' />}>
            <Route path="/homepage" element={<Homepage title="Homepage" />} />
            <Route path="/events" index element={<Events title='events' />} />
            <Route path="/camps" index element={<Camps title='camps' />} />
            <Route path="/tickets" index element={<Tickets title='tickets' />} />
            <Route path="/practicalInfo" index element={<PracticalInfo title='practicalInfo' />} />
            <Route path="/login" index element={<Login title='login' />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
