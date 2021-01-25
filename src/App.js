// Styling
import { GlobalStyle, ThemeButton } from "./styles";

import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import products from "./products";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  const [product, setproduct] = useState(products[0]);
  const reloadData = () => {
    setview(<ProductList setproduct={setproduct} handleView={handleView} />);
  };
  const handleView = (product) => {
    setview(<ProductDetail product={product} reloadData={reloadData}/>);
  };
 
  const [view, setview] = useState(
    <ProductList setproduct={setproduct} handleView={handleView} />
  );

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      <Home />
      {/* <ProductList setproduct={setproduct} handleView={handleView} />
      <ProductDetail product={product}/> */}
      {view}
    </ThemeProvider>
  );
}

export default App;
