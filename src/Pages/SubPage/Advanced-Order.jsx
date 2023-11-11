import React, { useEffect } from "react";
import flippedChef from "../../assets/images/flippedChef.png";
import AdvancedStart from "./advancedOrderComps/advancedStart";
import AdvancedOrderCalorieMacroSelection from "./advancedOrderComps/advancedOrderCalorieMacroSelection";
import AdvancedOrderMealSetup from "./advancedOrderComps/advancedOrderMealSetup";
import AdvancedOrderMealPlanner from "./advancedOrderComps/advancedOrderMealPlanner";
import { useAdvancedOrderStoreActions } from "../../stateStore/AdvancedOrderStore";
import { useAdvancedOrderStore } from "../../stateStore/AdvancedOrderStore";
import { useRenderStepStore } from "../../stateStore/RenderStepStore";
//Buttons
import AdvancedOrderResetButton from "./advancedOrderComps/advancedOrderStartOverButton";
import AdvancedOrderPreviousButton from "./advancedOrderComps/advancedOrderPreviousButton";
import ConfirmSelectionButton from "./advancedOrderComps/confirmSelectionStepButton";

import "../../css/advancedOrder.css";
import AdvancedOrderCalorieInput from "./advancedOrderComps/calorieInput";
import "../../assets/statusBar/loading-bar.css";

const AdvancedOrder = () => {
	const step = useRenderStepStore((state) => state.step);
	const { setStatusBar } = useAdvancedOrderStoreActions((actions) => actions);
	const statusBar = useAdvancedOrderStore((state) => state.statusBar);

	useEffect(() => {
		if (step === 0) {
			setStatusBar( "5" );
		} else if (step === 1) {
			setStatusBar( "25" );
		} else if (step === 2) {
			setStatusBar( "50" );
		} else if (step === 3) {
			setStatusBar("75" );
		} else if (step === 4) {
			setStatusBar( "100" );
		}
	}, [step]);

	const renderStepMap = {
		0: <AdvancedStart />,
		1: <AdvancedOrderCalorieMacroSelection />,
		2: <AdvancedOrderCalorieInput />,
		3: <AdvancedOrderMealSetup />,
		4: <AdvancedOrderMealPlanner />,
	};
	const RenderCompFromStep = renderStepMap[step];
	console.log(statusBar, "statusBar");
	console.log(step, "RenderCompFromStep");
	console.log(document.getElementById("ldBar"), "ldBar");
	return (
		<div className='advanced-order-container'>
			{step === 3 ? "" : <img className='advanced-order-chef-img' src={flippedChef} />}

			<div className='advanced-order-render-comp-container'>
				{RenderCompFromStep}

				{step != 0 ? (
					<div className='advanced-order-btn-container'>
						<ConfirmSelectionButton />
						<AdvancedOrderResetButton />
						<AdvancedOrderPreviousButton />
					</div>
				) : (
					""
				)}
				<div data-preset='stripe' data-value={statusBar}
					id="ldBar"
					className='ldBar'></div>
			</div>
		</div>
	);
};
export default AdvancedOrder;
