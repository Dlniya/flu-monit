'use client';
import NextLink from 'next/link';
import { FluServers } from '@/data/flu-servers';
import { usePathname } from 'next/navigation';

export default function Menu() {
    const currentPath = usePathname();

    const LinkBaseStyle = `
        w-full block p-2 text-sm m-1
        transition-colors duration-200
        rounded-md
        
    `;
    const LinkStyle = LinkBaseStyle + ` text-slate-400 hover:text-slate-200 hover:bg-slate-800`;
    const ActiveLinkStyle = LinkBaseStyle + `  text-white hover:text-white bg-slate-700`;

    return (
        <div className='h-full w-64 bg-slate-900 p-5 text-white'>
            <div className='mb-5 text-lg font-bold'>Servers</div>
            <ul>
                {FluServers.map((server) => (
                    <li key={server.id}>
                        <NextLink
                            className={
                                currentPath === `/sessions/${server.id}`
                                    ? ActiveLinkStyle
                                    : LinkStyle
                            }
                            href={`/sessions/${server.id}`}
                        >
                            {server.name}
                        </NextLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}
