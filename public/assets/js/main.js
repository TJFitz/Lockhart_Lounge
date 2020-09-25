$(() => {
  // online ordering

  const stripe = Stripe(
    "pk_test_51HSOaOAcMUxu1cv0Mz0PtebLonEJnavYsoY41vqX9EPTdMQG0YsDadn3IdLYlNoaHnqTP2O1nSAWsCK2y8Aj88Sa00WyLGsBKV"
  );

  let cart = [];
  let total = 0;
  if (localStorage.cart) {
    cart = JSON.parse(localStorage.cart);
  }

  $(".addToCart").on("click", function (event) {
    event.preventDefault();
    let name = $(this).data("name");
    let price = $(this).data("price");
    let newItem = {
      name: name,
      price: price,
    };
    cart.push(newItem);
    localStorage.cart = JSON.stringify(cart);
  });

  $("#checkout").on("click", function () {
    checkout = JSON.parse(localStorage.cart);
    let cartArr = [];
    checkout.forEach((item) => {
      cartArr.push(item.name);
      total += item.price;
    });
    let stringCart = cartArr.join("");
    let newTotal = total.toString().split("");
    let finalTotal = "";
    newTotal.forEach((char) => {
      if (char !== ".") {
        finalTotal += char;
      }
    });
    let finalNum = parseInt(finalTotal);
    let finalItem = {
      items: stringCart,
      total: finalNum,
    };

    $.ajax("/create-session", {
      method: "POST",
      data: finalItem,
    })
      .then(function (response) {
        return stripe.redirectToCheckout({ sessionId: response.id });
      })
      // .then(function (session) {
      //   return stripe.redirectToCheckout({ sessionId: session.id });
      // })
      .then(function (result) {
        // If redirectToCheckout fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using error.message.
        if (result.error) {
          alert(result.error.message);
        }
      })
      .catch(function (error) {
        console.error("Error:", error);
      });

    localStorage.clear();
  });
});
