// import React from "react";
// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import List from "../../components/List/List";
// import useFetch from "../../hooks/useFetch";
// import "./Products.scss";

// const Products = () => {
//   const catId = parseInt(useParams().id);
//   const [maxPrice, setMaxPrice] = useState(1000);
//   const [sort, setSort] = useState(null);
//   const [selectedSubCats, setSelectedSubCats] = useState([]);

//   const { data, loading, error } = useFetch(
//     `/sub-categories?[filters][categories][id][$eq]=${catId}`
//   );

//   const handleChange = (e) => {
//     const value = e.target.value;
//     const isChecked = e.target.checked;

//     setSelectedSubCats(
//       isChecked
//         ? [...selectedSubCats, value]
//         : selectedSubCats.filter((item) => item !== value)
//     );
//   };

//   return (
//     <div className="products">
//       <div className="left">
//         <div className="filterItem">
//           <h2>Product Categories</h2>
//           {data?.map((item) => (
//             <div className="inputItem" key={item.id}>
//               <input
//                 type="checkbox"
//                 id={item.id}
//                 value={item.id}
//                 onChange={handleChange}
//               />
//               <label htmlFor={item.id}>{item.attributes.title}</label>
//             </div>
//           ))}
//         </div>
//         <div className="filterItem">
//           <h2>Filter by price</h2>
//           <div className="inputItem">
//             <span>0</span>
//             <input
//               type="range"
//               min={0}
//               max={1000}
//               onChange={(e) => setMaxPrice(e.target.value)}
//             />
//             <span>{maxPrice}</span>
//           </div>
//         </div>
//         <div className="filterItem">
//           <h2>Sort by</h2>
//           <div className="inputItem">
//             <input
//               type="radio"
//               id="asc"
//               value="asc"
//               name="price"
//               onChange={(e) => setSort("asc")}
//             />
//             <label htmlFor="asc">Price (Lowest first)</label>
//           </div>
//           <div className="inputItem">
//             <input
//               type="radio"
//               id="desc"
//               value="desc"
//               name="price"
//               onChange={(e) => setSort("desc")}
//             />
//             <label htmlFor="desc">Price (Highest first)</label>
//           </div>
//         </div>
//       </div>
//       <div className="right">
//         <img
//           className="catImg"
//           src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
//           alt=""
//         />
//         <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
//       </div>
//     </div>
//   );
// };

// export default Products;

import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
// import useFetch from "../../hooks/useFetch";
import "./Products.scss";

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
 

const Products = () => {
   const catId = parseInt(useParams().id);
   const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem">
              <input
                type="checkbox"
                id={1}
                value={1}
               
              />
              <label htmlFor={1}>{1}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} />
      </div>
    </div>
  );
};

export default Products;