export type PossibleError = (err: any) => (null | string) | Promise<null | string>;