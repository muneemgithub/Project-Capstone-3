import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useSelector } from 'react-redux';


function TemporaryDrawer(props) {
    const {show,toggleDrawere}=props
    const { Favire } = useSelector((state) => state.Favirate); 
    console.log(Favire); // Output: Array from state
    
    
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawere(false)}>
    
      <Divider />
   
    </Box>
  );

  return (
    <div>
    
      <Drawer open={show} onClose={toggleDrawere(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
export default  TemporaryDrawer;