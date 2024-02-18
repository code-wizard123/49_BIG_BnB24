import React from 'react'
import { Container, Breadcrumbs, Typography, Card, CardContent, Button, Grid, Avatar, Divider } from '@mui/material';

function ProfileCard({ name, img }) {
    return (
        <div>
            <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item md={4}>
                    <Card sx={{ backgroundColor: 'transparent' }}>
                        <CardContent>
                            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Admin" src={img} sx={{ width: 300, height: 300 }} />
                                </Grid>
                            </Grid>
                            <Grid>
                                <Grid item sx={{ paddingTop: '5vh', textAlign: 'center' }}>
                                    <Typography variant="h4" sx={{ color: 'yellow', fontWeight: '800' }}>{name}</Typography>
                                    <Typography variant="body2" sx={{ color: 'yellow' }}>Full Stack Developer</Typography>
                                    <Typography variant="body2" sx={{ color: 'yellow' }}>Bay Area, San Francisco, CA</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div >
    )
}

export default ProfileCard
