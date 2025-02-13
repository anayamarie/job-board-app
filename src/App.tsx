import { useEffect, useState } from "react";
import CommonHeader from "./components/CommonHeader";
import CommonCard from "./components/CommonCard";
import { CommonCardProps } from "./components/CommonCard";
import { getAllData } from "./helpers/getAllData";
import { Keyword } from "./components/CustomStyledSearchBar/CommonSearchBar";

const App = () => {
    const [data, setData] = useState<CommonCardProps[]>([]);
    const [finalData, setFinalData] = useState<CommonCardProps[]>([]);
    const [selectedKeywords, setSelectedKeywords] = useState<Keyword[]>([]);
    //improvement 2: should only show search box if a keyword was clicked
    const [showSearch, setShowSearch] = useState<boolean>(false);

    useEffect(() => {
        getAllData(setData, setFinalData);
    }, []);

    useEffect(() => {
        const keywordValues = selectedKeywords.map((keyword) =>
            keyword.value.toLowerCase(),
        );
        const filteredData = data.filter((item: CommonCardProps) =>
            keywordValues.every(
                (keyword) =>
                    item.role.toLowerCase().includes(keyword) ||
                    item.level.toLowerCase().includes(keyword) ||
                    item.languages.some((lang) =>
                        lang.toLowerCase().includes(keyword),
                    ) ||
                    item.tools.some((tool) =>
                        tool.toLowerCase().includes(keyword),
                    ),
            ),
        );
        if (filteredData.length === 0 && keywordValues.length === 0) {
            setFinalData(data);
        }
        if (keywordValues.length === 0) {
            setShowSearch(false);
        }
        setFinalData(filteredData);
    }, [selectedKeywords]);

    const handleOnClickKeyword = (newKeyword: Keyword) => {
        setShowSearch(true);
        setSelectedKeywords((prevValue) => [...prevValue, newKeyword]);
    };

    return (
        <div className="min-h-full">
            <CommonHeader
                setSelectedKeywords={setSelectedKeywords}
                setData={setData}
                setFinalData={setFinalData}
                selectedKeywords={selectedKeywords}
                showSearch={showSearch}
            />
            <div className="body-container">
                {finalData.map((datum) => (
                    <CommonCard
                        {...datum}
                        handleOnClickKeyword={handleOnClickKeyword}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
