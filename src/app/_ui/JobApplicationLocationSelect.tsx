'use client';

import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { LocationDto } from '@/lib/api/locations/locationsApiDtos';

interface JobApplicationLocationSelectProps {
    value: LocationDto | null;
    availableValues: LocationDto[];
    onChange: (location: LocationDto | null) => void;
}

export default function JobApplicationLocationSelect({ 
    value, 
    availableValues, 
    onChange 
}: JobApplicationLocationSelectProps) {

    const handleChange = (event: SelectChangeEvent) => {
        const selectedName = event.target.value;
        
        // Find the full object from the list based on the selected name
        const selectedLocation = availableValues.find(
            (item) => item.fullName === selectedName
        );

        onChange(selectedLocation || null);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="location-select-label">Miejscowość</InputLabel>
            <Select
                labelId="location-select-label"
                label="Miejscowość"
                
                // Bind to the name string, or empty string if null
                value={value ? value.fullName : ''} 
                onChange={handleChange}
                
                sx={{
                    height: "56px",
                    borderRadius: "0",
                    backgroundColor: "white"
                }}
            >

                <MenuItem value="">
                    <em>Wybierz</em>
                </MenuItem>

                {availableValues.map((location) => (
                    <MenuItem 
                        key={location.id} 
                        value={location.fullName}
                    >
                        {location.fullName}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}