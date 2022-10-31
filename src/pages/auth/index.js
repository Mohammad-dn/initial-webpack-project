import MainLayout from "../../../layout/mainLayout";
import Box from "../../components/box";
import Button from "../../components/Button";
import TextField from "../../components/Textfield";

export default function auth() {
  return MainLayout(()=>Box({
    className: "bg-red-400 min-h-screen justify-center flex flex-col px-4 gap-3",
    // در اینجا ما به فانکشن باکس یک المنت تحت عنوان یه فانکشن یا کامپوننت پاس میدهیم و در یوتیلز اصلی باکس حلقه زده میشود و به فانکشن باکس اپند میشود
    children:
     [
        TextField({
          placeholder:"شمارتو بزن",
          id:"number"
        }),
        Button({
          children:"ادامه",
          className:"my-6"
        }),
    ],
  })) 
}
