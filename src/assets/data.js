import bottle500ML from './bottle500ml.png'

const data = {
	"home": {
		"heroMainText": "Pure Essence of Nature in Every Drop",
		"heroSubText": "Experience the freshness of crystal-clear, mineral-rich water, sourced from the heart of nature.",
		"heroSpinnerText": "EXPERIENCE THE NATURAL FRESHNESS"
	},
	"products": [
		{
			"id": "500MLWaterBottle",
			"productName": "500 ML Mineral Water Bottle",
			"productAbout": "Our 500 ML Mineral Water Bottle is perfect for on-the-go hydration.",
			"description": "500ML Description",
			"about": "500ML About",
			"image": bottle500ML
		},
		{
			"id": "1LWaterBottle",
			"productName": "1 L Mineral Water Bottle",
			"productAbout": "Our 500 ML Mineral Water Bottle is perfect for on-the-go hydration.",
			"description": "1L Description",
			"about": "1L About",
			// "image": bottle500ML
		}
	],
	"productReviews": [
		{
			"reviewerName": "Abdul Hamid",
			"review": "Fresh and refreshing!!"
		}
	],
	"dispatchLocation": [{ "lat": 21.9154006, "lang": 75.7428729 }]
}

export default data