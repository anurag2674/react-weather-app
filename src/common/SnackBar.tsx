import React, { useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
const SnackBar: React.FC<any> = ({ status, message }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (_event: any, _reason: any) => {
    if (_reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    console.log('first render');
  }, []);
  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={() => setOpen(false)} severity={status} variant="filled" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SnackBar;
