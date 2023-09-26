export declare const TesseractScreenReaderPreset: {
    readonly default: {
        readonly base: () => string;
    };
    readonly disabled: {
        readonly base: () => string;
    };
    readonly custom: {
        readonly base: (overrides: any) => string;
    };
};
export declare const TesseractAccessibilityPreset: {
    readonly screenReader: {
        readonly default: {
            readonly base: () => string;
        };
        readonly disabled: {
            readonly base: () => string;
        };
        readonly custom: {
            readonly base: (overrides: any) => string;
        };
    };
};
