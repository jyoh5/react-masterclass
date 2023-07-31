import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import { RecoilRoot } from 'recoil';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 5 mins
      staleTime: 1000 * 60 * 5,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <RecoilRoot>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);

