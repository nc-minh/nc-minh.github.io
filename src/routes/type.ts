export interface PublicRoutes {
  path: string;
  component: () => JSX.Element;
  layout?: (props: never) => JSX.Element;
}
