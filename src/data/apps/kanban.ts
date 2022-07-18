import { reactive } from 'vue'

export const tasks = reactive([
  {
    id: '1',
    title: 'نمونه اولیه را با احراز هویت JWT ایجاد کنید',
    state: 'new',
    dueDate: '3 هفته',
    participants: [
      {
        color: 'warning',
        picture: '/demo/avatars/7.jpg',
      },
    ],
  },
  {
    id: '2',
    title: 'با استفاده از React یک کامپوننت لیست TODO طراحی کنید',
    state: 'new',
    dueDate: '3 هفته',
    participants: [
      {
        color: 'info',
        picture: '/images/avatars/svg/vuero-1.svg',
      },
    ],
  },
  {
    id: '3',
    title: 'پیاده سازی REST API کاربران',
    state: 'progress',
    dueDate: '3 روز',
    participants: [
      {
        color: 'danger',
        picture: '/demo/avatars/12.jpg',
      },
      {
        color: undefined,
        picture: '/demo/avatars/26.jpg',
      },
      {
        color: undefined,
        picture: '/demo/avatars/19.jpg',
      },
    ],
  },
  {
    id: '4',
    title: 'بررسی وایرفریم‌های پروژه',
    state: 'progress',
    dueDate: '1 هفته',
    participants: [
      {
        color: 'success',
        picture: '/demo/avatars/13.jpg',
      },
    ],
  },
  {
    id: '5',
    title: 'پانویس جدید را در همه صفحات پیاده سازی کنید',
    state: 'progress',
    dueDate: '5 روز',
    participants: [
      {
        color: 'info',
        picture: '/demo/avatars/16.jpg',
      },
    ],
  },
  {
    id: '6',
    title: 'اجرای پروژه های REST API',
    state: 'ready',
    dueDate: '2 روز',
    participants: [
      {
        color: 'warning',
        picture: '/images/avatars/svg/vuero-1.svg',
      },
    ],
  },
  {
    id: '7',
    title: 'طراحی مجدد صفحه لندینگ',
    state: 'completed',
    dueDate: 'سروقت',
    participants: [
      {
        color: 'success',
        picture: '/demo/avatars/12.jpg',
      },
    ],
  },
  {
    id: '8',
    title: 'پروژه های اجرای REST API',
    state: 'completed',
    dueDate: 'سروقت',
    participants: [
      {
        color: 'danger',
        picture: '/demo/avatars/18.jpg',
      },
      {
        picture: '/demo/avatars/9.jpg',
      },
    ],
  },
  {
    id: '9',
    title: 'راه اندازی مجدد پایگاه داده',
    state: 'completed',
    dueDate: 'سروقت',
    participants: [
      {
        color: 'primary',
        picture: '/demo/avatars/13.jpg',
      },
    ],
  },
  {
    id: '10',
    title: 'راه اندازی برنامه نمایشی Firebase',
    state: 'completed',
    dueDate: 'سروقت',
    participants: [
      {
        color: 'warning',
        picture: '/demo/avatars/16.jpg',
      },
    ],
  },
])
