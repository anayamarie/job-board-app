import { CommonCardProps } from "../components/CommonCard";
export const getAllKeywords = ({ data }: { data: [] }) => {
    const keywords = new Map();
    function addKeyword({ dataArray }: { dataArray: [] }) {
        dataArray.forEach(
            ({ data }: { data: { value: string; label: string } }) => {
                if (!keywords.has(data.value)) {
                    keywords.set(data.value, data);
                }
            },
        );
    }

    let keywordsList: {}[] = [];
    data.forEach((datum: CommonCardProps) => {
        //languages
        const langArr = datum?.languages.map((item) => ({
            value: item,
            label: item,
        }));
        //tools
        const toolsArr = datum?.tools.map((item) => ({
            value: item,
            label: item,
        }));

        keywordsList = [
            { value: datum?.role, label: datum?.role },
            { value: datum?.level, label: datum?.level },
            ...toolsArr,
            ...langArr,
        ];
    });
    console.log(keywordsList);
};
