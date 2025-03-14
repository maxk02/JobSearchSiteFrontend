import type { Metadata } from "next";
import "./globals.css";
import font from "@/app/_lib/font";
import ThemeRegistry from "@/app/_ui/ThemeRegistry";
import Navbar from "@/app/_ui/Navbar";
import Footer from "@/app/_ui/Footer";
import {Box, Container} from "@mui/material";
import {headers} from "next/headers";


export const metadata: Metadata = {
  title: "znajdzprace.pl",
};

type RoutePattern = {
    regex: RegExp;
    name: string;
};

const hiddenLayoutRoutePatterns: RoutePattern[] = [
    { regex: /^\/folder\/\d+\/jobs$/, name: "/folder/id/jobs" },
    { regex: /^\/folder\/\d+\/settings$/, name: "/folder/id/settings" },
    { regex: /^\/company\/\d+\/manage\/create-job$/, name: "/folder/jobs" },
];

function evaluateRoutePatterns(pathname: string): boolean {
    let match: boolean = false;

    hiddenLayoutRoutePatterns.forEach((pattern) => {
        const result: boolean = pattern.regex.test(pathname);

        if (result)
            match = true;
    });

    return match;
}

export default async function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {

    const headersList = await headers();
    const pathname = headersList.get("x-current-path");
    if (pathname === null) throw new Error();

    const hideLayout = evaluateRoutePatterns(pathname);

    return (
    <html lang="pl">
      <body className={font.variable}>
        <ThemeRegistry>
            <Box display="flex" flexDirection="column" minHeight="100vh" m={0} p={0}>
                {!hideLayout && <Navbar />}
                <Container component="main"
                           sx={{ flexGrow: 1, m: 0, p: 0 }}
                           maxWidth={false}
                           disableGutters
                >
                    {children}
                </Container>
                {!hideLayout && <Footer />}
            </Box>
        </ThemeRegistry>
      </body>
    </html>
    );
}
