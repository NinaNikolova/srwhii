import express from "express";
import cors from "cors";
import { sample_organizations, sample_tags, sample_users } from "./data";
import jwt from "jsonwebtoken";

const app = express();
//frontend - localhost:4200
//backend - localhost:5000/api/organizations
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

app.get("/api/organizations", (req, res) => {
    res.send(sample_organizations)
});
app.get("/api/organizations/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const organizations = sample_organizations.filter(o => o.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(organizations);
});

app.get("/api/organizations/tags", (req, res) => {
    res.send(sample_tags);
});
app.get("/api/organizations/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const organizations = sample_organizations.filter(o => o.tags?.includes(tagName));
    res.send(organizations);
});
app.get("/api/organizations/:organizationId", (req, res) => {
    const organizationId = req.params.organizationId;
    const organization = sample_organizations.find(o => o.id === organizationId);
    res.send(organization);
})
app.post("/api/users/login", (req, res) => {
    // but express dont suport json by default and we need to anable it in server.ts -> app.use(express.json())
    // const body = req.body ->distructoring assignment
    const { email, password } = req.body;
    const user = sample_users.find(user => user.email === email && user.password === password);
    if (user) {
        res.send(generateTokenResponse(user));
    } else {
        res.status(400).send("User name or password is not valid!");
    }
})
const generateTokenResponse = (user: any) => {
    const token = jwt.sign({
        email: user.email, isAdmin: user.isAdmin
    }, "SomeRandomText", {
        expiresIn: "30d"
    });
    user.token = token;
    return user;
}


const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port)
})