import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import RulesetPage from './pages/RulesetPage'
import LeaderboardPage from './pages/LeaderboardPage'
import StandingsPage from './pages/StandingsPage'
import CardPreview from './pages/CardPreview'

export default function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/ruleset" element={<RulesetPage />} />
        <Route path="/standings" element={<StandingsPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/card-preview" element={<CardPreview />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}
