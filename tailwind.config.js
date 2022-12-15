import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
  plugins: [daisyui],
  daisyui: {
    styled: true,
    themes:
      [
        {
          mytheme: {
            "primary": "#064663",
            "secondary": "#08597f",
            "alternative": "#72b2ed",
            "accent": "#fff",
            "neutral": "#3D4451",
            "base-100": "#FFFFFF",
            "info": "#3ABFF8",
            "success": "#36D399",
            "warning": "#FBBD23",
            "error": "#F87272",
          }
        }
      ],
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
};
