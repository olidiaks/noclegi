import {useEffect} from "react";

const useWebsiteTitle = title => {
    const setTitle = title => document.title = title;

    useEffect(() => {
        if (title) setTitle(title);
    }, [title]);

    return setTitle;
};

export default useWebsiteTitle;