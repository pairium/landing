import * as React from "react";

type DivProps = React.ComponentPropsWithoutRef<"div"> & Record<string, any>;
type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export const Root: React.FC<DivProps> = ({ children, ...props }) => <div {...props}>{children}</div>;

export const Trigger = React.forwardRef<HTMLButtonElement, ButtonProps>(function Trigger(
  { children, type = "button", ...props },
  ref,
) {
  return (
    <button ref={ref} type={type} {...props}>
      {children}
    </button>
  );
});

export const Group: React.FC<DivProps> = ({ children, ...props }) => <div {...props}>{children}</div>;

export const Portal: React.FC<{ children?: React.ReactNode }> = ({ children }) => <>{children}</>;

export const Content = React.forwardRef<HTMLDivElement, DivProps>(function Content({ children, ...props }, ref) {
  return (
    <div ref={ref} role="menu" {...props}>
      {children}
    </div>
  );
});

export const Item = React.forwardRef<HTMLDivElement, DivProps>(function Item({ children, tabIndex = 0, ...props }, ref) {
  return (
    <div ref={ref} role="menuitem" tabIndex={tabIndex} {...props}>
      {children}
    </div>
  );
});

