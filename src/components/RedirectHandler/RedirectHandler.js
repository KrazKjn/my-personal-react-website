import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RedirectHandler = ({ setRedirectPath }) => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirect = params.get('redirect');
    if (redirect) {
      setRedirectPath(redirect);
    }
  }, [location, setRedirectPath]);

  return null;
};

export default RedirectHandler;
