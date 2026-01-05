import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  TextField,
  Button,
  Grid,
  Alert,
  CircularProgress,
} from '@mui/material';

const ValidationService = {
  getValidationRules: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          minNameLength: 2,
          maxNameLength: 50,
          emailDomains: ['gmail.com', 'mail.ru', 'yandex.ru'],
          businessHours: {
            morning: { start: '08:30', end: '11:30' },
            afternoon: { start: '12:30', end: '16:00' }
          }
        });
      }, 300);
    });
  }
};

const EditUserForm = ({ user, onSubmit, onCancel }) => {
  const [validationRules, setValidationRules] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadRules = async () => {
      setLoading(true);
      try {
        const rules = await ValidationService.getValidationRules();
        setValidationRules(rules);
      } catch (error) {
        console.error('Ошибка загрузки правил валидации:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadRules();
  }, []);

  const validationSchema = React.useMemo(() => {
    if (!validationRules) return Yup.object({});
    
    return Yup.object({
      firstName: Yup.string()
        .min(validationRules.minNameLength, `Минимум ${validationRules.minNameLength} символа`)
        .max(validationRules.maxNameLength, `Максимум ${validationRules.maxNameLength} символов`)
        .required('Обязательное поле'),
      
      lastName: Yup.string()
        .min(validationRules.minNameLength, `Минимум ${validationRules.minNameLength} символа`)
        .max(validationRules.maxNameLength, `Максимум ${validationRules.maxNameLength} символов`)
        .required('Обязательное поле'),
      
      email: Yup.string()
        .email('Некорректный email')
        .required('Обязательное поле')
        .test('domain-check', 'Допустимые домены: gmail.com, mail.ru, yandex.ru', (value) => {
          if (!value) return true;
          const domain = value.split('@')[1];
          return validationRules.emailDomains.includes(domain);
        }),
      
      appointmentTime: Yup.string()
        .required('Выберите время приема')
        .test('business-hours', 'Рабочее время: 8:30-11:30 или 12:30-16:00', (value) => {
          if (!value) return false;
          const time = value;
          const { morning, afternoon } = validationRules.businessHours;
          return (time >= morning.start && time <= morning.end) || 
                 (time >= afternoon.start && time <= afternoon.end);
        })
    });
  }, [validationRules]);

  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      email: user?.email || '',
      appointmentTime: user?.appointmentTime || '',
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(user.id, values);
    },
    enableReinitialize: true,
  });

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
      {validationRules && (
        <Alert severity="info" sx={{ mb: 2 }}>
          Правила валидации загружены
        </Alert>
      )}
      
      <TextField
        name="firstName"
        label="Имя"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
        required
        fullWidth
        margin="normal"
        variant="outlined"
        inputProps={{
          minLength: validationRules?.minNameLength || 2,
          maxLength: validationRules?.maxNameLength || 50,
        }}
      />
      
      <TextField
        name="lastName"
        label="Фамилия"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
        required
        fullWidth
        margin="normal"
        variant="outlined"
        inputProps={{
          minLength: validationRules?.minNameLength || 2,
          maxLength: validationRules?.maxNameLength || 50,
        }}
      />
      
      <TextField
        name="email"
        type="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        required
        fullWidth
        margin="normal"
        variant="outlined"
      />
      
      <TextField
        name="appointmentTime"
        type="time"
        label="Время приема"
        value={formik.values.appointmentTime}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.appointmentTime && Boolean(formik.errors.appointmentTime)}
        helperText={formik.touched.appointmentTime && formik.errors.appointmentTime || "8:30-11:30, 12:30-16:00"}
        required
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        inputProps={{ step: 300 }}
      />
      
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={6}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Сохранить
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            type="button"
            variant="contained"
            color="error"
            onClick={onCancel}
            fullWidth
            size="large"
          >
            Отмена
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditUserForm;