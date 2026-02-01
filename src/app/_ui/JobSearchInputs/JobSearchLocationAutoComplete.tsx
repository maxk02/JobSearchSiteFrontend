'use client';

import React, {useEffect, useState} from 'react';
import {Autocomplete, CircularProgress, IconButton, InputAdornment, TextField,} from '@mui/material';
import {Controller, useFormContext} from 'react-hook-form';
import {Close} from "@mui/icons-material";
import {SearchJobFormData} from "@/lib/schemas/searchJobSchema";
import {getLocations} from "@/lib/api/locations/locationsApi";
import { LocationDto } from '@/lib/api/locations/locationsApiDtos';


export default function JobSearchLocationAutoComplete() {

    const {control, getValues, formState: {errors}} = useFormContext<SearchJobFormData>();

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

            const result = await getLocations({
                countryId: getValues("countryId"), query: query, size: 5
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
                    loading={loading}
                    getOptionLabel={(option) => option.fullName}
                    filterOptions={(x) => x}

                    onChange={(_, newValue) => {
                        const newId = newValue?.id || '';
                        field.onChange(newId);
                    }}

                    inputValue={inputValue}
                    onInputChange={(_, newInputValue, reason) => {
                        // if (reason === 'input' || reason === 'clear') {
                            
                        // }
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
                            // error={!!errors.locationId}
                            // helperText={errors.locationId?.message}
                            sx={{
                                maxHeight: "56px",
                                height: "56px",
                                "& .MuiOutlinedInput-root": {borderRadius: "0", backgroundColor: "white"}
                            }}
                            InputProps={{
                                ...params.InputProps,
                                // endAdornment: inputValue.length > 0 && (
                                //     <>
                                //         {/*{loading &&*/}
                                //         {/*    <InputAdornment position="end">*/}
                                //         {/*        <CircularProgress size={20}/>*/}
                                //         {/*    </InputAdornment>*/}
                                //         {/*}*/}
                                //         {inputValue.length > 0 &&
                                //             <InputAdornment position="end">
                                //                 <IconButton onClick={handleClearSearch} size="small">
                                //                     <Close/>
                                //                 </IconButton>
                                //             </InputAdornment>
                                //         }
                                //     </>
                                // ),
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