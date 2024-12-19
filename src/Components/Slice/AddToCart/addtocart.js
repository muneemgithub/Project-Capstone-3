// import React from "react";
// import { Button, ButtonGroup, Typography, Box, Drawer } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   decreaseQuantity,
//   increaseQuantity,
//   removeItem,
// } from "../Products/product";

// const AddToCartDrawer = ({ open, toggleDrawer }) => {
//   const { items } = useSelector((state) => state.products);
//   const dispatch = useDispatch();

//   const totalPrice = items.reduce(
//     (sum, product) => sum + product.price * product.quantity,
//     0
//   );

//   return (
//     <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
//       <Box sx={{ height: "100vh", width: 450, p: 2 }}>
//         <Typography variant="h5" gutterBottom>
//           Cart Items
//         </Typography>
//         {!items.length ? (
//           <Typography align="center" variant="h6">
//             Nothing to show!
//           </Typography>
//         ) : (
//           items.map((item) => (
//             <Box
//               key={item.id}
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 my: 2,
//               }}
//             >
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <img
//                   width="40"
//                   src={item.image}
//                   alt={item.title}
//                   style={{ borderRadius: "4px" }}
//                 />
//                 <Typography>
//                   {item.title.length > 15
//                     ? `${item.title.slice(0, 15)}...`
//                     : item.title}
//                 </Typography>
//               </Box>
//               <ButtonGroup size="small" variant="text">
//                 <Button onClick={() => dispatch(decreaseQuantity(item))}>
//                   <RemoveIcon />
//                 </Button>
//                 <Button disabled>{item.quantity}</Button>
//                 <Button onClick={() => dispatch(increaseQuantity(item))}>
//                   <AddIcon />
//                 </Button>
//               </ButtonGroup>
//               <Typography>${item.price.toFixed(2)}</Typography>
//               <Button onClick={() => dispatch(removeItem(item))}>
//                 <DeleteIcon />
//               </Button>
//             </Box>
//           ))
//         )}
//         <Box
//           sx={{
//             position: "absolute",
//             bottom: 0,
//             width: "100%",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             p: 2,
//             backgroundColor: "secondary.main",
//             color: "white",
//             borderTop: "1px solid red",
//           }}
//         >
//           <Typography variant="body1">Total Price</Typography>
//           <Typography variant="body1">${totalPrice.toFixed(2)}</Typography>
//         </Box>
//       </Box>
//     </Drawer>
//   );
// };

// export default AddToCartDrawer;
