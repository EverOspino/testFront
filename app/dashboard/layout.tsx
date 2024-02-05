import "../globals.css";
import SideBar from "../components/sidebar/SideBar";

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <><main className='flex'>
            <SideBar />
            {children}
        </main>
      </>
    )
  }