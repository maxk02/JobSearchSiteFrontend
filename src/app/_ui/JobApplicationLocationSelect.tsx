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
                value={value?.fullName ?? availableValues[0]?.fullName ?? ''} 
                disabled={availableValues.length < 2}
                onChange={handleChange}
                
                sx={{
                    height: "57px",
                    borderRadius: "0",
                    backgroundColor: "white"
                }}
            >

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