import api from "@/lib/api/httpClient";
import {LocationDto} from "@/lib/api/_dtos";


//
export interface GetLocationByIdRequest {
    id: number;
}

export interface GetLocationByIdResponse {
    countryId: number;
    name: string;
    subdivisions: string[];
    description: string | null;
    code: string | null;
}


//
export interface GetLocationsRequest {
    countryId: number;
    query: string;
}

export interface GetLocationsResponse {
    locations: LocationDto[];
}

export const getLocations = async (req: GetLocationsRequest) => {
    const response = await api.get("/locations", { params: req });
    return response.data as GetLocationsResponse;
};