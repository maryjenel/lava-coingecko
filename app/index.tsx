import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigation from "./navigation/MainNavigation";

export default function HomeScreen() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <MainNavigation />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
