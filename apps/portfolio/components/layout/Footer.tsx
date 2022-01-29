import { GitHub, Instagram } from "@tek/icons";

const navigation = {
  main: [
    { name: "Home", href: "#" },
    { name: "About", href: "#About" },
  ],
  social: [
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "GitHub",
      href: "#",
      icon: GitHub,
    },
  ],
};

const Footer = ({}) => {
  return (
    <footer className="dark:dark">
      <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <nav
          className="flex flex-wrap justify-center -mx-5 -my-2"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base dark:text-gray-200 hover:dark:text-gray-400"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-6 h-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-base text-center text-gray-400">
          &copy; {new Date().getFullYear()} Thomas E. Knickman. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
