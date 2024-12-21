import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { Delete, minus, Plus } from '../../Slices/AddtoCart';

function PageDrawer() {
  const { cartitems } = useSelector((state) => state.Cart);
  const [state, setState] = useState({
    right: false,
  });
  const dispatch = useDispatch();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // Calculate total price and total items
  const totalPrice = cartitems.reduce(
    (acc, item) => acc + item.Price * item.quanitity,
    0
  );
  const totalItems = cartitems.reduce((acc, item) => acc + item.quanitity, 0);

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {cartitems.map((item) => (
        <Box key={item.id} sx={{ marginBottom: 2, textAlign: 'center' }}>
          <img src={item.Image} alt="" style={{ width: '100%' }} />
          <Typography>{item.name}</Typography>
          <Typography>${item.Price}</Typography>
          <Typography>Quantity: {item.quanitity}</Typography>
          <Button onClick={() => dispatch(minus(item))}>-</Button>
          <Button onClick={() => dispatch(Plus(item))}>+</Button>
          <Button onClick={() => dispatch(Delete(item))}>Delete</Button>
        </Box>
      ))}
      <Typography variant="h6"   sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          padding: '16px',
          backgroundColor: '#f9f9f9', // Optional: light background for contrast
          borderTop: '1px solid #ddd', // Optional: border for separation
        }}>
        Total Price: ${totalPrice.toFixed(2)}
      </Typography>
    </Box>
  );

  return (
    <div>
      {/* Floating Button */}
      <Box
        sx={{
          position: 'fixed',
          top: '50%', // Center vertically
          right: 16, // 16px from the right edge
          transform: 'translateY(-50%)', // Perfect vertical alignment
          backgroundColor: '#00A86B',
          color: 'white',
          borderRadius: 8,
          padding: '8px 16px',
          textAlign: 'center',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
          zIndex: 1000,
        }}
        onClick={toggleDrawer('right', true)}
      >
        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
          🛒 {totalItems} Items
        </Typography>
        <Typography variant="h6">${totalPrice.toFixed(2)}</Typography>
      </Box>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </div>
  );
}

export default PageDrawer;
