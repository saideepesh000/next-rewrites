import styles from '../styles.module.css'
import Link from 'next/link'

const Code = (p) => <code className={styles.inlineCode} {...p} />

const Index = () => (
  <div className={styles.container}>
      <nav>
        <ul className={styles.list}>
          <div>Below link rewrites to reactnative.dev/help </div>
          <li>
            <Link href="/help">
            <a target="_blank">/help</a>
          </Link>
          </li>
        </ul>
      </nav>
    </div>
)

export default Index
