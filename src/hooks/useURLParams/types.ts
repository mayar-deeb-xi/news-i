export type DefaultQueryParams = Record<string, unknown>;

export type MassUpdateFun<ParamsState = DefaultQueryParams> = (obj: ParamsState) => ParamsState | undefined;

export type useURLParamsProps<ParamsState> = {
    /**
     */
    defaultParams?: ParamsState;
    /**
     * -this key will be used to store params state
     * @default 'qq'
     */
    masterKey?: string;
};