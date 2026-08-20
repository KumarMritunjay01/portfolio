import React from "react";

const HackerRankCard = ({ profile }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-neutral shadow-lg">

      {/* =====================================
          Header
      ====================================== */}

      <div className="border-b border-border p-6">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-2xl">
              🏆
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                HackerRank
              </h2>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Coding Practice
              </p>
            </div>

          </div>

          <a
            href="https://www.hackerrank.com/profile/kmritunjay525"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-border px-4 py-2 text-sm font-medium transition hover:border-primary hover:text-primary sm:block"
          >
            View Profile →
          </a>

        </div>

        <p className="mt-5 text-lg font-semibold">
          @{profile.username}
        </p>

      </div>


      {/* =====================================
          Badges
      ====================================== */}

      <div className="p-6">

        <div className="mb-6 flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border">
            🏅
          </div>

          <h3 className="text-2xl font-bold">
            My Badges
          </h3>

        </div>


        {/* Badge Grid */}

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">

          {profile.badges.map((badge) => (
            <div
              key={badge.name}
              className="flex flex-col items-center rounded-xl border border-border p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-primary"
            >

              {/* Badge Icon */}

              <div
                className="
                  flex
                  h-28
                  w-28
                  items-center
                  justify-center
                  rounded-[35%]
                  border
                  border-primary
                  bg-primary/10
                  text-4xl
                "
              >
                {badge.icon}
              </div>


              {/* Badge Name */}

              <h4 className="mt-3 text-sm font-semibold">
                {badge.name}
              </h4>


              {/* Stars */}

              <p className="mt-1 text-sm tracking-widest text-primary">
                {badge.stars}
              </p>

            </div>
          ))}

        </div>

      </div>


      {/* =====================================
          Certifications
      ====================================== */}

      <div className="border-t border-border p-6">

        <div className="mb-6 flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border">
            📜
          </div>

          <h3 className="text-2xl font-bold">
            My Certifications
          </h3>

        </div>


        {/* Certification Grid */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

          {profile.certifications.map((certificate) => (
            <div
              key={certificate.name}
              className="
                rounded-xl
                border
                border-border
                p-5
                transition
                duration-300
                hover:-translate-y-1
                hover:border-primary
              "
            >

              <div className="flex items-start gap-4">

                {/* Certificate Icon */}

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                  📜
                </div>


                {/* Certificate Info */}

                <div>

                  <h4 className="font-semibold">
                    {certificate.name}
                  </h4>

                  <p className="mt-2 text-sm text-green-500">
                    ✓ Verified
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    {certificate.type}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>


        {/* Mobile Profile Button */}

        <a
          href="https://www.hackerrank.com/profile/kmritunjay525"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-6
            flex
            w-full
            items-center
            justify-center
            rounded-xl
            bg-primary
            px-5
            py-3
            font-semibold
            text-on-primary
            transition
            hover:opacity-90
            sm:hidden
          "
        >
          View HackerRank Profile →
        </a>

      </div>

    </div>
  );
};

export default HackerRankCard;