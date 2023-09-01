export declare function CalloutTemplate({ item }: any): import("react/jsx-runtime").JSX.Element;
export declare function ContactTemplate({ item }: any): import("react/jsx-runtime").JSX.Element;
export declare function ImageTemplate({ item }: any): import("react/jsx-runtime").JSX.Element;
export declare function DataTemplate({ item }: any): import("react/jsx-runtime").JSX.Element;
export declare function HeaderTemplate({ item }: any): import("react/jsx-runtime").JSX.Element;
export declare function TextTemplate({ item }: any): import("react/jsx-runtime").JSX.Element;
export declare const Templates: {
    image: typeof ImageTemplate;
    text: typeof TextTemplate;
    header: typeof HeaderTemplate;
    callout: typeof CalloutTemplate;
    contact: typeof ContactTemplate;
    data: typeof DataTemplate;
};
