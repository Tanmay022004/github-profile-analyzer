const express = require("express");

const router = express.Router();

const {
  analyzeProfile,
  fetchProfiles,
  fetchSingleProfile,
} = require("../controllers/githubController");

router.get("/analyze/:username", analyzeProfile);

router.get("/profiles", fetchProfiles);

router.get("/profiles/:username", fetchSingleProfile);

module.exports = router;