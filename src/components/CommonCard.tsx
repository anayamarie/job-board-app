import useScreenWidth from "../hooks/useScreenWidth";

export interface CommonCardProps {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
}

const CommonCard = (datum: CommonCardProps) => {
    const width = useScreenWidth();
    const renderCard = () => {
        return (
            <div key={datum?.id} className="body-container-border">
                <div className="card-content">
                    <div className="flex-shrink-0">
                        <img
                            className="card-image"
                            src={datum?.logo}
                            alt="job post"
                        />
                    </div>
                    <div className="flex flex-col md:ms-8">
                        <div className="flex-auto flex flex-row min-w-0">
                            <div className="card-company">{datum?.company}</div>
                            <div className="flex-auto text-sm font-medium text-gray-900 truncate dark:text-white">
                                {datum?.new && (
                                    <div className="card-tag-new">NEW!</div>
                                )}
                                {datum?.featured && (
                                    <div className="card-tag-featured">
                                        FEATURED
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex-auto min-w-0">
                            <div className="card-position">
                                {datum?.position}
                            </div>
                        </div>
                        <div className="flex-auto flex flex-row min-w-0">
                            <div className="card-details">
                                {datum?.postedAt}
                            </div>
                            <div className="card-details">
                                • {datum?.contract}
                            </div>
                            <div className="card-details">
                                • {datum?.location}
                            </div>
                        </div>
                    </div>
                    {width < 768 && (
                        <hr className="h-px my-4 bg-dark-grayish-dark-cyan border-0" />
                    )}
                    <div className="keyword-container">
                        <div className="card-keywords">{datum?.role}</div>
                        <div className="card-keywords">{datum?.level}</div>
                        {datum?.tools.map((tool) => (
                            <div key={tool} className="card-keywords">
                                {tool}
                            </div>
                        ))}
                        {datum?.languages.map((language) => (
                            <div key={language} className="card-keywords">
                                {language}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };
    return renderCard();
};

export default CommonCard;
