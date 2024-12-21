import React, { useState } from 'react'
import AppleImg from "../../Assests/ApplesImage.webp"
import BlueberriesImg from "../../Assests/blueberriesImage.webp"
import ClementinesImg from "../../Assests/clementinesImage.webp"
import DatesImg from "../../Assests/DatesImage.webp"
import GreenBeansImg from "../../Assests/GreenBeansImage.webp"
import MangoesImg from "../../Assests/MangoesImage.webp"
import PearsImg from "../../Assests/pearsImages.webp"
import RedCherriesImg from "../../Assests/RedCherriesImage.webp"
import StrawberryImg from "../../Assests/strawberryImage.webp"
import BabySpinachImg from "../../Assests/BabySpinachImage.webp"
import BrusselsSproutsImg from "../../Assests/BrusselsSproutsImage.webp"
import CornImg from "../../Assests/CornImage.webp"
import CucumberImg from "../../Assests/CucumberImage.webp"
import GreenbeansImg from "../../Assests/GreenBeansImage.webp"
import GreenLimesImg from "../../Assests/GreenLimesImage.webp"
import MiniPeppersImg from "../../Assests/MiniPeppersImage.webp"
import PeeledCarrotsImg from "../../Assests/Peeled-CarrotsImage.webp"
import VeggiePlatterImg from "../../Assests/VeggiePlatterImage.webp"
import YellowLimesImg from "../../Assests/Yellow-LimesImage.webp"
import SignatureSalmonImg from "../../Assests/SignatureSalmonImage.webp"
import CodfilletImg from "../../Assests/codfilletImage.webp"
import SwordfishImg from "../../Assests/swordfishImage.webp"
import HalibutImg from "../../Assests/halibutImage.webp"
import TilapiaFilletImg from "../../Assests/TilapiaFilletImage.webp"
import BeefImg from "../../Assests/beefImage.webp"
import SlicedturkeybreastImg from "../../Assests/sliced_turkey_breastImage.webp"
import ChickenthighImg from "../../Assests/chicken_thighimage.webp"
import ChickenbrestImg from "../../Assests/chicken_brestImage.webp"
import StickImg from "../../Assests/steakImage.webp"
import BelmontcustardcreamImg from "../../Assests/belmont_custard_creamImage.webp"
import CrawforddigestivesImg from "../../Assests/crawford_digestivesImage.webp"
import CrawfordshortieImg from "../../Assests/crawford_shortieImage.webp"
import HillBiscuitsImg from "../../Assests/Hill_Biscuits_Mini_Pack_MixImage.webp"
import JammieDodgersImg from "../../Assests/Jammie_DodgersImage.webp"
import JulischeeseImg from "../../Assests/julis_cheese_crackersImage.webp"
import KhongguanImg from "../../Assests/khong_guan_orange_creamImage.webp"
import KhongguanpremiumImg from "../../Assests/khong_guan_premium_marieImage.webp"
import LotusbiscoffImg from "../../Assests/lotus_biscoffImage.webp"
import ArtiachfiliImg from "../../Assests/artiach_filipinoImage.webp"
import Grain_freeImg from "../../Assests/grain_freeImage.webp"
import HillsscienceImg from "../../Assests/hills_science_dietImage.webp"
import InstinctImg from "../../Assests/instinct_the_rawImage.webp"
import NaturalImg from "../../Assests/natural_balanceImage.webp"
import PrescriptionImg from "../../Assests/prescription_dietImage.webp"
import Pro_dietImg from "../../Assests/pro_dietImage.webp"
import Purina_proImg from "../../Assests/purina_pro_planImage.webp"
import Dog_food_blackImg from "../../Assests/dog_food_black_hawk_adult_all_breeds_lamb&riceImage.webp"
import Dog_food_black_hawkImg from "../../Assests/dog_food_black_hawk_puppy_all_breeds_lamb&riceImage.webp"
import DogfoodblackhawkImg from "../../Assests/dog_food_black_hawk_puppy_large_breedchicken&riceImage.webp"
import Air_freshner_acana_ozmoImg from "../../Assests/air_freshner_acana_ozmoImage.webp"
import Air_freshner_air_wick_essentialImg from "../../Assests/air_freshner_air_wick_essential_oilsImage.webp"
import Air_freshner_ambipurImg from "../../Assests/air_freshner_ambipur_air_sweet_citrus&zestImage.webp"
import Air_freshner_febreze_air_boraImg from "../../Assests/air_freshner_febreze_air_bora_boraImage.webp"
import Air_freshner_febreze_air_effectsImg from "../../Assests/air_freshner_febreze_air_effectsImage.webp"
import Air_freshner_febreze_air_hawaiianImg from "../../Assests/air_freshner_febreze_air_hawaiianImage.webp"
import Air_freshner_sc_johnson_gladeImg from "../../Assests/air_freshner_sc_johnson_glade_blue_odysseyImage.webp"
import Air_freshner_sc_johnson_glade_cleanImg from "../../Assests/air_freshner_sc_johnson_glade_clean_linenImage.webp"
import Cleaning_supply_astonishImg from "../../Assests/cleaning_supply_astonishImage.webp"
import Cleaning_supply_bonaImg from "../../Assests/cleaning_supply_bonaImage.webp"
import Cleaning_supply_everImg from "../../Assests/cleaning_supply_ever_springImage.webp"
import Cleaning_supply_glitz_steelImg from "../../Assests/cleaning_supply_glitz_steel_cleanerImage.webp"
import { Box, Button, Typography, List, ListItemButton, ListItemText, Card, ListItemIcon, CardContent, Grid, CardMedia, Modal, IconButton, } from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import Drawer from '../../Drawer/Drawer'
import { useDispatch } from 'react-redux'
import { Addtocart } from '../../../Slices/AddtoCart'
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const dummydata = [
    {
        id: 1,
        name: "Apples",
        Image: AppleImg,
        Price: 1.60,
        category: "Fruit",
    },
    {
        id: 2,
        name: "Blueberries",
        Image: BlueberriesImg,
        Price: 3.00,
        category: "Fruit",
    },
    {
        id: 3,
        name: "Clementines",
        Image: ClementinesImg,
        Price: 2.50,
        category: "Fruit",
    },
    {
        id: 4,
        name: "Dates",
        Image: DatesImg,
        Price: 8.00,
        category: "Fruit",
    },
    {
        id: 5,
        name: "GreenBeans",
        Image: GreenBeansImg,
        Price: 1.20,
        category: "Fruit",
    },
    {
        id: 6,
        name: "Mangoes",
        Image: MangoesImg,
        Price: 2.50,
        category: "Fruit",
    },
    {
        id: 7,
        name: "Pears",
        Image: PearsImg,
        Price: 3.50,
        category: "Fruit",
    },
    {
        id: 8,
        name: "RedCherries",
        Image: RedCherriesImg,
        Price: 1.80,
        category: "Fruit",
    },
    {
        id: 9,
        name: "Strawberry",
        Image: StrawberryImg,
        Price: 8.00,
        category: "Fruit",
    },
    {
        id: 10,
        name: "BabySpinach",
        Image: BabySpinachImg,
        Price: 0.60,
        category: "Fruit",
    },
    {
        id: 11,
        name: "BrusselsSprouts",
        Image: BrusselsSproutsImg,
        Price: 0.60,
        category: "Fruit",
    },
    {
        id: 12,
        name: "Corn",
        Image: CornImg,
        Price: 4.00,
        category: "Fruit",
    },
    {
        id: 13,
        name: "Cucumber",
        Image: CucumberImg,
        Price: 4.00,
        category: "Fruit",
    },
    {
        id: 14,
        name: "Greenbeans",
        Image: GreenbeansImg,
        Price: 4.00,
    },
    {
        id: 15,
        name: "GreenLimes",
        Image: GreenLimesImg,
        Price: 1.50,
        category: "Fruit",
    },
    {
        id: 16,
        name: "MiniPeppers",
        Image: MiniPeppersImg,
        Price: 5.00,
        category: "Fruit",
    },
    {
        id: 17,
        name: "PeeledCarrots",
        Image: PeeledCarrotsImg,
        Price: 2.20,
        category: "Fruit",
    },
    {
        id: 18,
        name: "VeggiePlatter",
        Image: VeggiePlatterImg,
        Price: 3.20,
        category: "Fruit",
    },
    {
        id: 19,
        name: "YellowLimes",
        Image: YellowLimesImg,
        Price: 1.20,
        category: "Fruit",
    },
    {
        id: 20,
        name: "SignatureSalmon",
        Image: SignatureSalmonImg,
        Price: 4.95,
        category: "Meat",
    },
    {
        id: 21,
        name: "Codfillet",
        Image: CodfilletImg,
        Price: 7.50,
        category: "Meat",
    },
    {
        id: 22,
        name: "Swordfish",
        Image: SwordfishImg,
        Price: 7.50,
        category: "Meat",
    },
    {
        id: 23,
        name: "Halibut",
        Image: HalibutImg,
        Price: 12.00,
        category: "Meat",
    },
    {
        id: 24,
        name: "TilapiaFillet",
        Image: TilapiaFilletImg,
        Price: 7.89,
        category: "Meat",
    },
    {
        id: 25,
        name: "Beef",
        Image: BeefImg,
        Price: 6.00,
        category: "Meat",
    },
    {
        id: 26,
        name: "Slicedturkeybreast",
        Image: SlicedturkeybreastImg,
        Price: 7.50,
        category: "Meat",
    },
    {
        id: 27,
        name: "Chickenthigh",
        Image: ChickenthighImg,
        Price: 7.89,
        category: "Meat",
    },
    {
        id: 28,
        name: "Chickenbrest",
        Image: ChickenbrestImg,
        Price: 9.00,
        category: "Meat",
    },
    {
        id: 29,
        name: "StickImg",
        Image: StickImg,
        Price: 12.00,
        category: "Meat",
    },
    {
        id: 30,
        name: "Belmontcustardcream",
        Image: BelmontcustardcreamImg,
        Price: 5.00,
        category: "Snacks",
    },
    {
        id: 31,
        name: "Crawforddigestives",
        Image: CrawforddigestivesImg,
        Price: 6.50,
        category: "Snacks",
    },
    {
        id: 32,
        name: "Crawfordshortie",
        Image: CrawfordshortieImg,
        Price: 5.00,
        category: "Snacks",
    },
    {
        id: 33,
        name: "HillBiscuits",
        Image: HillBiscuitsImg,
        Price: 7.50,
        category: "Snacks",
    },
    {
        id: 34,
        name: "JammieDodgers",
        Image: JammieDodgersImg,
        Price: 7.00,
        category: "Snacks",
    },
    {
        id: 35,
        name: "Julischeese",
        Image: JulischeeseImg,
        Price: 5.00,
        category: "Snacks",
    },
    {
        id: 36,
        name: "Khongguan",
        Image: KhongguanImg,
        Price: 5.00,
        category: "Snacks",
    },
    {
        id: 37,
        name: "Khongguanpremium",
        Image: KhongguanpremiumImg,
        Price: 6.00,
        category: "Snacks",
    },
    {
        id: 38,
        name: "Lotusbiscoff",
        Image: LotusbiscoffImg,
        Price: 7.50,
        category: "Snacks",
    },
    {
        id: 39,
        name: "Artiachfili",
        Image: ArtiachfiliImg,
        Price: 4.00,
        category: "Snacks",
    },
    {
        id: 40,
        name: "Grain_free",
        Image: Grain_freeImg,
        Price: 25.59,
        category: "Pet Care",
    },
    {
        id: 41,
        name: "HillsscienceImg",
        Image: HillsscienceImg,
        Price: 25.00,
        category: "Pet Care",
    },
    {
        id: 42,
        name: "Instinct",
        Image: InstinctImg,
        Price: 18.00,
        category: "Pet Care",
    },
    {
        id: 43,
        name: "Natural",
        Image: NaturalImg,
        Price: 14.00,
        category: "Pet Care",
    },
    {
        id: 44,
        name: "Prescription",
        Image: PrescriptionImg,
        Price: 16.00,
        category: "Pet Care",
    },
    {
        id: 45,
        name: "Pro_diet",
        Image: Pro_dietImg,
        Price: 18.00,
        category: "Pet Care",
    },
    {
        id: 46,
        name: "Purina_pro",
        Image: Purina_proImg,
        Price: 25.00,
        category: "Pet Care",
    },
    {
        id: 47,
        name: "Dog_food_black",
        Image: Dog_food_blackImg,
        Price: 24.00,
        category: "Pet Care",
    },
    {
        id: 48,
        name: "Dog_food_black_hawk",
        Image: Dog_food_black_hawkImg,
        Price: 25.00,
        category: "Pet Care",
    },
    {
        id: 49,
        name: "Dogfoodblackhawk",
        Image: DogfoodblackhawkImg,
        Price: 25.00,
        category: "Pet Care",
    },
    {
        id: 50,
        name: "Air_freshner_acana_ozmo",
        Image: Air_freshner_acana_ozmoImg,
        Price: 15.00,
        category: "Home & Cleaning",
    },
    {
        id: 51,
        name: "DogfoodblackAir_freshner_air_wick_essential",
        Image: Air_freshner_air_wick_essentialImg,
        Price: 20.00,
        category: "Home & Cleaning",
    },
    {
        id: 52,
        name: "Air_freshner_ambipur",
        Image: Air_freshner_ambipurImg,
        Price: 15.00,
        category: "Home & Cleaning",
    },
    {
        id: 53,
        name: "Air_freshner_febreze_air_bora",
        Image: Air_freshner_febreze_air_boraImg,
        Price: 15.00,
        category: "Home & Cleaning",
    },
    {
        id: 54,
        name: "Air_freshner_febreze_air_effects",
        Image: Air_freshner_febreze_air_effectsImg,
        Price: 15.00,
        category: "Home & Cleaning",
    },
    {
        id: 55,
        name: "Air_freshner_febreze_air_hawaiian",
        Image: Air_freshner_febreze_air_hawaiianImg,
        Price: 18.00,
        category: "Home & Cleaning",
    },
    {
        id: 56,
        name: "Air_freshner_sc_johnson_glade",
        Image: Air_freshner_sc_johnson_gladeImg,
        Price: 18.00,
        category: "Home & Cleaning",
    },
    {
        id: 57,
        name: "Air_freshner_sc_johnson_glade_clean",
        Image: Air_freshner_sc_johnson_glade_cleanImg,
        Price: 18.00,
        category: "Home & Cleaning",
    },
    {
        id: 58,
        name: "Cleaning_supply_astonish",
        Image: Cleaning_supply_astonishImg,
        Price: 15.00,
        category: "Home & Cleaning",
    },
    {
        id: 59,
        name: "Cleaning_supply_bonaImg",
        Image: Cleaning_supply_bonaImg,
        Price: 15.00,
        category: "Home & Cleaning",
    },
    {
        id: 60,
        name: "Cleaning_supply_ever",
        Image: Cleaning_supply_everImg,
        Price: 10.00,
        category: "Home & Cleaning",
    },
    {
        id: 61,
        name: "Cleaning_supply_glitz_steel",
        Image: Cleaning_supply_glitz_steelImg,
        Price: 10.00,
        category: "Home & Cleaning",
    }
]

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const dispatch = useDispatch();

    // Categories list
    const categories = [
        { name: 'Fruits & Vegetables', icon: <LocalFloristIcon />, key: 'Fruit' },
        { name: 'Meat', icon: <LunchDiningIcon />, key: 'Meat' },
        { name: 'Snacks', icon: <ShoppingBasketIcon />, key: 'Snacks' },
        { name: 'Pet Care', icon: <PetsIcon />, key: 'Pet Care' },
        { name: 'Home & Cleaning', icon: <HomeIcon />, key: 'Home & Cleaning' },
    ];

    const handleCategorySelect = (key) => {
        setSelectedCategory(key);
    };

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedProduct(null);
    };

    const handleAddToCart = (product) => {
        dispatch(Addtocart(product));
        alert(`${product.name} added to cart!`);
    };

    const filteredProducts = selectedCategory
        ? dummydata.filter((product) => product.category === selectedCategory)
        : dummydata;

    // Function to truncate product names if they are longer than 10 characters
    const truncateName = (name) => {
        return name.length > 10 ? name.slice(0, 10) + '...' : name;
    };

    return (
        <Box display="flex" gap={2} sx={{
            marginTop: "5px",
        }}>
            {/* Sidebar for Category Selection */}
            <Box>
                <List>
                    {categories.map((category) => (
                        <ListItemButton key={category.key} onClick={() => handleCategorySelect(category.key)}>
                            <ListItemIcon>{category.icon}</ListItemIcon>
                            <ListItemText primary={category.name} />
                        </ListItemButton>
                    ))}
                </List>
            </Box>

            {/* Product Grid */}
            <Grid container spacing={2}>
                {filteredProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={3} key={product.id}> {/* 4 cards in a row */}
                        <Card sx={{ border: '1px solid #e0e0e0', borderRadius: '8px', boxShadow: 'none' }}>
                            {/* Product Image */}
                            <CardMedia
                                component="img"
                                height="180"
                                image={product.Image}
                                alt={product.name}
                                sx={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px', objectFit: 'contain' }}
                                onClick={() => handleCardClick(product)} // Opens the modal on image click
                            />

                            {/* Discount Badge */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '8px',
                                    left: '8px',
                                    backgroundColor: '#FFD700',
                                    color: 'white',
                                    borderRadius: '4px',
                                    padding: '2px 8px',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                }}
                            >
                                {product.discount ? `${product.discount}% OFF` : ''}
                            </Box>

                            {/* Card Content */}
                            <CardContent sx={{ padding: '16px' }}>
                                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '4px' }}>
                                    {product.weight}
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '16px' }}>
                                    {truncateName(product.name)}
                                </Typography>

                                {/* Price Section */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                                    {product.oldPrice && (
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                textDecoration: 'line-through',
                                                color: '#9e9e9e',
                                            }}
                                        >
                                            ${product.oldPrice.toFixed(2)}
                                        </Typography>
                                    )}
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: '18px',
                                            color: '#4caf50',
                                        }}
                                    >
                                        ${product.Price.toFixed(2)}
                                    </Typography>
                                </Box>
                            </CardContent>

                            {/* Action Buttons */}
                            <Box sx={{ display: "flex", justifyContent: "flex-end", padding: "16px" }}>
                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={{
                                        backgroundColor: '#4caf50',
                                        color: 'white',
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: '#43a047',
                                        },
                                        marginLeft: "auto", // Aligns the button to the right
                                    }}
                                    onClick={() => handleAddToCart(product)}
                                >
                                    🛒 Cart
                                </Button>
                            </Box>

                        </Card>

                    </Grid>
                ))}
            </Grid>

            {/* Modal for Product Details */}
            <Modal open={openModal} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 600,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 3,
                    }}
                >
                    {selectedProduct && (
                        <>
                            {/* Product Image */}
                            <CardMedia
                                component="img"
                                image={selectedProduct.Image}
                                alt={selectedProduct.name}
                                sx={{
                                    width: 200,
                                    height: 200,
                                    objectFit: 'contain',
                                    borderRadius: 2,
                                }}
                            />

                            {/* Product Details */}
                            <Box sx={{ flex: 1 }}>
                                {/* Product Name */}
                                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                                    {selectedProduct.name}
                                </Typography>

                                {/* Product Description */}
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mb: 2 }}
                                >
                                    {selectedProduct.description || "Discover the perfect addition to your daily needs with our premium-quality product. Designed to deliver unmatched satisfaction, it combines reliability and value. Whether for home or personal use, it's crafted to meet your expectations effortlessly. Shop now and experience the difference!"}
                                </Typography>

                                {/* Price and Discount */}
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 'bold', color: 'primary.main', mr: 1 }}
                                    >
                                        ${selectedProduct.Price.toFixed(2)}
                                    </Typography>
                                    {selectedProduct.originalPrice && (
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                textDecoration: 'line-through',
                                                color: 'text.secondary',
                                            }}
                                        >
                                            ${selectedProduct.originalPrice.toFixed(2)}
                                        </Typography>
                                    )}
                                </Box>

                                {/* Available Quantity */}
                                <Typography variant="body2" sx={{ mb: 2 }}>
                                    {selectedProduct.quantity} pieces available
                                </Typography>

                                {/* Buttons */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <IconButton color="error">
                                        <FavoriteIcon />
                                    </IconButton>

                                    <Button
                                        variant="contained"
                                        startIcon={<AddShoppingCartIcon />}
                                        onClick={() => handleAddToCart(selectedProduct)}
                                    >
                                        Add to Cart
                                    </Button>
                                </Box>
                            </Box>
                        </>
                    )}
                </Box>
            </Modal>


            <Drawer />
        </Box>
    );
};

export default Products;
