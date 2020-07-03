db.createUser(
    {
        user: "mercado",
        pwd: "mercado123!",
        roles: [
            {
                role: "readWrite",
                db: "mercado"
            }
        ]
    }
);