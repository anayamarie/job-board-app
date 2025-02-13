import useScreenWidth from "../hooks/useScreenWidth";
import CommonSearchBar from "./CustomStyledSearchBar/CommonSearchBar";
const CommonHeader = ({
    setSelectedKeywords,
    setData,
    setFinalData,
}: {
    setSelectedKeywords: Function;
    setData: Function;
    setFinalData: Function;
}) => {
    const width = useScreenWidth();
    return (
        <nav
            className={`header-container ${
                width > 768 ? "header-img-desktop" : "header-img-mobile"
            }`}
        >
            <CommonSearchBar
                setSelectedKeywords={setSelectedKeywords}
                setData={setData}
                setFinalData={setFinalData}
            />
        </nav>
    );
};

export default CommonHeader;
