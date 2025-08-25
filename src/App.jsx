import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import RedirectHandler from './components/RedirectHandler/RedirectHandler';
import AITraining from './pages/AITraining/AITraining';
import CurriculumSamples from './pages/CurriculumSamples/CurriculumSamples';
import ConnectCollaborate from './pages/ConnectCollaborate/ConnectCollaborate';
import Consulting from './pages/Consulting/Consulting';
import Contact from './pages/Contact/Contact';
import HomePage from './pages/Home/HomePage';
import InfrastructureLegacySystemsEngineeringAddendum from './pages/InfrastructureLegacySystemsEngineeringAddendum/InfrastructureLegacySystemsEngineeringAddendum';
import ITWorks from './pages/ITWorks/ITWorks'
import LegacyEngineeringTexaco from './pages/LegacyEngineering/LegacyEngineering'
import LegacyProfile from './pages/LegacyProfile/LegacyProfile';
import LegacyProfileDocument from './pages/LegacyProfileDocument/LegacyProfileDocument';
import MyBlogs from './pages/MyBlogs/MyBlogs';
import MyProjects from './pages/MyProjects/MyProjects';
import MyRecommendations from './pages/MyRecommendations/MyRecommendations';
import NotFoundPage from './pages/NotFound/NotFound';
import Offerings from './pages/Offerings/Offerings';
import ProblemSolvingProfile from './pages/ProblemSolvingProfile/ProblemSolvingProfile';
import ProfessionalSummary from './pages/ProfessionalSummary/ProfessionalSummary';
import ResumeArchitect from './pages/ResumeArchitect/ResumeArchitect';
import ResumeEngineer from './pages/ResumeEngineer/ResumeEngineer';
import ResumeManager from './pages/ResumeManager/ResumeManager';
import Resumes from './pages/Resumes/Resumes';
import Software from './pages/Software/Software';
import Version from './pages/Version/Version';
import WorkflowModernization from './pages/WorkflowModernization/WorkflowModernization'
import { SiteConfigContext } from './context/SiteConfigContext';

const App = () => {
    const config = useContext(SiteConfigContext);

    if (!config) return null;

    return (
        <BrowserRouter basename={config.BasePath}>
            <RedirectHandler />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="ai-training" element={<AITraining />} />
                    <Route path="curriculum-samples" element={<CurriculumSamples />} />
                    <Route path="connect-collaborate" element={<ConnectCollaborate />} />
                    <Route path="consulting" element={<Consulting />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="infrastructure-legacy-systems-engineering-addendum" element={<InfrastructureLegacySystemsEngineeringAddendum />} />
                    <Route path="it-works" element={<ITWorks />} />
                    <Route path="legacy-engineering-texaco" element={<LegacyEngineeringTexaco />} />
                    <Route path="legacy-profile" element={<LegacyProfile />} />
                    <Route path="legacy-profile-document" element={<LegacyProfileDocument />} />
                    <Route path="myblogs" element={<MyBlogs />} />
                    <Route path="myprojects" element={<MyProjects />} />
                    <Route path="myrecommendations" element={<MyRecommendations />} />
                    <Route path="offerings" element={<Offerings />} />
                    <Route path="problem-solving-profile" element={<ProblemSolvingProfile />} />
                    <Route path="professional-summary" element={<ProfessionalSummary />} />
                    <Route path="resume-architect" element={<ResumeArchitect />} />
                    <Route path="resume-engineer" element={<ResumeEngineer />} />
                    <Route path="resume-manager" element={<ResumeManager />} />
                    <Route path="resumes" element={<Resumes />} />
                    <Route path="software" element={<Software />} />
                    <Route path="version" element={<Version />} />
                    <Route path="workflow-modernization" element={<WorkflowModernization />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;