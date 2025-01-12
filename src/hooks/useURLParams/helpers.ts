import { DefaultQueryParams } from "./types";


export const stringify = <ParamsState = DefaultQueryParams>(params: ParamsState): string => {
    return JSON.stringify(params);
};

export const parse = <ParamsState = DefaultQueryParams>(str: string): ParamsState => {
    return JSON.parse(str);
};

export const _objectToParamString = (masterKey: string) => <ParamsState = DefaultQueryParams>(params: ParamsState): string => {
    return `?${masterKey}=${stringify(params)}`;
};

export const DEFAULT_MASTER_KEY = "qq";

