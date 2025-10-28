export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  images?: string[];
  sizes?: string[];
  stock?: boolean;
  tags: {
    text: string;
    variant: 'success' | 'destructive' | 'default' | 'secondary' | 'outline';
  }[];
  discount?: number;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Corrente com Pingente Emblema Real',
    description: 'Banhada a Ouro 18k • Correntes • Estado: 10/10',
    price: '189,99',
    originalPrice: '210,00',
    image: 'prod-1',
    images: ['prod-1'],
    sizes: ['70 cm'],
    stock: true,
    tags: [
      { text: '3 restantes', variant: 'destructive' },
    ],
    discount: 10,
  },
  {
    id: '2',
    name: 'Corrente com Escudo Brasão',
    description: 'Banhada a Ouro 18k • Correntes • Estado: 10/10',
    price: '179,99',
    originalPrice: '257,13',
    image: 'prod-2',
    images: ['prod-2'],
    sizes: ['70 cm'],
    stock: true,
    tags: [
      { text: '2 restantes', variant: 'destructive' },
    ],
    discount: 30,
  },
  {
    id: '3',
    name: 'Corrente com Cruz Clássica',
    description: 'Banhada a Ouro 18k • Correntes • Estado: 10/10',
    price: '169,99',
    originalPrice: '212,49',
    image: 'prod-3',
    images: ['prod-3'],
    sizes: ['70 cm'],
    stock: true,
    tags: [],
    discount: 20,
  },
  {
    id: '4',
    name: 'Corrente com Estrela de Davi',
    description: 'Banhada a Ouro 18k • Correntes • Estado: 10/10',
    price: '179,99',
    originalPrice: '199,99',
    image: 'prod-4',
    images: ['prod-4'],
    sizes: ['70 cm'],
    stock: false,
    tags: [],
    discount: 10,
  },
  {
    id: '5',
    name: 'Corrente com Pingente Medalhão',
    description: 'Banhada a Ouro 18k • Correntes • Estado: 10/10',
    price: '199,99',
    originalPrice: '235,28',
    image: 'prod-5',
    images: ['prod-5'],
    sizes: ['70 cm'],
    stock: true,
    tags: [
      { text: '2 restantes', variant: 'destructive' },
    ],
    discount: 15,
  },
  {
    id: '6',
    name: 'Corrente com Pingente Redondo',
    description: 'Banhada a Ouro 18k • Correntes • Estado: 10/10',
    price: '159,99',
    originalPrice: '168,41',
    image: 'prod-6',
    images: ['prod-6'],
    sizes: ['70 cm'],
    stock: true,
    tags: [],
    discount: 5,
  },
  {
    id: '7',
    name: 'Corrente com Pingente Chave',
    description: 'Banhada a Ouro 18k • Correntes • Estado: 10/10',
    price: '149,99',
    originalPrice: '176,46',
    image: 'prod-7',
    images: ['prod-7'],
    sizes: ['70 cm'],
    stock: true,
    tags: [],
    discount: 15,
  },
  {
    id: '8',
    name: 'Corrente com Pingente Relicário',
    description: 'Banhada a Ouro 18k • Correntes • Estado: 10/10',
    price: '179,99',
    originalPrice: '239,99',
    image: 'prod-8',
    images: ['prod-8'],
    sizes: ['70 cm'],
    stock: true,
    tags: [
      { text: '3 restantes', variant: 'destructive' },
    ],
    discount: 25,
  },
    {
    id: '9',
    name: 'Corrente com Pingente Cruz Luxo',
    description: 'Banhada a Ouro 18k • Correntes • Estado: 10/10',
    price: '199,99',
    originalPrice: '222,21',
    image: 'prod-9',
    images: ['prod-9'],
    sizes: ['70 cm'],
    stock: true,
    tags: [
    ],
    discount: 10,
  },
  {
    id: '10',
    name: 'Corrente com Pingente Premium',
    description: 'Banhada a Ouro 18k • Correntes • Estado: 10/10',
    price: '219,99',
    originalPrice: '249,99',
    image: 'prod-10',
    images: ['prod-10'],
    sizes: ['70 cm'],
    stock: true,
    tags: [
      { text: '2 restantes', variant: 'destructive' },
    ],
    discount: 12,
  },
  {
    id: '13',
    name: 'Corrente Ferradura com Cavalo',
    description: 'Banhada a Ouro 18k • Correntes • Estado: 10/10',
    price: '229,99',
    originalPrice: '255,54',
    image: 'prod-13',
    images: ['prod-13'],
    sizes: ['70 cm'],
    stock: true,
    tags: [
    ],
    discount: 10,
  },
  {
    id: '14',
    name: 'Corrente Ferradura Premium',
    description: 'Banhada a Ouro 18k • Correntes • Estado: 10/10',
    price: '249,99',
    originalPrice: '294,11',
    image: 'prod-14',
    images: ['prod-14'],
    sizes: ['70 cm'],
    stock: true,
    tags: [
      { text: '1 restante', variant: 'destructive' },
    ],
    discount: 15,
  },
];
