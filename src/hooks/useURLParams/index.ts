import { useEffect } from "react";
import { omit } from "lodash-es";
import { useSearchParams } from "react-router-dom";
import { MassUpdateFun, useURLParamsProps } from "./types";
import { DEFAULT_MASTER_KEY, _objectToParamString, parse, stringify } from "./helpers";


/**
 * @description this hook is used get, set, delete queries
 * @note this hook solve nested params problem
 */
export const useURLParams = <ParamsState extends Record<string, unknown> | undefined>(options?: useURLParamsProps<ParamsState>) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const masterKey = options?.masterKey ?? DEFAULT_MASTER_KEY;


  const setURLParams = (params?: ParamsState) => {
    const currentSearchParams = Object.fromEntries(searchParams as any) ?? {};
    setSearchParams(
      { ...currentSearchParams, [masterKey]: stringify(params) },
      { replace: true }
    );
  };

  const getURLParamsByKey = (key: string) => () => {
    try {
      const prms = parse(
        Object.fromEntries(searchParams as any)?.[key] ?? "{}"
      );
      return prms;
    } catch {
      return {};
    }
  };

  const getURLParams = getURLParamsByKey(masterKey) as () => ParamsState;

  const deleteByKeys = (keys: string[]) => {
    const newQ = omit(getURLParams(), keys);
    setURLParams(newQ as ParamsState);
  };
  const massUpdate = (fun: MassUpdateFun<ParamsState>) => {
    const newQ = fun(getURLParams());
    setURLParams(newQ);
  };

  const objectToParamString = _objectToParamString(masterKey);
  useEffect(() => {
    if (
      Object.keys(options?.defaultParams ?? {}).length > 0 &&
      Object.keys(getURLParams() ?? {}).length === 0
    ) {
      massUpdate((_) => options?.defaultParams);
    }
  }, []);

  return {
    setURLParams,
    getURLParams,
    paramsState: getURLParams(),
    deleteByKeys,
    objectToParamString,
    massUpdate,
  };
};
