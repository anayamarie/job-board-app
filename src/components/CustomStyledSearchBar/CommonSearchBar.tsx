import CreatableSelect from "react-select/creatable";
import ClearIndicator from "./ClearIndicator";
import { colourStyles } from "./colourStyles";

import { getAllData } from "../../helpers/getAllData";

export interface Keyword {
    value: string;
    label: string;
}

const CommonSearchBar = ({
    setSelectedKeywords,
    setData,
    setFinalData,
}: {
    setSelectedKeywords: Function;
    setData: Function;
    setFinalData: Function;
}) => {
    return (
        <CreatableSelect
            onChange={(option) => {
                if (option?.length === 0) {
                    getAllData(setData, setFinalData);
                }
                setSelectedKeywords(option);
            }}
            placeholder="Search..."
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
