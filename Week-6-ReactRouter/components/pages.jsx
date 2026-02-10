import { Outlet } from "react-router-dom";


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
    </div>
  );

};
export const ProductDetails = () => {
  const products = [
    { id: 1, name: "Laptop", desc: "About Laptops..." },
    { id: 2, name: "Notepad", desc: "About Notepads..." },
    { id: 3, name: "Smart Phone", desc: "About Smart Phones..." },
  ];
  let { id } = useParams();
  id = parseInt(id);
  console.log(useParams());
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
export const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};
