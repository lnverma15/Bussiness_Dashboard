import React from 'react';
import { Dialog, DialogTitle, DialogContent, Button } from '@mui/material';

const PopUp = ({ open, onClose }) => {
  const handleFileUpload = () => {
    // Implement file upload functionality if required
    // This function can be used as an action handler for file upload
    // For now, it can remain empty since you mentioned no action should be taken in the form
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Upload Sales Invoice</DialogTitle>
      <DialogContent>
        {/* Form content goes here */}
        {/* Placeholder for file upload input */}
        <input type="file" onChange={handleFileUpload} />

        {/* Button to close the popup */}
        <Button onClick={onClose}>Close</Button>
      </DialogContent>
    </Dialog>
  );
};

export default PopUp;
