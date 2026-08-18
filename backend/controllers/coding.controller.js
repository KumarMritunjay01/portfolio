const getLeetCodeStats = async (req, res) => {
  try {
    const username = "KumarMritunjay525";

    const query = `
      query getUserProfile($username: String!) {
        allQuestionsCount {
          difficulty
          count
        }

        matchedUser(username: $username) {
          username

          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }

          profile {
            ranking
          }
        }
      }
    `;

    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com/",
        "Origin": "https://leetcode.com",
        "User-Agent": "Mozilla/5.0",
      },

      body: JSON.stringify({
        query,
        variables: {
          username,
        },
      }),
    });

    const result = await response.json();

    if (result.errors) {
      console.error("LeetCode GraphQL Error:", result.errors);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch LeetCode data",
      });
    }

    if (!result.data?.matchedUser) {
      return res.status(404).json({
        success: false,
        message: "LeetCode user not found",
      });
    }

    const user = result.data.matchedUser;

    const stats = user.submitStats.acSubmissionNum;

    const easy = stats.find(
      (item) => item.difficulty === "Easy"
    );

    const medium = stats.find(
      (item) => item.difficulty === "Medium"
    );

    const hard = stats.find(
      (item) => item.difficulty === "Hard"
    );

    const totalSolved =
      (easy?.count || 0) +
      (medium?.count || 0) +
      (hard?.count || 0);

    res.json({
      success: true,

      data: {
        username: user.username,

        solved: totalSolved,

        easy: easy?.count || 0,

        medium: medium?.count || 0,

        hard: hard?.count || 0,

        rank: user.profile?.ranking || null,
      },
    });

  } catch (error) {

    console.error("LeetCode Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while fetching LeetCode stats",
    });
  }
};

// ==========================================
// Get HackerRank Stats
// ==========================================

const getHackerRankStats = async (req, res) => {
  try {
    const username = "kmritunjay525";

    const response = await fetch(
      `https://www.hackerrank.com/rest/contests/master/hackers/${username}/profile`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        message: "Failed to fetch HackerRank profile",
      });
    }

    const result = await response.json();

    console.log("HackerRank Response:", result);

    if (!result.model) {
      return res.status(404).json({
        success: false,
        message: "HackerRank profile not found",
      });
    }

    const profile = result.model;

    res.json({
      success: true,

      data: {
        username: username,

        name: profile.name || "Mritunjay Kumar",

        profileUrl:
          "https://www.hackerrank.com/profile/kmritunjay525",

        linkedinUrl: profile.linkedin_url || null,

        githubUrl: profile.github_url || null,
      },
    });

  } catch (error) {
    console.error("HackerRank Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while fetching HackerRank profile",
    });
  }
};

export { getLeetCodeStats, getHackerRankStats };