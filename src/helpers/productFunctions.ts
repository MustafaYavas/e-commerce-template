import products from '../products.json';
import { Product } from './types';

interface CartObj {
  id: number;
  quantity?: number;
  fromCart?: boolean;
}

export const getProductById = ({ id, quantity }: CartObj) => {
  const product = products.find((prod) => prod.id === id);
  return product as Product;
};

export const getLocalStorageItem = (name: string) => {
  return JSON.parse(localStorage.getItem(name)!);
};

export const setLocalStorage = ({ id, quantity, fromCart }: CartObj) => {
  let items = JSON.parse(localStorage.getItem('furnyCart')!);
  let hasSameValue = false;
  let sameItem = {} as CartObj;
  const cartObj = [{ id, quantity }];

  if (!items) {
    localStorage.setItem('furnyCart', JSON.stringify(cartObj));
  } else {
    items.map((item: CartObj) => {
      if (item.id === id) {
        hasSameValue = true;
        sameItem = item;
        return;
      }
    });
    if (hasSameValue) {
      let newItems = items.map((item: CartObj) => {
        if (item.id === sameItem.id)
          return {
            ...item,
            quantity: fromCart ? quantity! : sameItem.quantity! + quantity!,
          };
        return item;
      });
      localStorage.setItem('furnyCart', JSON.stringify(newItems));
    } else {
      items = [...items, { id, quantity }];
      localStorage.setItem('furnyCart', JSON.stringify(items));
    }
  }
};

export const getQuantity = (id: number) => {
  let items = JSON.parse(localStorage.getItem('furnyCart')!);
  const foundItem = items.find((item: CartObj) => item.id === id);
  return foundItem.quantity;
};

export const deleteItemFromLocalStorage = (id: number, name: string) => {
  const storageItem = getLocalStorageItem(name);

  const index = storageItem.findIndex((item: CartObj) => item.id === id);
  const newItems = [
    ...storageItem.slice(0, index),
    ...storageItem.slice(index + 1),
  ];

  localStorage.setItem(name, JSON.stringify(newItems));
};

export const clearLocalStorage = (name: string) => {
  localStorage.removeItem(name);
};
