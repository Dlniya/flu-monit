'use client';

import Box from '@mui/material/Box';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { columns } from '@/components/sessions/TableColumns';
import useGetSessions from '@/hooks/useGetSessions';

type Props = {
    server: {
        baseUrl: string;
        auth: string;
    };
};

export default function Sessions(props: Props) {
    const { isLoading, error, data } = useGetSessions(props.server.baseUrl, props.server.auth);
    if (isLoading) return <Box>Loading...</Box>;
    if (error) return <Box>Error: {error.message}</Box>;

    return (
        <Box sx={{ height: 1220, width: '100%', bgcolor: 'white' }}>
            <DataGridPro
                columns={columns}
                loading={isLoading}
                rows={data.sessions}
                rowHeight={32}
                disableRowSelectionOnClick
                initialState={{
                    columns: {
                        columnVisibilityModel: {
                            // Hide columns status and traderName, the other columns will remain visible
                            id: false,
                            brokerId: false,
                        },
                    },
                }}
            />
        </Box>
    );
}
