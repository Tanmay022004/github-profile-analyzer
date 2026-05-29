const { fetchGithubProfile } = require("../services/githubService");

const {
  saveProfile,
  getAllProfiles,
  getSingleProfile,
} = require("../models/profileModel");

const analyzeProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const profile = await fetchGithubProfile(username);

    await saveProfile(profile);

    res.status(200).json({
      success: true,
      message: "Profile analyzed successfully",
      data: {
        username: profile.login,
        name: profile.name,
        public_repos: profile.public_repos,
        followers: profile.followers,
        following: profile.following,
        profile_url: profile.html_url,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Database Error",
      error: error.message,
    });
  }
};

const fetchProfiles = async (req, res) => {
  try {
    const profiles = await getAllProfiles();

    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const fetchSingleProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const profile = await getSingleProfile(username);

    if (profile.length === 0) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    res.status(200).json(profile[0]);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  analyzeProfile,
  fetchProfiles,
  fetchSingleProfile,
};