import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="" element={<AllMeetupsPage />} />
        <Route path="new-meetup" element={<NewMeetupPage />} />
        <Route path="favourites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}
export default App;
