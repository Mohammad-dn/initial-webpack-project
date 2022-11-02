import Box from "../box";

function TextField(params) {
  const textField = Box({
    Element: "input",
    className:
      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
  });
// baghie attribuit haye HTMl ro taht onvane yek object be component textFeild midim
  Object.keys(params).map((key) => {
    textField[key] = params[key]
});
  return textField
}
export default TextField;
