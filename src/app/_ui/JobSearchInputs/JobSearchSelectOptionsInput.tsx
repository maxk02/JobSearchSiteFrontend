import {
    Checkbox,
    FormControl,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import {Control, Controller, FieldErrors, FieldValues, Path } from "react-hook-form";
import {SearchJobFormData} from "@/lib/schemas/searchJobSchema";


interface WithIdAndName {
    id: number | string;
    name: string;
}

// interface JobSearchSelectOptionsInputProps<T extends WithIdAndName> {
//     labelName: string;
//     controllerName: keyof SearchJobFormData;
//     columnsNo: number;
//     items: T[];
//     control: Control<SearchJobFormData>;
//     errors: FieldErrors<SearchJobFormData>;
// }

interface JobSearchSelectOptionsInputProps<TItem extends WithIdAndName, TFieldValues extends FieldValues> {
    labelName: string;
    controllerName: Path<TFieldValues>;
    columnsNo: number;
    items: TItem[];
    control: Control<TFieldValues>;
    errors: FieldErrors<TFieldValues>;
}


export default function JobSearchSelectOptionsInput<T extends WithIdAndName, TFieldValues extends FieldValues>(props: JobSearchSelectOptionsInputProps<T, TFieldValues>) {

    const {labelName, controllerName, columnsNo, items, control, errors } = props;

    return (
        <FormControl sx={{width: "100%"}}>
            <InputLabel id={`select-job-${controllerName}-label`} size="small">{labelName}</InputLabel>
            <Controller
                name={controllerName}
                control={control}
                render={({ field }) => (
                    <Select
                        {...field}
                        labelId={`select-job-${controllerName}-label`}
                        id={`select-job-${controllerName}`}
                        multiple
                        fullWidth
                        value={Array.isArray(field.value) ? field.value : []}
                        onChange={(e) => field.onChange(e.target.value)}
                        input={<OutlinedInput label={labelName} />}
                        size="small"
                        error={!!errors[controllerName]}
                        variant="outlined"
                        sx={{
                            borderRadius: "50px",
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: "50px",
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderRadius: "50px",
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderRadius: "50px",
                            },
                            // enlargement
                            height: "40px",
                            "& .MuiSelect-select": {
                                padding: "10px 14px",
                                display: "flex",
                                alignItems: "center",
                            },
                            "& .MuiTypography-root": {
                                lineHeight: "1.5",
                            },
                        }}
                        renderValue={
                            (selectedIds) => (
                                <Typography
                                    variant="body2"
                                    mt={0.25}
                                    sx={{
                                        width: "fit-content",
                                        textOverflow: "ellipsis",
                                    }}
                                >
                                    Wybrano elementów: {selectedIds.length}
                                </Typography>
                            )}
                        MenuProps={{
                            PaperProps: {
                                sx: {
                                    mt: 3,
                                    maxHeight: '400px',
                                    borderRadius: 2,
                                    '& .MuiMenu-list': {
                                        display: 'grid',
                                        gridTemplateColumns: `repeat(${columnsNo}, 1fr)`,
                                        gap: 0.5,
                                        p: 1,
                                    },
                                },
                            },
                        }}
                    >
                        {items.map((item) => (
                            <MenuItem key={item.id} value={item.id} sx={{px: 1, py: 0.5}}>
                                <Checkbox
                                    checked={(field.value as any[])?.includes(item.id)}
                                    sx={{py: 0.5}}
                                />
                                <ListItemText primary={item.name}/>
                            </MenuItem>
                        ))}
                    </Select>
                )}
            />
        </FormControl>
    );
}