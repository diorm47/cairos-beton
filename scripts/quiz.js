const steps = document.querySelectorAll(".calculator"); // Все шаги
const progressBar = document.querySelectorAll(".calc_line_value"); // Все индикаторы прогресса
let currentStep = 0; // Номер текущего шага

// Функция обновления видимости шагов и прогресса
const updateSteps = () => {
  steps.forEach((step, index) => {
    step.style.display = index === currentStep ? "flex" : "none"; // Показать текущий шаг, скрыть остальные
  });

  // Обновление прогресс-бара текущего шага
  const progressPercentage = ((currentStep + 1) / steps.length) * 100;
  progressBar[currentStep].style.width = `${progressPercentage}%`;

  // Показать/скрыть кнопку "Назад" на первом и последнем шагах
  document.querySelectorAll(".back_btn").forEach((btn) => {
    btn.style.display = currentStep === 0 ? "none" : "inline-block";
  });

  document.querySelectorAll(".next_btn").forEach((btn) => {
    btn.style.display =
      currentStep === steps.length - 1 ? "none" : "inline-block";
  });
};

// Обработчик для кнопки "Далее"
document.querySelectorAll(".next_btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateSteps();
    }
  });
});

// Обработчик для кнопки "Назад"
document.querySelectorAll(".back_btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updateSteps();
    }
  });
});

// Начальная инициализация
updateSteps();

// Функция для обработки выбора опций
const setupOptionSelection = () => {
  const steps = document.querySelectorAll(".calculator"); // Каждая секция с опциями

  steps.forEach((step) => {
    const options = step.querySelectorAll(".calc_option"); // Все опции в текущем шаге

    options.forEach((option) => {
      option.addEventListener("click", () => {
        // Удаляем класс активности у всех опций текущего шага
        options.forEach((opt) =>
          opt
            .querySelector(".calc_option_sel")
            .classList.remove("active_calc_option_sel")
        );

        // Добавляем класс активности к выбранной опции
        option
          .querySelector(".calc_option_sel")
          .classList.add("active_calc_option_sel");
      });
    });
  });
};

// Вызов функции для установки обработчиков на опции
setupOptionSelection();
