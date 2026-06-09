import { useState } from "react";

const trendingData = [
  { category: "Technology · Trending", title: "#ReactJS", posts: "125K posts" },
  { category: "Programming · Trending", title: "#JavaScript", posts: "89.2K posts" },
  { category: "Design · Trending", title: "#UIDesign", posts: "45.7K posts" },
];

const followData = [
  {
    name: "Dan Abramov",
    handle: "@dan_abramov",
    initials: "DA",
    gradient: "from-violet-500 to-fuchsia-500",
    verified: true,
  },
  {
    name: "Sarah Drasner",
    handle: "@sarah_edo",
    initials: "SD",
    gradient: "from-cyan-500 to-blue-500",
    verified: true,
  },
  {
    name: "Kent C. Dodds",
    handle: "@kentcdodds",
    initials: "KC",
    gradient: "from-emerald-500 to-teal-500",
    verified: false,
  },
];

const Right = () => {
  const [followedUsers, setFollowedUsers] = useState(new Set());

  const toggleFollow = (handle) => {
    setFollowedUsers((prev) => {
      const next = new Set(prev);
      if (next.has(handle)) {
        next.delete(handle);
      } else {
        next.add(handle);
      }
      return next;
    });
  };

  return (
    <div className="hidden w-[350px] xl:block h-screen overflow-auto pl-6 pr-2 py-2">
      {/* Search */}
      <div className="sticky top-2 z-10 mb-4 animate-fade-in">
        <div className="relative group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute text-gray-400 dark:text-gray-500 left-4 top-1/2 -translate-y-1/2 pointer-events-none size-5 group-focus-within:text-accent-blue transition-colors duration-200"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-100 dark:bg-white/5 border border-transparent focus:border-accent-blue/50 text-gray-900 dark:text-gray-100 focus:outline-none font-normal h-11 pl-12 pr-4 text-sm rounded-full transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
          />
        </div>
      </div>

      {/* Trending */}
      <div
        className="glass-card rounded-2xl mb-4 overflow-hidden animate-fade-in-up"
        style={{ animationDelay: "100ms" }}
      >
        <h3 className="text-lg font-extrabold text-gray-900 dark:text-white px-4 pt-4 pb-3">
          What's happening
        </h3>
        {trendingData.map((item, index) => (
          <a
            key={item.title}
            href="#"
            className="block px-4 py-3 hover:bg-gray-100/50 dark:hover:bg-white/5 transition-colors duration-200 group"
            style={{ animationDelay: `${150 + index * 50}ms` }}
          >
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">
              {item.category}
            </p>
            <h4 className="font-bold text-[15px] text-gray-900 dark:text-white group-hover:text-accent-blue transition-colors duration-200">
              {item.title}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              {item.posts}
            </p>
          </a>
        ))}
        <a
          href="#"
          className="block px-4 py-3 text-accent-blue text-sm hover:bg-gray-100/50 dark:hover:bg-white/5 transition-colors duration-200"
        >
          Show more
        </a>
      </div>

      {/* Who to follow */}
      <div
        className="glass-card rounded-2xl mb-4 overflow-hidden animate-fade-in-up"
        style={{ animationDelay: "200ms" }}
      >
        <h3 className="text-lg font-extrabold text-gray-900 dark:text-white px-4 pt-4 pb-3">
          Who to follow
        </h3>
        {followData.map((user, index) => {
          const isFollowed = followedUsers.has(user.handle);
          return (
            <div
              key={user.handle}
              className="px-4 py-3 flex justify-between items-center hover:bg-gray-100/50 dark:hover:bg-white/5 transition-colors duration-200 animate-fade-in-up"
              style={{ animationDelay: `${250 + index * 60}ms` }}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-10 h-10 rounded-full bg-linear-to-br ${user.gradient} flex items-center justify-center shrink-0 ring-1 ring-white/10 shadow-md`}
                >
                  <span className="text-white font-bold text-xs">
                    {user.initials}
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white truncate">
                      {user.name}
                    </h4>
                    {user.verified && (
                      <svg className="w-4 h-4 text-accent-blue shrink-0" viewBox="0 0 22 22" fill="currentColor">
                        <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.69-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.636.433 1.221.878 1.69.47.446 1.055.752 1.69.883.635.13 1.294.083 1.902-.143.272.587.702 1.087 1.24 1.44s1.167.551 1.813.568c.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.226 1.263.274 1.898.143.636-.13 1.22-.436 1.69-.882.445-.47.749-1.055.878-1.691.13-.634.08-1.29-.144-1.898.587-.272 1.087-.702 1.443-1.241.355-.54.555-1.169.574-1.818ZM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
                      </svg>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {user.handle}
                  </p>
                </div>
              </div>
              <button
                onClick={() => toggleFollow(user.handle)}
                className={`follow-btn text-xs font-bold px-4 py-1.5 rounded-full border transition-all duration-300 shrink-0 ${
                  isFollowed
                    ? "bg-transparent border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-red-500/50 hover:text-red-500"
                    : "border-accent-blue/30 text-accent-blue hover:bg-accent-blue hover:text-white hover:border-accent-blue"
                }`}
              >
                <span>{isFollowed ? "Following" : "Follow"}</span>
              </button>
            </div>
          );
        })}
        <a
          href="#"
          className="block px-4 py-3 text-accent-blue text-sm hover:bg-gray-100/50 dark:hover:bg-white/5 transition-colors duration-200"
        >
          Show more
        </a>
      </div>

      {/* Skeleton loader */}
      <div
        className="glass-card rounded-2xl p-4 mb-4 animate-fade-in-up"
        style={{ animationDelay: "350ms" }}
      >
        <div className="flex gap-3">
          <div className="rounded-full shimmer-bg h-10 w-10 shrink-0" />
          <div className="flex-1 space-y-2.5 py-1">
            <div className="h-3 shimmer-bg rounded-full w-4/5" />
            <div className="h-3 shimmer-bg rounded-full w-3/5" />
            <div className="h-3 shimmer-bg rounded-full w-2/3" />
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div
        className="px-4 pb-8 animate-fade-in"
        style={{ animationDelay: "400ms" }}
      >
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-400 dark:text-gray-500">
          {[
            "Terms of Service",
            "Privacy Policy",
            "Cookie Policy",
            "Accessibility",
            "Ads info",
            "More",
          ].map((link) => (
            <a
              key={link}
              href="#"
              className="hover:underline hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
          © 2026 X Corp.
        </p>
      </div>
    </div>
  );
};

export default Right;
