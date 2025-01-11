import { useEffect } from "react";
import { omit } from "lodash-es";
import { useSearchParams } from "react-router-dom";

export const DEFAULT_MASTER_KEY = "qq";

export const stringify = (params: any): string => {
  return JSON.stringify(params);
};

export const parse = (str: string) => {
  return JSON.parse(str);
};


export const _objectToParamString = (masterKey: string) => (params: any): string => {
  return `?${masterKey}=${stringify(params)}`;
};


export type useURLParamsProps = {
  /**
   */
  defaultParams?: Record<string, any>;
  /**
   * -this key will be used to store params state
   * @default 'qq'
   */
  masterKey?: string;
};

/**
 * @description this hook is used get, set, delete queries
 * @note this hook solve nested params problem
 */
export const useURLParams = (options?: useURLParamsProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const masterKey = options?.masterKey ?? DEFAULT_MASTER_KEY;


  const setURLParams = (params: any) => {
    const currentSearchParams = Object.fromEntries(searchParams as any) ?? {};
    setSearchParams(
      { ...currentSearchParams, [masterKey]: stringify(params) },
      { replace: true }
    );
  };

  const getURLParams = () => {
    try {
      const prms = parse(
        Object.fromEntries(searchParams as any)?.[masterKey] ?? "{}"
      );
      return prms;
    } catch (error) {
      return {};
    }
  };

  const deleteByKeys = (keys: string[]) => {
    const newQ = omit(getURLParams(), keys);
    setURLParams(newQ);
  };
  const massUpdate = (fun: (obj: Record<string, any>) => any) => {
    const newQ = fun(getURLParams());
    setURLParams(newQ);
  };

  const objectToParamString = _objectToParamString(masterKey);
  useEffect(() => {
    if (
      Object.keys(options?.defaultParams ?? {}).length > 0 &&
      Object.keys(getURLParams()).length === 0
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
