import {
    Checkbox,
    FormControl,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select, SelectChangeEvent,
    Typography
} from "@mui/material";
import React, {useState} from "react";



interface WithIdAndName {
    id: number | string;
    name: string;
}

interface JobSearchSelectOptionsInputProps<T extends WithIdAndName> {
    name: string;
    columnsNo: number;
    items: T[];
}


export default function JobSearchSelectOptionsInput<T extends WithIdAndName>(props: JobSearchSelectOptionsInputProps<T>) {

    const {name, columnsNo, items } = props;


    const [selected, setSelected] = useState<T["id"][]>([]);
    // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleChange = (event: SelectChangeEvent<T["id"][]>) => {
        const value = event.target.value as T["id"][];
        setSelected(value);
    };

    // const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorEl(event.currentTarget);
    // };
    //
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    return (
        <FormControl sx={{width: "100%"}}>
            <InputLabel id="select-job-category-label" size="small">{name}</InputLabel>
            <Select
                labelId="select-job-category-label"
                id="select-job-category"
                multiple
                fullWidth
                value={selected}
                onChange={handleChange}
                input={<OutlinedInput label={name} />}
                size="small"
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
                            // width: '80%',
                            // minWidth: '1000px',
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
                            checked={selected.indexOf(item.id) > -1}
                            sx={{py: 0.5}}
                        />
                        <ListItemText primary={item.name}/>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}