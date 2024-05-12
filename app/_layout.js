import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const HomeLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Slot></Slot>
    </QueryClientProvider>
  );
};

export default HomeLayout;
