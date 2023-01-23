type Rainbow =
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "indigo"
    | "violet";

type TextProps<C extends React.ElementType> = {
    as?: C;
    color?: Rainbow | "black";
    width: any;
    variant: any;
};

type Props<C extends React.ElementType> = React.PropsWithChildren<
    TextProps<C>
> &
    Omit<React.ComponentPropsWithoutRef<C>, keyof TextProps<C>>;


export const Border = <C extends React.ElementType = "span">({
    as,
    children,
    color, 
    width,
    variant,
    ...restProps
}: Props<C>) => {
    const Component = as || "span";

    const style = color ? { style: { border: width + 'px' + ' ' + variant + ' ' + color } } : {};

    return <Component { ...restProps} {...style}>{children}</Component>
}