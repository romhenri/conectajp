import localforage from "localforage";
// Starting App
localforage.getItem('cart', function (err, value) {
  if(!value) {
    localforage.setItem('cart', [], function (err) {
    })
  };
  }
);

// @ts-nocheck

// Exports
export function getCart() {
  localforage.getItem('cart', function (err, value) {
    // console.log("getCart retornando ", value);
    return value
  })
}
export function addToCart(item) {
  localforage.getItem('cart', function (err, value) {
    if (value.includes(item)) return

    value.push(item)

    localforage.setItem('cart', value, function (err) {})
  })
}
export function removeFromCart(item) {
  localforage.getItem('cart', function (err, value) {
    if (!value.includes(item)) return

    const index = value.indexOf(item)

    value.splice(index, 1)
  })
}

