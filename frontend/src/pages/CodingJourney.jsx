import React, { useEffect, useState } from "react";

import ProfileCard from "../components/ProfileCard";
import HackerRankCard from "../components/HackerRankCard";

import {
  getLeetCodeStats,
  getHackerRankStats,
} from "../services/api";


const CodingJourney = () => {

  // ==========================================
  // States
  // ==========================================

  const [leetcode, setLeetcode] = useState(null);

  const [hackerRank, setHackerRank] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);


  // ==========================================
  // Fetch Coding Profiles
  // ==========================================

  useEffect(() => {

    const fetchCodingProfiles = async () => {

      try {

        const [
          leetcodeResponse,
          hackerRankResponse,
        ] = await Promise.all([
          getLeetCodeStats(),
          getHackerRankStats(),
        ]);


        // =====================================
        // LeetCode Response
        // =====================================

        console.log(
          "LeetCode:",
          leetcodeResponse.data
        );

        setLeetcode(
          leetcodeResponse.data.data
        );


        // =====================================
        // HackerRank Response
        // =====================================

        console.log(
          "HackerRank:",
          hackerRankResponse.data
        );

        setHackerRank(
          hackerRankResponse.data.data
        );


      } catch (error) {

        console.error(
          "Coding Profile Error:",
          error
        );

        setError(
          "Unable to load coding profiles"
        );


      } finally {

        setLoading(false);

      }

    };


    fetchCodingProfiles();

  }, []);


  // ==========================================
  // UI
  // ==========================================

  return (

    <section
      className="
        min-h-screen
        bg-background
        px-6
        py-28
        text-foreground
      "
    >

      <div className="mx-auto max-w-6xl">


        {/* =====================================
            Page Heading
        ====================================== */}

        <div className="mb-14 text-center">

          <h1
            className="
              text-4xl
              font-bold
              tracking-tight
              sm:text-5xl
            "
          >
            Coding{" "}

            <span className="text-primary">
              Journey
            </span>

          </h1>


          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-base
              text-gray-500
              dark:text-gray-400
              sm:text-lg
            "
          >
            My problem-solving and developer journey
            across different coding and professional
            platforms.
          </p>

        </div>


        {/* =====================================
            Loading
        ====================================== */}

        {loading && (

          <div className="flex justify-center">

            <p
              className="
                text-gray-500
                dark:text-gray-400
              "
            >
              Loading coding profiles...
            </p>

          </div>

        )}


        {/* =====================================
            Error
        ====================================== */}

        {error && (

          <div className="flex justify-center">

            <p className="text-red-500">
              {error}
            </p>

          </div>

        )}


        {/* =====================================
            Profiles
        ====================================== */}

        {!loading && !error && (

          <div className="space-y-8">


            {/* =================================
                LeetCode
            ================================== */}

            {leetcode && (

              <ProfileCard
                profile={{

                  name: "LeetCode",

                  username:
                    leetcode.username,

                  type:
                    "Problem Solving",

                  icon:
                    "🟠",

                  description:
                    "Practicing Data Structures and Algorithms and improving problem-solving skills through consistent practice.",

                  url:
                    "https://leetcode.com/u/KumarMritunjay525/",

                  rank:
                    leetcode.rank,

                  stats: {

                    solved:
                      leetcode.solved,

                    easy:
                      leetcode.easy,

                    medium:
                      leetcode.medium,

                    hard:
                      leetcode.hard,

                  },

                }}
              />

            )}


            {/* =================================
                HackerRank
            ================================== */}

            {hackerRank && (

              <HackerRankCard
                profile={{

                  username:
                    hackerRank.username,

                  profileUrl:
                    hackerRank.profileUrl,


                  // =================================
                  // Badges
                  // =================================

                  badges: [

                    {
                      name:
                        "Problem Solving",

                      stars:
                        "★★",

                      icon:
                        "🧩",
                    },

                    {
                      name:
                        "Python",

                      stars:
                        "★★",

                      icon:
                        "🐍",
                    },

                    {
                      name:
                        "SQL",

                      stars:
                        "★★★★★",

                      icon:
                        "🗄️",
                    },

                    {
                      name:
                        "React",

                      stars:
                        "★",

                      icon:
                        "⚛️",
                    },

                  ],


                  // =================================
                  // Certifications
                  // =================================

                  certifications: [

                    {
                      name:
                        "Frontend Developer (React)",

                      type:
                        "ROLE",
                    },

                    {
                      name:
                        "SQL (Basic)",

                      type:
                        "SKILL",
                    },

                    {
                      name:
                        "SQL (Intermediate)",

                      type:
                        "SKILL",
                    },

                  ],

                }}
              />

            )}

          </div>

        )}

      </div>

    </section>

  );

};


export default CodingJourney;