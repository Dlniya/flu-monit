import Menu from './menu';

export default function FluSessionsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className='flex h-screen overflow-hidden bg-gray-100'>
            <Menu />
            {children}
        </div>
    );
}
