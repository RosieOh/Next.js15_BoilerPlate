declare module "tailwindcss" {
    export interface Config {
      content: string[];
      theme: {
        extend: {
          colors: {
            background: string;
            foreground: string;
          };
        };
      };
      plugins: any[];
    }
  }
  