import React from 'react';
import { Card } from '@/components/ui/card';

const Menu = () => {
  return (
    <div className="bg-page bg-menu container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-2">Our Menu</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Explore our authentic Indian cuisine, prepared with traditional spices and techniques
        to deliver an unforgettable culinary experience.
      </p>

      {/* Breakfast Section */}
      <section className="menu-category">
      <h2 className="text-2xl font-semibold mb-6 text-red-600 border-b-2 border-red-600 pb-2 inline-block">
          Breakfast
      </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {breakfastItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Starters Section */}
      <section className="menu-category">
      <h2 className="text-2xl font-semibold mb-6 text-red-600 border-b-2 border-red-600 pb-2 inline-block">
         Starters
      </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {starterItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Main Course Section */}
      <section className="menu-category">
      <h2 className="text-2xl font-semibold mb-6 text-red-600 border-b-2 border-red-600 pb-2 inline-block">
          Main Course
      </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainCourseItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Rice & Bread Section */}
      <section className="menu-category">
      <h2 className="text-2xl font-semibold mb-6 text-red-600 border-b-2 border-red-600 pb-2 inline-block">
        Rice and bread
      </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {riceItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Beverages Section */}
      <section className="menu-category">
      <h2 className="text-2xl font-semibold mb-6 text-red-600 border-b-2 border-red-600 pb-2 inline-block">
          Beverages
      </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beverageItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Desserts Section */}
      <section className="menu-category">
      <h2 className="text-2xl font-semibold mb-6 text-red-600 border-b-2 border-red-600 pb-2 inline-block">
          Desserts
      </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dessertItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

const MenuItem = ({ item }) => {
  return (
    <Card className="menu-item overflow-hidden h-full">
      <div className="aspect-video bg-muted mb-4 rounded-md overflow-hidden">
        <img 
          src={item.image || "https://placehold.co/600x400?text=Food+Image"} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <span className="bg-spice-yellow/20 text-spice-brown px-2 py-1 rounded text-sm font-medium">
            {item.price}
          </span>
        </div>
        <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
        {item.spiceLevel && (
          <div className="flex items-center mt-2">
            <span className="text-xs mr-2">Spice Level:</span>
            <SpiceLevel level={item.spiceLevel} />
          </div>
        )}
      </div>
    </Card>
  );
};

const SpiceLevel = ({ level }) => {
  const maxLevel = 3;
  return (
    <div className="flex">
      {[...Array(maxLevel)].map((_, i) => (
        <svg 
          key={i} 
          className={`h-4 w-4 ${i < level ? 'text-spice-red' : 'text-gray-300'}`} 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
        </svg>
      ))}
    </div>
  );
};

// Menu items data - Breakfast
const breakfastItems = [
  {
    id: 1,
    name: "Pohe",
    // price: "120",
    description: "Flattened pohe cooked with onions, peanuts, and spices. Garnished with coriander and lemon.",
    // spiceLevel: 1,
    image: "https://im.whatshot.in/img/2021/Jun/istock-1093260058-cropped-1622810476.jpg"
  },
  {
    id: 2,
    name: "Idli Sambar",
    // price: "150",
    description: "Soft and fluffy rice cakes served with spicy sambar and coconut chutney.",
    // spiceLevel: 2,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Upma",
    // price: "130",
    description: "Savory semolina porridge with vegetables, curry leaves, and mustard seeds.",
    // spiceLevel: 1,
    image: "https://www.seema.com/wp-content/uploads/2022/08/Upma.jpg"
  },
  {
    id: 4,
    name: "Aloo Paratha",
    // price: "140",
    description: "Whole wheat flatbread stuffed with spiced potatoes, served with yogurt.",
    // spiceLevel: 2,
    image: "https://media.istockphoto.com/id/1279134709/photo/image-of-metal-tray-with-aloo-paratha-pile-topped-with-red-onion-rings-and-sprinkle-of.webp?b=1&s=170667a&w=0&k=20&c=NwUx_sBLfssjSfBIbKktRinUOtjupUMQ206oeeEZ_7g="
  },
  {
    id: 5,
    name: "Masala Dosa",
    // price: "160",
    description: "Crispy Dosa and lentil crepe filled with spiced potatoes, served with sambar and chutney.",
    // spiceLevel: 2,
    image: "https://i.pinimg.com/originals/00/07/8c/00078c3a5782b1367a6cdfcc03f710a9.jpg"
  },
  {
    id: 6,
    name: "Chole Bhature",
    // price: "180",
    description: "Chole bhature served with deep-fried bread. A popular Punjabi dish.",
    // spiceLevel: 3,
    image: "https://static.vecteezy.com/system/resources/previews/015/933/617/non_2x/chole-bhature-is-a-north-indian-food-dish-a-combination-of-chana-masala-and-bhatura-or-puri-free-photo.jpg"
  }
];

