export type TagProps = {
    name?: string;
};
export type ContentCloudProps = {
    title?: string;
    subTitle?: string;
    tags?: Array<TagProps>;
};
export declare const defaultProps: ContentCloudProps;
export default function ContentCloud(props: ContentCloudProps): import("react/jsx-runtime").JSX.Element;
