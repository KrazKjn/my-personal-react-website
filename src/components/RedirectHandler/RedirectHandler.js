import { useEffect } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';

const RedirectHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirect = params.get('redirect');
    if (redirect) {
      navigate(redirect);
    }
  }, [location, navigate]);

  return null;
};

export default RedirectHandler;
