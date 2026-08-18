import React from "react";

const ProfileCard = ({ profile }) => {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-neutral
        shadow-lg
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* =====================================
          Header
      ====================================== */}

      <div className="border-b border-border p-6">

        <div className="flex items-center justify-between gap-4">

          {/* Platform */}
          <div className="flex items-center gap-4">

            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-primary
                text-xl
              "
            >
              {profile.icon}
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                {profile.name}
              </h2>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {profile.type}
              </p>
            </div>

          </div>


          {/* View Profile Button */}
          <a
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              shrink-0
              rounded-lg
              border
              border-border
              px-4
              py-2
              text-sm
              font-medium
              transition
              hover:border-primary
              hover:text-primary
              sm:block
            "
          >
            View Profile →
          </a>

        </div>

      </div>


      {/* =====================================
          Body
      ====================================== */}

      <div className="p-6">

        {/* Username */}
        <h3 className="text-xl font-semibold">
          {profile.username}
        </h3>


        {/* Description */}
        <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
          {profile.description}
        </p>


        {/* =====================================
            Stats
        ====================================== */}

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">

          {/* Total Solved */}
          <div
            className="
              rounded-xl
              border
              border-border
              p-4
              text-center
            "
          >
            <p className="text-2xl font-bold text-primary">
              {profile.stats?.solved ?? "—"}
            </p>

            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Solved
            </p>
          </div>


          {/* Easy */}
          <div
            className="
              rounded-xl
              border
              border-border
              p-4
              text-center
            "
          >
            <p className="text-2xl font-bold text-primary">
              {profile.stats?.easy ?? "—"}
            </p>

            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Easy
            </p>
          </div>


          {/* Medium */}
          <div
            className="
              rounded-xl
              border
              border-border
              p-4
              text-center
            "
          >
            <p className="text-2xl font-bold text-primary">
              {profile.stats?.medium ?? "—"}
            </p>

            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Medium
            </p>
          </div>


          {/* Hard */}
          <div
            className="
              rounded-xl
              border
              border-border
              p-4
              text-center
            "
          >
            <p className="text-2xl font-bold text-primary">
              {profile.stats?.hard ?? "—"}
            </p>

            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Hard
            </p>
          </div>

        </div>


        {/* =====================================
            Global Rank
        ====================================== */}

        <div
          className="
            mt-5
            rounded-xl
            border
            border-border
            p-4
            text-center
          "
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Global Rank
          </p>

          <p className="mt-1 text-xl font-bold text-primary">
            {profile.rank ?? "—"}
          </p>
        </div>


        {/* =====================================
            Mobile Profile Button
        ====================================== */}

        <a
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-5
            flex
            w-full
            items-center
            justify-center
            rounded-lg
            border
            border-border
            px-4
            py-2
            text-sm
            font-medium
            transition
            hover:border-primary
            hover:text-primary
            sm:hidden
          "
        >
          View Profile →
        </a>

      </div>

    </div>
  );
};

export default ProfileCard;