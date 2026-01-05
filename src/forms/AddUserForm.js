import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
  CircularProgress,
} from '@mui/material';
import { useState, useEffect } from 'react';

// Сервис для загрузки констант валидации (имитация API)
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
      }, 500);
    });
  }
};

const AddUserForm = ({ onSubmit, showValidationDialog }) => {
  const [validationRules, setValidationRules] = useState(null);
  const [loading, setLoading] = useState(false);

  // Загружаем правила валидации из "сервиса"
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

  // Схема валидации с динамическими правилами
  const validationSchema = React.useMemo(() => {
    if (!validationRules) return Yup.object({});
    
    return Yup.object({
      firstName: Yup.string()
        .min(validationRules.minNameLength, `Имя должно содержать минимум ${validationRules.minNameLength} символа`)
        .max(validationRules.maxNameLength, `Имя должно содержать максимум ${validationRules.maxNameLength} символов`)
        .required('Обязательное поле')
        .matches(/^[a-zA-Zа-яА-ЯёЁ\s-]+$/, 'Имя может содержать только буквы и дефис'),
      
      lastName: Yup.string()
        .min(validationRules.minNameLength, `Фамилия должна содержать минимум ${validationRules.minNameLength} символа`)
        .max(validationRules.maxNameLength, `Фамилия должна содержать максимум ${validationRules.maxNameLength} символов`)
        .required('Обязательное поле')
        .matches(/^[a-zA-Zа-яА-ЯёЁ\s-]+$/, 'Фамилия может содержать только буквы и дефис'),
      
      email: Yup.string()
        .email('Введите корректный email')
        .required('Обязательное поле')
        .test('domain-check', 'Допустимые домены: gmail.com, mail.ru, yandex.ru', (value) => {
          if (!value) return true;
          const domain = value.split('@')[1];
          return validationRules.emailDomains.includes(domain);
        }),
      
      appointmentTime: Yup.string()
        .required('Выберите время приема')
        .test('business-hours', 'Время приема должно быть в рабочее время (8:30-11:30 или 12:30-16:00)', (value) => {
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
      firstName: '',
      lastName: '',
      email: '',
      appointmentTime: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    },
  });

  const handleSubmitWithValidation = async (e) => {
    e.preventDefault();
    const errors = await formik.validateForm();
    
    if (Object.keys(errors).length > 0) {
      // Показываем диалоговое окно с ошибками
      showValidationDialog(Object.values(errors));
    } else {
      formik.handleSubmit(e);
    }
  };

  if (loading) {
    return (
      <Paper elevation={2} sx={{ p: 3, mb: 3, textAlign: 'center' }}>
        <CircularProgress />
        <Typography sx={{ mt: 2 }}>Загрузка правил валидации...</Typography>
      </Paper>
    );
  }

  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Добавить нового пользователя
      </Typography>
      
      {validationRules && (
        <Alert severity="info" sx={{ mb: 2 }}>
          Правила валидации загружены из сервиса
        </Alert>
      )}
      
      <Box component="form" onSubmit={handleSubmitWithValidation} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
          variant="outlined"
          size="small"
          inputProps={{
            minLength: validationRules?.minNameLength || 2,
            maxLength: validationRules?.maxNameLength || 50,
            pattern: "^[a-zA-Zа-яА-ЯёЁ\\s-]+$",
            title: "Только буквы и дефис"
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-error fieldset': {
                borderColor: 'error.main',
                borderWidth: 2,
              },
            },
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
          variant="outlined"
          size="small"
          inputProps={{
            minLength: validationRules?.minNameLength || 2,
            maxLength: validationRules?.maxNameLength || 50,
            pattern: "^[a-zA-Zа-яА-ЯёЁ\\s-]+$",
            title: "Только буквы и дефис"
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-error fieldset': {
                borderColor: 'error.main',
                borderWidth: 2,
              },
            },
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
          variant="outlined"
          size="small"
          inputProps={{
            pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
            title: "Допустимые домены: gmail.com, mail.ru, yandex.ru"
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-error fieldset': {
                borderColor: 'error.main',
                borderWidth: 2,
              },
            },
          }}
        />
        
        <TextField
          name="appointmentTime"
          type="time"
          label="Время приема"
          value={formik.values.appointmentTime}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.appointmentTime && Boolean(formik.errors.appointmentTime)}
          helperText={formik.touched.appointmentTime && formik.errors.appointmentTime || "Рабочее время: 8:30-11:30, 12:30-16:00"}
          required
          fullWidth
          variant="outlined"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 минут
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-error fieldset': {
                borderColor: 'error.main',
                borderWidth: 2,
              },
            },
          }}
        />
        
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={formik.isSubmitting}
        >
          Добавить пользователя
        </Button>
      </Box>
    </Paper>
  );
};

export default AddUserForm;