import { FluServers } from '@/data/flu-servers';
import Sessions from '@/components/sessions/Sessions';
import QueryProvider from '@/components/QueryProvider';

type Props = {
    params: Promise<{ flussonic_id: string }>;
};

export default async function FluSessionsPage({ params }: Props) {
    const flussonic_id = (await params).flussonic_id;
    const server = FluServers.find((server) => server.id === flussonic_id);

    if (!server) {
        return <div>Server not found</div>;
    }

    return (
        <div className='flex h-screen w-full flex-col'>
            <div className='flex h-[200px] items-center justify-start p-5 text-slate-700'>
                <div className='w-full rounded-md pl-5'>
                    <h1 className='text-xl font-bold'>
                        <span> SERVER : </span>
                        <span className='text-transform: uppercase; text-slate-400'>
                            {' '}
                            {server.name}
                        </span>
                    </h1>
                </div>
            </div>
            <div className='h-full w-full flex-1'>
                <QueryProvider>
                    <Sessions server={server} key={server.id} />
                </QueryProvider>
            </div>
        </div>
    );
}
