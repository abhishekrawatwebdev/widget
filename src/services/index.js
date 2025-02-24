import { get } from "../utils/http";

export const fetchConfigByDomain = (domain) => {
  let url = `${process.env.REACT_APP_ZITHARA_SERVER_BASE_URL}/public/help-widget/${domain}?forceFetch=true`;
  
  return get(url);
};
