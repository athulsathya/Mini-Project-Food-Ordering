// import { createContext } from "react";

// export const storeContext=createContext(null)

// const storeContextProvider=()=>{
//     const [cartItems, setCartItems]=useState({})
//     const [foods, setFoods]=useState([])
//     const [loading, setLoading]=useState(false)

//       const addToCart = (itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//   };

//     const removeFromCart = (itemId) => {
//   setCartItems((prev) => {
//     if (prev[itemId] > 1) {
//       return { ...prev, [itemId]: prev[itemId] - 1 };
//     } else {
//       const newCart = { ...prev };
//       delete newCart[itemId];
//       return newCart;
//     }
//   });
// };

// const getTotalCartAmount = () => {
//   let totalAmount = 0;
//   for (const item in cartItems) {
//     if (cartItems[item] > 0) {
//       let itemInfo = foods.find((product) => product.id === Number(item));
//       if (itemInfo) {
//         totalAmount += itemInfo.price * cartItems[item];
//       }
//     }
//   }
//   return totalAmount;
// }

//  // Fetch foods on mount
//   useEffect(() => {
//     const loadFoods = async () => {
//       setLoading(true);
//       const data = await fetchFood();
//       setFoods(data);
//       setLoading(false);
//     };
//     loadFoods();
//   }, []);

//     const contextValue = {
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     foods,
//     loading,
//     getTotalCartAmount
//   };
//   return (
//     <storeContext.Provider value={contextValue}>
//       {props.children}
//     </storeContext.Provider>
//   );
// };

// export default storeContextProvider

