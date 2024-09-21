import { useLocation } from "react-router-dom";

export function Data() {
  const location = useLocation();
  return (
    <>
      <h2>Product Details</h2>
      {location?.state?.name && location?.state?.description && (
        <>
          <h4>Product Name : {location.state.name}</h4>
          <h4>Product Description : {location.state.description}</h4>
        </>
      )}
    </>
  );
}
