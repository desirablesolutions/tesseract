import React, { ReactElement, useEffect, useState } from 'react';

import type { JSXComponentType } from "blakprint/dist/typings"

import type { NavBarProps } from "@typings/"

export default function NavBar({ componentName }): JSXComponentType<NavBarProps> {
    const [Component, setComponent] = useState<React.LazyExoticComponent<any> | null>(null);

    useEffect(() => {

        const importComponent = async () => {
            try {
                const { default: ImportedComponent } = await import(`./presets/Larry.tsx`);
                setComponent(React.lazy(() => Promise.resolve(ImportedComponent)));
            } catch (error) {
                console.error(`Failed to load component: ${componentName}`, error);
            }
        };
        importComponent();
    }, [componentName]);

    if (!Component) {
        return null;
    }

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Component />
        </React.Suspense>
    );
};
