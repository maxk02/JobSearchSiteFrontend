"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import {CssBaseline, GlobalStyles, ThemeProvider} from "@mui/material";
import theme from "@/app/_lib/theme";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles
                    styles={{
                        body: {
                            background: "linear-gradient(to right, #f4f4f9, #e6ebf1)",
                        },
                    }}
                />
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}
