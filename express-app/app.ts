import express, { Request, Response } from 'express';
import cors from 'cors';
import { Menu, Receipt, Restaurant } from './types';

const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.post('/orders', (req: Request, res: Response) => {
  const { menu, totalPrice } = req.body as { menu: Menu[]; totalPrice: number };

  const receipt: Receipt = {
    id: Date.now().toString(),
    menu,
    totalPrice,
  };

  res.status(201).send({ receipt });
});

app.get('/restaurants', (req: Request, res: Response) => {
  const restaurants: Restaurant[] = [
    {
      id: '1',
      category: '중식',
      name: '메가반점',
      menu: [
        { id: '1', name: '짜장면', price: 8000 },
        { id: '2', name: '짬뽕', price: 8000 },
        { id: '3', name: '차돌짬뽕', price: 9000 },
        { id: '4', name: '탕수육', price: 14000 },
      ],
    },
    {
      id: '2',
      category: '한식',
      name: '메리김밥',
      menu: [
        { id: '5', name: '김밥', price: 3500 },
        { id: '6', name: '참치김밥', price: 4500 },
        { id: '7', name: '제육김밥', price: 5000 },
        { id: '8', name: '훈제오리김밥', price: 5500 },
        { id: '9', name: '컵라면', price: 2000 },
      ],
    },
    {
      id: '3',
      category: '한식',
      name: '데브부엌',
      menu: [
        { id: '10', name: '제육덮밥', price: 10000 },
        { id: '11', name: '닭떡국', price: 9000 },
        { id: '12', name: '닭개장', price: 11000 },
        { id: '13', name: '돈까스', price: 1000 },
      ],
    },
    {
      id: '4',
      category: '일식',
      name: '로드스시',
      menu: [
        { id: '14', name: '모듬초밥', price: 14000 },
        { id: '15', name: '특선초밥', price: 17900 },
        { id: '16', name: '스페셜초밥', price: 21000 },
      ],
    },
    {
      id: '5',
      category: '일식',
      name: '혹등고래카레',
      menu: [
        { id: '17', name: '기본카레', price: 9000 },
        { id: '18', name: '가라아게카레', price: 14000 },
        { id: '19', name: '소시지카레', price: 13000 },
        { id: '20', name: '돈까스카레', price: 14000 },
        { id: '21', name: '닭가슴살카레', price: 13000 },
      ],
    },
    {
      id: '6',
      category: '한식',
      name: '메가김치찌개',
      menu: [
        { id: '22', name: '김치찌개1인', price: 8000 },
        { id: '23', name: '된장찌개', price: 8000 },
        { id: '24', name: '계란말이', price: 6000 },
      ],
    },
  ];

  res.status(200).send({ restaurants });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${port}`);
});
