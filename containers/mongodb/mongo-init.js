db.createUser(
    {
        user: "monitor",
        pwd: "monitor123!",
        roles: [
            {
                role: "readWrite",
                db: "monitor"
            }
        ]
    }
);