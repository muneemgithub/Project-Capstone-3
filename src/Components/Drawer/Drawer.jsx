import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { Delete, minus, Plus } from '../../Slices/AddtoCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function PageDrawer() {
  const { cartitems } = useSelector((state) => state.Cart);
  const [state, setState] = useState({
    right: false,
  });
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const totalPrice = cartitems.reduce(
    (acc, item) => acc + item.Price * item.quanitity,
    0
  );
  const totalItems = cartitems.reduce((acc, item) => acc + item.quanitity, 0);

  const handleCheckout = () => {
    if (totalPrice === 0) {
      setMessage('Your cart is empty. Please add items to proceed.');
    } else {
      setMessage('Your order has been placed successfully!');
    }
    setTimeout(() => setMessage(''), 3000);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
      role="presentation"
      display="flex"
      flexDirection="column"
    >
      {/* Back Button */}
      <Button
        startIcon={<ArrowBackIcon />}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '16px',
          color: 'primary.main',
        }}
        onClick={toggleDrawer(anchor, false)} // Close drawer
      >
        Back
      </Button>

      <Typography
        variant="h6"
        sx={{
          padding: '16px',
          textAlign: 'center',
          backgroundColor: '#f1f1f1',
          borderBottom: '1px solid #ddd',
        }}
      >
        🛒 {totalItems} Items
      </Typography>
      <Box
        sx={{
          maxHeight: 'calc(100vh - 200px)',
          overflowY: 'auto',
          padding: '16px',
        }}
      >
        {cartitems.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#fff',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img
                src={item.Image}
                alt=""
                style={{ width: '60px', height: '60px', borderRadius: '8px' }}
              />
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>{item.name}</Typography>
                <Typography>${item.Price.toFixed(2)}</Typography>
                <Typography variant="caption">{item.quanitity} x</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconButton
                size="small"
                color="primary"
                onClick={() => dispatch(minus(item))}
              >
                <RemoveIcon />
              </IconButton>
              <Typography>{item.quanitity}</Typography>
              <IconButton
                size="small"
                color="primary"
                onClick={() => dispatch(Plus(item))}
              >
                <AddIcon />
              </IconButton>
              <Button
                size="small"
                variant="text"
                color="error"
                onClick={() => dispatch(Delete(item))}
              >
                ✕
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          position: 'sticky',
          bottom: 0,
          padding: '16px',
          backgroundColor: '#fff',
          borderTop: '1px solid #ddd',
          boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <Button
          variant="contained"
          color="success"
          fullWidth
          sx={{ padding: '12px', borderRadius: '8px' }}
          onClick={handleCheckout}
        >
          Checkout - ${totalPrice.toFixed(2)}
        </Button>
      </Box>
    </Box>
  );

  return (
    <div>
      <Box
        sx={{
          position: 'fixed',
          top: '50%',
          right: 16,
          transform: 'translateY(-50%)',
          backgroundColor: '#00A86B',
          color: 'white',
          borderRadius: 4,
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

      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>

      {message && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#000',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '8px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            zIndex: 1500,
          }}
        >
          {message}
        </Box>
      )}
    </div>
  );
}

export default PageDrawer;
