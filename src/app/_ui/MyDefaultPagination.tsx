"use client";

import {Pagination, PaginationItem, useTheme} from "@mui/material";
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import React, {useState} from "react";


interface MyDefaultPaginationProps {
    currentPage: number;
    totalPages: number;
    setCurrentPage: (currentPage: number) => void;
}


export default function MyDefaultPagination(props: MyDefaultPaginationProps) {

    const theme = useTheme();

    const {currentPage, totalPages, setCurrentPage} = props;

    const [page, setPage] = useState(currentPage);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        setCurrentPage(value);
    };

    return (
        totalPages > 1 &&
        <Pagination
            count={totalPages}
            page={page}
            onChange={handleChange}
            size="large"
            variant="outlined"
            sx={{
                '& .MuiPaginationItem-root': {
                    color: `${theme.palette.primary.main}`,
                    borderColor: `${theme.palette.primary.main}`
                },
                '&.Mui-selected': {
                    color: `${theme.palette.primary.main}`,
                    borderColor: `${theme.palette.primary.main}`
                },
            }}
            renderItem={(item) => {
                return (
                    <PaginationItem
                        {...item}
                        sx={{
                            ...(item.type === 'previous' && {mr: 2}),
                            ...(item.type === 'next' && {ml: 2})
                        }}
                        slots={{
                            previous: () => (
                                <span style={{
                                    display: "flex", alignItems: "center",
                                    paddingRight: '14px', paddingLeft: '8px'
                                }}
                                >
                                <ArrowBack/>
                                <span style={{marginLeft: 8}}>Poprzednia</span>
                            </span>
                            ),
                            next: () => (
                                <span style={{
                                    display: 'flex', alignItems: 'center',
                                    paddingLeft: '14px', paddingRight: '8px'
                                }}
                                >
                                <span style={{marginRight: 8}}>Następna</span>
                                <ArrowForward/>
                            </span>
                            ),

                        }}
                    />
                );
            }}
        />
    );
}
