import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            SwimFinder
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600">
                  홈
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600">
                  소개
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
} 