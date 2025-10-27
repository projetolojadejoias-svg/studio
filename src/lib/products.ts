export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
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
    image: 'prod-1',
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
    image: 'prod-2',
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
    image: 'prod-3',
    tags: [],
    discount: 20,
  },
  {
    id: '4',
    name: 'Corrente com Estrela de Davi',
    description: 'Banhada a Ouro 18k • Correntes • Estado: 10/10',
    price: '179,99',
    image: 'prod-4',
    tags: [],
    discount: 10,
  },
  {
    id: '5',
    name: 'Corrente com Emblema de Ouro',
    description: 'Banhada a Ouro 18k • Correntes • Estado: 10/10',
    price: '199,99',
    image: 'prod-5',
    tags: [
      { text: '2 restantes', variant: 'destructive' },
    ],
    discount: 15,
  },
  {
    id: '6',
    name: 'Corrente com Ferradura',
    description: 'Banhada a Ouro 18k • Correntes • Estado: 10/10',
    price: '159,99',
    image: 'prod-6',
    tags: [],
    discount: 5,
  },
  {
    id: '7',
    name: 'Corrente Estrela de Davi Delicada',
    description: 'Banhada a Ouro 18k • Correntes • Estado: 10/10',
    price: '149,99',
    image: 'prod-7',
    tags: [],
    discount: 15,
  },
  {
    id: '8',
    name: 'Corrente Cruz Ouro 18k',
    description: 'Banhada a Ouro 18k • Correntes • Estado: 10/10',
    price: '179,99',
    image: 'prod-8',
    tags: [
      { text: '3 restantes', variant: 'destructive' },
    ],
    discount: 25,
  },
    {
    id: '9',
    name: 'Corrente Cubana Premium',
    description: 'Banhada a Ouro 18k • Correntes • Estado: 10/10',
    price: '199,99',
    image: 'prod-9',
    tags: [
    ],
    discount: 10,
  },
  {
    id: '10',
    name: 'Corrente Emblema Real Premium',
    description: 'Banhada a Ouro 18k • Correntes • Estado: 10/10',
    price: '219,99',
    image: 'prod-10',
    tags: [
      { text: '2 restantes', variant: 'destructive' },
    ],
    discount: 12,
  },
  {
    id: '11',
    name: 'Corrente Cruz Circular Delicada',
    description: 'Banhada a Ouro 18k • Correntes • Estado: 10/10',
    price: '169,99',
    image: 'prod-11',
    tags: [
    ],
    discount: 18,
  },
  {
    id: '12',
    name: 'Corrente Medalha Senhor',
    description: 'Banhada a Ouro 18k • Correntes • Estado: 10/10',
    price: '199,99',
    image: 'prod-12',
    tags: [
      { text: '3 restantes', variant: 'destructive' },
    ],
    discount: 22,
  },
  {
    id: '13',
    name: 'Corrente Ferradura com Cavalo',
    description: 'Banhada a Ouro 18k • Correntes • Estado: 10/10',
    price: '229,99',
    image: 'prod-13',
    tags: [
    ],
    discount: 10,
  },
  {
    id: '14',
    name: 'Corrente Ferradura Premium',
    description: 'Banhada a Ouro 18k • Correntes • Estado: 10/10',
    price: '249,99',
    image: 'prod-14',
    tags: [
      { text: '1 restante', variant: 'destructive' },
    ],
    discount: 15,
  },
];
