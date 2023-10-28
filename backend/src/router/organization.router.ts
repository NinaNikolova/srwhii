import { Router } from 'express';
const router = Router();
import { sample_organizations, sample_tags } from '../data';
import asyncHandler from 'express-async-handler';
import { OrganizationModel } from '../models/organization.model';



router.get("/", asyncHandler(
    async (req, res) => {
        const organizations = await OrganizationModel.find()
        res.send(organizations)
    }));
router.get("/search/:searchTerm", asyncHandler(
    async (req, res) => {
        // regex to make search case-insesetive
        const searchRegex = new RegExp(req.params.searchTerm, 'i')
        // pass a condition using the object
        const organizations = await OrganizationModel.find({ name: { $regex: searchRegex } })

        res.send(organizations);
    }));

router.get("/tags", asyncHandler(
    async (req, res) => {
        const tags = await OrganizationModel.aggregate([

            {
                $unwind: '$tags'
            },
            {
                $group: {
                    _id: '$tags',
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    name: '$_id',
                    count: '$count'
                }
            }
        ]).sort({ count: -1 })
        const all = {
            name: 'All',
            count: await OrganizationModel.countDocuments()
        }
        tags.unshift(all);
        res.send(tags);
    }));
router.get("/tag/:tagName", asyncHandler(
    async (req, res) => {
        const organizations = await OrganizationModel.find({ tags: req.params.tagName })

        res.send(organizations);
    }));
router.get("/:organizationId", asyncHandler(
    async (req, res) => {
        const organization = await OrganizationModel.findById(req.params.organizationId);

        res.send(organization);
    }));
export default router;