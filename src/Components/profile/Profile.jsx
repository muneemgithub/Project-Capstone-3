import React from 'react'
import {
    Container,
    Box,
    Typography,
    Grid,
    TextField,
    Button,
    FormHelperText,
} from '@mui/material';

const Profile = () => {
    return (
        <Box>
            <Container maxWidth="md" sx={{
                marginTop: "80px"
            }}>
                <Box className="profile-box">
                    <Typography variant="h5">My Profile</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Username"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Email Address"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Box textAlign="start" mt={4}>
                        <Button variant="contained">Save</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Profile;
