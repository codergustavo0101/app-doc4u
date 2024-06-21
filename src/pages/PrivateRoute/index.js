import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [permission, setPermission] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkTokenValidity = async () => {
      const token = localStorage.getItem("@USER_TOKEN");
      if (!token) {
        navigate('/');
        return;
      }

      try {
        const response = await api.get(`client/get/by/id/${localStorage.getItem("@USER_ID")}`);
        if (response.status === 200) {
          setIsAuthenticated(true);
          setPermission(response.data[0].permission)

          if(response.data[0].permission != 2){
            localStorage.removeItem("@USER_TOKEN");
            navigate('/');
          }

        } else {
          localStorage.removeItem("@USER_TOKEN");
          navigate('/');
        }
      } catch (error) {
        localStorage.removeItem("@USER_TOKEN");
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    checkTokenValidity();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated && permission == 2 ? children : null;
};

export default PrivateRoute;
