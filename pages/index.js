import styles from '../styles.module.css'
import Link from 'next/link'

const Code = (p) => <code className={styles.inlineCode} {...p} />

const Index = () => (
  <div className={styles.container}>
      <nav>
        <ul className={styles.list}>
          <div>Below link rewrites to zhiffy.com/explore/books</div>
          <li>
            <Link href="/explore/books">
            <a target="_blank">/explore/books</a>
          </Link>
          </li>
        </ul>
      </nav>
    </div>
)

export default Index
