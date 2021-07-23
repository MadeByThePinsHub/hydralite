module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [
      2,
      "always",
      [
        "global", // project-wide stuff, README included
        "api", // backend
        "landing", // landing page
        "automation", // automation scripts
        "mobile", // Flutter mobile app
        "prototype", // prototypes
        "web", // frontend
        "hydrabot", // Discord bot/GitHub App
        "docker", // Docker Compose, Docckerfiles
        "gitpod", // Gitpod
        "devcontainer", // devcontainer dir
        "docs", // just in case you didn't use docs type
        "contributing-guide", // CONTRIBUTING.md
        "meta", // code of conduct
        "commitlint", // this file OwO
        "issue-templates", // Issue templates
        "prettier", // prettierrc, prettierignore
        "assets", // images, logos, screenshots
        "github-actions", "actions", "gh-actions", // GitHub Actions
        "gitlab-ci" // GitLab CI/CD 
      ],
    ],
  },
};
