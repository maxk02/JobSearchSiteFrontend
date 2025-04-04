import fetchData from "@/lib/api/fetchData";
import { GetLocationsRequest, GetLocationsResponse } from "@/lib/api/locations/locationsApiInterfaces";

export const getLocations = async (req: GetLocationsRequest) => {
    return await fetchData<GetLocationsRequest, GetLocationsResponse>("/locations", "GET", req);
};