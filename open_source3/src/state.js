import { createSlice, configureStore } from "@reduxjs/toolkit";

let product=createSlice({
	name: "product",
	initialState: [
		{
			idx: 0,
			image: "product1.jpg",
			title: "타나자나",
			sale: "40%",
			dollar: "$24",
			won: "33,478월"
		},
		{
			idx: 1,
			image: "product2.jpg",
			title: "리쥬란",
			sale: "40%",
			dollar: "$81",
			won: "113,019원"
		},
		{
			idx: 2,
			image: "product3.jpg",
			title: "유리프",
			sale: "45%",
			dollar: "$9.9",
			won: "13,813원"
		},
		{
			idx: 3,
			image: "product4.jpg",
			title: "바이오힐보",
			sale: "45%",
			dollar: "$12",
			won: "16,743원"
		},
		{
			idx: 0,
			image: "product5.jpg",
			title: "닥터지",
			sale: "30%",
			dollar: "$4.9",
			won: "6,836원"
		},
		{
			idx: 1,
			image: "product6.jpg",
			title: "제이엠솔루션",
			sale: "30%",
			dollar: "$7",
			won: "9,767원"
		},
		{
			idx: 2,
			image: "product7.jpg",
			title: "디오키드스킨",
			sale: "35%",
			dollar: "$16.9",
			won: "23,580원"
		},
		{
			idx: 3,
			image: "product8.jpg",
			title: "아이오페",
			sale: "35%",
			dollar: "$93",
			won: "129,762원"
		}
	]
});

export default configureStore({
	reducer: {
		product: product.reducer
	}
});