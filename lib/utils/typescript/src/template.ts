import type { ViewCreator, ComponentProps, TemplateName, TemplateRegistry, TemplateProps} from './types';

export const templates: TemplateRegistry = {};

export default function $template<Props>(params: any) {
    templates[params.name] = (props: Props) => `${params.template(props)}`;
}

