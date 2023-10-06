exports.allUserRoutes = (app) => {
    app.use(
        "/user",
        require("../Users/Routes/coursesRoute")
    );
}