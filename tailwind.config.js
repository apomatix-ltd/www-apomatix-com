module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      boxShadow: {
        ax: "0 0 40px 0 rgba(0, 0, 0, 0.07)",
        ax2: "0 2px 48px 0 rgba(0, 0, 0, 0.06)",
      },
      colors: {
        branding: "#0B82A4",
      },
      height: {
        140: "35rem",
        148: "37rem",
      },
      lineHeight: {
        12: "3rem",
      },
      zIndex: {
        "-1": "-1",
        1: "1",
      },
      inset: {
        10: "2.5rem",
        56: "14rem",
      },
      padding: {
        18: "4.5rem",
        "12/100": "12%",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
    },
  },
  variants: {},
  plugins: [],
}
