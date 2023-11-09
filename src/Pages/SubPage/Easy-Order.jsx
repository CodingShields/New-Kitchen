import React from "react";
import flippedChef from "../../assets/images/flippedChef.png";
import EasyOrderBegin from "./easyOrderComps/Easy-Order-Begin";
import EasyOrderCourse from "./easyOrderComps/Easy-Order-Course";
import EasyOrderDietary from "./easyOrderComps/Easy-Order-Dietary";
import EasyOrderHeadCount from "./easyOrderComps/Easy-Order-Head-Count";
import EasyOrderEvents from "./easyOrderComps/Easy-Order-Events";
// import EasyOrderBeverage from "./easyOrderComps/Easy-Order-Beverage";
// import EasyOrderCookTime from "./easyOrderComps/Easy-Order-Cook-Time";
// import EasyOrderDessertFlavor from "./easyOrderComps/Easy-Order-Dessert-Flavor";
import EasyOrderMealBalance from "./easyOrderComps/Easy-Order-Meal-Balance";
// import EasyOrderHowToCook from "./easyOrderComps/Easy-Order-How-To-Cook";
// import EasyOrderSeasonalOptions from "./easyOrderComps/Easy-Order-Seasonal-Options";
import EasyOrderCulturalOptions from "./easyOrderComps/Easy-Order-Cultural-Options";
import EasyOrderStartOverButton from "./easyOrderComps/Easy-Order-Start-Over-Button";
import EasyOrderBackButton from "./easyOrderComps/Easy-Order-Back-Button";
import EasyOrderUserSelection from "./easyOrderComps/Easy-Order-User-Selection";
import EasyOrderMeasure from "./easyOrderComps/Easy-Order-Measure";
import EasyOrderHowToFlavor from "./easyOrderComps/Easy-Order-How-To-Flavor";
import EasyOrderConfirmOrder from "./easyOrderComps/Easy-Order-Confirm-Order";
import EasyOrderFulfilled from "./easyOrderComps/Easy-Order-Fulfilled";
import { useRenderStepStore } from "../../stateStore/RenderStepStore";
const EasyOrderForm = () => {
	const step = useRenderStepStore((state) => state.step);

	const renderStepMap = {
		0: <EasyOrderBegin />,
		1: <EasyOrderEvents />,
		2: <EasyOrderCulturalOptions />,
		3: <EasyOrderHeadCount />,
		4: <EasyOrderCourse />,
		5: <EasyOrderDietary />,
		6: <EasyOrderHowToFlavor />,
		7: <EasyOrderMealBalance />,
		// 8: <EasyOrderCookTime />,
		// 9: <EasyOrderHowToCook />,
		8: <EasyOrderMeasure />,
		// 11: <EasyOrderSeasonalOptions />,
		// 12: <EasyOrderDessertFlavor />,
		// 13: <EasyOrderBeverage />,
		9: <EasyOrderConfirmOrder />,
		10: <EasyOrderFulfilled />,
	};
	// need some other variables that are going to setup the questions better
	// get chat gtp to build a prompt for the user input
	const RenderCompFromStep = renderStepMap[step];
	// in the api call need to add a name summary
	return (
		<div className='easy-order-container'>
			<div className='easy-order-chef-img-container'>
				<img className='chef-img' src={flippedChef} alt='Chef' />
			</div>
			<div className='easy-order-chef-bubble-container'>
				{RenderCompFromStep}
				<div className='easy-order-btn-container'>
					<EasyOrderStartOverButton />
					<EasyOrderBackButton />
				</div>
			</div>
			<EasyOrderUserSelection />
		</div>
	);
};
export default EasyOrderForm;
