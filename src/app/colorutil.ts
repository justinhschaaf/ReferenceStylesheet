
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

const dark_primary_text = "#111";
const light_primary_text = "#fff";

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
        C50:  "#86c6a4",
        C100: "#73bf97",
        C200: "#5db687",
        C300: "#43ac75",
        C400: "#24a05f",
        C500: "#009245",
        C600: "#007c3b",
        C700: "#006a32",
        C800: "#005a2b",
        C900: "#004d25",
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
        C50:  "#bed2db",
        C100: "#b5ccd7",
        C200: "#abc6d2",
        C300: "#9fbecc",
        C400: "#91b5c5",
        C500: "#80aabd",
        C600: "#6d91a1",
        C700: "#5d7b89",
        C800: "#4f6975",
        C900: "#435964",
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
        C50:  "#e38686",
        C100: "#e07373",
        C200: "#dd5d5d",
        C300: "#d94343",
        C400: "#d52424",
        C500: "#d00000",
        C600: "#b10000",
        C700: "#970000",
        C800: "#800000",
        C900: "#6d0000",
        A100: "#dc0000",
        A200: "#d60000",
        A400: "#c90000",
        A700: "#c10000",
        contrast: contrast_default
    },
    {
        metadata: {
        title: "Pearl"
        },
        C50:  "#ececec",
        C100: "#ebebeb",
        C200: "#eaeaea",
        C300: "#e9e9e9",
        C400: "#e8e8e8",
        C500: "#e6e6e6",
        C600: "#c4c4c4",
        C700: "#a7a7a7",
        C800: "#8e8e8e",
        C900: "#797979",
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
        title: "Charcoal"
        },
        C50:  "#949494",
        C100: "#848484",
        C200: "#717171",
        C300: "#5a5a5a",
        C400: "#404040",
        C500: "#212121",
        C600: "#1c1c1c",
        C700: "#181818",
        C800: "#141414",
        C900: "#111111",
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



export const othercolors: Array<Object> = [
    {
        metadata: {
        title: "Moonlight"
        },
        C50:  "#97a1a9",
        C100: "#87939c",
        C200: "#75838d",
        C300: "#5f707c",
        C400: "#465968",
        C500: "#283e50",
        C600: "#223544",
        C700: "#1d2d3a",
        C800: "#192631",
        C900: "#15202a",
        A100: "#334f67",
        A200: "#2d465b",
        A400: "#223544",
        A700: "#1d2d3a",
        contrast: contrast_default
    }
];

