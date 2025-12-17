import espresso from "./espresso.jpg";
import Latte from "./Latte.jpg";
import Cappuccino from "./Cappuccino.jpg";
import Mocha from "./Mocha.jpg";
import Americano from "./Americano.jpg";
import FlatWhite from "./FlatWhite.jpg";
import Cortado from "./Cortado.jpg";
import IcedLatte from "./IcedLatte.jpg";
import IcedMocha from "./IcedMocha.jpg";
import ChocolateShake from "./ChocolateShake.jpg";
import VanillaShake from "./VanillaShake.jpg";
import StrawberryShake from "./StrawberryShake.jpg";
import BananaSmoothie from "./BananaSmoothie.jpg";
import StrawberrySmoothie from "./StrawberrySmoothie.jpg";
import MangoSmoothie from "./MangoSmoothie.jpg";
import ChocolateCake from "./ChocolateCake.jpg";
import Cheesecake from "./Cheesecake.jpg";
import Brownie from "./Brownie.jpg";
import BlueberryMuffin from "./BlueberryMuffin.jpg";
import HamAndCheeseSandwich from "./HamAndCheeseSandwich.jpg";
import ChickenSandwich  from "./ChickenSandwich.jpg";
import TurkeySandwich  from "./TurkeySandwich.jpg";
import CheesePanini from "./CheesePanini.jpg";
import CaesarSalad from "./CaesarSalad.jpg";
import GreenSalad from "./GreenSalad.jpg";
import PastaSalad from "./PastaSalad.jpg";
import TomatoSoup from "./TomatoSoup.jpg";
import Lemonade from "./Lemonade.jpg";
import Soda from "./Soda.jpg";

