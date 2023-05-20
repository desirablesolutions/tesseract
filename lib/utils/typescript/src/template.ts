import type { TemplateRegistry, TemplateTypeParams } from './types';

export let templates: TemplateRegistry = {};

export default function $template<Props>(params: TemplateTypeParams) {
    const { bg, fg, text } = params.sx
}

