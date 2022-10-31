import Box from "../../src/components/box";
import Footer from "../footer";
import Header from "../header";

export default function MainLayout(main) {
 return   Box({
        Element:"div", 
        className:"flex flex-col justify-center text-center",
        children:[
            Header(),
            main(),
            Footer()
        ]
    })
    
}