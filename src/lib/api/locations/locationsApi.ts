import api from "@/lib/api/httpClient";
import {GetLocationsRequest, GetLocationsResponse} from "@/lib/api/locations/locationsApiInterfaces";


export const getLocations = async (req: GetLocationsRequest) => {
    const response = await api.get("/locations", { params: req });
    return response.data as GetLocationsResponse;
};