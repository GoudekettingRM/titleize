declare module 'titleizejs' {
  interface IExceptions {
    keepUpperCaseLetters?: boolean;
    keepUpperCaseWords?: boolean;
    ignoreSymbols?: string;
    isSlug?: boolean | string;
  }

  export function titleize(input: string, exceptions?: IExceptions): string;

  export default titleize;
}
