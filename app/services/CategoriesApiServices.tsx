// import ApiService from "./ApiService";
// //import apiService from "./ApiService";
// export default {
//     async getAllCategories(
//         apiName: string
//         ) {
//       return ApiService.get(
//           apiName
//           )
//           ;
//     },
//   };

import apiService from "../services/ApiService";
export default {
    async getAllCategories(
        apiName: string,
    ) {
        return apiService.get(
            apiName
        );
    },
};