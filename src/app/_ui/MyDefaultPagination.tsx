"use client";

import {Pagination, PaginationItem, useTheme} from "@mui/material";
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import React, {useState} from "react";


interface MyDefaultPaginationProps {
    totalPages: number;
}


export default function MyDefaultPagination({ totalPages }: MyDefaultPaginationProps) {
    const theme = useTheme();

    const [page, setPage] = useState(1);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Pagination
            count={totalPages}
            page={page}
            onChange={handleChange}
            size="large"
            // color="primary"
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
                // const isFirstPage = item.page === 1 && item.type === "previous";
                // const isLastPage = item.page === totalPages && item.type === "next";
                //
                // if (isFirstPage || isLastPage) {
                //     return null;
                // }

                return (
                    <PaginationItem
                        {...item}
                        sx={{
                            ...(item.type === 'previous' && { mr: 2 }),
                            ...(item.type === 'next' && { ml: 2 })
                        }}
                        slots={{
                            previous: () => (
                                <span style={{ display: "flex", alignItems: "center",
                                    paddingRight: '14px', paddingLeft: '8px'}}
                                >
                                <ArrowBack />
                                <span style={{ marginLeft: 8 }}>Poprzednia</span>
                            </span>
                            ),
                            next: () => (
                                <span style={{ display: 'flex', alignItems: 'center',
                                    paddingLeft: '14px', paddingRight: '8px' }}
                                >
                                <span style={{ marginRight: 8 }}>Następna</span>
                                <ArrowForward />
                            </span>
                            ),

                        }}
                    />
                );
            }}
        />
    );
}
