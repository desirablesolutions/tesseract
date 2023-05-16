
import type { ViewCreator, ComponentProps, TemplateName, TemplateRegistry } from './types';

export default function $component<Props>(data: ComponentProps): ViewCreator {
    let template: Template<Props>;
    let target: Target;

    if (typeof data.template === 'string') {
        template = templates[data.template];
        if (!template) {
            throw new Error(`Template "${data.template}" not found.`);
        }
    } else {
        template = data.template;
    }

    if (typeof data.target === 'string') {
        target = targets[data.target];
        if (!target) {
            throw new Error(`Target "${data.target}" not found.`);
        }
    } else {
        target = data.target;
    }

    return function (props: Props) {
        return target.parser([template(props)]);
    }
    
}







