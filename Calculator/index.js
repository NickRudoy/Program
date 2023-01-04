const inputOneNode = document.querySelector(".num_one");
const inputTwoNode = document.querySelector(".num_two");
const selectOperationNode = document.querySelector(".select-operation");
const btnResultNode = document.querySelector(".btn-result");
const outputResultNode = document.querySelector(".output-result");

btnResultNode.addEventListener("click", function () {
  const a = Number(inputOneNode.value);
  const b = Number(inputTwoNode.value);
  const operation = selectOperationNode.value;

  const result = calculate({ a, b, operation });

  outputResultNode.innerHTML = result;
});
