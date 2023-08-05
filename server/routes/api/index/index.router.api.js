import { Router } from "express";
const routerIndex = Router();

const getIndex = (req, res) => {
	res.status(200).json({
		status: "success",
		apiRouters: {
			version: "1.0.0",
			name: "SalePointify API",
			description: "Get all the endpoints of SalePointify API",
			url: [{
				company: "/api/company",
				locations: {
					provinces: "/api/locations/provinces",
					population: "/api/locations/populations",
				}
			}],
		}
	});
};

routerIndex.get("/", getIndex);

export default routerIndex;
