import { useState } from "react";
import { Productcard } from "../Components/Product";
export function Home() {
  const [count, setCount] = useState(0);

  function handleCountInc() {
    setCount(count + 1);
  }
  function handleCountdec() {
    setCount(count - 1);
  }

  const ProductList = [
    {
      title: "I Phone",
      dis: "In every case, content is the “what” of what we’re talking about. When discussing context vs content",
    },
    {
      title: "Realme",
      dis: "In every case, content is the “what” of what we’re talking about. When discussing context vs content",
    },
    {
      title: "One Plus",
      dis: "In every case, content is the “what” of what we’re talking about. When discussing context vs content",
    },
    {
      title: "Samsung",
      dis: "In every case, content is the “what” of what we’re talking about. When discussing context vs content",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          {ProductList.map((Product) => (
            <div className="col-3">
              <Productcard title={Product.title} dis={Product.dis}/>
            </div>
          ))}

          <div className="co-6">
            <h1>Count: {count}</h1>
            <button className="btn btn-primary" onClick={handleCountInc}>
              Inc Count
            </button>
            <button className="btn btn-danger" onClick={handleCountdec}>
              Dec Count
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
