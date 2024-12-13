import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoImg from "../Assests/Logo-new.webp";

const drawerWidth = 240;
const navItems = ['Shops', 'Offers', 'Contact', 'Pages'];
const groceryItems = [
  'Grocery',
  'Bakery',
  'Makeup',
  'Bags',
  'Clothing',
  'Furniture',
  'Daily Needs',
  'Books',
  'Gadget',
  'Medicine',
];

const pagesItems = [
  'Flash Sale',
  'Manufacturers/Publishers',
  'Authors',
  'FAQ',
  'Terms & Conditions',
  'Customer Refund Policy',
  'Vendor Refund Policy',
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [groceryAnchorEl, setGroceryAnchorEl] = React.useState(null);
  const [pagesAnchorEl, setPagesAnchorEl] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleGroceryMenuOpen = (event) => {
    setGroceryAnchorEl(event.currentTarget);
  };

  const handleGroceryMenuClose = () => {
    setGroceryAnchorEl(null);
  };

  const handlePagesMenuOpen = (event) => {
    setPagesAnchorEl(event.currentTarget);
  };

  const handlePagesMenuClose = () => {
    setPagesAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        {/* Add Join Button */}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Button
              variant="outlined"
              sx={{
                textTransform: 'capitalize',
                color: 'green',
                borderColor: 'green',
                '&:hover': {
                  backgroundColor: 'green',
                  color: 'white',
                },
              }}
            >
              Join
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* Logo on the left */}
          <img src={LogoImg} alt="Logo" style={{ marginRight: '10px' }} />

          {/* Grocery Dropdown */}
          <Button
            aria-controls="grocery-menu"
            aria-haspopup="true"
            onClick={handleGroceryMenuOpen}
            sx={{
              color: 'black',
              textTransform: 'capitalize',
              '&:hover': {
                color: 'green',
              },
            }}
          >
            Grocery
          </Button>
          <Menu
            id="grocery-menu"
            anchorEl={groceryAnchorEl}
            open={Boolean(groceryAnchorEl)}
            onClose={handleGroceryMenuClose}
          >
            {groceryItems.map((item) => (
              <MenuItem key={item} onClick={handleGroceryMenuClose}>
                {item}
              </MenuItem>
            ))}
          </Menu>

          {/* Navigation items with SearchIcon */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 2, marginLeft: 'auto' }}>
            {navItems.slice(0, 3).map((item) => (
              <Button
                key={item}
                sx={{
                  color: 'black',
                  textTransform: 'capitalize',
                  '&:hover': {
                    color: 'green',
                  },
                }}
              >
                {item}
              </Button>
            ))}
            {/* Pages button with dropdown */}
            <Button
              aria-controls="pages-menu"
              aria-haspopup="true"
              onClick={handlePagesMenuOpen}
              sx={{
                color: 'black',
                textTransform: 'capitalize',
                '&:hover': {
                  color: 'green',
                },
              }}
            >
              Pages
            </Button>
            <Menu
              id="pages-menu"
              anchorEl={pagesAnchorEl}
              open={Boolean(pagesAnchorEl)}
              onClose={handlePagesMenuClose}
            >
              {pagesItems.map((item) => (
                <MenuItem key={item} onClick={handlePagesMenuClose}>
                  {item}
                </MenuItem>
              ))}
            </Menu>
            {/* Search Icon */}
            <IconButton>
              <SearchIcon sx={{ color: 'black' }} />
            </IconButton>
            {/* Join button */}
            <Button
              variant="outlined"
              sx={{
                textTransform: 'capitalize',
                color: 'green',
                borderColor: 'green',
                '&:hover': {
                  backgroundColor: 'green',
                  color: 'white',
                },
              }}
            >
              Join
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default DrawerAppBar;
