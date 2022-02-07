export function tokenVerifyLocalStorage(navigate, setToken){
  const tokenVerify = localStorage.getItem("MyWallet_token");
    if(tokenVerify !== "undefined"){
      setToken(tokenVerify);
      navigate("/home");
    }
}
export function tokenVerify(navigate, token){
  if(!token){
    navigate("/");
  }
}
