import Link from 'next/link';

const Index = () => (
  <div>
    <p>
      Hello Next!
    </p>
    <Link href='/about'>
      <a style={{ color: 'red' }}>
        About
      </a>
    </Link>
    <Link href='/about'>
      <button style={{ color: 'red' }}>
        About button
      </button>
    </Link>
  </div>
);

export default Index;
