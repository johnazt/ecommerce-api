const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 *@openapi
 *components:
 *    schemas:
 *     product:
 *       type: object
 *       properties:
 *           name: 
 *             type: string
 *             example: Lenovo Monitor
 *           price: 
 *             type: integer
 *             example: 2000
 *           availableQty:
 *             type: integer
 *             example: 100
 *           userId:
 *             type: integer
 *             example: 1
 *securitySchemes:
 *     bearerAuth: 
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */


const Products = db.define(
	"products",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		availableQty: {
			type: DataTypes.INTEGER
		},
		status: {
			type: DataTypes.ENUM("In Stock", "Not in Stock"),
			defaultValue: "In Stock"
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: "user_id"
		}
	},
	{
		timestamps: false
	}
);

module.exports = Products;
