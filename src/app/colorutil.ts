
export const colortypes = [
    "C50",
    "C100",
    "C200",
    "C300",
    "C400",
    "C500",
    "C600",
    "C700",
    "C800",
    "C900",
];

export const dark_primary_text = "#111";
export const light_primary_text = "#fff";

export const contrast_default: Object = {
  C50:  dark_primary_text,
  C100: dark_primary_text,
  C200: dark_primary_text,
  C300: dark_primary_text,
  C400: dark_primary_text,
  C500: light_primary_text,
  C600: light_primary_text,
  C700: light_primary_text,
  C800: light_primary_text,
  C900: light_primary_text,
  A100: dark_primary_text,
  A200: light_primary_text,
  A400: light_primary_text,
  A700: light_primary_text
};

export const ptcolors: Array<Object> = [
    {
        metadata: {
            title: "Evergreen"
        },
        C50:  "#00ce8b",
        C100: "#00c679",
        C200: "#00bc69",
        C300: "#00b05b",
        C400: "#00a24f",
        C500: "#009245",
        C600: "#007734",
        C700: "#005927",
        C800: "#00431d",
        C900: "#003216",
        A100: "#00ae58",
        A200: "#00a14e",
        A400: "#00823b",
        A700: "#006f32",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Fjord"
        },
        C50:  "#c7dae1",
        C100: "#bdd3dc",
        C200: "#b1cbd6",
        C300: "#a3c2cf",
        C400: "#93b7c7",
        C500: "#80aabd",
        C600: "#6095ac",
        C700: "#487a97",
        C800: "#365b7d",
        C900: "#28445e",
        A100: "#a0bfce",
        A200: "#91b5c6",
        A400: "#6d9db3",
        A700: "#5d8ea8",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Rose"
        },
        C50:  "#ea0000",
        C100: "#e60000",
        C200: "#e20000",
        C300: "#dd0000",
        C400: "#d70000",
        C500: "#d00000",
        C600: "#c40000",
        C700: "#b50000",
        C800: "#a20000",
        C900: "#8b0000",
        A100: "#dc0000",
        A200: "#d60000",
        A400: "#c90000",
        A700: "#c10000",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Irridium"
        },
        C50:  "#f4f4f4",
        C100: "#f2f2f2",
        C200: "#f0f0f0",
        C300: "#ededed",
        C400: "#eaeaea",
        C500: "#e6e6e6",
        C600: "#e0e0e0",
        C700: "#d8d8d8",
        C800: "#cecece",
        C900: "#c2c2c2",
        A100: "#ececec",
        A200: "#e9e9e9",
        A400: "#e2e2e2",
        A700: "#dedede",
        contrast: {
            C50:  dark_primary_text,
            C100: dark_primary_text,
            C200: dark_primary_text,
            C300: dark_primary_text,
            C400: dark_primary_text,
            C500: dark_primary_text,
            C600: dark_primary_text,
            C700: dark_primary_text,
            C800: dark_primary_text,
            C900: dark_primary_text,
            A100: dark_primary_text,
            A200: dark_primary_text,
            A400: dark_primary_text,
            A700: dark_primary_text,
        }
    },
    {
        metadata: {
            title: "Titanium"
        },
        C50:  "#454545",
        C100: "#3c3c3c",
        C200: "#343434",
        C300: "#2d2d2d",
        C400: "#272727",
        C500: "#222222",
        C600: "#191919",
        C700: "#131313",
        C800: "#0e0e0e",
        C900: "#0a0a0a",
        A100: "#2a2a2a",
        A200: "#252525",
        A400: "#1c1c1c",
        A700: "#181818",
        contrast: {
            C50:  light_primary_text,
            C100: light_primary_text,
            C200: light_primary_text,
            C300: light_primary_text,
            C400: light_primary_text,
            C500: light_primary_text,
            C600: light_primary_text,
            C700: light_primary_text,
            C800: light_primary_text,
            C900: light_primary_text,
            A100: light_primary_text,
            A200: light_primary_text,
            A400: light_primary_text,
            A700: light_primary_text,
        }
    }
];

