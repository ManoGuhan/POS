import React, { useState } from 'react';
import './Stock.css'; // Import CSS file for styling

const initialStock = [
  { id: 1, name: 'Mozzerella Cheese', quantity: '1000 g' },
  { id: 2, name: 'black Olives', quantity: '2000 g' },
  { id: 3, name: 'Jalapenos', quantity: '1500 g' },
  { id: 4, name: 'Tomato sauce', quantity: '500 l' }, 
  { id: 5, name: 'pepparoni', quantity: '2000 g'},
  { id: 6, name: 'mushrooms', quantity: '2000 g'},
  { id: 7, name: 'fresh cream', quantity: '3000 ml'},
  { id: 8, name: 'paneer tikka filling', quantity: '1500 g'},
  { id: 9, name: 'capsicum-green', quantity: '5 pcs'},
  { id: 10, name: 'red paprika', quantity: '1000 g'},
  { id: 11, name: 'gouda cheese', quantity: '5000 g'},
  { id: 12, name: 'parmesan cheese', quantity: '5000 g'},
  { id: 13, name: 'cheddar cheese', quantity: '5000 g'},
  { id: 14, name: 'oregano', quantity: '250 packets'},
  { id: 15, name: 'red chili flakes', quantity: '250 packets'},
  { id: 16, name: 'smoked salmon', quantity: '50 slices'},
  { id: 17, name: 'arugula', quantity: '700 g'},
  { id: 18, name: 'pepper', quantity: '1000 g'},
  { id: 19, name: 'spaghetti pasta dry', quantity: '1000 g'},
  { id: 20, name: 'eggs', quantity: '100 pcs'},
  { id: 21, name: 'guanchale', quantity: '1000 g'},
  { id: 22, name: 'basil', quantity: '1000 g'},
  { id: 23, name: 'green olives', quantity: '2000 g'},
  { id: 24, name: 'olive oil', quantity: '3000 ml'},
  { id: 25, name: 'parsley', quantity: '300 gm'},
  { id: 26, name: 'lemon', quantity: '20 pcs'},
  { id: 27, name: 'anchovies', quantity: '30 pcs'},
  { id: 28, name: '00 flour', quantity: '100000 g'},
  { id: 29, name: 'frozen cheese balls', quantity: '100 pcs'},
  { id: 30, name: 'Nachos', quantity: '5000 g'},
  { id: 31, name: 'garlic', quantity: '3000 g'},
  { id: 32, name: 'frozen potato wedges', quantity: '150 pcs'},
  { id: 33, name: 'chicken wings', quantity: '100000 g'},
  { id: 34, name: 'tiramisu', quantity: '50 pcs'},
  { id: 34, name: 'lettuce', quantity: '1200 g'},
  { id: 35, name: 'chocolate syrup', quantity: '5000 ml'},
  { id: 36, name: 'red berry cheesecake frozen', quantity: '100 pcs'},
  { id: 37, name: 'choco lava cake frozen ', quantity: '120 pcs'},
  { id: 38, name: 'hazlenut brownie frozen', quantity: '120 pcs'},
  { id: 39, name: 'frappe ds', quantity: '100 packets'},
  { id: 40, name: 'coffee grounds', quantity: '20 kg'},
  { id: 41, name: 'thickshake base', quantity: '100 packets'},
  { id: 42, name: 'alphonso mango syrup', quantity: '5 l'},
  { id: 43, name: 'milk', quantity: '30 l'},
  { id: 44, name: 'sugar', quantity: '200 packets'},
  { id: 45, name: 'whipping cream', quantity: '10 l' },
  { id: 46, name: 'sun dried tomatoes', quantity: '2000 g'},
  { id: 47,name: 'onion slices', quantity: '2000 g'}
];

