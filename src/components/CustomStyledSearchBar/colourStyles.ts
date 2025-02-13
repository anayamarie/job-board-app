import { StylesConfig } from "react-select";
import { Keyword } from "./CommonSearchBar";

const commonSearchContainerStyle: {} = {
    backgroundColor: "white",
    position: "absolute",
    width: "80%",
    boxSizing: "border-box",
    left: 0,
    right: 0,
    marginInline: "auto",
    "@media (max-width: 375px)": {
        width: "90%",
    },
};

export const colourStyles: StylesConfig<Keyword, true> = {
    control: (styles) => ({
        ...styles,
        ...commonSearchContainerStyle,
        top: "130px",
        borderColor: "lightgrey",
        boxShadow: "lightgrey",
        "&:hover": {
            borderColor: "lightgrey",
            cursor: "pointer",
        },
    }),
    menu: (styles) => ({
        ...styles,
        ...commonSearchContainerStyle,
        top: "178px",
    }),
    multiValue: (styles) => {
        return {
            ...styles,
            backgroundColor: "#eef6f6",
            fontSize: "15px",
            marginRight: "10px",
        };
    },
    option: (styles) => ({
        ...styles,
        color: "#5ba4a4",
        fontWeight: "700",
    }),
    multiValueLabel: (styles) => ({
        ...styles,
        color: "#5ba4a4",
        fontWeight: "700",
    }),
    multiValueRemove: (styles) => ({
        ...styles,
        backgroundColor: "#5ba4a4",
        color: "white",
        "&:hover": {
            backgroundColor: "#2c3a3a",
            color: "white",
        },
    }),
    valueContainer: (styles) => ({
        ...styles,
        padding: "10px 40px",
    }),
    clearIndicator: (styles) => ({
        ...styles,
        color: "#5ba4a4",
        fontWeight: "700",
        paddingRight: "40px",
    }),
};
