import useScreenWidth from "../hooks/useScreenWidth";
import CommonSearchBar from "./CustomStyledSearchBar/CommonSearchBar";
const CommonHeader = ({
    setSelectedKeywords,
    setData,
}: {
    setSelectedKeywords: Function;
    setData: Function;
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
            />
        </nav>
    );
};

export default CommonHeader;
