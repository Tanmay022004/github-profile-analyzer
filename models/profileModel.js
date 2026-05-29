const db = require("../config/db");

const saveProfile = (profileData, callback) => {
  const sql = `
    INSERT INTO github_profiles
    (github_id, username, name, bio, public_repos,
    followers, following, account_created_at,
    profile_url, avatar_url, location, company, blog)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
    name=VALUES(name),
    bio=VALUES(bio),
    public_repos=VALUES(public_repos),
    followers=VALUES(followers),
    following=VALUES(following),
    location=VALUES(location),
    company=VALUES(company),
    blog=VALUES(blog)
  `;

  const values = [
    profileData.id,
    profileData.login,
    profileData.name,
    profileData.bio,
    profileData.public_repos,
    profileData.followers,
    profileData.following,

    new Date(profileData.created_at)
      .toISOString()
      .slice(0, 19)
      .replace("T", " "),
      
    profileData.html_url,
    profileData.avatar_url,
    profileData.location,
    profileData.company,
    profileData.blog,
  ];

  db.query(sql, values, callback);
};

const getAllProfiles = (callback) => {
  db.query("SELECT * FROM github_profiles", callback);
};

const getSingleProfile = (username, callback) => {
  db.query(
    "SELECT * FROM github_profiles WHERE username = ?",
    [username],
    callback
  );
};

module.exports = {
  saveProfile,
  getAllProfiles,
  getSingleProfile,
};