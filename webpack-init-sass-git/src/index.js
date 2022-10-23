import "./styles/style.sass"
console.log("object");
const rootEl = document.getElementById("root");
const header = () => {
  const divEl = document.createElement("div");
  // <div class="gap-4 text-2xl justify-center flex-1  flex px-5 text-yellow-200 justify-center p-12 w-3/5 flex-col text-center bg-black w-full rounded rounded-lg bg-indigo-400"></div>
  divEl.className="flex  gap-4 justify-center   bg-red-300  flex-col"
  const h1 = document.createElement("h1");
  h1.className = "bg-black text-yellow-200 text-center p-5 text-2xl ";
  h1.innerHTML = "Any hedaer";
  const submit = document.createElement("button");
  submit.innerHTML = "submit";
  submit.className = "submit-btn p-3 bg-indigo-400 rounded-lg w-full";
  divEl.appendChild(h1);
  divEl.appendChild(submit)
  return divEl;
};
rootEl.appendChild(header());
