exports.allUserRoutes = (app) => {
    app.use(
        "/user",
        require("../Users/Routes/coursesRoute"),
        require("../Users/Routes/jobRoute")
    );
    app.use("/auth",
        require("../routes")
    )
}