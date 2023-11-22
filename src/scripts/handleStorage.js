import localforage from "localforage";
// Starting App
localforage.getItem('cart', function (err, value) {
  if(!value) {
    localforage.setItem('cart', [], function (err) {
    })
  };
  }
);
localforage.getItem('favorites', function (err, value) {
  if(!value) {
    localforage.setItem('favorites', [], function (err) {
    })
  };
  }
);
localforage.getItem('requests', function (err, value) {
  if(!value) {
    localforage.setItem('requests', [], function (err) {
    })
  };
  }
);
localforage.getItem('username', function (err, value) {
  if(!value) {
    localforage.setItem('username', "", function (err) {
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

export function getFavorites() {
  localforage.getItem('favorites', function (err, value) {
    // console.log("getCart retornando ", value);
    return value
  })
}
export function addToFavorites(item) {
  localforage.getItem('favorites', function (err, value) {
    if (value.includes(item)) return

    value.push(item)

    localforage.setItem('favorites', value, function (err) {})
  })
}
export function removeFromFavorites(item) {
  localforage.getItem('favorites', function (err, value) {
    if (!value.includes(item)) return
    const index = value.indexOf(item)
    value.splice(index, 1);

    localforage.setItem('favorites', value, function (err) {})
  })
}
export function saveUsername(username) {
  localforage.setItem('username', username, function (err) {})
}

export function getRequests() {
  localforage.getItem('requests', function (err, value) {
    // console.log("getCart retornando ", value);
    return value
  })
}
export function addToRequests(item) {
  localforage.getItem('requests', function (err, value) {
    if (value.includes(item)) return

    value.push(item)

    localforage.setItem('requests', value, function (err) {})
  })
}
export function removeFromRequests(item) {
  localforage.getItem('requests', function (err, value) {
    if (!value.includes(item)) return
    const index = value.indexOf(item)
    value.splice(index, 1);

    localforage.setItem('requests', value, function (err) {})
  })
}