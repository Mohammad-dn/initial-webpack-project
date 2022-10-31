import Box from "../../src/components/box";

export default function Footer() {
  return Box({
    Element: "footer",
    children: "Copy Right",
    className:"bg-gray-800 text-white text-center font-bold py-3 w-full"
  });
}
