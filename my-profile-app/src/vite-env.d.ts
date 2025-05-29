declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}