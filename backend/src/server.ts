import express from "express";
import cors from "cors";
import { sample_organizations, sample_tags } from "./data";

const app = express();
//frontend - localhost:4200
//backend - localhost:5000/api/organizations
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


const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port)
})