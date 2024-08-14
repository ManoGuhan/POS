import React, { useState } from 'react';
import './Products.css'; // Ensure you have a CSS file for styling
import { useNavigate } from 'react-router-dom';

// Import images
import margheritaPizzaImage from '../assets/marg-pizza.jpeg';
import pepperonipizza from '../assets/peppy-pizza.jpeg';
import pizzaFungi from '../assets/mushroomPizza.jpeg';
import paneerPizza from '../assets/paneerPizza.jpeg';
import veggieParadaise from '../assets/veggieParadaise.jpeg';
import quattroFormagi from '../assets/fourcheese.jpeg';
import salmonPizza from '../assets/salmonPizza.jpeg';
import pepperChickenPizza from '../assets/PepperChickenPizza.jpeg';
import pastacarbonara from '../assets/pasta-carbo.jpeg';
import pastaArrabiata from '../assets/pastaArrabiata.jpeg';
import pastaPuttanesca from '../assets/pastaPuttanesca.jpeg';
import aglioEolio from '../assets/aglioEolio.jpeg';
import alfredo from '../assets/alfredo.jpeg';
import pepe from '../assets/pepe.jpeg';
import garlicBread from '../assets/garlicBread.jpeg';
import cheeseballs from '../assets/cheeseballs.jpeg';
import cheesynachos from '../assets/cheesynachos.jpeg';
import potatowedges from '../assets/potatowedges.jpeg';
import chickenwings from '../assets/chickenwings.jpeg';
import caesarSalad from '../assets/caesarSalad.jpeg';
import biscotti from '../assets/biscotti.jpeg';
import darkFrappuchino from '../assets/DarkFrappuchino.jpeg';
import mangoMilkshake from '../assets/MangoMilkshake.jpeg';
import redBerryCheeseCake from '../assets/RedBerrCheeseCake.jpeg';
import tiramisu from '../assets/tiramisu.jpeg';
import chocolava from '../assets/chocolava.jpeg';
import brownie from '../assets/brownie.jpeg';
import cheese from '../assets/cheese.jpeg';
import jalepenos from '../assets/jalepenos.jpg';
import olives from '../assets/olives.jpeg';
import sun from '../assets/SunDriedTomatoes.jpeg';
import shrooms from '../assets/shrooms.jpeg';

const categories = {
  All: [], // Will be populated with all products
  Pizzas: [
    { id: 1, name: 'Margherita Pizza', price: 299, image: margheritaPizzaImage },
    { id: 2, name: 'Pepperoni Pizza', price: 399, image: pepperonipizza },
    { id: 6, name: 'Pizza Fungi', price: 399, image: pizzaFungi },
    { id: 7, name: 'Paneer Tikka Pizza', price: 449, image: paneerPizza },
    { id: 8, name: 'Veggie Paradise Pizza', price: 379, image: veggieParadaise },
    { id: 9, name: 'Quattro Formagi Pizza', price: 499, image: quattroFormagi },
    { id: 10, name: 'Salmon Pizza', price: 599, image: salmonPizza },
    { id: 11, name: 'Pepper Chicken Pizza', price: 529, image: pepperChickenPizza },
  ],
  Pastas: [
    { id: 3, name: 'Pasta Carbonara', price: 349, image: pastacarbonara },
    { id: 12, name: 'Pasta Arrabiata', price: 349, image: pastaArrabiata },
    { id: 13, name: 'Pasta Puttanesca', price: 369, image: pastaPuttanesca },
    { id: 14, name: 'Aglio E Olio', price: 329, image: aglioEolio },
    { id: 15, name: 'Fettucine Alfredo', price: 389, image: alfredo },
    { id: 16, name: 'Cacio E Pepe', price: 409, image: pepe },
  ],
  Appetizers: [
    { id: 5, name: 'Garlic Bread', price: 149, image: garlicBread },
    { id: 17, name: 'Cheese Balls', price: 179, image: cheeseballs },
    { id: 18, name: 'Cheesy Nachos', price: 199, image: cheesynachos },
    { id: 19, name: 'Potato Wedges', price: 149, image: potatowedges },
    { id: 20, name: 'Chicken Wings', price: 249, image: chickenwings },
    { id: 21, name: 'Caesar Salad', price: 229, image: caesarSalad },
  ],
  Desserts: [
    { id: 4, name: 'Tiramisu', price: 199, image: tiramisu },
    { id: 22, name: 'Biscotti', price: 129, image: biscotti },
    { id: 25, name: 'Red Berry Cheese Cake', price: 259, image: redBerryCheeseCake },
    { id: 26, name: 'Choco Lava Cake', price: 169, image: chocolava },
    { id: 27, name: 'Hazlenut Brownie', price: 169, image: brownie },
  ],
  Beverages: [
    { id: 23, name: 'Dark Frappuchino', price: 199, image: darkFrappuchino },
    { id: 24, name: 'Mango Milkshake', price: 179, image: mangoMilkshake }
  ],
  AddOns: [
    { id: 28, name: 'Extra Cheese', price: 50, image: cheese },
    { id: 29, name: 'Olives', price: 30, image: olives },
    { id: 30, name: 'Jalapenos', price: 20, image: jalepenos },
    { id: 31, name: 'Sun Dried Tomatoes', price: 40, image: sun},
    { id: 32, name: 'Grilled Mushrooms', price: 40, image: shrooms }
    // Other add-ons...
  ]
};

Object.keys(categories).forEach(category => {
  if (category !== 'All') {
    categories.All = categories.All.concat(categories[category]);
  }
});

const Products = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default to 'All'
  const navigate = useNavigate(); // Initialize useNavigate

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null; // Mark for removal
          }
        }
        return item;
      }).filter(item => item !== null); // Remove items marked for removal
    });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = categories[selectedCategory].filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePay = () => {
    navigate('/pay', { state: { cart } });
  };

  return (
    <div className="products-page">
      <div className="sidebar">
        <h2>Categories</h2>
        <ul>
          {Object.keys(categories).map((category) => (
            <li key={category} onClick={() => setSelectedCategory(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="our-menu-section">
        <h1>Our Menu</h1>
        <input
          type="text"
          placeholder="Search for items..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        <div className="products-list">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2>{product.name}</h2>
              <p>Price: ₹{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-info">
        <h2>Bill</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price} x {item.quantity}
              <button className="delete-button" onClick={() => removeFromCart(item.id)}>×</button>
            </li>
          ))}
        </ul>
        <p>Total: ₹{totalCost}</p>
        <button className="pay-button" onClick={handlePay}>PAY</button> {/* PAY button */}
      </div>
    </div>
  );
};

export default Products;
