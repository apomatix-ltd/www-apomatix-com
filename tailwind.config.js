module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      sm: "576ppx",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1920px",
    },
    extend: {
      colors: {
        branding: "#0B82A4",
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
      },
      margin: {
        "-6/10": "-60%",
      },
    },
  },
  variants: {},
  plugins: [],
}
