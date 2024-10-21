 import React from "react";
import Card from "../Card/Card";
 import "./FeaturedProducts.scss";
// import useFetch from "../../hooks/useFetch";

 const FeaturedProducts = ({ type }) => {
//   const { data, loading, error } = useFetch(
//     `/products?populate=*&[filters][type][$eq]=${type}`
//   );

const data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Elegant Red Dress",
    price: 59.99,
    oldPrice: 79.99,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/27333760/pexels-photo-27333760/free-photo-of-portrait-of-a-man-smiling.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Men's Casual Jacket",
    price: 89.99,
    oldPrice: 119.99,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/28555848/pexels-photo-28555848/free-photo-of-woman-holding-turkish-coffee-and-delight-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Stylish Sunglasses",
    price: 25.99,
    oldPrice: 35.99,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/4462786/pexels-photo-4462786.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Leather Handbag",
    price: 149.99,
    oldPrice: 199.99,
  },
];


  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {/* {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)} */}
          {data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;