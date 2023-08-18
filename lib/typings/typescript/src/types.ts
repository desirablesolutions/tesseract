export type HyperdimensionalComponent<ExtensionTypes> =
  | (ExtensionTypes & { className?: string; class?: string; key?: string | number })
  | {
      [key: string | symbol]: HyperdimensionalComponent<
        ExtensionTypes & {
          className?: string;
          class?: string;
          key?: string | number;
        }
      >;
    };

export type ImageType<ExtensionTypes = unknown> = HyperdimensionalComponent<{
  src: string;
  alt: string;
  height?: number | string,
  width?: number | string,
  loading?: ('lazy' | 'eager');
} & ExtensionTypes>;


export type HeroType = HyperdimensionalComponent<{
  title?: string,
  subTitle?: string,
  description?: string  
} | {
    title?: string,
    subTitle?: string,
    description?: string  
  }>


  export type FaviconType<ExtensionTypes = unknown> = HyperdimensionalComponent<{
    image: ImageType,
    url: string
  }>


  export type NavBarType = HyperdimensionalComponent<{
    favicon: FaviconType,
    links: LinkType[],
    burger: boolean
  }>


export type LinkType<ExtensionTypes = unknown> = HyperdimensionalComponent<{
  url: string,
  name: string
} | {
  label: string,
  url: string
} & ExtensionTypes>
  
