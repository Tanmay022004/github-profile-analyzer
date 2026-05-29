const {
  fetchGithubProfile,
  fetchUserRepos,
} = require("../services/githubService");

const {
  saveProfile,
  getAllProfiles,
  getSingleProfile,
} = require("../models/profileModel");

const analyzeProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const profile = await fetchGithubProfile(username);

    saveProfile(profile, (err) => {
      if (err) {
        return res.status(500).json({
          message: "Database Error",
          error: err,
        });
      }

      res.status(200).json({
        success: true,
        message: "Profile analyzed successfully",
        data: profile,
      });
    });

  } catch (error) {

    if (error.response && error.response.status === 404) {
      return res.status(404).json({
        success: false,
        message: "GitHub user not found",
      });
    }

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Fetch all analyzed profiles
const fetchProfiles = (req, res) => {
  getAllProfiles((err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database Error",
        error: err,
      });
    }

    return res.status(200).json({
      success: true,
      total_profiles: results.length,
      data: results,
    });
  });
};

// Fetch single profile
const fetchSingleProfile = (req, res) => {
  const { username } = req.params;

  getSingleProfile(username, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database Error",
        error: err,
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: results[0],
    });
  });
};

module.exports = {
  analyzeProfile,
  fetchProfiles,
  fetchSingleProfile,
};