// New Starters section
const starterItems = [
  {
    id: 22,
    name: "Samosa",
    // price: "90",
    description: "Crispy samosa filled with spiced potatoes and peas, deep-fried to perfection.",
    // spiceLevel: 2,
    image: "https://wallpaperaccess.com/full/2069188.jpg"
  },
  {
    id: 23,
    name: "Paneer Tikka",
    // price: "220",
    description: "Cottage paneer cubes marinated in spices and yogurt, grilled in a tikka.",
    // spiceLevel: 2,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 24,
    name: "Onion Bhaji",
    // price: "110",
    description: "Crispy onion fritters made with gram flour and spices, served with chutney.",
    // spiceLevel: 1,
    image: "https://thedevilwearssalad.com/wp-content/uploads/2021/10/Onion-bhaji-3.jpg"
  },
  {
    id: 25,
    name: "Chicken 65",
    // price: "240",
    description: "Spicy, deep-fried chicken pieces flavored with curry leaves and chilies.",
    // spiceLevel: 3,
    image: "https://swatisani.net/kitchen/wp-content/uploads/2014/11/1200px-Chicken_65_Dish.jpg"
  },
  {
    id: 26,
    name: "Dahi Puri",
    // price: "130",
    description: "Hollow crispy puris filled with potatoes, yogurt, and tangy tamarind chutney.",
    // spiceLevel: 1,
    image: "https://ministryofcurry.com/wp-content/uploads/2022/07/Dahi-Puri_-3-850x850.jpg"
  },
  // {
  //   id: 27,
  //   name: "Seekh Kebab",
  //   price: "260",
  //   description: "Minced meat mixed with herbs and spices, grilled on skewers in a tandoor.",
  //   spiceLevel: 2,
  //   image: "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?q=80&w=1000&auto=format&fit=crop"
  // }
];

// Main Course items data
const mainCourseItems = [
  {
    id: 7,
    name: "Paneer Butter Masala",
    // price: "240",
    description: "Cottage paneer cubes in a rich tomato and butter gravy with aromatic spices.",
    // spiceLevel: 2,
    image: "https://img.freepik.com/premium-photo/delicious-paneer-butter-masala-photography_928503-851.jpg?w=2000"
  },
  {
    id: 8,
    name: "Chicken Biryani",
    // price: "280",
    description: "Fragrant basmati rice cooked with tender chicken pieces and authentic spices.",
    // spiceLevel: 3,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 9,
    name: "Dal Tadka",
    // price: "180",
    description: "Yellow lentils tempered with cumin, garlic, and dried red chilies.",
    // spiceLevel: 2,
    image: "https://spicecravings.com/wp-content/uploads/2021/05/Dal-Tadka-Featured-768x768.jpg"
  },
  {
    id: 11,
    name: "Rogan Josh",
    // price: "320",
    description: "Aromatic lamb curry from Kashmir, slow-cooked with yogurt and spices.",
    // spiceLevel: 3,
    image: "http://holidayshunt.com/wp-content/uploads/2022/06/Rogan-Josh-by-PictureTheRecipe1.jpg"
  },
  {
    id: 12,
    name: "Malai Kofta",
    // price: "260",
    description: "Fried vegetable and paneer dumplings in a creamy tomato sauce.",
    // spiceLevel: 1,
    image: "https://arindianrestaurant.co.nz/wp-content/uploads/2020/07/malai-kofta-1024x893.jpg"
  },
  {
    id: 13,
    name: "Chana Masala",
    // price: "220",
    description: "Spicy chickpea curry with a blend of North Indian spices.",
    // spiceLevel: 2,
    image: "https://bonmasala.com/wp-content/uploads/2022/06/Chole-Masala.jpg"
  },
  {
    id: 15,
    name: "Fish Curry",
    // price: "300",
    description: "Fresh fish cooked in a tangy coconut-based curry. A coastal delicacy.",
    // spiceLevel: 2,
    image: "https://www.licious.in/blog/wp-content/uploads/2022/03/shutterstock_1891229335-min.jpg"
  }
];

// New Rice & Bread section
const riceItems = [
  {
    id: 28,
    name: "Jeera Rice",
    // price: "120",
    description: "Fragrant basmati rice tempered with cumin seeds and ghee.",
    // spiceLevel: 0,
    image: "https://img-global.cpcdn.com/recipes/5e5a9e497bb98aea/1502x1064cq70/jeera-rice-recipe-main-photo.jpg"
  },
  {
    id: 10,
    name: "Butter Naan",
    // price: "60",
    description: "Soft and buttery leavened bread baked in tandoor.",
    // spiceLevel: 0,
    image: "https://rbiryaniadda.us/wp-content/uploads/2020/08/Butter-Naan-1-675x675.jpg"
  },
  {
    id: 29,
    name: "Veg Pulao",
    // price: "180",
    description: "Basmati rice cooked with mixed vegetables and aromatic spices.",
    // spiceLevel: 1,
    image: "https://img.freepik.com/premium-photo/indian-veg-biryani-veg-pulav-4k-hd-photo-indian-vegetable-pulao_1193781-13308.jpg?w=900"
  },
  // {
  //   id: 14,
  //   name: "Tandoori Roti",
  //   price: "40",
  //   description: "Whole wheat flatbread baked in a clay oven.",
  //   spiceLevel: 0,
  //   image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1000&auto=format&fit=crop"
  // },
  {
    id: 30,
    name: "Garlic Naan",
    // price: "70",
    description: "Soft bread topped with garlic and butter, baked in a tandoor.",
    // spiceLevel: 0,
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2022/12/garlic-naan-3.jpg"
  },
  {
    id: 31,
    name: "Hyderabadi Biryani",
    // price: "300",
    description: "Aromatic long-grain rice layered with marinated meat and spices.",
    // spiceLevel: 2,
    image: "https://img.freepik.com/premium-photo/hyderabadi-chicken-biryani-food-photos_410516-42775.jpg?w=900"
  }
];