export const jscolors: Array<Object> = [
    { 
        metadata: {
            title: "Dark"
        },
        C50: "#222222",
        C100: "#1e1e1e",
        C200: "#1a1a1a",
        C300: "#171717",
        C400: "#141414",
        C500: "#111111",
        C600: "#0d0d0d",
        C700: "#0a0a0a",
        C800: "#070707",
        C900: "#050505",
        contrast: {
            C50:  light_primary_text,
            C100: light_primary_text,
            C200: light_primary_text,
            C300: light_primary_text,
            C400: light_primary_text,
            C500: light_primary_text,
            C600: light_primary_text,
            C700: light_primary_text,
            C800: light_primary_text,
            C900: light_primary_text
        }
    },
    { 
        metadata: {
            title: "Light"
        },
        C50: "#ffffff",
        C100: "#ffffff",
        C200: "#ffffff",
        C300: "#ffffff",
        C400: "#ffffff",
        C500: "#ffffff",
        C600: "#ffffff",
        C700: "#ffffff",
        C800: "#ffffff",
        C900: "#ffffff",
        contrast: {
            C50:  dark_primary_text,
            C100: dark_primary_text,
            C200: dark_primary_text,
            C300: dark_primary_text,
            C400: dark_primary_text,
            C500: dark_primary_text,
            C600: dark_primary_text,
            C700: dark_primary_text,
            C800: dark_primary_text,
            C900: dark_primary_text
        }
    }
];

export const othercolors: Array<Object> = [
    {
        metadata: {
            title: "Moonlight"
        },
        C50:  "#507d9d",
        C100: "#466d8c",
        C200: "#3d5f7a",
        C300: "#35536a",
        C400: "#2e485c",
        C500: "#283f50",
        C600: "#1e2f3c",
        C700: "#16232d",
        C800: "#101a22",
        C900: "#0c1319",
        A100: "#334f67",
        A200: "#2d465b",
        A400: "#223544",
        A700: "#1d2d3a",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "TV Grass Green"
        },
        C50: "#9fe9a5",
        C100: "#8ee595",
        C200: "#7ce082",
        C300: "#6cda71",
        C400: "#5ed462",
        C500: "#52cc55",
        C600: "#3dbf40",
        C700: "#2eaf30",
        C800: "#229b24",
        C900: "#19821b",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "TV High Blue"
        },
        C50: "#11dae4",
        C100: "#0fd3df",
        C200: "#0dcbd9",
        C300: "#0bc2d2",
        C400: "#0ab7ca",
        C500: "#09aac1",
        C600: "#0795b1",
        C700: "#057a9d",
        C800: "#045b84",
        C900: "#034465",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "TV S2"
        },
        C50: "#85c3d5",
        C100: "#74b8ce",
        C200: "#65acc5",
        C300: "#589dbb",
        C400: "#4d8caf",
        C500: "#437aa1",
        C600: "#325b89",
        C700: "#25446b",
        C800: "#1c3350",
        C900: "#15263c",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "TV S3"
        },
        C50: "#ffee00",
        C100: "#ffeb00",
        C200: "#ffe700",
        C300: "#ffe300",
        C400: "#ffde00",
        C500: "#ffd800",
        C600: "#ffce00",
        C700: "#ffc200",
        C800: "#ffb300",
        C900: "#ffa000",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "TV S6"
        },
        C50: "#ffb4bd",
        C100: "#ffa7b1",
        C200: "#ff98a3",
        C300: "#ff8693",
        C400: "#ff7580",
        C500: "#ff666f",
        C600: "#ff4c53",
        C700: "#ff393e",
        C800: "#ff2b2e",
        C900: "#ff2022",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "TV S8"
        },
        C50: "#efce7a",
        C100: "#ecc56a",
        C200: "#e9bb5c",
        C300: "#e5af50",
        C400: "#e1a146",
        C500: "#dc913d",
        C600: "#d3752e",
        C700: "#c85822",
        C800: "#ba4219",
        C900: "#a93113",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "TV SX"
        },
        C50: "#da0000",
        C100: "#d30000",
        C200: "#cb0000",
        C300: "#c20000",
        C400: "#b70000",
        C500: "#aa0000",
        C600: "#950000",
        C700: "#7a0000",
        C800: "#5b0000",
        C900: "#440000",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "TV Gold"
        },
        C50: "#f5dc71",
        C100: "#f3d662",
        C200: "#f1cf55",
        C300: "#efc74a",
        C400: "#ecbd40",
        C500: "#e9b138",
        C600: "#e39d2a",
        C700: "#dc841f",
        C800: "#d36517",
        C900: "#c84c11",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "TV Silver"
        },
        C50: "#dddddd",
        C100: "#d7d7d7",
        C200: "#d0d0d0",
        C300: "#c8c8c8",
        C400: "#bebebe",
        C500: "#b3b3b3",
        C600: "#a0a0a0",
        C700: "#888888",
        C800: "#6a6a6a",
        C900: "#4f4f4f",
        contrast: contrast_default
    }
];

