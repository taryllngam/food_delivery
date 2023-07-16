import { createContext } from "react";
import React from "react";
import { useContext } from "react";

// export function useLocalStorage(key, intialValue) {
//   const [value, setValue] = React.useState(
//     () => JSON.parse(localStorage.getItem(key)) || intialValue
//   );

//   const setLocalStorageValue = (value) => {
//     setValue(() => {
//       localStorage.setItem(key, JSON.stringify(value));
//       return value;
//     });
//   };

//   /**
//    * Listen to changes on the local storage value from
//    * external of our app.
//    */
//   React.useEffect(() => {
//     setLocalStorageValue(value);

//     const refreshStorageFunc = (event) => {
//       if (event.key === key) {
//         setValue(event.newValue);
//       }
//     };

//     window.addEventListener("storage", refreshStorageFunc);

//     return () => {
//       window.removeEventListener("storage", refreshStorageFunc);
//     };
//   }, [key]);

//   return { value, setValue: setLocalStorageValue };
// }

export function useLocalStorage(key, intialValue) {
  const [value, setValue] = React.useState(
    JSON.parse(localStorage.getItem(key)) || intialValue
  );

  const setLocalStorageValue = (value) => {
    setValue((prev) => {
      const newData = [...prev, value];
      localStorage.setItem(key, JSON.stringify(newData));
      return newData;
    });
  };

  return { value, setValue: setLocalStorageValue };
}

export const FoodContext = createContext(null);
export const FoodProvider = FoodContext.Provider;

export const useFoodItems = () => {
  return useContext(FoodContext);
};
