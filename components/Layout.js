import SideAdvertising from './SideAdvertising'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export default function Layout({ children }) {
  return (
    <>
      <main>
        <BrowserView>
          <div className={`sideAdRight`}>
            <SideAdvertising side={'right'} />
          </div>
          <div className={`sideAdLeft`}>
            <SideAdvertising side={'left'} />
          </div>
        </BrowserView>
        {children}
      </main>
    </>
  )
}