export const greycolors: Array<Object> = [
    {
        metadata: {
            title: "Simply Grey"
        },
        C50:  "#d1d1d1",
        C100: "#c9c9c9",
        C200: "#c0c0c0",
        C300: "#b5b5b5",
        C400: "#a8a8a8",
        C500: "#999999",
        C600: "#7f7f7f",
        C700: "#5f5f5f",
        C800: "#474747",
        C900: "#353535",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "(Almost) Full Greyscale"
        },
        C50:  "#e5e5e5",
        C100: "#cccccc",
        C200: "#b2b2b2",
        C300: "#999999",
        C400: "#7f7f7f",
        C500: "#666666",
        C600: "#4c4c4c",
        C700: "#333333",
        C800: "#191919",
        C900: "#000000",
        contrast: contrast_default
    }
];

export const brightcolors: Array<Object> = [
    { 
        metadata: {
            title: "Strawberry"
        },
        C50:  "#f72245",
        C100: "#f61e3c",
        C200: "#f51a34",
        C300: "#f3172d",
        C400: "#f11427",
        C500: "#ee1122",
        C600: "#ea0d19",
        C700: "#e50a13",
        C800: "#de070e",
        C900: "#d6050a",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "Tangelo"
        },
        C50:  "#f7c146",
        C100: "#f6b63d",
        C200: "#f4a935",
        C300: "#f29a2e",
        C400: "#f08828",
        C500: "#ed7623",
        C600: "#e8581a",
        C700: "#e24213",
        C800: "#db310e",
        C900: "#d2250a",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "Lemon"
        },
        C50: "#fbe97a",
        C100: "#fae56a",
        C200: "#f9e05c",
        C300: "#f8db50",
        C400: "#f7d546",
        C500: "#f6ce3d",
        C600: "#f4c22e",
        C700: "#f1b322",
        C800: "#eda019",
        C900: "#e88813",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "Lime"
        },
        C50: "#67e967",
        C100: "#5ae55a",
        C200: "#4ee04e",
        C300: "#44da44",
        C400: "#3bd43b",
        C500: "#33cc33",
        C600: "#26bf26",
        C700: "#1caf1c",
        C800: "#159b15",
        C900: "#108210",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "Turquoise"
        },
        C50: "#67e9e9",
        C100: "#5ae5e5",
        C200: "#4ee0e0",
        C300: "#44dada",
        C400: "#3bd4d4",
        C500: "#33cccc",
        C600: "#26bfbf",
        C700: "#1cafaf",
        C800: "#159b9b",
        C900: "#108282",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "Sky Blue"
        },
        C50: "#b4e9ff",
        C100: "#a7e5ff",
        C200: "#98e0ff",
        C300: "#86daff",
        C400: "#75d4ff",
        C500: "#66ccff",
        C600: "#4cbfff",
        C700: "#39afff",
        C800: "#2b9bff",
        C900: "#2082ff",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "Vibrant Sapphire"
        },
        C50: "#3333f2",
        C100: "#2c2cf0",
        C200: "#2626ed",
        C300: "#2121ea",
        C400: "#1d1de6",
        C500: "#1919e2",
        C600: "#1313db",
        C700: "#0e0ed2",
        C800: "#0a0ac7",
        C900: "#0707b9",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "Blueberry"
        },
        C50: "#9318ec",
        C100: "#8015e9",
        C200: "#6f12e5",
        C300: "#6110e0",
        C400: "#540eda",
        C500: "#490cd3",
        C600: "#3709c8",
        C700: "#2907ba",
        C800: "#1f05a9",
        C900: "#170493",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "Blackberry"
        },
        C50: "#d100e9",
        C100: "#c900e5",
        C200: "#c000e0",
        C300: "#b500da",
        C400: "#a800d4",
        C500: "#9900cc",
        C600: "#7f00bf",
        C700: "#5f00af",
        C800: "#47009b",
        C900: "#350082",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "Grape"
        },
        C50: "#e967e9",
        C100: "#e55ae5",
        C200: "#e04ee0",
        C300: "#da44da",
        C400: "#d43bd4",
        C500: "#cc33cc",
        C600: "#bf26bf",
        C700: "#af1caf",
        C800: "#9b159b",
        C900: "#821082",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "Lambo" // Image search "LTT Lambo" and you'll get the reference
        },
        C50: "#ffd1e9",
        C100: "#ffc9e5",
        C200: "#ffc0e0",
        C300: "#ffb5da",
        C400: "#ffa8d4",
        C500: "#ff99cc",
        C600: "#ff7fbf",
        C700: "#ff5faf",
        C800: "#ff479b",
        C900: "#ff3582",
        contrast: contrast_default
    }
];

