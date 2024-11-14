import { useState } from 'react';

export default function HomePage() {
  const [activeComponent, setActiveComponent] = useState('home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <HomeContent />;
      case 'about':
        return <AboutContent />;
      case 'services':
        return <ServicesContent />;
      case 'contact':
        return <ContactContent />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4">
          <li className="cursor-pointer" onClick={() => setActiveComponent('home')}>Home</li>
          <li className="cursor-pointer" onClick={() => setActiveComponent('about')}>About</li>
          <li className="cursor-pointer" onClick={() => setActiveComponent('services')}>Services</li>
          <li className="cursor-pointer" onClick={() => setActiveComponent('contact')}>Contact</li>
        </ul>
      </nav>

      <div className="p-4">
        {renderComponent()}
      </div>
    </div>
  );
}

function HomeContent() {
  return <div>Welcome to the Home Page!</div>;
}

function AboutContent() {
  return <div>About Us</div>;
}

function ServicesContent() {
  return <div>Our Services</div>;
}

function ContactContent() {
  return <div>Contact Us</div>;
}
