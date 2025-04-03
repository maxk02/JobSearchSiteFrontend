import axiosClient from "@/lib/api/axiosClient";
import {GetLocationsRequest, GetLocationsResponse} from "@/lib/api/locations/locationsApiInterfaces";


export const getLocations = async (req: GetLocationsRequest) => {
    const response = await axiosClient.get("/locations", { params: req });
    return response.data as GetLocationsResponse;
};