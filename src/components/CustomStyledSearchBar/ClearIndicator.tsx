import { ClearIndicatorProps } from "react-select";
import { CSSProperties, FunctionComponent } from "react";
import { Keyword } from "./CommonSearchBar";

const CustomClearText: FunctionComponent = () => <div>Clear</div>;
const ClearIndicator = (props: ClearIndicatorProps<Keyword, true>) => {
    const {
        children = <CustomClearText />,
        getStyles,
        innerProps: { ref, ...restInnerProps },
    } = props;
    return (
        <div
            {...restInnerProps}
            ref={ref}
            style={getStyles("clearIndicator", props) as CSSProperties}
        >
            <div style={{ padding: "0px 5px" }}>{children}</div>
        </div>
    );
};

export default ClearIndicator;
