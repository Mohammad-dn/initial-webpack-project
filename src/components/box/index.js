export default function Box(params) {
  const { Element, children, className } = params;

  const box = document.createElement(Element || "div");
  box.className = className || "";
//   arry.isarray چک میکنه ببینه آرایه هست یا نه
  if (Array.isArray(children)) {
    // چه آرایه برگشت و یا غیر از آرایه برگشت شما در آن حلقه میزنی و به فانکشن باکس اپند میکنی 
    children.map((child) => {
      box.append(child);
    });
  }
//   در غیر این صورت از طریق اینر اچتی ام ال بخوم
   else box.innerHTML = children || "";
  return box;
}
