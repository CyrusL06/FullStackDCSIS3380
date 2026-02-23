import { Link, Outlet, useParams, useLocation } from "react-router-dom";
//  import {queryString} from "query-string"

export const Services = () => {
  return (<section>
     <h2>Services</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
       illo? Sed eligendi, dolore obcaecati magnam qui hic. 
       Ullam doloremque ab laboriosam quidem voluptas nam saepe eveniet veritatis aliquid, 
       consequuntur delectus.
      </p>
  </section>)
};

export const History = () => {
  return <section>
     <h2>History</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
       illo? Sed eligendi, dolore obcaecati magnam qui hic. 
       Ullam doloremque ab laboriosam quidem voluptas nam saepe eveniet veritatis aliquid, 
       consequuntur delectus.
      </p>
  </section>
};

export const Locations = () => {
  return <section>
     <h2>Locations</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
       illo? Sed eligendi, dolore obcaecati magnam qui hic. 
       Ullam doloremque ab laboriosam quidem voluptas nam saepe eveniet veritatis aliquid, 
       consequuntur delectus.
      </p>
  </section>
};

export const Home = () => {
  return (
    <div>
      <h1>Shopping App</h1>
    </div>
  );
};
export const About = () => {
  return (
    <div>
      <h1>About</h1>
      {/* Render the next component based on next URL */}
      <Outlet />
    </div>
  );
};
export const Events = () => {
  return (
    <div>
      <h1>Events</h1>
    </div>
  );
};
export const Products = () => {
  return (
    <div>
      <h1>Products</h1>
       <ul style={{fontSize:"2em", color:"green", listStyle:"none"}}>
          <li> <Link to="1">Product1</Link> </li>
          <li> <Link to="2">Product2</Link> </li>
          <li> <Link to="3">Product3</Link> </li>
       </ul>
    </div>
  );

};
export const ProductDetails = () => {
  console.log(useParams());
  const products = [
    { id: 1, name: "Laptop", desc: "About Laptops..." },
    { id: 2, name: "Notepad", desc: "About Notepads..." },
    { id: 3, name: "Smart Phone", desc: "About Smart Phones..." },
  ];
  // Destructure because it returns an object
  //Get ahold of URL parameter
  let { id } = useParams();
  //COnvert to int
  id = parseInt(id);
  console.log(useParams());

  //Inside product you find the product where it match id 
  const product = products.find((prod) => prod.id == id);
  
  console.log(product);
  return (
    <>
      <h2>Product Details</h2>
      <p>Name: {product.name}</p>
      <p>Description: {product.desc}</p>
    </>
  );
};

export const EventDetails = () => {
  const {month, year} = useParams()
  let location = useLocation();
  console.log(useParams())
  console.log(location)

  // let {search} = location
  // let obj = queryString.parse(search)
  // console.log(obj)
  // console.log(search)

  return (
      <div>
          <h6>The events detail are this {month} {year}</h6>
      </div>
  );
}

export const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};
