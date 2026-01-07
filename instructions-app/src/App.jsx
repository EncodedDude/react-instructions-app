import { useState } from "react";
import styles from "./app.module.css";
import data from "./data.json";

const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const onPrevButtonClick = () => {
		setActiveIndex(activeIndex - 1);
	};

	const onNextButtonClick = () => {
		setActiveIndex(activeIndex + 1);
	};

	const onResetButtonClick = () => {
		setActiveIndex(0);
	};

	const onClickStepButton = (index) => {
		setActiveIndex(index);
	};

	let isFirstStep = activeIndex === 0;
	let isLastStep = activeIndex === steps.length - 1;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles["steps-content"]}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles["steps-list"]}>
						{steps.map((item, index) => (
							<li
								className={
									styles["steps-item"] +
									(index === activeIndex
										? " " + styles.active
										: "") +
									(index < activeIndex
										? " " + styles.done
										: "")
								}
								key={item.id}
							>
								<button
									className={styles["steps-item-button"]}
									onClick={() => onClickStepButton(index)}
								>
									{index + 1}
								</button>
								{item.title}
							</li>
						))}
					</ul>
					<div className={styles["buttons-container"]}>
						<button
							className={styles.button}
							onClick={onPrevButtonClick}
							disabled={isFirstStep}
						>
							Назад
						</button>
						{!isLastStep ? (
							<button
								className={styles.button}
								onClick={onNextButtonClick}
							>
								Далее
							</button>
						) : (
							<button
								className={styles.button}
								onClick={onResetButtonClick}
							>
								Начать сначала
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
