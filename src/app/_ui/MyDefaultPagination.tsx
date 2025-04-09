"use client";

import { Pagination, PaginationItem, useTheme } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface MyDefaultPaginationProps {
    currentPage: number;
    totalPages: number;
}

export default function MyDefaultPagination({ currentPage, totalPages }: MyDefaultPaginationProps) {
    const theme = useTheme();
    const router = useRouter();
    const searchParams = useSearchParams();

    const [page, setPage] = useState(currentPage);

    useEffect(() => {
        setPage(currentPage);
    }, [currentPage]);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);

        const updatedParams = new URLSearchParams(searchParams.toString());
        updatedParams.set("page", value.toString());

        const currentPath = window.location.pathname;

        const newUrl = `${currentPath}${updatedParams.toString() ? `?${updatedParams.toString()}` : ""}`;
        router.push(newUrl);
    };

    return (
        totalPages > 1 && (
            <Pagination
                count={totalPages}
                page={page}
                onChange={handleChange}
                size="large"
                variant="outlined"
                sx={{
                    "& .MuiPaginationItem-root": {
                        color: `${theme.palette.primary.main}`,
                        borderColor: `${theme.palette.primary.main}`,
                    },
                    "&.Mui-selected": {
                        color: `${theme.palette.primary.main}`,
                        borderColor: `${theme.palette.primary.main}`,
                    },
                }}
                renderItem={(item) => (
                    <PaginationItem
                        {...item}
                        sx={{
                            ...(item.type === "previous" && { mr: 2 }),
                            ...(item.type === "next" && { ml: 2 }),
                        }}
                        slots={{
                            previous: () => (
                                <span
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        paddingRight: "14px",
                                        paddingLeft: "8px",
                                    }}
                                >
                                    <ArrowBack />
                                    <span style={{ marginLeft: 8 }}>Poprzednia</span>
                                </span>
                            ),
                            next: () => (
                                <span
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        paddingLeft: "14px",
                                        paddingRight: "8px",
                                    }}
                                >
                                    <span style={{ marginRight: 8 }}>Następna</span>
                                    <ArrowForward />
                                </span>
                            ),
                        }}
                    />
                )}
            />
        )
    );
}