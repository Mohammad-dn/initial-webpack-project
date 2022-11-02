import Box from "../box";

export default function Button(params) {
    const objectCondition =(
        typeof params === "object" &&
         !Array.isArray(params) &&
          params !== null
          // یک تابع برای چک کردن وضعیت آبجکت ورودی
        )
  return Box({
    Element: "button",
    // ورودی را چک میکنیم اگر چیزی به جز موارد بالا بود  چیلدرن اون آبجکت رو بخون و اگر چیزی به جز شروط بالا بود همون رو بخون
    children: objectCondition ? params.children : params,
    className:
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
  });
}
