import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserLayout from "./components/Layout/UserLayout"
import NotFoundP from "./pages/NotFoundP"
// import HomePage from "./pages/user/HomePage"
import AboutPage from "./pages/user/AboutPage"
import SkillsPage from "./pages/user/SkillsPage"
import RecumePage from "./pages/user/RecumePage"
import PortfoliosPage from "./pages/user/PortfoliosPage"
import TestmonialPage from "./pages/user/TestmonialPage"
import ContactPage from "./pages/user/ContactPage"
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/* <Route index element={<HomePage />} /> */}
          <Route index element={<AboutPage />} />
          <Route path="skills" element={<SkillsPage />} />
          {/* <Route path="experiences" element={<ExperiencesPage />} />
          <Route path="education" element={<EducationPage />} /> */}
          <Route path="resume" element={<RecumePage />} /> 
          <Route path="portfolios" element={<PortfoliosPage />} />
          <Route path="testmonial" element={<TestmonialPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<NotFoundP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
