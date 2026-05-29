const express = require("express");

const router = express.Router();

const {
  analyzeProfile,
  fetchProfiles,
  fetchSingleProfile,
} = require("../controllers/githubController");

/**
 * @swagger
 * /api/github/analyze/{username}:
 *   get:
 *     summary: Analyze GitHub profile
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Profile analyzed successfully
 */
router.get("/analyze/:username", analyzeProfile);

/**
 * @swagger
 * /api/github/profiles:
 *   get:
 *     summary: Get all analyzed profiles
 *     responses:
 *       200:
 *         description: List of profiles
 */
router.get("/profiles", fetchProfiles);

/**
 * @swagger
 * /api/github/profiles/{username}:
 *   get:
 *     summary: Get single profile
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Single profile data
 */
router.get("/profiles/:username", fetchSingleProfile);

module.exports = router;