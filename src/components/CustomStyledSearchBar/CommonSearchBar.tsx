import Select from "react-select";
import ClearIndicator from "./ClearIndicator";
import { colourStyles } from "./colourStyles";

import { getAllData } from "../../helpers/getAllData";

export interface Keyword {
    value: string;
    label: string;
}

const keywords: Keyword[] = [
    { value: "Frontend", label: "Frontend" },
    { value: "Junior", label: "Junior" },
    { value: "CSS", label: "CSS" },
    { value: "JavaScript", label: "JavaScript" },
];

const CommonSearchBar = ({
    setSelectedKeywords,
    setData,
}: {
    setSelectedKeywords: Function;
    setData: Function;
}) => {
    return (
        <Select
            onChange={(option) => {
                if (option?.length === 0) {
                    getAllData(setData);
                }
                setSelectedKeywords(option);
            }}
            placeholder="Search..."
            getOptionLabel={(keyword: Keyword) => keyword.label}
            getOptionValue={(keyword: Keyword) => keyword.label}
            options={keywords}
            backspaceRemovesValue={true}
            isMulti
            styles={colourStyles}
            components={{
                ClearIndicator,
                IndicatorSeparator: () => null,
                DropdownIndicator: () => null,
            }}
        />
    );
};

export default CommonSearchBar;
