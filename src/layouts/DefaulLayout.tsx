import { ReactNode, useState } from "react";
import Header from "./Header";
import { Item } from "@/types/items";
import { Container } from "@mui/material";
import Footer from "./Footer";
import { ThemeProvider } from "@emotion/react";
import lightTheme from "@/components/themes/lightTheme";
import ShoppingCart from "@/components/Cart/ShoppingCart";
import { CartProvider } from "../components/Cart/CartProvider";

type Props = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <CartProvider>
      <Container maxWidth="lg">
      <ShoppingCart />
      <Header />
      <main>{children}</main>
      <ThemeProvider theme={lightTheme}>
        <Footer />
      </ThemeProvider>
    </Container>
    </CartProvider>
  );
};

export default DefaultLayout;