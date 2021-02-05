const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "production"
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

export default {
  auth: {
    url: process.env.PHOENIX_APP_AUTH_URL,
  },
  frontEndUrl: process.env.PHOENIX_APP_FRONTEND_URL,
}
