import useScreenWidth from "../hooks/useScreenWidth";
import CommonSearchBar from "./CustomStyledSearchBar/CommonSearchBar";
import { Keyword } from "./CustomStyledSearchBar/CommonSearchBar";
const CommonHeader = ({
    setSelectedKeywords,
    setData,
    setFinalData,
    selectedKeywords,
    showSearch,
}: {
    setSelectedKeywords: Function;
    setData: Function;
    setFinalData: Function;
    selectedKeywords: Keyword[];
    showSearch: boolean;
}) => {
    const width = useScreenWidth();
    return (
        <nav
            className={`header-container ${
                width > 768 ? "header-img-desktop" : "header-img-mobile"
            }`}
        >
            {showSearch && (
                <CommonSearchBar
                    setSelectedKeywords={setSelectedKeywords}
                    setData={setData}
                    setFinalData={setFinalData}
                    selectedKeywords={selectedKeywords}
                />
            )}
        </nav>
    );
};

export default CommonHeader;