export const colors: Array<Object> = [
    {
        metadata: {
        title: "Red"
        },
        C50:  "#d59d9d",
        C100: "#d08e8e",
        C200: "#ca7d7d",
        C300: "#c36969",
        C400: "#bb5151",
        C500: "#b13535",
        C600: "#972d2d",
        C700: "#802626",
        C800: "#6d2020",
        C900: "#5d1b1b",
        A100: "#c44444",
        A200: "#bb3c3c",
        A400: "#a52d2d",
        A700: "#982626",
        contrast: contrast_default
    },
    {
        metadata: {
        title: "Orange"
        },
        C50:  "#f8b586",
        C100: "#f9aa73",
        C200: "#fa9e5d",
        C300: "#fb8f43",
        C400: "#fd7e24",
        C500: "#ff6a00",
        C600: "#d95a00",
        C700: "#b94d00",
        C800: "#9d4200",
        C900: "#863800",
        A100: "#ff8800",
        A200: "#ff7800",
        A400: "#ff5a00",
        A700: "#ff4d00",
        contrast: contrast_default
    },
    {
        metadata: {
        title: "Yellow"
        },
        C50:  "#f5d39f",
        C100: "#f6ce91",
        C200: "#f7c880",
        C300: "#f8c16c",
        C400: "#f9b955",
        C500: "#faaf3a",
        C600: "#d59531",
        C700: "#b57f2a",
        C800: "#9a6c24",
        C900: "#835c1f",
        A100: "#fcc34b",
        A200: "#fbba42",
        A400: "#f9a331",
        A700: "#f8952a",
        contrast: contrast_default
    },
    /*{
        metadata: {
        title: "Green" // Just Evergreen -- new palette needed
        },
        C50:  "#f5d39f",
        C100: "#f6ce91",
        C200: "#f7c880",
        C300: "#f8c16c",
        C400: "#f9b955",
        C500: "#faaf3a",
        C600: "#d59531",
        C700: "#b57f2a",
        C800: "#9a6c24",
        C900: "#835c1f",
        A100: "#fcc34b",
        A200: "#fbba42",
        A400: "#f9a331",
        A700: "#f8952a",
        contrast: contrast_default
    },*/
    {
        metadata: {
        title: "Light Blue"
        },
        C50:  "#bedef8",
        C100: "#b5dbf9",
        C200: "#aad7fa",
        C300: "#9ed3fb",
        C400: "#8fcefd",
        C500: "#7ec8ff",
        C600: "#6baad9",
        C700: "#5b91b9",
        C800: "#4d7b9d",
        C900: "#426986",
        A100: "#9ed5ff",
        A200: "#8fcfff",
        A400: "#6bc0ff",
        A700: "#5bb7ff",
        contrast: contrast_default
    },
    {
        metadata: {
        title: "Blue"
        },
        C50:  "#a4acd5",
        C100: "#97a0d0",
        C200: "#8792ca",
        C300: "#7581c3",
        C400: "#5f6dbb",
        C500: "#4656b1",
        C600: "#3c4997",
        C700: "#333e80",
        C800: "#2b356d",
        C900: "#252d5d",
        A100: "#596ec4",
        A200: "#4f61bb",
        A400: "#3c49a5",
        A700: "#333e98",
        contrast: contrast_default
    },
    {
        metadata: {
        title: "Purple"
        },
        C50:  "#b498c6",
        C100: "#a989be",
        C200: "#9c77b5",
        C300: "#8d62ab",
        C400: "#7b499f",
        C500: "#662c91",
        C600: "#57257b",
        C700: "#4a1f69",
        C800: "#3f1a59",
        C900: "#36164c",
        A100: "#8239ad",
        A200: "#7332a0",
        A400: "#572581",
        A700: "#4a1f6e",
        contrast: contrast_default
    },
    {
        metadata: {
        title: "Magenta"
        },
        C50:  "#e38dae",
        C100: "#e17ca2",
        C200: "#de6894",
        C300: "#db5084",
        C400: "#d73471",
        C500: "#d3135a",
        C600: "#b4104d",
        C700: "#990e42",
        C800: "#820c38",
        C900: "#6f0a30",
        A100: "#de1873",
        A200: "#d91566",
        A400: "#cc104d",
        A700: "#c40e42",
        contrast: contrast_default
    },
    {
        metadata: {
        title: "Pink"
        },
        C50:  "#f8bcd2",
        C100: "#f9b3cc",
        C200: "#faa8c6",
        C300: "#fb9bbf",
        C400: "#fd8cb6",
        C500: "#ff7aac",
        C600: "#d96892",
        C700: "#b9597c",
        C800: "#9d4c6a",
        C900: "#86415a",
        A100: "#ff9ac1",
        A200: "#ff8ab7",
        A400: "#ff68a0",
        A700: "#ff5992",
        contrast: contrast_default
    },
    {
        metadata: {
        title: "Dark Grey"
        },
        C50:  "#979797",
        C100: "#878787",
        C200: "#757575",
        C300: "#5f5f5f",
        C400: "#454545",
        C500: "#272727",
        C600: "#212121",
        C700: "#1c1c1c",
        C800: "#181818",
        C900: "#141414",
        A100: "#323232",
        A200: "#2c2c2c",
        A400: "#212121",
        A700: "#1c1c1c",
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
        A700: light_primary_text
        }
    },
    {
        metadata: {
        title: "Light Grey"
        },
        C50:  "#dbdbdb",
        C100: "#d7d7d7",
        C200: "#d3d3d3",
        C300: "#cecece",
        C400: "#c8c8c8",
        C500: "#c1c1c1",
        C600: "#a4a4a4",
        C700: "#8c8c8c",
        C800: "#777777",
        C900: "#656565",
        A100: "#d0d0d0",
        A200: "#c9c9c9",
        A400: "#b8b8b8",
        A700: "#adadad",
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
    }
];