export const darkcolors: Array<Object> = [
    { 
        metadata: {
            title: "Redstone"
        },
        C50: "#dc6a6a",
        C100: "#d65c5c",
        C200: "#cf5050",
        C300: "#c74646",
        C400: "#bd3d3d",
        C500: "#b13535",
        C600: "#9d2828",
        C700: "#841e1e",
        C800: "#651616",
        C900: "#4c1010",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "Rust"
        },
        C50: "#dcb66a",
        C100: "#d6a95c",
        C200: "#cf9a50",
        C300: "#c78846",
        C400: "#bd763d",
        C500: "#b16735",
        C600: "#9d4d28",
        C700: "#843a1e",
        C800: "#652b16",
        C900: "#4c2010",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "Bronze"
        },
        C50: "#efca25",
        C100: "#ecc120",
        C200: "#e9b61c",
        C300: "#e5a918",
        C400: "#e09a15",
        C500: "#da8812",
        C600: "#d16a0d",
        C700: "#c54f0a",
        C800: "#b63b07",
        C900: "#a42c05",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "Brass"
        },
        C50: "#ffd167",
        C100: "#ffc95a",
        C200: "#ffc04e",
        C300: "#ffb544",
        C400: "#ffa83b",
        C500: "#ff9933",
        C600: "#ff7f26",
        C700: "#ff5f1c",
        C800: "#ff4715",
        C900: "#ff3510",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "Jalapeño"
        },
        C50: "#b4d167",
        C100: "#a7c95a",
        C200: "#98c04e",
        C300: "#86b544",
        C400: "#75a83b",
        C500: "#669933",
        C600: "#4c7f26",
        C700: "#395f1c",
        C800: "#2b4715",
        C900: "#203510",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "Dusk"
        },
        C50: "#67d1d1",
        C100: "#5ac9c9",
        C200: "#4ec0c0",
        C300: "#44b5b5",
        C400: "#3ba8a8",
        C500: "#339999",
        C600: "#267f7f",
        C700: "#1c5f5f",
        C800: "#154747",
        C900: "#103535",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "Ocean"
        },
        C50: "#67b4d1",
        C100: "#5aa7c9",
        C200: "#4e98c0",
        C300: "#4486b5",
        C400: "#3b75a8",
        C500: "#336699",
        C600: "#264c7f",
        C700: "#1c395f",
        C800: "#152b47",
        C900: "#102035",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "Obsidian"
        },
        C50: "#b467d1",
        C100: "#a75ac9",
        C200: "#984ec0",
        C300: "#8644b5",
        C400: "#753ba8",
        C500: "#663399",
        C600: "#4c267f",
        C700: "#391c5f",
        C800: "#2b1547",
        C900: "#201035",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "Eggplant"
        },
        C50: "#d167d1",
        C100: "#c95ac9",
        C200: "#c04ec0",
        C300: "#b544b5",
        C400: "#a83ba8",
        C500: "#993399",
        C600: "#7f267f",
        C700: "#5f1c5f",
        C800: "#471547",
        C900: "#351035",
        contrast: contrast_default
    },
    { 
        metadata: {
            title: "Grapefruit"
        },
        C50: "#e967b4",
        C100: "#e55aa7",
        C200: "#e04e98",
        C300: "#da4486",
        C400: "#d43b75",
        C500: "#cc3366",
        C600: "#bf264c",
        C700: "#af1c39",
        C800: "#9b152b",
        C900: "#821020",
        contrast: contrast_default
    }
];

export const generator_default = "#63BF80";
