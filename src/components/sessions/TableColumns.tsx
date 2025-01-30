import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { GridColDef, GridCellParams } from '@mui/x-data-grid-pro';
import Button from '@mui/material/Button';
import ReactCountryFlag from 'react-country-flag';

import { msToHMS, bytesToKMG } from '@/utils/formater';

export const columns: GridColDef[] = [
    { field: 'id' },
    { field: 'proto', headerName: 'Protocol', width: 50 },
    { field: 'name', headerName: 'Stream', width: 250 },
    {
        field: 'country',
        headerName: 'Country',
        width: 50,
        renderCell: renderCountryFlags,
    },
    {
        field: 'checkip',
        sortable: false,
        headerName: 'IPinfo',
        width: 90,
        valueGetter: (value, row) => {
            return row.ip;
        },
        renderCell: renderCheckIP,
    },
    { field: 'ip', headerName: 'IP Address', width: 140 },
    {
        field: 'bytes',
        headerName: 'Data Sent',
        width: 140,
        valueFormatter: bytesToKMG,
    },
    {
        field: 'opened_at',
        headerName: 'Duration',
        width: 80,
        valueFormatter: (value) => {
            const curTime = new Date().getTime();
            const deltaTime = curTime - value;
            return msToHMS(deltaTime);
        },
    },
    {
        field: 'started_at',
        headerName: 'Status',
        width: 120,
        renderCell: renderStatus,
    },
    { field: 'mac_address', headerName: 'MAC Address', width: 160 },
    { field: 'user_agent', headerName: 'User Agent', flex: 1 },
    { field: 'query_string', headerName: 'Query String', flex: 1 },
];

function renderStatus(params: GridCellParams) {
    if (params.value) {
        return <Chip sx={{ borderRadius: 1 }} label='Now Playing ' size='small' color='success' />;
    } else {
        return <Chip sx={{ borderRadius: 1 }} label='Requested' size='small' color='warning' />;
    }
}

function renderCheckIP(params: GridCellParams) {
    return (
        <Button
            sx={{ fontSize: 12, width: 10 }}
            onClick={(e) => {
                e.stopPropagation();
                window.open(`https://whatismyipaddress.com/ip/${params.value}`, '_blank');
            }}
            size='small'
            color='success'
        >
            Check IP
        </Button>
    );
}

function renderCountryFlags(params: GridCellParams) {
    return (
        <Box>
            <ReactCountryFlag
                countryCode={params.value as string}
                svg
                title={params.value as string}
            />{' '}
            {params.value as string}
        </Box>
    );
}
