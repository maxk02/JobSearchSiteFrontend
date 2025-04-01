import {LocationDto} from "@/lib/api/locations/locationsApiDtos";


export interface GetLocationsRequest {
    countryId: number;
    query: string;
}

export interface GetLocationsResponse {
    locations: LocationDto[];
}