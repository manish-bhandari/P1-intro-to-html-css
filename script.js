document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item");
  const totalElement = document.querySelector(".total");
  let total = 0;

  menuItems.forEach((item) => {
    const quantity = item.querySelector(".quantity");
    const cost = item.querySelector(".cost");
    const plusButton = item.querySelector(".plus");
    const minusButton = item.querySelector(".minus");

    plusButton.addEventListener("click", () => {
      quantity.textContent = Number(quantity.textContent) + 1;
      total += Number(cost.textContent);
      totalElement.textContent = total;
    });

    minusButton.addEventListener("click", () => {
      if (Number(quantity.textContent) > 0) {
        quantity.textContent = Number(quantity.textContent) - 1;
        total -= Number(cost.textContent);
        totalElement.textContent = total;
      }
    });

    total += Number(quantity.textContent) * Number(cost.textContent);
  });

  totalElement.textContent = total;
  const clearButton = document.querySelector(".buttn.clear");

  // clear
  clearButton.addEventListener("click", () => {
    menuItems.forEach((item) => {
      const quantity = item.querySelector(".quantity");
      quantity.innerHTML = 0;
    });
    totalElement.innerHTML = 0;
    total = 0;
  });

  // order
  const orderButton = document.querySelector(".buttn.order");
  orderButton.addEventListener("click", () => {
    var orderMessage = "Order paced!\n";
    console.log(orderMessage);
    menuItems.forEach((item) => {
      const quantity = item.querySelector(".quantity");
      const name = item.querySelector(".name");
      if (quantity != 0) {
        orderMessage +=
          String(quantity.innerHTML) + " " + String(name.innerHTML) + "\n";
      }
      console.log(orderMessage);
    });
    alert(orderMessage);
    menuItems.forEach((item) => {
      const quantity = item.querySelector(".quantity");
      quantity.innerHTML = 0;
    });
    totalElement.innerHTML = 0;
    total = 0;
  });
});
