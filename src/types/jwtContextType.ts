type TJWTContext = {
  jwtToken: string;
  updateJWTToken: (jwtToken: string) => void;
};

export default TJWTContext;
