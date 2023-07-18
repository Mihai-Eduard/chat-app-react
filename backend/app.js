const express = require("express");
const authRoutes = require("./routes/auth");
const { checkAuthMiddleware } = require("./utils/auth");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRoutes);
app.use(checkAuthMiddleware);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
