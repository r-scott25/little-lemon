import Talia from "../assets/Talia.jpg";
import Chris from "../assets/Chris.jpg";
import Joseph from "../assets/Joseph.jpg";
import Rose from "../assets/Rose.jpg";
import yellowStar from "../assets/yellowStar.svg";
import starBorder from "../assets/starBorder.svg";

const TestimonialCardData = [
  {
    id: 1,
    rating: 5,
    ratingStars: Array(5).fill(starBorder).fill(yellowStar, 0, 5),
    imgsrc: Talia,
    custName: "Talia",
    review: "Great service, cool atmosphere, awesome food!",
  },

  {
    id: 2,
    rating: 5,
    ratingStars: Array(5).fill(starBorder).fill(yellowStar, 0, 5),
    imgsrc: Chris,
    custName: "Chris",
    review: "The lemon dessert is amazing!",
  },

  {
    id: 3,
    rating: 5,
    ratingStars: Array(5).fill(starBorder).fill(yellowStar, 0, 5),
    imgsrc: Joseph,
    custName: "Joseph",
    review: "I had a great time celebrating my birthday!",
  },

  {
    id: 4,
    rating: 5,
    ratingStars: Array(5).fill(starBorder).fill(yellowStar, 0, 5),
    imgsrc: Rose,
    custName: "Rose",
    review: "Will definitely be back!",
  },

  // {
  // id: number,
  //   rating: 1 to 5,
  //   ratingStars: Array(5).fill(starIcon).fill(filledStarIcon, 0, rating),
  //   imgsrc: imageName,
  //   custName: "Customer's Name",
  //   review: "Customer's Review"
  // }
];

export default TestimonialCardData;
