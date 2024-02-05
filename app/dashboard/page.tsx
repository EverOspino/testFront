import SaleDetails from "../components/SaleDetails";
import InfoGeneral from "../components/InfoGeneral";
import SaveSale from "../components/SaveSale";

export default function Dashboard() {

    return (
        <>
            <main className="dashboard h-screen w-full pt-10 bg-silver overflow-y-auto pb-10">
                <header className="flex mx-auto xl:max-w-7xl">
                    <h1 className="">hola</h1>
                    <div className="w-full">
                        <h1 className="text-5xl font-['FontExtraBold']">New Sale</h1>
                        <span className="block h-1 rounded-full bg-gray-300 mt-3"></span>
                    </div>
                </header>

                <InfoGeneral />

                <section className="mx-auto xl:max-w-7xl mt-14">
                    <h1 className="text-3xl font-['FontBold']">Details</h1>
                    <article className="flex gap-12 mt-3">
                        <div className="flex flex-col w-full">
                            <span>Name</span>
                        </div>
                        <div className="flex flex-col w-1/4">
                            <span>Quantity</span>
                        </div>
                        <div className="flex flex-col w-1/4">
                            <span>Price</span>
                        </div>
                        <div className="flex flex-col w-1/4">
                            <span>Subtotal</span>
                        </div>
                        <div className="flex flex-col w-24">
                            <span></span>
                        </div>
                    </article>

                    <SaleDetails />
                    
                    <SaveSale />
                </section>
            </main>
        </>
    );
}