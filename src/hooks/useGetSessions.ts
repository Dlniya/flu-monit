import { useQuery } from '@tanstack/react-query';
import OpenAPIClientAxios from 'openapi-client-axios';
import { parseMACfromQuery } from '@/utils/formater';

export default function useGetSessions(baseURL: string, auth: string) {
    const api = new OpenAPIClientAxios({
        definition: `${baseURL}/streamer/api/v3/schema`,
        axiosConfigDefaults: {
            baseURL: `${baseURL}/streamer/api/v3`,
            headers: {
                Authorization: `Basic ${auth}`,
            },
        },
    });

    const { isLoading, error, data } = useQuery({
        queryKey: ['sessions'],
        queryFn: () => {
            return api
                .init()
                .then((client) => client.sessions_list({ limit: 50000, type: 'play' }))
                .then((res) => {
                    const data = res.data;
                    data.sessions = data.sessions.map((session: any) => {
                        session.mac_address = parseMACfromQuery(session.query_string);
                        return session;
                    });
                    return data;
                });
        },

        refetchOnMount: 'always',
        refetchInterval: 3000,
    });

    return { isLoading, error, data };
}
