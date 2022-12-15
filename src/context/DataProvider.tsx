import React, { useState } from "react";
import { FoodItems } from "../appInterface";
interface AppState {
  Mains: FoodItems[];
  cartItemCount: number;
  cartItems: FoodItems[];
}
interface AppContext extends AppState {
  addToCart: (item: FoodItems) => void;
  removeItem: (item: FoodItems) => void;
}

export const DataContext = React.createContext<AppContext>({} as AppContext);

function DataProvider({ children }: { children: JSX.Element }) {
  const [state, setState] = useState<AppState>({
    Mains: [
      {
        id: 1,
        name: "Chicken Rice",
        price: 3.50,
        url: "/assets/chickenrice.jpg",
        desc: "Very tasty",
        rate: 4.1,
      },
      {
        id: 2,
        name: "BeanSprout",
        price: 2.00,
        url: "/assets/beansprout.jpg",
        desc: "Popular",
        rate: 4.1,
      },
      {
        id: 3,
        name: "Rice",
        price: 0.80,
        url: "/assets/rice.jpg",
        desc: "Fragrant",
        rate: 4.2,
      },
    ],
    cartItemCount: 0,
    cartItems: [],
  });

  const { Mains, cartItemCount, cartItems } =
    state;

  const addToCart = (item: FoodItems) => {
    const data = { ...item, quantity: 1 };
    if (cartItems.length > 0) {
      //  2 cases
      const bool = cartItems.some((el) => el.id === item.id);
      if (bool) {
        const itemIndex = cartItems.findIndex((el) => el.id === item.id);
        const c = [...state.cartItems];
        if (c[itemIndex]["quantity"]) {
          c[itemIndex]["quantity"]! += 1;
        }
        setState((prevState) => {
          return { ...prevState, cartItems: c };
        });
      } else {
        setState((prevState) => {
          return { ...prevState, cartItems: [...state.cartItems, data] };
        });
      }
    } else {
      setState((prevState) => {
        return { ...prevState, cartItems: [...state.cartItems, data] };
      });
    }
    setState((prevState) => {
      return { ...prevState, cartItemCount: state.cartItemCount + 1 };
    });
  };

  const removeItem = (item: FoodItems) => {
    if (cartItems.length > 0) {
      let bool = state.cartItems.some((i) => i.id === item.id);
      if (bool) {
        let itemIndex = state.cartItems.findIndex((el) => el.id === item.id);
        const c = [...state.cartItems];
        // if qty > 1 then reduce by 1 else we will be splicing
        if (cartItems[itemIndex]["quantity"] === 1) {
          c.splice(itemIndex, 1);
          setState((prevState) => {
            return { ...prevState, cartItems: c };
          });
        } else {
          c[itemIndex]["quantity"]! -= 1;
          setState((prevState) => {
            return { ...prevState, cartItems: c };
          });
        }
        if (cartItemCount !== 0) {
          setState((prevState) => {
            return { ...prevState, cartItemCount: state.cartItemCount - 1 };
          });
        }
      }
    }
  };

  return (
    <DataContext.Provider
      value={{
        Mains,
        cartItemCount,
        cartItems,
        addToCart,
        removeItem,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
