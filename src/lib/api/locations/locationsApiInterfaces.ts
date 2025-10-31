import {LocationDto, StringLocationDto} from "@/lib/api/locations/locationsApiDtos";


export interface GetLocationsRequest {
    countryId: number;
    query: string;
}

export interface GetLocationsResponse {
    locations: LocationDto[];
}

export interface GetStringLocationsRequest {
    countryId: number;
    query: string;
}

export interface GetStringLocationsResponse {
    locations: StringLocationDto[];
}