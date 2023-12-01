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
export function getCart(): Promise<number[] | null> {
  return new Promise((resolve, reject) => {
    localforage.getItem('cart', function (err, value: number[] | null) {
      if (err) reject(err);
      else resolve(value);
    });
  });
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
export function getRequests(): Promise<number[] | null> {
  return new Promise((resolve, reject) => {
    localforage.getItem('requests', function (err, value: number[] | null) {
      if (err) reject(err);
      else resolve(value);
    });
  });
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
export function getFavorites(): Promise<number[]|null> {
  return new Promise((resolve, reject) => {
    localforage.getItem('favorites', function (err, value: number[] | null) {
      if (err) reject(err);
      else resolve(value);
    });
  });
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
export function getName(): Promise<string | null> {
  return new Promise((resolve, reject) => {
    localforage.getItem('name', function (err, value: string | null) {
      if (err) reject(err);
      else resolve(value);
    });
  });
}
export function saveName(name: string) {
  localforage.setItem('name', name, function (err) {})
}
export function getUsername(): Promise<string | null> {
  return new Promise((resolve, reject) => {
    localforage.getItem('username', function (err, value: string | null) {
      if (err) reject(err);
      else resolve(value);
    });
  });
}
export function saveUsername(username: string) {
  localforage.setItem('username', username, function (err) {})
}
export function getEmail(): Promise<string | null> {
  return new Promise((resolve, reject) => {
    localforage.getItem('email', function (err, value: string | null) {
      if (err) reject(err);
      else resolve(value);
    });
  });
}
export function saveEmail(email: string) {
  localforage.setItem('email', email, function (err) {})
}