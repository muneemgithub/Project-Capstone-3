import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import { faviratecard } from "../../../Slices/favirate";
import AppleImg from "../../Assests/ApplesImage.webp";
import BlueberriesImg from "../../Assests/blueberriesImage.webp";

const dummydata = [
    { id: 1, name: "Apples", Image: AppleImg, Price: 1.60, category: "Fruit" },
    { id: 2, name: "Blueberries", Image: BlueberriesImg, Price: 3.00, category: "Fruit" },
];

function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const favItems = useSelector((state) => state.Favirate.Favire);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const addToFavorites = (product) => {
        dispatch(faviratecard(product));
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation">
            {favItems.length > 0 ? (
                favItems.map((item) => (
                    <Box
                        key={item.id}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "10px",
                            borderBottom: "1px solid #ddd",
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <img
                                src={item.Image}
                                alt={item.name}
                                style={{ width: 50, height: 50, marginRight: 10 }}
                            />
                            <div>
                                <span style={{ fontWeight: "bold" }}>{item.name}</span>
                                <br />
                                <span style={{ color: "#555" }}>${item.Price.toFixed(2)}</span>
                            </div>
                        </Box>
                    </Box>
                ))
            ) : (
                <Box sx={{ textAlign: "center", padding: "20px" }}>No favorites added</Box>
            )}
        </Box>
    );

    return (
        <div>
            {/* Drawer Button */}
            <Button
                onClick={toggleDrawer(true)}
                sx={{
                    position: "fixed",
                    left: "8%",
                    bottom: "50%",
                    transform: "translate(-50%, 50%)",
                    backgroundColor: "#f50057",
                    color: "#fff",
                    '&:hover': {
                        backgroundColor: "#d4004f",
                    },
                }}
            >
                <FavoriteIcon />
            </Button>

            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}

export default TemporaryDrawer;
