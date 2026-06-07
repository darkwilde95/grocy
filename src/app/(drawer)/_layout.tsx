import DrawerNavigation from "@/layouts/DrawerNavigation";
import { ThemeProvider } from "@/styles/ThemeContext";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    "HankenGrotesk-Bold": require("../../assets/fonts/Hanken_Grotesk/static/HankenGrotesk-Bold.ttf"),
    "HankenGrotesk-SemiBold": require("../../assets/fonts/Hanken_Grotesk/static/HankenGrotesk-SemiBold.ttf"),
    "HankenGrotesk-Medium": require("../../assets/fonts/Hanken_Grotesk/static/HankenGrotesk-Medium.ttf"),
    "HankenGrotesk-Regular": require("../../assets/fonts/Hanken_Grotesk/static/HankenGrotesk-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider>
      <DrawerNavigation />
    </ThemeProvider>
  );
};

export default RootLayout;
