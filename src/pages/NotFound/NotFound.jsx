import { useEffect, useState } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';

// Known routes and titles
const knownRoutes = {
  "ai-training": "ai-training",
  "training": "ai-training",
  "workshops": "ai-training",
  "connect-collaborate": "connect-collaborate",
  "consulting": "consulting",
  "contact": "contact",
  "curriculum-samples": "curriculum-samples",
  "it-works": "it-works",
  "itworks": "it-works",
  "legacy-engineering-texaco": "legacy-engineering-texaco",
  "legacy-profile": "legacy-profile",
  "legacy-profile-document": "legacy-profile-document",
  "myblogs": "myblogs",
  "myprojects": "myprojects",
  "myrecommendations": "myrecommendations",
  "offerings": "offerings",
  "problem-solving-profile-document": "problem-solving-profile-document",
  "professionalsummary": "professionalsummary",
  "resume-architect": "resume-architect",
  "resume-engineer": "resume-engineer",
  "resume-manager": "resume-manager",
  "resumes": "resumes",
  "software": "software",
  "version": "version",
  "workflow-modernization": "workflow-modernization",
  "home": "",
  "": ""
};

const routeTitles = {
  "ai-training": "AI Training & Workshops",
  "change-governance": "Change Governance",
  "connect-collaborate": "Connect & Collaborate",
  "consulting": "Consulting Services",
  "contact": "Contact Me",
  "curriculum-samples": "Curriculum Samples",
  "infrastructure-legacy-systems-engineering-addendum": "Infrastructure & Legacy Systems Addendum",
  "it-works": "IT Works Suite",
  "legacy-engineering-texaco": "Legacy Engineering at Texaco",
  "legacy-profile": "Legacy Profile",
  "legacy-profile-document": "Legacy Profile Document",
  "myblogs": "My Blog Posts",
  "myprojects": "My Projects",
  "myrecommendations": "My Recommendations",
  "offerings": "Service Offerings",
  "problem-solving-profile-document": "Problem Solving Profile Document",
  "professionalsummary": "Professional Summary",
  "resume-architect": "Architect Resume",
  "resume-engineer": "Engineer Resume",
  "resume-manager": "Manager Resume",
  "resumes": "All Resumes",
  "software": "Software Portfolio",
  "strategic-persona": "Strategic Persona",
  "version": "Version Info",
  "workflow-modernization": "Workflow Modernization",
  "home": "Home",
  "": "Home"
};

function normalize(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

function levenshtein(a, b) {
  const dp = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[a.length][b.length];
}

function findClosestMatches(input) {
  const normalizedInput = normalize(input);

  // Contains matches (not just prefix)
  const containsMatches = Object.entries(knownRoutes)
    .map(([key, path]) => ({
      key,
      path,
      normalizedKey: normalize(key)
    }))
    .filter(({ normalizedKey }) => normalizedKey.includes(normalizedInput))
    .map(({ key, path }) => ({
      title: routeTitles[key] || key,
      path
    }));

  if (containsMatches.length > 0) return containsMatches;

  // Levenshtein fallback
  return Object.entries(knownRoutes)
    .map(([key, path]) => ({
      key,
      path,
      distance: levenshtein(normalizedInput, normalize(key))
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 3)
    .map(({ key, path }) => ({
      title: routeTitles[key] || key,
      path
    }));
}

function normalizeRedirect(path) {
  return path.startsWith('/') ? path : `/${path}`;
}

const NotFoundPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [redirectTarget, setRedirectTarget] = useState(null);
  const [suggestedTargets, setSuggestedTargets] = useState([]);
  const fullPath = location.pathname.replace(/^\/+/, '');
  const query = location.search;
  const fragment = location.hash;

  useEffect(() => {
    console.log(`NotFound activated for: ${location.pathname}${query}${fragment}`);
    console.log(`fullPath: ${fullPath}`);
    console.log(`query: ${query}`);
    console.log(`fragment: ${fragment}`);

    if (!fullPath) {
      console.log(`Navigating to query (No Path): ${query}${fragment}`);
      setRedirectTarget(normalizeRedirect(`${query}${fragment}`));
      navigate(normalizeRedirect(`${query}${fragment}`), { replace: true });
      return;
    }

    if (knownRoutes[fullPath]) {
      const target = knownRoutes[fullPath];
      const redirect = `${target}${query}${fragment}`;
      console.log(`Navigating to Direct Match: ${redirect}`);
      setRedirectTarget(normalizeRedirect(redirect));
      navigate(normalizeRedirect(redirect), { replace: true });
      return;
    }

    const matches = findClosestMatches(fullPath);
    setSuggestedTargets(matches);

    if (matches.length === 1) {
      const redirect = `${matches[0].path}${query}${fragment}`;
      console.log(`Navigating to Single Closest Match: ${redirect}`);
      setRedirectTarget(redirect);
      navigate(normalizeRedirect(redirect), { replace: true });
    } else if (matches.length > 1) {
      console.log(`Multiple suggestions found: ${matches.map(m => m.title).join(', ')}`);
    } else {
      console.log(`No suggestions found for: ${fullPath}`);
    }
  }, [location.pathname, fullPath, query, fragment, navigate]);

  return (
    <div>
      <h3>Page Not Found</h3>
      {redirectTarget && (
        <p>Redirecting to <strong>{redirectTarget}</strong>...</p>
      )}
      {!redirectTarget && suggestedTargets.length > 1 && (
        <>
          <p>Did you mean one of the following?</p>
          <ul>
            {suggestedTargets.map(match => (
              <li key={match.path}>
                <NavLink to={`/${match.path}`}>{match.title}</NavLink>
              </li>
            ))}
          </ul>
        </>
      )}
      {!redirectTarget && suggestedTargets.length === 0 && (
        <>
          <p>We couldn't find the page <strong>{fullPath}</strong>.</p>
          <p><NavLink to="/">Return to Home</NavLink></p>
        </>
      )}
    </div>
  );
};

export default NotFoundPage;
