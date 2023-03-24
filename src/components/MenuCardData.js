import React from 'react';
import greekSalad from "../assets/greekSalad.jpg";
import bruschetta from "../assets/bruschetta.svg";
import lemonDessert from "../assets/lemonDessert.jpg";

const MenuCardData = [

  {
    imgsrc: greekSalad,
    dishName: "Greek Salad",
    dishPrice: "$12.99",
    dishDescription: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons",
  },

  {
  imgsrc: bruschetta,
  dishName: "Bruschetta",
  dishPrice: "$5.99",
  dishDescription: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
},

{
  imgsrc: lemonDessert,
  dishName: "Lemon Dessert",
  dishPrice: "$5.99",
  dishDescription: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
},

// {
//   imgsrc: imageFileName,
//   dishName: "dish name",
//   dishPrice: "dish price",
//   dishDescription: "dish description",
// }

];

export default MenuCardData;