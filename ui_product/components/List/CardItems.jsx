import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import BaseImg from 'components/Shared/BaseImg';
import React from 'react';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
export default function CardItems({ data }) {
  return (
    <Grid item xs={6}>
      <Card variant="outlined">
        <CardContent>
          <Box display={'flex'} data-cy="listItem">
            <Box
              sx={{
                width: '160px',
                height: '160px'
              }}>
              <BaseImg
                src={data.avatar}
                size={{
                  h: '160',
                  w: 160
                }}
              />
            </Box>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              width={'calc(100% - 160px)'}>
              <Box mt={2} ml={2} display="flex" flexDirection={'column'}>
                <Box display={'flex'} justifyContent="space-between">
                  <Typography variant="h6" color="text.secondary">
                    {':نام'}
                  </Typography>
                  <Typography variant="h6">{data.name}</Typography>
                </Box>
                <Box display={'flex'} justifyContent="space-between" mt={4}>
                  <Typography variant="h6" color="text.secondary">
                    {':نام کاربری'}
                  </Typography>
                  <Typography variant="h6">{data.username}</Typography>
                </Box>
                <Box display={'flex'}>
                  {data.availableOn.map((item, index) => (
                    <Fab
                      key={index}
                      sx={{ ml: 2, mt:2, borderRadius: '10px', width: 40 , height:40 }}>
                      {item === 'whatsapp' ? (
                        <WhatsAppIcon />
                      ) : (
                        <TelegramIcon />
                      )}
                    </Fab>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
