import SideAdvertising from './SideAdvertising'

export default function Layout({ children }) {
  return (
    <>
        {/* <NavBar /> */}
        <main>
            <div className={`sideAdRight`}>
                <SideAdvertising side={'right'} />
            </div>
            <div className={`sideAdLeft`}>
                <SideAdvertising side={'left'} />
            </div>
            {children}
        </main>
    </>
  )
}