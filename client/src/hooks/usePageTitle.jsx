import { useEffect } from 'react';

const usePageTitle = (title) => {
    useEffect(() => {
        document.title = title ? `${title} | UpSkillr` : 'UpSkillr';
    }, [title]);
};

export default usePageTitle;
