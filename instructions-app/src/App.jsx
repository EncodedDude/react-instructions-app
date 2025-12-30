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

	let isFirstStep = true;
	let isLastStep = false;

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
							<li className={styles["steps-item"] + " " + styles.done} key={item.id}>
								<button className={styles["steps-item-button"]}>
									{index + 1}
								</button>
								Шаг {index + 1}
							</li>
						))}
						{/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}
						<li
							className={styles["steps-item"] + " " + styles.done}
						>
							{/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
							<button className={styles["steps-item-button"]}>
								1
							</button>
							{/* При клике на кнопку установка выбранного шага в качестве активного */}
							Шаг 1
						</li>
						<li
							className={styles["steps-item"] + " " + styles.done}
						>
							<button className={styles["steps-item-button"]}>
								2
							</button>
							Шаг 2
						</li>
						<li
							className={
								styles["steps-item"] +
								" " +
								styles.done +
								" " +
								styles.active
							}
						>
							<button className={styles["steps-item-button"]}>
								3
							</button>
							Шаг 3
						</li>
						<li className={styles["steps-item"]}>
							<button className={styles["steps-item-button"]}>
								4
							</button>
							Шаг 4
						</li>
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
								{/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
								{/* Или заменять всю кнопку в зависимости от условия */}
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
