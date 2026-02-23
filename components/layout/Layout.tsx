import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen bg-background">
            <div className="flex flex-col min-h-screen">
                <Header />

                <section className="grow">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        {children}
                    </div>
                </section>

                <Footer />
            </div>
        </main>
    );
}

export default Layout;