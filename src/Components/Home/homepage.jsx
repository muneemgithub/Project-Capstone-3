import React from "react";
import { Container, Typography, Box, TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"; // Import the search icon
import bgImg from "../Assests/grocery.webp"; // Ensure the correct path to your image
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules'; // Import required modules
import SliderOne from "../Assests/slider-1.webp";
import SliderTwo from "../Assests/slider-2.webp";
import SliderThree from "../Assests/slider-3.webp";
import SliderFour from "../Assests/slider-4.webp";
import SliderFive from "../Assests/slider-5.webp";
import { Padding } from "@mui/icons-material";

const HeroSection = () => {
    return (
        <section>
            {/* Header Section */}

            {/* Background Section */}
            <Box
                sx={{
                    height: "100vh", // Make the background section full screen
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end", // Align content at the bottom
                    color: "common.white",
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        pb: { xs: 8, md: 12, lg: 16 }, // Add padding at the bottom
                    }}
                >
                    {/* Heading */}
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
                            fontWeight: "bold",
                            lineHeight: 1.2,
                            mb: 4,
                            color: "black", // Adjust text color for readability
                        }}
                    >
                        Groceries Delivered in 90 Minutes
                    </Typography>

                    {/* Subheading */}
                    <Typography
                        variant="body1"
                        sx={{
                            mb: 5,
                            fontSize: "1.2rem",
                            maxWidth: "700px",
                            mx: "auto",
                            color: "black",
                        }}
                    >
                        Get your healthy foods & snacks delivered at your doorsteps all day every day.
                    </Typography>

                    {/* Text Field with Button */}
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: 700,
                            mx: "auto",
                            mt: 2,
                            mb: 12,
                        }}
                    >
                        <TextField
                            variant="outlined"
                            placeholder="Search your products from here"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    border: "none", // No border by default
                                    "& fieldset": {
                                        border: "none",
                                    },
                                    "&:hover fieldset": {
                                        border: "1px solid #ccc", // Add light border on hover
                                    },
                                    "&.Mui-focused fieldset": {
                                        border: "2px solid #3f51b5", // Add blue border on focus
                                    },
                                },
                                bgcolor: "white",
                                borderRadius: 1,
                                input: { color: "black" },
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                            size="large"
                                            sx={{
                                                bgcolor: "green",
                                                color: "white",
                                                borderRadius: 1,
                                                "&:hover": {
                                                    bgcolor: "darkgreen",
                                                },
                                            }}
                                        >
                                            <SearchIcon />
                                            <Typography>Search</Typography>
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                </Container>
            </Box>
        </section>
    );
};

const SliderSection = () => {
    return (
        <Box
        sx={{
          height: '100%',
          width: '100%',
          backgroundColor: 'gray.200',  // Background color equivalent to bg-gray-200
          marginTop: 3,  // Equivalent to mt-12 (margin-top 3rem or 48px)
          paddingX: 2,  // Equivalent to px-4 (padding-left and padding-right 1rem or 16px)
        }}
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="w-full h-full"
        >
          <SwiperSlide
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.25rem', // Equivalent to text-xl
              backgroundColor: 'white',
            }}
          >
            <img src={SliderOne} alt="" />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.25rem', // Equivalent to text-xl
              backgroundColor: 'white',
            }}
          >
            <img src={SliderTwo} alt="" />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.25rem', // Equivalent to text-xl
              backgroundColor: 'white',
            }}
          >
            <img src={SliderThree} alt="" />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.25rem', // Equivalent to text-xl
              backgroundColor: 'white',
            }}
          >
            <img src={SliderFour} alt="" />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.25rem', // Equivalent to text-xl
              backgroundColor: 'white',
            }}
          >
            <img src={SliderFive} alt="" />
          </SwiperSlide>
        </Swiper>
      </Box>
    
    );
};

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <SliderSection />
        </div>
    );
};

export default HomePage;
