exports.errorHandler = (error, req, res, next) => {
  console.log("error handler reached...");
  const status = error.status || 500;
  const message = error.message || "Something went wrong.";
  res.status(status).json({ message: message });
};