// New Beverages section
const beverageItems = [
  // {
  //   id: 32,
  //   name: "Masala Chai",
  //   price: "60",
  //   description: "Traditional Indian spiced tea with milk, cardamom, ginger, and other spices.",
  //   spiceLevel: 0,
  //   image: "https://images.unsplash.com/photo-1565023096925-8014bebcbf8b?q=80&w=1000&auto=format&fit=crop"
  // },
  {
    id: 33,
    name: "Mango Lassi",
    // price: "90",
    description: "Creamy yogurt drink blended with sweet mango pulp and a hint of cardamom.",
    // spiceLevel: 0,
    image: "https://sixhungryfeet.com/wp-content/uploads/2022/07/Vegan-Mango-Lassi-5.jpg"
  },
  {
    id: 34,
    name: "Fresh Lime Soda",
    // price: "70",
    description: "Refreshing combination of fresh lime juice, soda water, and sugar or salt.",
    // spiceLevel: 0,
    image: "https://blog.hamiltonbeachcommercial.com/hs-fs/hubfs/Fresh_Lime_Soda.jpg?width=700&name=Fresh_Lime_Soda.jpg"
  },
  {
    id: 35,
    name: "Badam Milk",
    // price: "100",
    description: "Creamy milk infused with almond paste, saffron, and cardamom.",
    // spiceLevel: 0,
    image: "https://aartimadan.com/wp-content/uploads/2019/01/Badam-Milk-4-1.jpg"
  },
  {
    id: 36,
    name: "Coca cola",
    // price: "50",
    description: "Cumin-infused water with mint and coke, known for its digestive properties.",
    // spiceLevel: 0,
    image: "https://images2.alphacoders.com/106/1068711.jpg"
  },
  {
    id: 37,
    name: "Maaza",
    // price: "80",
    description: "Chilled maaza flavored with mango syrup, topped with sweetness.",
    // spiceLevel: 0,
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/ff48d59b-4923-4fff-86b6-abf44dc0cf51.__CR0,0,970,600_PT0_SX970_V1___.jpg"
  }
];

// Dessert items data
const dessertItems = [
  {
    id: 16,
    name: "Gulab Jamun",
    // price: "120",
    description: "Soft milk solids dumplings soaked in rose-flavored sugar syrup.",
    // spiceLevel: 0,
    image: "https://1.bp.blogspot.com/-YGBSprsgs1c/XdDVy-pGurI/AAAAAAAAX64/uN_6FF2b6BIYgI2tzz3DXlWNvdlY_jZ_QCLcBGAsYHQ/s1600/gulab%2Bjamun%2B9.JPG"
  },
  {
    id: 17,
    name: "Rasmalai",
    // price: "140",
    description: "Soft cottage cheese patties immersed in creamy saffron milk.",
    // spiceLevel: 0,
    image: "https://img.freepik.com/premium-photo/angoori-rasmalai-is-indian-dessert-sweet-with-dry-fruits-saffron-toppings-served-bow-selective-focus_726363-1072.jpg"
  },
  // {
  //   id: 18,
  //   name: "Jalebi",
  //   // price: "100",
  //   description: "Crispy, pretzel-shaped sweets soaked in sugar syrup. Served warm.",
  //   // spiceLevel: 0,
  //   image: "https://images.unsplash.com/photo-1605197384465-b93a3d8e0319?q=80&w=1000&auto=format&fit=crop"
  // },
  // {
  //   id: 19,
  //   name: "Kheer",
  //   price: "130",
  //   description: "Rice pudding with cardamom, saffron, and nuts.",
  //   spiceLevel: 0,
  //   image: "https://images.unsplash.com/photo-1615475436121-2717fd7f5575?q=80&w=1000&auto=format&fit=crop"
  // },
  {
    id: 20,
    name: "Kulfi",
    // price: "120",
    description: "Traditional Indian ice cream with pistachios and cardamom.",
    // spiceLevel: 0,
    image: "https://platinitwithwendy.com/wp-content/uploads/2023/05/DSC_2223-1-1920x1280.jpeg"
  },
  {
    id: 21,
    name: "Gajar Halwa",
    // price: "150",
    description: "Sweet carrot pudding with ghee, milk, and dry fruits.",
    // spiceLevel: 0,
    image: "https://www.seema.com/wp-content/uploads/2022/02/Gajar-ka-Halwa-scaled.jpg"
  }
];

export default Menu;
