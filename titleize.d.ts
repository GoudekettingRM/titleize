interface IExceptions {
  keepUpperCaseLetters?: boolean;
  keepUpperCaseWords?: boolean;
  ignoreSymbols?: string;
  isSlug?: boolean;
}

export declare function titleize(
  input: string,
  exceptions?: IExceptions,
): string;
