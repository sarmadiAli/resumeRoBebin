import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Snackbar,
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
  const [open, setOpen] = React.useState(false);

  const subHandler = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const availableOn = [
    { id: 1, name: 'whatsapp' },
    { id: 2, name: 'Telegram' },
    { id: 3, name: 'both' },
  ];
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <CardHeader sx={{ textAling: 'right' }} title="اطلاعات فرستنده" />
          <form onSubmit={handleSubmit(subHandler)}>
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
                  <Controller
                    name={item.name}
                    control={control}
                    render={({ ...feild }) => (
                      <TextField
                        fullWidth
                        data-cy="textField"
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
              <Grid item xs={6}>
                <Controller
                  name="availableOn"
                  control={control}
                  onChange={([, data]) => data}
                  render={({ field: { onChange, value } }) => (
                    <Autocomplete
                      disablePortal
                      name="availableOn"
                      options={availableOn || []}
                      sx={{ width: '100%' }}
                      getOptionLabel={option => {
                        if (option.name) return option.name;
                        return option;
                      }}
                      value={value}
                      onChange={(e, newValue) => {
                        onChange(newValue?.name || '');
                      }}
                      renderInput={params => (
                        <TextField
                          {...params}
                          {...register('availableOn', {
                            required: {
                              value: true,
                              message: 'این فیلد الزامی است'
                            }
                          })}
                          error={errors.availableOn}
                          helperText={errors?.availableOn?.message || null}
                          label="راه های ارتباطی"
                        />
                      )}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="flex-end">
                <Box>
                  <Button
                    data-cy="subFormData"
                    variant="contained"
                    color="primary"
                    type="submit">
                    ثبت
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          data-cy="alert_success"
          onClose={handleClose}
          severity="success"
          sx={{ width: '100%' }}>
          عملیات با موفقیت انجام شد
        </Alert>
      </Snackbar>
    </>
  );
}

{
}
