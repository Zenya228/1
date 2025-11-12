export const userService = {
  getUsers: () => {
    return [
      {
        id: 1,
        name: 'Иван',
        surname: 'Иванов',
        email: 'ivan@mail.ru',
        phone: '+7 (912) 345-67-89',
        avatar: 'https://via.placeholder.com/100/007bff/ffffff?text=I'
      },
      {
        id: 2,
        name: 'Петр',
        surname: 'Петров',
        email: 'petr@yandex.ru',
        phone: '+7 (923) 456-78-90',
        avatar: 'https://via.placeholder.com/100/28a745/ffffff?text=P'
      },
      {
        id: 3,
        name: 'Мария',
        surname: 'Сидорова',
        email: 'maria@gmail.com',
        phone: '+7 (934) 567-89-01',
        avatar: 'https://via.placeholder.com/100/dc3545/ffffff?text=M'
      },
      {
        id: 4,
        name: 'Анна',
        surname: 'Кузнецова',
        email: 'anna@mail.ru',
        phone: '+7 (945) 678-90-12',
        avatar: 'https://via.placeholder.com/100/ffc107/000000?text=A'
      }
    ];
  }
};