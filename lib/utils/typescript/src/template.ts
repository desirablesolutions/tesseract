function sxToProps(sx: SxProps): string {
  return Object.entries(sx).reduce((classes, [key, value]) => {
    if (styles[key] && styles[key][value]) {
      return `${classes} ${styles[key][value]}`;
    } else {
      return classes;
    }
  }, "");
}

const templates: TemplateRegistry = {};

function $template<T extends BaseProps>(params: TemplateParams<T>): Template<T> {
  const { sx, render } = params;

  if (!render) {
    throw new Error("Render function is required for template");
  }

  return function (props: T): TemplateParams<T> {
    const classes = sx ? sxToProps({ ...sx, ...props.sx }) : "";

    return {
      ...params,
      sx: { ...sx, ...props.sx },
      render: (props: T) => render({ ...props, class: classes }),
    };
  };
}