export const productEn = [
  {
    name: "Espresso",
    image: espresso,
    price: 2.5,
    category: "Hot Drinks",
    taste:
      "Intense and bitter with a strong coffee flavor. No milk, just pure espresso essence.",
    customer_satisfaction_percentage: 90,
    id: "1",
  },
  {
    name: "Latte",
    image: Latte,

    price: 3.5,
    category: "Hot Drinks",
    taste:
      "Smooth and creamy, with a mild coffee bitterness balanced by steamed milk. Slight sweetness from the milk.",
    customer_satisfaction_percentage: 88,
    id: "2",
  },
  {
    name: "Cappuccino",
    image: Cappuccino,

    price: 3.0,
    category: "Hot Drinks",
    taste:
      "Strong coffee flavor with a thick, foamy milk layer. Creamy, but with a noticeable bitter kick from the espresso.",
    customer_satisfaction_percentage: 85,
    id: "3",
  },
  {
    name: "Mocha",
    image: Mocha,

    price: 4.0,
    category: "Hot Drinks",
    taste:
      "A blend of rich, sweet chocolate and espresso. Creamy and smooth with a sweet, chocolatey aftertaste.",
    customer_satisfaction_percentage: 92,
    id: "4",
  },
  {
    name: "Americano",
    image: Americano,

    price: 2.8,
    category: "Hot Drinks",
    taste:
      "Bold and strong, similar to espresso but diluted with hot water. Slightly bitter with a smooth finish.",
    customer_satisfaction_percentage: 80,
    id: "5",
  },
  {
    name: "Flat White",
    image: FlatWhite,

    price: 3.2,
    category: "Hot Drinks",
    taste:
      "Creamy and smooth, with a slightly stronger coffee flavor than a latte. Less foam, more milk for a velvety texture.",
    customer_satisfaction_percentage: 86,
    id: "6",
  },
  {
    name: "Cortado",
    image: Cortado,

    price: 3.5,
    category: "Hot Drinks",
    taste:
      "Equal parts espresso and steamed milk. Rich and strong, with a balanced creamy finish.",
    customer_satisfaction_percentage: 87,
    id: "7",
  },
  {
    name: "Iced Latte",
    image: IcedLatte,

    price: 4.0,
    category: "Cold Drinks",
    taste:
      "Chilled espresso with cold milk, creamy and smooth with a mild coffee flavor. A refreshing, sweet experience.",
    customer_satisfaction_percentage: 89,
    id: "8",
  },
  {
    name: "Iced Mocha",
    image: IcedMocha,

    price: 4.5,
    category: "Cold Drinks",
    taste:
      "Cold, sweet chocolate blended with espresso. Creamy with a smooth, rich chocolate and coffee mix.",
    customer_satisfaction_percentage: 90,
    id: "9",
  },
  {
    name: "Chocolate Shake",
    image: ChocolateShake,

    price: 5.0,
    category: "Cold Drinks",
    taste:
      "Decadently sweet and creamy, with rich chocolate flavor. Thick and smooth, like a dessert in a glass.",
    customer_satisfaction_percentage: 93,
    id: "10",
  },
  {
    name: "Vanilla Shake",
    image: VanillaShake,

    price: 4.8,
    category: "Cold Drinks",
    taste:
      "Sweet, creamy vanilla flavor with a smooth, soft texture. Rich and dessert-like.",
    customer_satisfaction_percentage: 91,
    id: "11",
  },
  {
    name: "Strawberry Shake",
    image: StrawberryShake,

    price: 4.8,
    category: "Cold Drinks",
    taste:
      "Sweet and tangy strawberry flavor, smooth and creamy with a slight fruity tang.",
    customer_satisfaction_percentage: 92,
    id: "12",
  },
  {
    name: "Banana Smoothie",
    image: BananaSmoothie,

    price: 4.2,
    category: "Cold Drinks",
    taste:
      "Smooth, creamy, and naturally sweet from ripe bananas. Rich and refreshing with a mellow taste.",
    customer_satisfaction_percentage: 88,
    id: "13",
  },
  {
    name: "Strawberry Smoothie",
    image: StrawberrySmoothie,

    price: 4.5,
    category: "Cold Drinks",
    taste:
      "Sweet, tangy, and refreshing with a rich strawberry flavor. Smooth, fruity, and light.",
    customer_satisfaction_percentage: 89,
    id: "14",
  },
  {
    name: "Mango Smoothie",
    image: MangoSmoothie,

    price: 4.7,
    category: "Cold Drinks",
    taste:
      "Tropical and sweet, with a creamy texture. Refreshing, smooth, and a little tangy.",
    customer_satisfaction_percentage: 94,
    id: "15",
  },
  {
    name: "Chocolate Cake",
    image: ChocolateCake,

    price: 3.5,
    category: "Desserts",
    taste:
      "Rich, moist, and deeply chocolatey. Sweet with a dense, fudgy texture.",
    customer_satisfaction_percentage: 95,
    id: "16",
  },
  {
    name: "Cheesecake",
    image: Cheesecake,

    price: 4.2,
    category: "Desserts",
    taste:
      "Creamy and tangy with a smooth texture. A balance of sweet and sour, with a buttery crust.",
    customer_satisfaction_percentage: 92,
    id: "17",
  },
  {
    name: "Brownie",
    image: Brownie,

    price: 3.0,
    category: "Desserts",
    taste:
      "Dense and chocolatey, sweet and fudgy. A rich, indulgent treat with a slightly chewy texture.",
    customer_satisfaction_percentage: 91,
    id: "18",
  },
  {
    name: "Blueberry Muffin",
    image: BlueberryMuffin,

    price: 2.5,
    category: "Desserts",
    taste:
      "Light, soft, and slightly sweet with bursts of fresh blueberries. Fluffy and moist.",
    customer_satisfaction_percentage: 88,
    id: "19",
  },
  {
    name: "Ham & Cheese Sandwich",
    image: HamAndCheeseSandwich,

    price: 5.0,
    category: "Snacks",
    taste:
      "Savory, salty, with creamy cheese and warm ham. The bread is soft and toasted to a light crisp.",
    customer_satisfaction_percentage: 85,
    id: "20",
  },
  {
    name: "Chicken Sandwich",
    image: ChickenSandwich,

    price: 5.5,
    category: "Snacks",
    taste:
      "Savory and tender chicken with a slight tang from condiments. Served on toasted bread with fresh veggies.",
    customer_satisfaction_percentage: 90,
    id: "21",
  },
  {
    name: "Turkey Sandwich",
    image: TurkeySandwich,

    price: 5.0,
    category: "Snacks",
    taste:
      "Mild, savory turkey with a soft texture. Topped with fresh veggies and light seasoning.",
    customer_satisfaction_percentage: 86,
    id: "22",
  },
  {
    name: "Cheese Panini",
    image: CheesePanini,

    price: 6.0,
    category: "Snacks",
    taste:
      "Crispy and savory, with melted cheese and toasted bread. Rich, cheesy, and satisfying.",
    customer_satisfaction_percentage: 87,
    id: "23",
  },
  {
    name: "Caesar Salad",
    image: CaesarSalad,

    price: 7.0,
    category: "Salads",
    taste:
      "Creamy dressing, tangy with a slight saltiness from cheese and croutons. Fresh lettuce with a savory finish.",
    customer_satisfaction_percentage: 85,
    id: "24",
  },
  {
    name: "Green Salad",
    image: GreenSalad,

    price: 5.0,
    category: "Salads",
    taste:
      "Fresh, light, and slightly bitter with mixed greens. A refreshing, neutral flavor.",
    customer_satisfaction_percentage: 82,
    id: "25",
  },
  {
    name: "Pasta Salad",
    image: PastaSalad,

    price: 6.0,
    category: "Salads",
    taste:
      "Creamy, savory, and slightly tangy with pasta and vegetables. Balanced flavor with a light texture.",
    customer_satisfaction_percentage: 88,
    id: "26",
  },
  {
    name: "Tomato Soup",
    image: TomatoSoup,

    price: 4.0,
    category: "Soups",
    taste:
      "Tangy and savory with a rich, smooth texture. Comforting and slightly sweet from the tomatoes.",
    customer_satisfaction_percentage: 90,
    id: "27",
  },

  {
    name: "Lemonade",
    image: Lemonade,

    price: 3.0,
    category: "Drinks",
    taste:
      "Sweet and tangy, with a refreshing citrus flavor. Perfect balance of sweetness and acidity.",
    customer_satisfaction_percentage: 89,
    id: "29",
  },
  {
    name: "Soda",
    image: Soda,
    price: 2.5,
    category: "Drinks",
    taste:
      "Sweet, fizzy, and refreshing. A classic soda with a carbonated, slightly sugary flavor.",
    customer_satisfaction_percentage: 85,
    id: "30",
  },
];