const foodItems = [
  // Pizzas
  { id: 1, name: 'Margherita Pizza', ingredients: { 
      1: 200,    // Mozzarella Cheese
      4: 150,    // Tomato Sauce
      22: 15,    // Basil
      28: 300,   // 00 Flour (Pizza Dough)
      14: 10,    // Oregano
      15: 10     // Red Chili Flakes
    } 
  }, 
  { id: 2, name: 'Pepperoni Pizza', ingredients: { 
      1: 200,    // Mozzarella Cheese
      4: 150,    // Tomato Sauce
      5: 50,     // Pepperoni
      28: 300,   // 00 Flour (Pizza Dough)
      14: 10,    // Oregano
      15: 10     // Red Chili Flakes
    } 
  }, 
  { id: 6, name: 'Pizza Fungi', ingredients: { 
      1: 200,    // Mozzarella Cheese
      7: 150,    // Fresh Cream
      28: 300,   // 00 Flour (Pizza Dough)
      6: 15,     // Mushrooms
      31: 10,    // Garlic
      14: 10,    // Oregano
      15: 10,     // Red Chili Flakes
      2: 20      // Extra Cheese
    } 
  }, 
  { id: 7, name: 'Paneer Tikka Pizza', ingredients: { 
      1: 200,    // Mozzarella Cheese
      4: 150,    // Tomato Sauce
      13: 100,   // Cheddar Cheese
      28: 300,   // 00 Flour (Pizza Dough)
      8: 150,    // Paneer Tikka Filling
      23: 20,    // Olives
      47: 20,    // Onion Slices
      9: 20,     // Capsicum
      22: 10,    // Basil
      3: 20,     // Jalapenos
      14: 10,    // Oregano
      15: 10     // Red Chili Flakes
    } 
  }, 
  { id: 8, name: 'Veggie Paradise Pizza', ingredients: { 
      1: 200,    // Mozzarella Cheese
      4: 150,    // Tomato Sauce
      13: 100,   // Cheddar Cheese
      8: 100,    // Paneer Tikka Filling
      22: 10,    // Basil
      47: 20,    // Onion Slices
      6: 50,     // Mushrooms
      46: 10,    // Sun-Dried Tomatoes
      23: 20,    // Olives
      2: 10,     // Extra Cheese
      3: 20,     // Jalapenos
      10: 20,    // Red Paprika
      9: 20,     // Capsicum
      14: 10,    // Oregano
      15: 10     // Red Chili Flakes
    } 
  }, 
  { id: 9, name: 'Quattro Formagi Pizza', ingredients: { 
      1: 200,    // Mozzarella Cheese
      13: 100,   // Cheddar Cheese
      11: 100,   // Gouda Cheese
      12: 100,   // Parmesan Cheese
      14: 15,    // Oregano
      2: 10      // Extra Cheese
    } 
  }, 
  { id: 10, name: 'Salmon Pizza', ingredients: { 
      11: 100,   // Gouda Cheese
      1: 100,    // Mozzarella Cheese
      16: 90,    // Smoked Salmon
      2: 20      // Extra Cheese
    } 
  }, 
  { id: 11, name: 'Pepper Chicken Pizza', ingredients: { 
      1: 200,    // Mozzarella Cheese
      4: 150,    // Tomato Sauce
      33: 2,     // Chicken Wings
      47: 3,     // Onion Slices
      23: 20,    // Olives
      3: 20,     // Jalapenos
      14: 30,    // Oregano
      15: 10,    // Red Chili Flakes
      19: 200    // Potato Wedges
    } 
  },

  // Pastas
  { id: 3, name: 'Pasta Carbonara', ingredients: { 
      21: 50,    // Guanciale
      20: 3,     // Eggs
      18: 30,    // Black Pepper
      19: 200,   // Pasta
      12: 50     // Parmesan Cheese
    } 
  }, 
  { id: 12, name: 'Pasta Arrabiata', ingredients: { 
      4: 200,    // Tomato Sauce
      15: 10,    // Red Chili Flakes
      31: 10,    // Garlic
      14: 10,    // Oregano
      19: 200,   // Pasta
      23: 10,    // Olives
      2: 10      // Extra Cheese
    } 
  }, 
  { id: 13, name: 'Pasta Puttanesca', ingredients: { 
      4: 200,    // Tomato Sauce
      27: 40,    // Anchovies
      31: 10,    // Garlic
      15: 20,    // Red Chili Flakes
      19: 200,   // Pasta
      14: 10,    // Oregano
      23: 20,    // Olives
      2: 10      // Extra Cheese
    } 
  }, 
  { id: 14, name: 'Aglio E Olio', ingredients: { 
      31: 25,    // Garlic
      24: 170,   // Olive Oil
      25: 30,    // Parsley
      19: 200,   // Pasta
      26: 1,     // Lemon
      15: 30,    // Red Chili Flakes
      12: 20,    // Parmesan Cheese
      2: 10      // Extra Cheese
    } 
  }, 
  { id: 15, name: 'Fettucine Alfredo', ingredients: { 
      7: 150,    // Fresh Cream
      31: 20,    // Garlic
      52: 30,    // Onion Slices
      19: 200,   // Fettucine
      1: 100,    // Mozzarella Cheese
      12: 50,    // Parmesan Cheese
      18: 35,    // Black Pepper
      2: 20      // Extra Cheese
    } 
  }, 
  { id: 16, name: 'Cacio E Pepe', ingredients: { 
      12: 250,   // Parmesan Cheese
      19: 200,   // Pasta
      18: 35     // Black Pepper
    } 
  },

  // Appetizers
  { id: 5, name: 'Garlic Bread', ingredients: { 
      31:10,
      28:250,
      1:150
      
    } 
  }, 
  { id: 17, name: 'Cheese Balls', ingredients: { 
      29:7
    } 
  }, 
  { id: 18, name: 'Cheesy Nachos', ingredients: { 
      1: 200,      // Mozzarella Cheese
      30: 150,     // Nacho Chips
      52: 10,
      23: 10,
      2:10,
      8:40,
      9:50,
      3:20,
      13:100

      

    } 
  }, 
  { id: 19, name: 'Potato Wedges', ingredients: { 
      32:7
    } 
  }, 
  { id: 20, name: 'Chicken Wings', ingredients: { 
      33:4
    } 
  }, 
  { id: 21, name: 'Caesar Salad', ingredients: { 
      34: 250,
      31:10,
      46:10,
      27:3,
      24:100,
      26:1,
      23:10,
      18:10,
      17:50,
      12:70,

    } 
  },

  // Desserts
  { id: 4, name: 'Tiramisu', ingredients: { 
      34: 1
    } 
  }, 
  { id: 22, name: 'Biscotti', ingredients: { 
      28: 250,    // Flour
      37: 15,    // Sugar
      44: 6     // Almonds
    } 
  }, 
  { id: 25, name: 'Red Berry Cheese Cake', ingredients: { 
      36: 1,    
    } 
  }, 
  { id: 26, name: 'Choco Lava Cake', ingredients: { 
      37: 1,    // Dark Chocolate
    } 
  }, 
  { id: 27, name: 'Hazlenut Brownie', ingredients: { 
      38: 2,    // Dark Chocolate
      35: 15
    } 
  },

  // Beverages
  { id: 23, name: 'Dark Frappuchino', ingredients: { 
      40: 60,    // Coffee
      43: 60,    // Milk
      39: 1,     // Sugar
      44:3
    } 
  }, 
  { id: 24, name: 'Mango Milkshake', ingredients: { 
      41: 1,    // Mango
      43: 150,    // Milk
      44: 1     // Sugar
    } 
  },
];

