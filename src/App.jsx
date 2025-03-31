import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import MyBlogs from './pages/MyBlogs/MyBlogs';
import MyProjects from './pages/MyProjects/MyProjects';
import MyRecommendations from './pages/MyRecommendations/MyRecommendations';
import MyContacts from './pages/MyContacts/MyContacts';
import Version from './pages/Version/Version';
import Resumes from './pages/Resumes/Resumes';
import ResumeEngineer from './pages/ResumeEngineer/ResumeEngineer';
import ResumeManager from './pages/ResumeManager/ResumeManager';

const App = () => {
    return (
        <BrowserRouter basename="/my-personal-react-website">
            <Layout>
                <Routes>
                    <Route path={'/'} element={<HomePage />} />
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/myprojects'} element={<MyProjects />} />
                    <Route path={'/myrecommendations'} element={<MyRecommendations />} />
                    <Route path={'/myblogs'} element={<MyBlogs />} />
                    <Route path={'/mycontacts'} element={<MyContacts />} />
                    <Route path={'/resumes'} element={<Resumes />} />
                    <Route path={'/version'} element={<Version />} />
                    <Route path={'/resume-engineer'} element={<ResumeEngineer />} />
                    <Route path={'/resume-manager'} element={<ResumeManager />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;