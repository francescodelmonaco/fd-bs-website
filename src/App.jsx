import { BrowserRouter, Routes, Route } from "react-router-dom";

// layouts
import DefaultLayout from "./layouts/DefaultLayout";

// pages
import HomePage from "./pages/HomePage";
// import ProjectsPage from "./pages/ProjectsPage";
// import ContactsPage from "./pages/ContactsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          {/* <Route path="/projects" Component={ProjectsPage} /> */}
          {/* <Route path="/contacts" Component={ContactsPage} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
};