'use client';

import React, {useEffect, useState} from 'react';
import {Autocomplete, CircularProgress, IconButton, InputAdornment, TextField,} from '@mui/material';
import { Controller, useFormContext, FieldValues, Path } from 'react-hook-form';
import {Close} from "@mui/icons-material";
import {SearchJobFormData} from "@/lib/schemas/searchJobSchema";
import {getLocations} from "@/lib/api/locations/locationsApi";
import { LocationDto } from '@/lib/api/locations/locationsApiDtos';


interface JobSearchLocationAutoCompleteProps<T extends FieldValues> {
    name: Path<T>;
    countryDependency?: Path<T>;
    label?: string;
}

export default function JobSearchLocationAutoComplete<T extends FieldValues>(props: JobSearchLocationAutoCompleteProps<T>) {

    const { name, countryDependency, label = "Miejscowość" } = props;

    const { control, getValues, formState: { errors } } = useFormContext<T>();

    const [options, setOptions] = useState<LocationDto[]>([]);
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const fetchOptions = async (query: string) => {
            if (!query) {
                setOptions([]);
                return;
            }

            setLoading(true);

            const countryId = countryDependency ? getValues(countryDependency) : null;

            const result = await getLocations({
                countryId: countryId as unknown as number, query: query, size: 5
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
    }, [getValues, inputValue, countryDependency]);

    // Helper to safely access nested errors (e.g., "address.city")
    const getError = (name: string) => {
        return name.split('.').reduce((obj, key) => obj && obj[key], errors as any);
    };
    const error = getError(name);

    return (
        <Controller
            name={name}
            control={control}
            render={({field}) => (
                <Autocomplete
                    options={options}
                    loading={loading}
                    getOptionLabel={(option) => option.fullName}
                    filterOptions={(x) => x}

                    onChange={(_, newValue) => {
                        const newId = newValue?.id || '';
                        field.onChange(newId);
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
                            label={label}
                            error={!!error}
                            helperText={error?.message}
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
            )}
        />
    );
}