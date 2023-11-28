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
localforage.getItem('name', function (err, value) {
  if(!value) {
    localforage.setItem('name', "", function (err) {
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
localforage.getItem('email', function (err, value) {
  if(!value) {
    localforage.setItem('email', "", function (err) {
    })
  };
  }
);
// Cart
export function getCart() {
  localforage.getItem('cart', function (err, value) {
    // console.log("getCart retornando ", value);
    return value
  })
}
export function addToCart(item: number) {
  localforage.getItem('cart', function (err, value: number[]|null) {
    if (!value) return;
    if (value.includes(item)) return;

    value.push(item)

    localforage.setItem('cart', value, function (err) {})
  })
}
export function removeFromCart(item: number) {
  localforage.getItem('cart', function (err, value: number[] | null) {
   if (!value) return;
    if (!value.includes(item)) return;

    const index = value.indexOf(item);
    value.splice(index, 1);
  })
}
export function removeArrayFromCart(array: number[]) {
  localforage.getItem('cart', function (err, value: number[] | null) {
    if (!value) return;

    array.forEach((item)=> {
      if (!value.includes(item)) return;
      const index = value.indexOf(item);
      value.splice(index, 1);
    })

    localforage.setItem('cart', value, function (err) {})
  })
}
// Requests
export function getRequests() {
  localforage.getItem('requests', function (err, value: number[]|null) {
    // console.log("getCart retornando ", value);
    return value
  })
}
export function addToRequests(item: number) {
  localforage.getItem('requests', function (err, value: number[]|null) {
    if (!value) return;
    if (value.includes(item)) return;

    value.push(item);

    localforage.setItem('requests', value, function (err) {})
  })
}
export function addArrayToRequests(array: number[]) {
  localforage.getItem('requests', function (err, value: number[]|null) {
    if (!value) return;

    array.forEach((item)=> {
      if (value.includes(item)) return;
      value.push(item);
    })

    localforage.setItem('requests', value, function (err) {})
  })
}
export function removeFromRequests(item: number) {
  localforage.getItem('requests', function (err, value: number[]|null) {
    if (!value) return;
    if (!value.includes(item)) return;
    const index = value.indexOf(item)
    value.splice(index, 1);

    localforage.setItem('requests', value, function (err) {})
  })
}
// Favorites
export function getFavorites() {
  localforage.getItem('favorites', function (err, value: number[]|null) {
    // console.log("getCart retornando ", value);
    return value
  })
}
export function addToFavorites(item: number) {
  localforage.getItem('favorites', function (err, value: number[]|null) {
    if (!value) return;
    if (value.includes(item)) return;

    value.push(item)

    localforage.setItem('favorites', value, function (err) {})
  })
}
export function removeFromFavorites(item: number) {
  localforage.getItem('favorites', function (err, value: number[]|null) {
    if (!value) return;
    if (!value.includes(item)) return;

    const index = value.indexOf(item)
    value.splice(index, 1);

    localforage.setItem('favorites', value, function (err) {})
  })
}
// General
export function deleteAllData() {
  localforage.setItem('cart', [], function (err) {})
  localforage.setItem('requests', [], function (err) {})
  localforage.setItem('favorites', [], function (err) {})
  localforage.setItem('username', "", function (err) {})

  console.log("Deleted");
  
}
// Other
export function getName() {
  localforage.getItem('name', function (err, value) {
    return value
  })
}
export function saveName(name: string) {
  localforage.setItem('name', name, function (err) {})
}
export function getUserame() {
  localforage.getItem('username', function (err, value) {
    return value
  })
}
export function saveUsername(username: string) {
  localforage.setItem('username', username, function (err) {})
}
export function getEmail() {
  localforage.getItem('email', function (err, value) {
    return value
  })
}
export function saveEmail(email: string) {
  localforage.setItem('email', email, function (err) {})
}