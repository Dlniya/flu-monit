'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useState } from 'react';

type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function QueryProvider({ children }: Props) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        retry: 3,
                        retryDelay: 1000,
                        staleTime: 0,
                        refetchOnWindowFocus: false,
                        refetchOnMount: true,
                    },
                },
            })
    );

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
