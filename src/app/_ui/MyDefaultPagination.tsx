"use client";

import {Pagination, PaginationItem, useTheme} from "@mui/material";
import {ArrowBack, ArrowForward} from "@mui/icons-material";

export default function ApplicationSortingCard() {
    const theme = useTheme();

    return (
        <Pagination
            count={10}
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
            renderItem={(item) => (
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
            )}
        />
    );
}
