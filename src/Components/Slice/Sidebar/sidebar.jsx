// import React, { useState } from 'react';
// import { Drawer, List, ListItem, ListItemText, Collapse } from '@mui/material';
// import { ExpandLess, ExpandMore } from '@mui/icons-material';

// const Sidebar = ({ setCategory }) => {
//   const [openCategories, setOpenCategories] = useState({
//     fruitsVegetables: true,
//     meatFish: false,
//     snacks: false,
//   });

//   const handleToggle = (category) => {
//     setOpenCategories((prev) => ({
//       ...prev,
//       [category]: !prev[category],
//     }));
//   };

//   return (
//     <Drawer
//       variant="permanent"
//       anchor="left"
//       sx={{
//         '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
//       }}
//     >
//       <List>
//         {/* Fruits & Vegetables */}
//         <ListItem button onClick={() => handleToggle('fruitsVegetables')}>
//           <ListItemText primary="Fruits & Vegetables" />
//           {openCategories.fruitsVegetables ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//         <Collapse in={openCategories.fruitsVegetables} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItem button onClick={() => setCategory('fruits')}>
//               <ListItemText primary="Fruits" />
//             </ListItem>
//             <ListItem button onClick={() => setCategory('vegetables')}>
//               <ListItemText primary="Vegetables" />
//             </ListItem>
//           </List>
//         </Collapse>

//         {/* Meat & Fish */}
//         <ListItem button onClick={() => handleToggle('meatFish')}>
//           <ListItemText primary="Meat & Fish" />
//           {openCategories.meatFish ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//         <Collapse in={openCategories.meatFish} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItem button onClick={() => setCategory('freshFish')}>
//               <ListItemText primary="Fresh Fish" />
//             </ListItem>
//             <ListItem button onClick={() => setCategory('meat')}>
//               <ListItemText primary="Meat" />
//             </ListItem>
//           </List>
//         </Collapse>

//         {/* Snacks */}
//         <ListItem button onClick={() => handleToggle('snacks')}>
//           <ListItemText primary="Snacks" />
//           {openCategories.snacks ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//         <Collapse in={openCategories.snacks} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItem button onClick={() => setCategory('nutsBiscuits')}>
//               <ListItemText primary="Nuts & Biscuits" />
//             </ListItem>
//             <ListItem button onClick={() => setCategory('chocolates')}>
//               <ListItemText primary="Chocolates" />
//             </ListItem>
//             <ListItem button onClick={() => setCategory('crisps')}>
//               <ListItemText primary="Crisps" />
//             </ListItem>
//             <ListItem button onClick={() => setCategory('noodlesPasta')}>
//               <ListItemText primary="Noodles & Pasta" />
//             </ListItem>
//             <ListItem button onClick={() => setCategory('sauce')}>
//               <ListItemText primary="Sauce" />
//             </ListItem>
//             <ListItem button onClick={() => setCategory('soup')}>
//               <ListItemText primary="Soup" />
//             </ListItem>
//           </List>
//         </Collapse>
//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar;
