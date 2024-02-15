import { useDispatch } from "react-redux";
import { setTokens } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
//Change the name after vanta. based on the vanta.d.ts
import VANTA from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import { Fade } from "@mui/material";
import { VANTA_BACKGROUND, VANTA_PRIMARY } from "../../constants/colors";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        VANTA({
          el: vantaRef.current,
          THREE: THREE,
          color: VANTA_PRIMARY,
          backgroundColor: VANTA_BACKGROUND,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const handleLogin = () => {
    console.log("set");
    dispatch(
      setTokens({
        accessToken: "access_token",
        refreshToken: "refresh_token",
        idToken: "id_token",
      })
    );
    navigate("/dashboard");
  };

  useEffect(() => {
    console.log("login screen");
  }, []);
  return (
    <div className="bg-custom-black"> 
    <Fade in={true} timeout={1000}>
      <div
        className="pl-24 pr-24 pt-12 h-screen text-custom-white bg-custom-black"
        ref={vantaRef}
      >
        <h1>Login Screen</h1>
        <button className="p-4 rounded-sm bg-primary" onClick={handleLogin}>
          Set Access Token
        </button>
      </div>
    </Fade>
     </div>

  );
};

export default Login;
