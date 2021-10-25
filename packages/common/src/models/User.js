import { CATTLEVIEW_APP_ID } from "../constants/GenericConstants";

const Authenticate = (data) => ({
  username: data?.username || "",
  password: data?.password || "",
  appId: CATTLEVIEW_APP_ID,
});

export { 
  Authenticate
};
