import { Providers } from './providers';
import { Nav } from './components/Nav';
import styles from './styles/layout.module.css';
import './styles/global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <Providers>
        <div className={styles.layoutWrapper}>
            <Nav />
            <main className={styles.mainContent}>
              {children}
            </main>
            <footer className={styles.footer}>
              <p>User Classifier by Tashan Maniyalaghan, 2024</p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}