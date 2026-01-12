'use client';

import React, {useEffect, useState} from 'react';
import {Autocomplete, CircularProgress, IconButton, InputAdornment, TextField,} from '@mui/material';
import {Controller, useFormContext} from 'react-hook-form';
import {Close} from "@mui/icons-material";
import {SearchJobFormData} from "@/lib/schemas/searchJobSchema";
import {getLocations} from "@/lib/api/locations/locationsApi";
import { LocationDto } from '@/lib/api/locations/locationsApiDtos';


interface JobApplicationLocationAutoCompleteProps {
    value: LocationDto | null;
    onChange: (location: LocationDto | null) => void;
}

export default function JobApplicationLocationAutoComplete({ value, onChange }: JobApplicationLocationAutoCompleteProps) {

    const [options, setOptions] = useState<LocationDto[]>([]);
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleClearSearch = () => {
        setInputValue("");
        setOptions([]);
    };

    useEffect(() => {
        const fetchOptions = async (query: string) => {
            if (!query) {
                setOptions([]);
                return;
            }

            setLoading(true);

            const result = await getLocations({
                countryId: 1, query: query, size: 5
            });

            if (result.success) {
                setOptions(result.data.locations);
            }

            setLoading(false);
        };

        const timeoutId = setTimeout(() => {
            fetchOptions(inputValue);
        }, 100);

        return () => clearTimeout(timeoutId);
    }, [inputValue]);

    return (
        <Autocomplete
            options={options}
            loading={loading}
            getOptionLabel={(option) => option.fullName}
            filterOptions={(x) => x}

            value={value}
            onChange={(_, newValue) => {
                onChange(newValue);
            }}

            inputValue={inputValue}
            onInputChange={(_, newInputValue, reason) => {
                setInputValue(newInputValue);
            }}

            sx={{
                "& .MuiAutocomplete-clearIndicator": {
                    visibility: "visible"
                }
            }}

            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Miejscowość"
                    sx={{
                        maxHeight: "56px",
                        height: "56px",
                        "& .MuiOutlinedInput-root": {borderRadius: "0", backgroundColor: "white"}
                    }}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}