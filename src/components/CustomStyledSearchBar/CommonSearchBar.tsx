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
    selectedKeywords,
}: {
    setSelectedKeywords: Function;
    setData: Function;
    setFinalData: Function;
    selectedKeywords: Keyword[];
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
            value={selectedKeywords}
            components={{
                ClearIndicator,
                IndicatorSeparator: () => null,
                DropdownIndicator: () => null,
            }}
        />
    );
};

export default CommonSearchBar;
