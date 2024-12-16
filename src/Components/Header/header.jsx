import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import PersonIcon from "@mui/icons-material/Person";
import LogoImg from "../Assests/Logo-new.webp";

const drawerWidth = 240;
const navItems = ["Shops", "Offers", "Contact", "Pages"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = React.useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = React.useState(false);
  const [isUserLoggedIn, setUserLoggedIn] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLoginModalOpen = () => {
    setLoginModalOpen(true);
    setRegisterModalOpen(false);
  };

  const handleLoginModalClose = () => setLoginModalOpen(false);

  const handleRegisterModalOpen = () => {
    setRegisterModalOpen(true);
    setLoginModalOpen(false);
  };

  const handleRegisterModalClose = () => setRegisterModalOpen(false);

  const onLoginSubmit = (data) => {
    if (data.email === data.password) {
      setUserLoggedIn(true);
      setLoginModalOpen(false);
      window.location.href = "/"; // Redirect to homepage
    } else {
      alert("Invalid credentials! Email and password must match.");
    }
  };

  const onRegisterSubmit = (data) => {
    alert(`Successfully Registered with Email: ${data.email}`);
    setRegisterModalOpen(false);
    setLoginModalOpen(true); // Open Login modal after registration
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            {isUserLoggedIn ? (
              <PersonIcon color="primary" />
            ) : (
              <Button
                variant="outlined"
                onClick={handleLoginModalOpen}
                sx={{
                  textTransform: "capitalize",
                  color: "green",
                  borderColor: "green",
                  "&:hover": {
                    backgroundColor: "green",
                    color: "white",
                  },
                }}
              >
                Join
              </Button>
            )}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#fafafa", color: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img src={LogoImg} alt="Logo" style={{ marginRight: "10px" }} />
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 2,
              marginLeft: "auto",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "black",
                  textTransform: "capitalize",
                  "&:hover": {
                    color: "green",
                  },
                }}
              >
                {item}
              </Button>
            ))}
            {isUserLoggedIn ? (
              <PersonIcon color="primary" />
            ) : (
              <Button
                variant="outlined"
                onClick={handleLoginModalOpen}
                sx={{
                  textTransform: "capitalize",
                  color: "green",
                  borderColor: "green",
                  "&:hover": {
                    backgroundColor: "green",
                    color: "white",
                  },
                }}
              >
                Join
              </Button>
            )}
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
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      {/* Login Modal */}
      <Modal
        open={isLoginModalOpen}
        onClose={handleLoginModalClose}
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "background.paper",
            borderRadius: 5,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 5, textAlign: "center" }}>
            Login
          </Typography>
          <form onSubmit={handleSubmit(onLoginSubmit)} noValidate>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ marginTop: 4, backgroundColor: "green", color: "white" }}
            >
              Log in
            </Button>
          </form>
          <Typography
            variant="body2"
            sx={{ marginTop: 5, textAlign: "center", color: "gray" }}
          >
            Don't have an account?{" "}
            <a
              href="#"
              onClick={handleRegisterModalOpen}
              style={{ textDecoration: "underline" }}
            >
              Register
            </a>
          </Typography>
        </Box>
      </Modal>

      {/* Register Modal */}
      <Modal
        open={isRegisterModalOpen}
        onClose={handleRegisterModalClose}
        aria-labelledby="register-modal-title"
        aria-describedby="register-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "background.paper",
            borderRadius: 5,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 5, textAlign: "center" }}>
            Register
          </Typography>
          <form onSubmit={handleSubmit(onRegisterSubmit)} noValidate>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              {...register("name", { required: "Name is required" })}
              error={!!errors.name}
              helperText={errors.name?.message}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ marginTop: 4, backgroundColor: "blue", color: "white" }}
            >
              Register
            </Button>
          </form>
          <Typography
            variant="body2"
            sx={{ marginTop: 5, textAlign: "center", color: "gray" }}
          >
            Already have an account?{" "}
            <a
              href="#"
              onClick={handleLoginModalOpen}
              style={{ textDecoration: "underline" }}
            >
              Log in
            </a>
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
