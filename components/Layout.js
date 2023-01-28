import SideAdvertising from './SideAdvertising'
import styles from '../styles/Home.module.css';


export default function Layout({ children }) {
  return (
    <>
      <main>
        <div className={styles.advertising}>
          <div className={`sideAdRight`}>
            <SideAdvertising side={'right'} />
          </div>
          <div className={`sideAdLeft`}>
            <SideAdvertising side={'left'} />
          </div>
        </div>
        {children}
      </main>
    </>
  )
}