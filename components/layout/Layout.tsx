import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen bg-background">
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="grow">{children}</main>
                <Footer />
            </div>
        </main>
    );
}

export default Layout;