export const productFa = [
  {
    name: "اسپرسو",
    image: espresso,
    price: 25,
    category: "نوشیدنی‌های گرم",
    taste: "طعم قوی و تلخ با عصاره خالص قهوه، بدون شیر.",
    customer_satisfaction_percentage: 90,
    id: "1",
  },
  {
    name: "لاته",
    image: Latte,
    price: 35,
    category: "نوشیدنی‌های گرم",
    taste: "نرم و خامه‌ای با تلخی ملایم قهوه و شیر بخار داده شده.",
    customer_satisfaction_percentage: 88,
    id: "2",
  },
  {
    name: "کاپوچینو",
    image: Cappuccino,
    price: 30,
    category: "نوشیدنی‌های گرم",
    taste: "طعم قوی قهوه همراه با فوم غلیظ شیر و کمی تلخی.",
    customer_satisfaction_percentage: 85,
    id: "3",
  },
  {
    name: "موکا",
    image: Mocha,
    price: 40,
    category: "نوشیدنی‌های گرم",
    taste: "ترکیب شکلات شیرین و قهوه، خامه‌ای و دلنشین.",
    customer_satisfaction_percentage: 92,
    id: "4",
  },
  {
    name: "آمریکانو",
    image: Americano,
    price: 28,
    category: "نوشیدنی‌های گرم",
    taste: "قوی و تلخ، شبیه اسپرسو اما رقیق‌تر و نرم‌تر.",
    customer_satisfaction_percentage: 80,
    id: "5",
  },
  {
    name: "فلت وایت",
    image: FlatWhite,
    price: 32,
    category: "نوشیدنی‌های گرم",
    taste: "بافت مخملی با طعم قهوه قوی‌تر از لاته و فوم کمتر.",
    customer_satisfaction_percentage: 86,
    id: "6",
  },
  {
    name: "کورتادو",
    image: Cortado,
    price: 35,
    category: "نوشیدنی‌های گرم",
    taste: "ترکیب برابر قهوه و شیر، قوی و متعادل.",
    customer_satisfaction_percentage: 87,
    id: "7",
  },
  {
    name: "لاته یخی",
    image: IcedLatte,
    price: 40,
    category: "نوشیدنی‌های سرد",
    taste: "قهوه سرد با شیر، خنک، نرم و کمی شیرین.",
    customer_satisfaction_percentage: 89,
    id: "8",
  },
  {
    name: "موکا یخی",
    image: IcedMocha,
    price: 45,
    category: "نوشیدنی‌های سرد",
    taste: "ترکیب خنک شکلات و قهوه با بافتی خامه‌ای.",
    customer_satisfaction_percentage: 90,
    id: "9",
  },
  {
    name: "شیک شکلات",
    image: ChocolateShake,
    price: 50,
    category: "نوشیدنی‌های سرد",
    taste: "بسیار شیرین و خامه‌ای با طعم غلیظ شکلات.",
    customer_satisfaction_percentage: 93,
    id: "10",
  },
  {
    name: "شیک وانیل",
    image: VanillaShake,
    price: 48,
    category: "نوشیدنی‌های سرد",
    taste: "خامه‌ای، شیرین و لطیف با طعم وانیل.",
    customer_satisfaction_percentage: 91,
    id: "11",
  },
  {
    name: "شیک توت‌فرنگی",
    image: StrawberryShake,
    price: 48,
    category: "نوشیدنی‌های سرد",
    taste: "شیرین و کمی ترش با طعم طبیعی توت‌فرنگی.",
    customer_satisfaction_percentage: 92,
    id: "12",
  },
  {
    name: "اسموتی موز",
    image: BananaSmoothie,
    price: 42,
    category: "نوشیدنی‌های سرد",
    taste: "نرم، طبیعی و شیرین با طعم موز رسیده.",
    customer_satisfaction_percentage: 88,
    id: "13",
  },
  {
    name: "اسموتی توت‌فرنگی",
    image: StrawberrySmoothie,
    price: 45,
    category: "نوشیدنی‌های سرد",
    taste: "خنک، سبک و میوه‌ای با طعم توت‌فرنگی تازه.",
    customer_satisfaction_percentage: 89,
    id: "14",
  },
  {
    name: "اسموتی انبه",
    image: MangoSmoothie,
    price: 47,
    category: "نوشیدنی‌های سرد",
    taste: "شیرین، استوایی و کمی ترش با بافتی خامه‌ای.",
    customer_satisfaction_percentage: 94,
    id: "15",
  },
  {
    name: "کیک شکلاتی",
    image: ChocolateCake,
    price: 35,
    category: "دسرها",
    taste: "بسیار شکلاتی، مرطوب و غلیظ با بافتی فاجی.",
    customer_satisfaction_percentage: 95,
    id: "16",
  },
  {
    name: "چیزکیک",
    image: Cheesecake,
    price: 42,
    category: "دسرها",
    taste: "خامه‌ای و کمی ترش با پایه بیسکویتی کره‌ای.",
    customer_satisfaction_percentage: 92,
    id: "17",
  },
  {
    name: "براونی",
    image: Brownie,
    price: 30,
    category: "دسرها",
    taste: "شکلاتی، غلیظ و نرم با بافتی جویدنی.",
    customer_satisfaction_percentage: 91,
    id: "18",
  },
  {
    name: "مافین بلوبری",
    image: BlueberryMuffin,
    price: 25,
    category: "دسرها",
    taste: "نرم و سبک با شیرینی ملایم و تکه‌های بلوبری.",
    customer_satisfaction_percentage: 88,
    id: "19",
  },
  {
    name: "ساندویچ ژامبون و پنیر",
    image: HamAndCheeseSandwich,
    price: 50,
    category: "اسنک‌ها",
    taste: "شور و خوش‌طعم با پنیر ذوب‌شده و نان تست‌شده.",
    customer_satisfaction_percentage: 85,
    id: "20",
  },
  {
    name: "ساندویچ مرغ",
    image: ChickenSandwich,
    price: 55,
    category: "اسنک‌ها",
    taste: "مرغ نرم و آبدار با سس و سبزیجات تازه.",
    customer_satisfaction_percentage: 90,
    id: "21",
  },
  {
    name: "ساندویچ بوقلمون",
    image: TurkeySandwich,
    price: 50,
    category: "اسنک‌ها",
    taste: "ملایم و سبک با بوقلمون و سبزیجات تازه.",
    customer_satisfaction_percentage: 86,
    id: "22",
  },
  {
    name: "پانینی پنیر",
    image: CheesePanini,
    price: 60,
    category: "اسنک‌ها",
    taste: "نان برشته با پنیر ذوب‌شده و طعمی غنی.",
    customer_satisfaction_percentage: 87,
    id: "23",
  },
  {
    name: "سالاد سزار",
    image: CaesarSalad,
    price: 70,
    category: "سالادها",
    taste: "سس خامه‌ای با طعمی شور و کمی ترش، تازه و سیرکننده.",
    customer_satisfaction_percentage: 85,
    id: "24",
  },
  {
    name: "سالاد سبز",
    image: GreenSalad,
    price: 50,
    category: "سالادها",
    taste: "سبک، تازه و کمی تلخ با سبزیجات متنوع.",
    customer_satisfaction_percentage: 82,
    id: "25",
  },
  {
    name: "سالاد پاستا",
    image: PastaSalad,
    price: 60,
    category: "سالادها",
    taste: "خامه‌ای و متعادل با پاستا و سبزیجات.",
    customer_satisfaction_percentage: 88,
    id: "26",
  },
  {
    name: "سوپ گوجه‌فرنگی",
    image: TomatoSoup,
    price: 40,
    category: "سوپ‌ها",
    taste: "نرم، گرم و کمی شیرین با طعم گوجه.",
    customer_satisfaction_percentage: 90,
    id: "27",
  },
  {
    name: "لیموناد",
    image: Lemonade,
    price: 30,
    category: "نوشیدنی‌ها",
    taste: "خنک، ترش و شیرین با طعم تازه لیمو.",
    customer_satisfaction_percentage: 89,
    id: "29",
  },
  {
    name: "نوشابه",
    image: Soda,
    price: 25,
    category: "نوشیدنی‌ها",
    taste: "شیرین و گازدار، خنک و کلاسیک.",
    customer_satisfaction_percentage: 85,
    id: "30",
  },
];

