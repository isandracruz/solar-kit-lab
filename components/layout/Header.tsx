import { Sun } from "lucide-react"

function Header() {
    return (
        <header className="bg-primary-foreground border-b border-slate-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center size-10 rounded-xl bg-accent/20">
                        <Sun className="size-5 text-accent" strokeWidth={2.5} />
                    </div>
                    <h1 className="text-primary text-2xl font-bold tracking-tight md:text-3xl">
                        Solar Kit Lab
                    </h1>
                </div>
            </div>
        </header>
    );
}

export default Header;