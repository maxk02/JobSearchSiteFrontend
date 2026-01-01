import fetchData from "@/lib/api/fetchData";
import {
    GetLocationsRequest, GetLocationsResponse,
} from "@/lib/api/locations/locationsApiInterfaces";


export const getLocations = async (req: GetLocationsRequest) => {
    return await fetchData<GetLocationsRequest, GetLocationsResponse>("/locations", "GET", req);
};

// export const getStringLocations = async (req: GetStringLocationsRequest) => {
//     return await fetchData<GetStringLocationsRequest, GetStringLocationsResponse>("/locations", "GET", req);
// }; // todo bring back getLocations usage