export type ContentProps = {
    name?: string;
    url?: string;
};
export type ContentRowProps = {
    title?: string;
    description?: string;
    content?: ContentProps[];
};
export declare const defaultProps: {
    title: string;
    content: never[];
};
export default function ContentRow(props: ContentRowProps): import("react/jsx-runtime").JSX.Element;
