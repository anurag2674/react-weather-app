import React, { createContext, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';

export const LoaderContext = createContext({});
const LoaderContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loader, setLoader] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const showLoader = (message: string) => {
    setMessage(message ?? '');
    setLoader(true);
  };
  const hideLoader = () => setLoader(false);

  return (
    <LoaderContext.Provider value={{ showLoader, hideLoader }}>
      {children}

      <Fade in={loader} timeout={500}>
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1300, // MUI default for overlays
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
          }}
        >
          <CircularProgress color="inherit" />
          <h6>{message}</h6>
        </div>
      </Fade>
    </LoaderContext.Provider>
  );
};

export default LoaderContextProvider;
