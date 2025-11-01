import { router } from "expo-router";
import { useEffect } from "react";


export default function Dashboard() {

  useEffect(() => {
    router.push("/splash"); // wechselt auf Splash
  }, []);
  return null;

  
}
