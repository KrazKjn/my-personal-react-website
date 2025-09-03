import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import RedirectHandler from './components/RedirectHandler/RedirectHandler';
import AITraining from './pages/AITraining/AITraining';
import ChangeGovernance from './pages/ChangeGovernance/ChangeGovernance';
import ConnectCollaborate from './pages/ConnectCollaborate/ConnectCollaborate';
import Consulting from './pages/Consulting/Consulting';
import Contact from './pages/Contact/Contact';
import CurriculumSamples from './pages/CurriculumSamples/CurriculumSamples';
import HomePage from './pages/Home/HomePage';
import ITWorks from './pages/ITWorks/ITWorks'
import LegacyEngineeringTexaco from './pages/LegacyEngineering/LegacyEngineering'
import LegacyProfile from './pages/LegacyProfile/LegacyProfile';
import LegacyProblemSolvingAddenda from './pages/LegacyProblemSolvingAddenda/LegacyProblemSolvingAddenda';
import MyBlogs from './pages/MyBlogs/MyBlogs';
import MyProjects from './pages/MyProjects/MyProjects';
import MyRecommendations from './pages/MyRecommendations/MyRecommendations';
import NotFoundPage from './pages/NotFound/NotFound';
import Offerings from './pages/Offerings/Offerings';
import ProblemSolvingProfile from './pages/ProblemSolvingProfile/ProblemSolvingProfile';
import ProfessionalSummary from './pages/ProfessionalSummary/ProfessionalSummary';
import Resumes from './pages/Resumes/Resumes';
import Software from './pages/Software/Software';
import StrategicPersona from './pages/StrategicPersona/StrategicPersona';
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
                    <Route path="change-governance" element={<ChangeGovernance />} />
                    <Route path="connect-collaborate" element={<ConnectCollaborate />} />
                    <Route path="consulting" element={<Consulting />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="curriculum-samples" element={<CurriculumSamples />} />
                    <Route path="it-works" element={<ITWorks />} />
                    <Route path="legacy-engineering-texaco" element={<LegacyEngineeringTexaco />} />
                    <Route path="legacy-profile" element={<LegacyProfile />} />
                    <Route path="legacy-problem-solving-addenda" element={<LegacyProblemSolvingAddenda />} />
                    <Route path="myblogs" element={<MyBlogs />} />
                    <Route path="myprojects" element={<MyProjects />} />
                    <Route path="myrecommendations" element={<MyRecommendations />} />
                    <Route path="offerings" element={<Offerings />} />
                    <Route path="problem-solving-profile" element={<ProblemSolvingProfile />} />
                    <Route path="professional-summary" element={<ProfessionalSummary />} />
                    <Route path="resumes" element={<Resumes />} />
                    <Route path="software" element={<Software />} />
                    <Route path="strategic-persona" element={<StrategicPersona />} />
                    <Route path="version" element={<Version />} />
                    <Route path="workflow-modernization" element={<WorkflowModernization />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;