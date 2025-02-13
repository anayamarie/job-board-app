import "./App.css";
import { useEffect, useState } from "react";
import CommonHeader from "./components/CommonHeader";
import CommonCard from "./components/CommonCard";
import { CommonCardProps } from "./components/CommonCard";
import { getAllData } from "./helpers/getAllData";
import { getAllKeywords } from "./helpers/getAllKeywords";

const App = () => {
    const [data, setData] = useState<CommonCardProps[]>([]);
    const [selectedKeywords, setSelectedKeywords] = useState<
        { value: string; label: string }[]
    >([]);
    useEffect(() => {
        getAllData(setData);
    }, []);

    useEffect(() => {
        if (selectedKeywords?.length > 0) {
            const keywordValues = selectedKeywords.map(
                (keyword) => keyword.value,
            );
            const filteredData = data.filter((item: CommonCardProps) =>
                keywordValues.some(
                    (keyword) =>
                        item.role
                            .toLowerCase()
                            .includes(keyword.toLowerCase()) ||
                        item.level
                            .toLowerCase()
                            .includes(keyword.toLowerCase()) ||
                        item.languages.some((lang) =>
                            lang.toLowerCase().includes(keyword.toLowerCase()),
                        ) ||
                        item.tools.some((tool) =>
                            tool.toLowerCase().includes(keyword.toLowerCase()),
                        ),
                ),
            );

            setData(filteredData);
        }
    }, [selectedKeywords]);

    return (
        <div className="min-h-full">
            <CommonHeader
                setSelectedKeywords={setSelectedKeywords}
                setData={setData}
            />
            <div className="body-container">
                {data.map((datum) => (
                    <CommonCard {...datum} />
                ))}
            </div>
        </div>
    );
};

export default App;
