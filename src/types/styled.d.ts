import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    fonts: {
      fontFamily: string,
      title: {
        fontSize: string,
        fontWeight: number
      },
      body: {
        fontSize: string,
        fontWeight: number
      },
      paragraph: {
        fontSize: string,
        fontWeight: number
      }
    }
    colors: {
      black: string,
      shadow: string,
      purple: string,
      danger: string,
      gray: {
        dark: string,
        medium: string,
        light: string
      },
      white: {
        background: string,
        details: string
      },
      pink: {
        dark: string,
        light: string
      },
    }
  }
}