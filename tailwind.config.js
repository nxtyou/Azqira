const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./public/**/*.html"],
    theme: {
        extend: {
            fontFamily: {
                aktiv: ["Aktiv Grotesk Corp", "sans-serif"],
            },
            colors: {
                black: "#202028",
                zeus: "#17120E",
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
            },
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
