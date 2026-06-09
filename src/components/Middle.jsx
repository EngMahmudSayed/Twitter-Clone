const Middle = ({ setTheme }) => {
  function DarkModeHandler() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  const actionIcons = [
    {
      label: "Image",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
          <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: "GIF",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
          <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: "Poll",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
          <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
        </svg>
      ),
    },
    {
      label: "Emoji",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: "Schedule",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
          <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3a.75.75 0 0 1 1.5 0v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  const postInteractions = [
    {
      label: "Reply",
      count: "12.3k",
      hoverColor: "hover:text-accent-blue",
      hoverBg: "hover:bg-accent-blue/10",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
          <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: "Repost",
      count: "14k",
      hoverColor: "hover:text-green-500",
      hoverBg: "hover:bg-green-500/10",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
          <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: "Like",
      count: "89k",
      hoverColor: "hover:text-accent-pink",
      hoverBg: "hover:bg-accent-pink/10",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
      ),
    },
    {
      label: "Views",
      count: "1.2M",
      hoverColor: "hover:text-accent-blue",
      hoverBg: "hover:bg-accent-blue/10",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: "Share",
      count: "",
      hoverColor: "hover:text-accent-blue",
      hoverBg: "hover:bg-accent-blue/10",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
          <path fillRule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex-1 h-screen overflow-auto border-r border-gray-200/50 dark:border-white/5">
      {/* Header */}
      <div className="px-4 py-3 flex justify-between items-center sticky top-0 z-10 bg-white/80 dark:bg-dim-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/5">
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
            Home
          </h2>
        </div>
        <button
          onClick={DarkModeHandler}
          className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-accent-blue/10 transition-colors duration-200"
          aria-label="Toggle theme"
        >
          <svg className="w-5 h-5 text-accent-blue" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.374-7.094-6.026 7.094H2.684l8.974-10.206L2.684 2.25h3.308l4.751 6.331 4.751-6.331zm-.827 14.75h1.334L7.083 3.687H5.957l9.728 13.302z"
            />
          </svg>
        </button>
      </div>

      {/* Compose Area */}
      <div className="border-b border-gray-200/50 dark:border-white/5 px-4 py-4 animate-fade-in">
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 rounded-full bg-linear-to-br from-accent-blue via-accent-purple to-accent-pink shrink-0 flex items-center justify-center ring-2 ring-white/10 shadow-lg">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <div className="flex-1 min-w-0">
            <input
              type="text"
              placeholder="What is happening?!"
              className="w-full border-none focus:outline-none bg-transparent text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-lg py-2"
            />
            <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100 dark:border-white/5">
              <div className="flex gap-1">
                {actionIcons.map((action) => (
                  <button
                    key={action.label}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-accent-blue hover:bg-accent-blue/10 transition-all duration-200"
                    aria-label={action.label}
                  >
                    {action.icon}
                  </button>
                ))}
              </div>
              <button className="btn-gradient text-white text-sm px-5 py-2 rounded-full font-bold">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Show Tweets Banner */}
      <div className="px-4 py-3 border-b border-gray-200/50 dark:border-white/5 text-center cursor-pointer hover:bg-accent-blue/5 transition-colors duration-200">
        <span className="text-accent-blue text-sm font-medium">
          Show 9 posts
        </span>
      </div>

      {/* Post */}
      <div className="tweet-card border-b border-gray-200/50 dark:border-white/5 animate-fade-in-up cursor-pointer">
        <div className="p-4">
          <div className="flex gap-3">
            {/* Avatar */}
            <div className="shrink-0">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-green-400 to-cyan-500 flex items-center justify-center ring-1 ring-white/10">
                <span className="text-white font-bold text-xs">YN</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {/* Author info */}
              <div className="flex items-center gap-1.5 mb-1">
                <span className="font-bold text-gray-900 dark:text-white text-[15px] truncate">
                  Your Name
                </span>
                <svg className="w-4 h-4 text-accent-blue shrink-0" viewBox="0 0 22 22" fill="currentColor">
                  <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.69-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.636.433 1.221.878 1.69.47.446 1.055.752 1.69.883.635.13 1.294.083 1.902-.143.272.587.702 1.087 1.24 1.44s1.167.551 1.813.568c.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.226 1.263.274 1.898.143.636-.13 1.22-.436 1.69-.882.445-.47.749-1.055.878-1.691.13-.634.08-1.29-.144-1.898.587-.272 1.087-.702 1.443-1.241.355-.54.555-1.169.574-1.818ZM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
                </svg>
                <span className="text-gray-500 dark:text-gray-400 text-sm truncate">
                  @youremail · 2h
                </span>
              </div>

              {/* Text */}
              <p className="text-[15px] leading-relaxed text-gray-800 dark:text-gray-100 mb-3">
                Any fool can write code that a computer can understand. Good
                programmers write code that humans can understand.
                <br /><br />
                Experience is the name everyone gives to their{" "}
                <a href="#" className="text-accent-blue hover:underline">
                  #mistakes
                </a>
                <br /><br />
                Simplicity is the soul of efficiency.
              </p>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden border border-gray-200/50 dark:border-white/10 mb-3">
                <img
                  className="w-full max-h-[400px] object-cover hover:opacity-95 transition-opacity duration-300"
                  src="https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Coding workspace"
                />
              </div>

              {/* Interactions */}
              <div className="flex items-center justify-between -ml-2">
                {postInteractions.map((action) => (
                  <button
                    key={action.label}
                    className={`flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-[13px] ${action.hoverColor} group transition-colors duration-200`}
                    aria-label={action.label}
                  >
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center ${action.hoverBg} transition-colors duration-200`}>
                      {action.icon}
                    </span>
                    {action.count && (
                      <span className="tabular-nums">{action.count}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customize View Section */}
      <div className="border-b border-gray-200/50 dark:border-white/5 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
        <div className="p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-linear-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-accent-blue">
              <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Customize your view
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-xs mx-auto leading-relaxed">
            Manage your font size, color and background. These settings
            affect all accounts on this browser.
          </p>
          <button
            onClick={DarkModeHandler}
            className="btn-gradient inline-flex items-center gap-2 text-white py-3 px-8 rounded-full font-bold text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
            </svg>
            Toggle Dark Mode
          </button>
        </div>
      </div>

      {/* Loading Spinner */}
      <div className="p-8 flex justify-center animate-fade-in">
        <div className="w-8 h-8 rounded-full border-2 border-accent-blue/20 border-t-accent-blue animate-spin" />
      </div>
    </div>
  );
};

export default Middle;
