# E-commerce - headphone ecommerce website

## Table of contents

- [Overview](#overview)
  - [The features](#the-features)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The features

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- User registration and login with email, social media, or Google accounts.
- Browse and search products by category, keywords, filters, etc.
- Add, remove, or update items in the cart.
- Calculate and display subtotal, taxes, and shipping costs.
- Guest checkout or user account-based checkout.
- Securely process payments through various methods (credit cards, PayPal, etc.).

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [solution](https://github.com/louis-bamidele/project6-PortfolioVersion1)
- Live Site URL: [live site](https://silver-lebkuchen-79cc2f.netlify.app/)

## My process

### Built with

- React
- passsport
- mongoDB
- Stripe
- Motion Framer
- useQuary and alot more

### What I learned

I didn't know how to use Stripe, with this project I learned how to do that.

See code snippets, see below:

```Stripe
 app.post("/create-checkout-session", async (req, res) => {
  let listOfData = [];
  let email = req.body.details.user.email;
  req.body.cart.map((item) => {
    let unitAmount = convertToUnitAmount(item.newPrice);
    listOfData.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: item.images,
        },
        unit_amount: unitAmount,
      },
      quantity: item.numOfOrder,
      adjustable_quantity: {
        enabled: true,
      },
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: listOfData,
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/successful`,
    cancel_url: `${YOUR_DOMAIN}/checkout`,
    customer_email: email,
  });
  res.send(session);
})
```
