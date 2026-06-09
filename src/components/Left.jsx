const Left = () => {
  const navItems = [
    {
      label: "Home",
      active: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>
      ),
    },
    {
      label: "Explore",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: "Notifications",
      badge: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: "Messages",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
          <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </svg>
      ),
    },
    {
      label: "Bookmarks",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: "Lists",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: "Profile",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: "More",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <div className="xl:w-[280px] w-20 h-screen flex flex-col xl:pr-6 items-center xl:items-start border-r border-gray-200/50 dark:border-white/5 sticky top-0">
      {/* Logo */}
      <a
        href="#"
        className="my-4 flex justify-center items-center rounded-full w-12 h-12 hover:bg-accent-blue/10 cursor-pointer transition-all duration-200"
        aria-label="Home"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.374-7.094-6.026 7.094H2.684l8.974-10.206L2.684 2.25h3.308l4.751 6.331 4.751-6.331zm-.827 14.75h1.334L7.083 3.687H5.957l9.728 13.302z"
            fill="#1d9bf0"
          />
        </svg>
      </a>

      {/* Navigation Menu */}
      <nav className="mt-2 space-y-1 w-full xl:pr-4">
        {navItems.map((item, index) => (
          <a
            key={item.label}
            href="#"
            className={`nav-link flex items-center justify-center xl:justify-start py-3 px-3 rounded-full transition-all duration-200 group animate-fade-in-up ${
              item.active
                ? "text-accent-blue font-bold"
                : "text-gray-700 dark:text-gray-200 hover:text-accent-blue dark:hover:text-accent-blue"
            }`}
            style={{ animationDelay: `${index * 50}ms` }}
            aria-label={item.label}
          >
            <span className="relative">
              {item.icon}
              {item.badge && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-accent-blue text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </span>
            <span className="hidden xl:block text-lg pl-4 tracking-tight">
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      {/* Tweet Button */}
      <button
        className="btn-gradient flex items-center justify-center mt-6 text-white py-3.5 px-4 rounded-full w-12 h-12 xl:w-full xl:h-auto font-bold xl:mx-0 animate-fade-in-up"
        style={{ animationDelay: "400ms" }}
        aria-label="Create post"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 xl:hidden"
        >
          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
          <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
        </svg>
        <span className="hidden xl:block font-bold text-[15px] tracking-wide">
          Post
        </span>
      </button>

      {/* Profile */}
      <div
        className="mt-auto mb-4 w-full animate-fade-in"
        style={{ animationDelay: "500ms" }}
      >
        <div className="flex items-center justify-between xl:p-3 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors duration-200 cursor-pointer group">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-accent-blue via-accent-purple to-accent-pink flex items-center justify-center ring-2 ring-white/10 shadow-lg">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <div className="hidden xl:block">
              <p className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
                My Name
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                @myhandle
              </p>
            </div>
          </div>
          <div className="hidden xl:flex items-center text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path d="M3 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM8.5 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM15.5 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
