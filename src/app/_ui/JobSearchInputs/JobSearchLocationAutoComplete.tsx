'use client';

import React, {useEffect, useState} from 'react';
import {Autocomplete, CircularProgress, IconButton, InputAdornment, TextField,} from '@mui/material';
import {Controller, useFormContext} from 'react-hook-form';
import {Close} from "@mui/icons-material";
import {SearchJobFormData} from "@/lib/schemas/searchJobSchema";
import {getStringLocations} from "@/lib/api/locations/locationsApi";
import {StringLocationDto} from "@/lib/api/locations/locationsApiDtos";



interface SearchAutocompleteProps {
    onSelectionChange?: (id: number) => void;
}

export default function JobSearchLocationAutoComplete(props: SearchAutocompleteProps) {

    const {onSelectionChange} = props;

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
                    options={options}
                    getOptionLabel={(option) => option.name}
                    loading={loading}
                    onChange={(_, newValue) => {
                        const newId = newValue?.id || '';
                        field.onChange(newId);
                        onSelectionChange?.(newId as unknown as number);
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
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: inputValue.length > 0 && (
                                    <>
                                        {/*{loading &&*/}
                                        {/*    <InputAdornment position="end">*/}
                                        {/*        <CircularProgress size={20}/>*/}
                                        {/*    </InputAdornment>*/}
                                        {/*}*/}
                                        {inputValue.length > 0 &&
                                            <InputAdornment position="end">
                                                <IconButton onClick={handleClearSearch} size="small">
                                                    <Close/>
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    </>
                                ),
                            }}
                        />
                    )}
                />
            )}
        />
    );
}