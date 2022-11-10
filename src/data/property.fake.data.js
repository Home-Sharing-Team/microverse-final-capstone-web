import { v4 as uuidV4, v4 } from 'uuid';
import { fakeCategories } from './category.fake.data';

export const fakePropertyItems = [
  {
    id: uuidV4(),
    name: 'Luxury Beachfront Six Palms Villas # 1',
    user: {
      id: v4(),
      name: 'Gabriel Santo',
      email: 'gabriel@test.com',
      role: 'user',
      avatar: null,
    },
    description:
      'This is the house perfect for you! Near to the beach, to markets, gyms, etc. Reserve a date! ',
    guest_capacity: 9,
    bedrooms: 3,
    beds: 5,
    baths: 3,
    type: 'house',
    size: 690,
    address: {
      id: v4(),
      city: 'Rocky Point',
      country: 'Mexico',
    },
    categories: [
      fakeCategories.beachfront,
      fakeCategories.mansions,
      fakeCategories.luxe,
      fakeCategories.beach,
    ],
    images: [
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/62ad847e-2f84-49cb-a8a7-35856dc93a20.jpg?im_w=960',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/d88dfa7d-113a-4e26-b3fd-d819df85a446.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/492ee2ac-55f8-4c50-8f72-877cc0aa784f.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/2e505f86-c67c-4353-a542-5ea1eab24f51.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/d62454a1-c7e9-4550-bd56-478cf3d09b65.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/c7ec5fd9-ae03-40f9-9632-9ce1a77a3df2.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/70e4749a-e369-4807-9cfd-a1c344ccf847.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/6513c49a-7537-4175-be57-f7581f393b43.jpg?im_w=1200',
      },
    ],
    blocked_periods: [],
    hostings: [
      {
        id: v4(),
        cycle: 'night',
        minimum_cycle_amount: 3,
        rate: 365,
        cleaning_fee: null,
        public: true,
      },
    ],
  },
  {
    id: uuidV4(),
    name: 'Iconic Glass Mansion - Huge Views - Best Location',
    user: {
      id: v4(),
      name: 'Luke Stamford',
      email: 'luke@test.com',
      role: 'user',
      avatar: null,
    },
    description:
      'The iconic and luxurious Glass Mansion has awe-inspiring, expansive lake views for miles from almost every room.\n It is located directly in the heart of Lake of the Ozarks in Osage Beach, yet is securely and privately tucked away in the prestigious gated Ledges Waterfront Homes neighborhood. Glass Mansion sits on the main channel of the lake directly on the water at the 20 mile marker, perched on beautiful natural rock cliffs with cascading waterfalls into the lake below.',
    guest_capacity: 16,
    bedrooms: 5,
    beds: 10,
    baths: 5,
    type: 'house',
    size: 1200,
    address: {
      id: v4(),
      city: 'Osage Beach',
      country: 'United States',
    },
    categories: [
      fakeCategories.lakefront,
      fakeCategories.mansions,
      fakeCategories.luxe,
    ],
    images: [
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/abfdccee-b6d6-4465-89e9-6625482abeb7.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/3f021541-b841-4ac5-9af0-e28cf0f484a2.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/miso/Hosting-49463392/original/693f98b2-4635-466f-becf-d84cd41150bd.jpeg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/db6f128c-e396-4835-944d-ce71b66e7dc0.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/99038ba2-d090-4533-b234-607d20d26000.jpg?im_w=960',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/01ee453c-b5ac-467a-8c4f-c5eb699f1232.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/431cc039-8c82-417b-95d1-cb4cb4d214dc.jpg?im_w=1200',
      },
    ],
    blocked_periods: [],
    hostings: [
      {
        id: v4(),
        cycle: 'night',
        minimum_cycle_amount: 1,
        rate: 459.99,
        cleaning_fee: 400,
        public: true,
      },
      {
        id: v4(),
        cycle: 'month',
        minimum_cycle_amount: 1,
        rate: 10000,
        cleaning_fee: 400,
        public: true,
      },
    ],
  },
  {
    id: uuidV4(),
    name: 'Beachfront Malibu Retreat',
    user: {
      id: v4(),
      name: 'Gil Gray',
      email: 'gil@test.com',
      role: 'user',
      avatar: null,
    },
    description:
      'AUTUM is the BEST TIME of year to visit Malibu!\n You can see the SUNRISE and the SUNSET from the deck, go swimming with the DOLPHINS in the morning and fall asleep to the sound of the ocean!\n My home is ideal for COUPLES or SOLO adult (over 25 ) travelers ONLY, maybe a dog.',
    guest_capacity: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    type: 'apartment',
    size: 60,
    address: {
      id: v4(),
      city: 'Malibu',
      country: 'United States',
    },
    categories: [
      fakeCategories.beachfront,
      fakeCategories.beach,
      fakeCategories['amazing views'],
      fakeCategories.surfing,
    ],
    images: [
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/miso/Hosting-15058446/original/56fe9e3f-48c1-4777-a2b0-5b7745eb9874.jpeg?im_w=960',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/ad0164c8-acb5-477d-b1d0-19fabd9931cc.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/90f625f1-67e9-4a62-8e10-554ae12c8763.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/8ce69729-b8bd-41a4-83a5-383448dd0e80.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/6861fc2a-ca6b-473a-b64d-7303f3836584.jpg?im_w=1200',
      },
    ],
    blocked_periods: [],
    hostings: [
      {
        id: v4(),
        cycle: 'night',
        minimum_cycle_amount: 2,
        rate: 700,
        cleaning_fee: 400,
        public: true,
      },
      {
        id: v4(),
        cycle: 'week',
        minimum_cycle_amount: 1,
        rate: 4200,
        cleaning_fee: 200,
        public: true,
      },
    ],
  },
  {
    id: uuidV4(),
    name: 'Songbird Studio- Secluded but close to everything!',
    user: {
      id: v4(),
      name: 'Ann Something',
      email: 'ann@test.com',
      role: 'user',
      avatar: null,
    },
    description:
      'Bright, sunny, secluded, green 600 sqft studio apartment at rear of Antique home in the heart of Brewster, Northside of Rt 6A. Private entrance. Private backyard with lawn & gardens. Small private deck, gas grill. Bird and small animal life abounds outside. Tons of stars at night.. salt air on the wind. Walking distance to coffee shop, convenience store, multiple restaurants, Bike Trail. Short ride to bay beaches, easy drive to Ocean beaches. Gas "woodstove" for heat, AC for cooling, be comfy!',
    guest_capacity: 4,
    bedrooms: 1,
    beds: 2,
    baths: 1,
    type: 'house',
    size: 80,
    address: {
      id: v4(),
      city: 'Brewster',
      country: 'United States',
    },
    categories: [
      fakeCategories.countryside,
      fakeCategories['tiny homes'],
    ],
    images: [
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/3c0dfe9f-6df6-467a-9c80-4edbfe5dc61d.jpg?im_w=960',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/miso/Hosting-36353867/original/b7079a51-dd6a-476a-b313-ba8589c534a0.jpeg?im_w=1200',
      },
    ],
    blocked_periods: [],
    hostings: [
      {
        id: v4(),
        cycle: 'month',
        minimum_cycle_amount: 6,
        rate: 2000,
        cleaning_fee: null,
        public: true,
      },
    ],
  },
  {
    id: uuidV4(),
    name: 'Provenza Life 1002- Gorgeus apartment/gym',
    user: {
      id: v4(),
      name: 'Sandra Rodriguez',
      email: 'sandra@test.com',
      role: 'user',
      avatar: null,
    },
    description:
      'This special place is close to everything, making it easy to plan your visit and move around while enjoying your trip.\n Only has 1 AC in the main room',
    guest_capacity: 2,
    bedrooms: 1,
    beds: 1,
    baths: 2,
    type: 'apartment',
    size: 55,
    address: {
      id: v4(),
      city: 'Medellín',
      country: 'Colombia',
    },
    categories: [
      fakeCategories['iconic cities'],
    ],
    images: [
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/miso/Hosting-578250815153607611/original/0451b654-545c-40e9-9416-458399129abf.jpeg?im_w=960',
      },
    ],
    blocked_periods: [],
    hostings: [
      {
        id: v4(),
        cycle: 'night',
        minimum_cycle_amount: 2,
        rate: 100,
        cleaning_fee: null,
        public: true,
      },
      {
        id: v4(),
        cycle: 'month',
        minimum_cycle_amount: 6,
        rate: 2800,
        cleaning_fee: null,
        public: true,
      },
    ],
  },
  {
    id: uuidV4(),
    name: '2BR Suite @ The Grand Castle | Pool/Gym/Parking',
    user: {
      id: v4(),
      name: 'Mitten White',
      email: 'mitten@test.com',
      role: 'user',
      avatar: null,
    },
    description:
      'Featuring authentic architecture, high-end finishes, and attractive amenities, The Grand Castle is a unique experience for the entire family. Designed after the Neuschwanstein Castle in southwest Bavaria, the 15 story Grand Castle is the 2nd largest castle structure in the world. The kids will love the outdoor heated pool, game room, and Beauty and the Beast replicate library. Located just 30 minutes from Lake Michigan and 10 minutes from downtown Grand Rapids, there is plenty for the adults too',
    guest_capacity: 6,
    bedrooms: 2,
    beds: 2,
    baths: 2,
    type: 'apartment',
    size: 80,
    address: {
      id: v4(),
      city: 'Grandville',
      country: 'United States',
    },
    categories: [
      fakeCategories.castles,
    ],
    images: [
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/595b5f29-3b46-4441-aa67-a2be6939c84e.jpg?im_w=960',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/d6812963-84c2-4983-a483-ad53098376e9.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/f767ccad-eb79-404d-89e0-dd20ca8b3d96.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/a3c208ff-4f1a-4567-9eab-d0319d55a21e.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/c380a8fd-d6dc-48ee-b260-830853706221.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/366d8e94-7266-40e7-8ef1-606d6eb8ddd5.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/ecf7de4b-7514-4414-8d87-352d4fcf1858.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/0ea037a4-20fc-480a-afc5-0f8837bc7821.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/f71daedc-dc03-4ca0-b9c0-08fdbf0bf892.jpg?im_w=1200',
      },
    ],
    blocked_periods: [],
    hostings: [
      {
        id: v4(),
        cycle: 'night',
        minimum_cycle_amount: 2,
        rate: 130,
        cleaning_fee: 100,
        public: true,
      },
      {
        id: v4(),
        cycle: 'week',
        minimum_cycle_amount: 1,
        rate: 616,
        cleaning_fee: 100,
        public: true,
      },
      {
        id: v4(),
        cycle: 'month',
        minimum_cycle_amount: 1,
        rate: 2948,
        cleaning_fee: 100,
        public: true,
      },
    ],
  },
  {
    id: uuidV4(),
    name: 'Chateau Pessac',
    user: {
      id: v4(),
      name: 'Conan Silva',
      email: 'conan@test.com',
      role: 'user',
      avatar: null,
    },
    description:
      'When the turreted roof of this chateau comes into view, guests will begin to understand the scale of grandeur this home represents. Painstakingly preserved and refitted to satisfy the most expectant of modern guests, this centuries-old chateau offers room after room of history and plush comfort with every step, right on the doorstep of metropolitan Bordeaux and France’s finest wine country.',
    guest_capacity: 12,
    bedrooms: 6,
    beds: 6,
    baths: 7,
    type: 'house',
    size: 2200,
    address: {
      id: v4(),
      city: 'Pessac',
      country: 'France',
    },
    categories: [
      fakeCategories.castles,
      fakeCategories.luxe,
    ],
    images: [
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/5cf60fda-63c1-45d3-84ad-e5c6f593f4af.jpg?im_w=960',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/ac3a26b3-e9aa-4b6a-b40f-fe88b361c35b.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/3a9e4bd8-5281-49c0-a2f1-dbfa598cb2ae.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/fc0062e5-b322-4b65-993f-febffeaaffd3.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/682d90e6-b8df-493a-9f32-153b573456dc.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/3219f1c2-2778-440a-95db-48b4b4052c68.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/3cb269ae-ded0-4d24-ad4e-269247444616.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/923dee3f-0509-4b85-b2e8-0fe4987cffa5.jpg?im_w=1200',
      },
      {
        id: v4(),
        source:
          'https://a0.muscache.com/im/pictures/c0c0b77c-0bc5-4836-af0b-fddabcdf8a08.jpg?im_w=1200',
      },
    ],
    blocked_periods: [],
    hostings: [
      {
        id: v4(),
        cycle: 'night',
        minimum_cycle_amount: 3,
        rate: 2904,
        cleaning_fee: null,
        public: true,
      },
    ],
  },
];
