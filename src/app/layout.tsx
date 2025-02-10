import type { Metadata } from "next";
import "./globals.css";
import font from "@/app/_lib/font";
import ThemeRegistry from "@/app/_ui/ThemeRegistry";
import Navbar from "@/app/_ui/Navbar";
import Footer from "@/app/_ui/Footer";
import {Box, Container} from "@mui/material";


export const metadata: Metadata = {
  title: "znajdzprace.pl",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pl">
      <body className={font.variable}>
        <ThemeRegistry>
            <Box display="flex" flexDirection="column" minHeight="100vh" m={0} p={0}>
                <Navbar />
                <Container component="main"
                           sx={{ flexGrow: 1, m: 0, px: 0, pt: 0, pb: 3 }}
                           maxWidth={false}
                           disableGutters
                >
                    {children}
                </Container>
                <Footer />
            </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
