import Box from "../box";

export default function Button(params) {
    const objectCondition =(
        typeof params === "object" &&
         !Array.isArray(params) &&
          params !== null
        )
  return Box({
    Element: "button",
    children: objectCondition ? params.children : params,
    className:
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
  });
}
