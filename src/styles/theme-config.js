import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { blue, blueDark, slate, slateDark } from "@radix-ui/colors";

export const myTheme = {
  colors: {
    background: "var(--background)",
    text: "var(--text)",
    tableRowBackground: "var(--table-row-background)",
    tableThBackground: "var(--table-th-background)",
  },
};

export const GlobalStyles = createGlobalStyle`

  ${reset}

  * {
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  :root {
   --background: ${blue.blue1};
   --text: ${slate.slate12};
   --table-row-background: ${slate.slate7};
   --table-th-background: ${slate.slate8};
  }

  [data-theme="dark"] {
    --background: ${slateDark.slate1};
    --text: ${blueDark.blue12};
    --table-row-background: ${blueDark.blue2};
    --table-th-background: ${blueDark.blue1};
  }

  body {  
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    scroll-padding-top: 60px;
    padding-top: 60px;
    @media (min-width: 768px) {
      scroll-padding-top: 72px;
      padding-top: 72px;
    }
  }

  body, nav {
    transition: all 0.50s linear;
  }
`;
