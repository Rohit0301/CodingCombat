import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Login from '../Login/login';



function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const [UserAuth, setUserAuth] = useState(null);
  
  const UserLogin=(key)=>{
    setUserAuth(key);
 }
  const handleClose = () => {
    onClose(selectedValue);
  };
   if(UserAuth==null){
      return(
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
          <Login handleChange={UserLogin}/>
        </Dialog>
      );
   }
   else{
     window.location.reload(false);
     return null;
   }
  
}


SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string,
};

 function SimpleDialogDemo(props) {
  const [open, setOpen] = React.useState(false);
 

  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);   
  };
 
   

  return ( 
    <div>
      <Button style={{backgroundColor:"#B00020",color:"white"}} onClick={handleClickOpen}>
        Join Bruteforce
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
export default SimpleDialogDemo;
