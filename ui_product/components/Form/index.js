import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField
} from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import ImageUploader from './../Shared/ImageUploader';
export default function Form() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors }
  } = useForm();

  const FormList = [
    {
      name: 'name',
      type: 'text',
      lable: 'نام'
    },
    {
      name: 'contect-us',
      type: 'text',
      lable: 'راه ارتباطی'
    },
    {
      name: 'email',
      type: 'text',
      lable: 'ایمیل'
    },
    {
      name: 'phonenumber',
      type: 'text',
      lable: 'شماره تماس'
    }
  ];

  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <CardHeader sx={{ textAling: 'right' }} title="اطلاعات فرستنده" />
          <form onSubmit={handleSubmit(e => console.log('davdav', e))}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    border: '1px dotted #e0e0e0'
                  }}>
                  <ImageUploader register={register} />
                </Box>
              </Grid>
              {FormList.map((item, index) => (
                <Grid item xs={6} key={index}>
                  {console.log('item', item)}
                  <Controller
                    name={item.name}
                    control={control}
                    render={({ ...feild }) => (
                      <TextField
                        fullWidth
                        {...feild}
                        {...register(item.name, {
                          required: {
                            value: true,
                            message: 'فیلد اجباری است'
                          }
                        })}
                        name={item.name}
                        label={item.lable}
                        variant="outlined"
                        error={errors[item.name] ? true : false}
                        helperText={
                          errors[item.name] ? errors[item.name].message : ''
                        }
                      />
                    )}
                  />
                </Grid>
              ))}
              <Grid item xs={12} display="flex" justifyContent="flex-end">
                <Box>
                  <Button variant="contained" color="primary" type="submit">
                    ثبت
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

{
}
