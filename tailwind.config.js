const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./public/**/*.html"],
    theme: {
        extend: {
            fontFamily: {
                aktiv: ["Aktiv Grotesk Corp"],
                raleway: ["Raleway", "sans-serif"]
            },
            colors: {
                "true-black": "#000",
                white: "#FDFDFD",
                greenish: "#27D17E",
                blackish: "#24160B",
                bgbutton: '#222222',
                black: "#202028",
                zeus: "#17120E",
                gray: "#838383",
                "cold-gray": "#181818",
                shark: "#1F2123",
                shamrock: "#27D17E",
                silver: "#C9C9C9",
                "mine-shaft": "#383838",
                boulder: "#747474",
                pampas: "#F2EFE8",
                karaka: "#24160B",
                tundora: "#494949",
                "cold-gray": "#181818",
                alto: "#D3D3D3",
                "silver-chalice": "#9F9F9F",
                tundora: "#414141",
                mantle: "#96A196",
                trout: "#495057",
                "athens-gray": "#F8F9FA",
                "silver-chalice": "#A6A6A6"
            },
            backgroundImage: {
                hero: "url(../images/hero-bg.jpg)"
            },
            transitionProperty: {
                'width': "width"
            },
            animation: {
                'spin-slow': 'spin 2s linear infinite',
            },
            transitionDuration: {
              '1000': '1000ms',
            }
        },
    },
    plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        plugin(function ({ addVariant }) {
            addVariant("active-tab", ".active-tab &");
        }),
    ],
};
