let menuItems = {
  tacos: {
    title: "Tacos",
    ingredients: "Tortilla, meat, and cheese",
    vegan: false,
    price: "$1.25 for one, 2 for $2.00"
  },
  burrito: {
    title: "Burrito",
    ingredients: "Tortilla, mucho grande meat, a lot of cheese",
    vegan: false,
    price: "$5.00"
  },
  churros: {
    title: "Churros",
    ingredients: "Make it your own",
    vegan: true,
    price: "$1.00"
  }
}

let cart = []


// NOTE we need to use menuitems and add their properties into a template and inject it onto the page in our row
function drawMenuItems() {
  let template = ""

  for (let key in menuItems) {
    if (menuItems.hasOwnProperty(key)) {
      let item = menuItems[key];
      template += /*html*/`
      <div class="col-3 bg-light rounded border border-dark shadow p-3">
      <h3>${item.title}</h3>
      <h5>${item.ingredients}</h5>
      <h5>${item.vegan ? "This item is Vegan." : "This item is NOT Vegan."}</h5>
      <h5>${item.price}</h5>
      <button class="btn btn-warning btn-block position-absolute" onclick="orderItem('${key}')">Add To Order</button>
      </div>
      `
    }
  }
  document.getElementById("menu-items").innerHTML = template
}

//NOTE key could be prop or propName or property
function orderItem(menuItemKey) {
  let item = menuItems[menuItemKey]
  cart.push(item)
  // console.log("the cart", cart)
  drawCart()
}


//NOTE take the cart and access the items from it and put them into a template and dump them in the cart row
//TODO consolidate all draw functions
function drawCart() {
  let template = ""


  // for (let i = 0; i < cart.length; i++) {
  //   let item = cart[i]

  // NOTE this works the same as above
  cart.forEach((item, i) => {
    template += /*html*/`
    <div class="col-3 bg-light rounded border border-dark shadow p-3">
    <h3>${item.title}</h3>
    <h5>${item.price}</h5>
    <button class="btn btn-danger btn-block position-absolute" onclick="removeItemFromOrder(${i})">Remove From Order</button>
    </div>
    `
  })
  document.getElementById("ordered-items").innerHTML = template
}

function removeItemFromOrder(index) {
  cart.splice(index, 1)
  drawCart()
}


drawMenuItems()

