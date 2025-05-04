'use client';

import React, {useEffect, useState} from 'react';
import {Autocomplete, IconButton, InputAdornment, TextField,} from '@mui/material';
import {Controller, useFormContext} from 'react-hook-form';
import {Close} from "@mui/icons-material";
import {SearchJobFormData} from "@/lib/schemas/searchJobSchema";
import {getStringLocations} from "@/lib/api/locations/locationsApi";
import {StringLocationDto} from "@/lib/api/locations/locationsApiDtos";


export default function JobSearchLocationAutoComplete() {

    const {control, getValues, formState: {errors}} = useFormContext<SearchJobFormData>();

    const [options, setOptions] = useState<StringLocationDto[]>([]);
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

            const result = await getStringLocations({
                countryId: getValues("countryId"), query: query
            });

            if (result.success) {
                setOptions(result.data.locations);
            }
            else {
                setOptions([
                    { id: 1, name: 'Kraków, Województwo Małopolskie' },
                ]);
            }

            setLoading(false);
        };

        const timeoutId = setTimeout(() => {
            fetchOptions(inputValue);
        }, 100);

        return () => clearTimeout(timeoutId);
    }, [getValues, inputValue]);

    return (
        <Controller
            name="locationId"
            control={control}
            render={({field}) => (
                <Autocomplete
                    forcePopupIcon={false}
                    disableClearable={false}
                    options={options}
                    getOptionLabel={(option) => option.name}
                    loading={loading}
                    onChange={(_, newValue) => {
                        const newId = newValue?.id || '';
                        field.onChange(newId);
                    }}
                    onInputChange={(_, newInputValue, reason) => {
                        if (reason === 'input') {
                            setInputValue(newInputValue);
                        }
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Miejscowość"
                            error={!!errors.locationId}
                            helperText={errors.locationId?.message}
                            sx={{
                                maxHeight: "56px",
                                height: "56px",
                                "& .MuiOutlinedInput-root": {borderRadius: "0", backgroundColor: "white", pr: 0}
                            }}
                        />
                    )}
                />
            )}
        />
    );
}