const Stock = () => {
  const [stock, setStock] = useState(initialStock);
  const [newStockName, setNewStockName] = useState('');
  const [newStockQuantity, setNewStockQuantity] = useState('');
  const [editingStockId, setEditingStockId] = useState(null);
  const [editingQuantity, setEditingQuantity] = useState('');
  const [clickedStock, setClickedStock] = useState(null); // State to track clicked stock

  const handleAddStock = () => {
    if (newStockName && newStockQuantity) {
      setStock([
        ...stock,
        { id: stock.length + 1, name: newStockName, quantity: newStockQuantity }
      ]);
      setNewStockName('');
      setNewStockQuantity('');
    }
  };

  const handleRemoveStock = (stockId) => {
    setStock(stock.filter(item => item.id !== stockId));
  };

  const handleEditQuantity = (stockId) => {
    setStock(stock.map(item => item.id === stockId ? { ...item, quantity: editingQuantity } : item));
    setEditingStockId(null);
    setEditingQuantity('');
  };

  const handleStockClick = (stockId) => {
    setClickedStock(clickedStock === stockId ? null : stockId); // Toggle the clicked stock
  };

  const getRequiredIngredients = (stockId) => {
    return foodItems
      .filter(item => item.ingredients[stockId])
      .map(item => ({
        name: item.name,
        quantity: item.ingredients[stockId]
      }));
  };

  return (
    <div className="stock-page">
      <div className="input-section">
        <h2>Add New Stock Item</h2>
        <input
          type="text"
          placeholder="Stock Item Name"
          value={newStockName}
          onChange={(e) => setNewStockName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddStock();
            }
          }}
        />
        <input
          type="text"
          placeholder="Quantity (alphanumeric)"
          value={newStockQuantity}
          onChange={(e) => setNewStockQuantity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddStock();
            }
          }}
        />
        <button onClick={handleAddStock}>Add Stock</button>
      </div>
      <div className="stock-list-section">
        <h2>Stock List</h2>
        <div className="stock-list">
          <table>
            <thead>
              <tr>
                <th>Stock Item</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {stock.map(item => (
                <React.Fragment key={item.id}>
                  <tr
                    onClick={() => handleStockClick(item.id)} // Handle click instead of hover
                  >
                    <td>{item.name}</td>
                    <td>
                      {editingStockId === item.id ? (
                        <input
                          type="text"
                          value={editingQuantity}
                          onChange={(e) => setEditingQuantity(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              handleEditQuantity(item.id);
                            }
                          }}
                        />
                      ) : (
                        item.quantity
                      )}
                    </td>
                    <td>
                      {editingStockId === item.id ? (
                        <button onClick={() => handleEditQuantity(item.id)}>Save</button>
                      ) : (
                        <>
                          <button onClick={() => {
                            setEditingStockId(item.id);
                            setEditingQuantity(item.quantity);
                          }}>Edit</button>
                          <button onClick={() => handleRemoveStock(item.id)}>Remove</button>
                        </>
                      )}
                    </td>
                  </tr>
                  {clickedStock === item.id && ( // Check if the stock item is clicked
                    <tr className="ingredient-info">
                      <td colSpan="3">
                        <h3>Ingredients Using This Stock Item</h3>
                        <ul>
                          {getRequiredIngredients(item.id).map((ingredient, index) => (
                            <li key={index}>
                              {ingredient.name} - {ingredient.quantity} per dish
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Stock;