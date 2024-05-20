import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveProducts } from "../store/reducers/productReducer";
import { saveCategory } from "../store/reducers/categoryReducer";

// export function useFetch(apiRequest) {
//   const  data  = useSelector((state) => state.products.products);
//   const dispatch = useDispatch();
//   console.log( data.data, "sss");
//   const [loading, setLoading] = React.useState(false);
//   const [error, setError] = React.useState();

//   React.useEffect(() => {
//     async function getRequest() {
//       try {
//         setLoading(true);
//         const result = await apiRequest;
//         dispatch(saveProducts(result));
//         dispatch(saveCategory(result));
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     }
//     getRequest();
//   }, []);

//   return { data, loading, error };
// }
