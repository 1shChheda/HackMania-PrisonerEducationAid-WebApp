exports.allUserRoutes = (app) => {
    app.use(
        "/user",
        require("../Users/Routes/coursesRoute")
    );
    app.use("/auth",
        require("../routes")
    )
}