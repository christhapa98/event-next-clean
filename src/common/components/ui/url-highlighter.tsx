
const UrlHighlighter: React.FC<{
    text: string;
}> = ({ text }) => {
    // Regex to match URLs in the text
    const urlPattern = /https?:\/\/[^\s]+|www\.[^\s]+/g;

    // Split the text by the URL and map it to JSX
    const parts = text.split(urlPattern).reduce<React.ReactNode[]>((acc, part, index) => {
        acc.push(part);
        const urlMatch = text.match(urlPattern)?.[index]; // Optional chaining to safely access matched URL
        if (urlMatch) {
            acc.push(
                <a key={`${index}-url`} href={urlMatch} target="_blank" rel="noopener noreferrer" className='underline text-blue-500'>
                    {urlMatch}
                </a>
            );
        }
        return acc;
    }, []);

    return <span>{parts}</span>;
    };

    export default UrlHighlighter