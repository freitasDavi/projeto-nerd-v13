import { NavItem } from "@/components/NavItem"


export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt">
            <head />
            <body>
                <main className="flex">
                    <div className="w-16 h-screen flex flex-col justify-between border-r bg-gray-300">
                        <div id="user-card" className="inline-flex h-16 w-16 items-center justify-center">
                            <span className="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                                D
                            </span>
                        </div>
                        <div className="border-t border-gray-100">
                            <nav className="flex flex-col p-2">
                                <div className="py-4">
                                    <a href="#" className="relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 opacity-75"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>

                                        <span
                                            className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                        >
                                            General
                                        </span>
                                    </a>
                                </div>
                                <ul className="space-y-1 border-t border-gray-100 pt-4">
                                    <NavItem
                                        name="Home"
                                        path="/"
                                    />
                                    <NavItem
                                        name="Perfil"
                                        path="/perfil"
                                    />
                                    <NavItem
                                        name="Anúncios"
                                        path="/annouces"
                                    />
                                    <NavItem
                                        name="Sei la"
                                        path="/"
                                    />
                                </ul>
                            </nav>
                        </div>
                        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 p-2">
                            <form action="/logout">
                                <button
                                    type="submit"
                                    className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 opacity-75"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                        />
                                    </svg>

                                    <span
                                        className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                    >
                                        Logout
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <section className="flex-1">
                        {children}
                    </section>
                </main>
            </body>
        </html>
    )
}