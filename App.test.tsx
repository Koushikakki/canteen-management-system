import { render } from "@testing-library/react-native";
import App from "./App";
const menuData = [
  {
    id: "s1",
    title: "Snacks",
    data: [
      {
        id: "",
        title: "samosa",
        price: 30,
        image: require("/Users/admin/Desktop/react-native/canteen-management-system/assets/images/snacks/pizza.jpeg")
      }
    ]
  }
]

describe("App component",()=>{
    test("renders the app heading",()=>{
        const {getByText} = render(<App/>)
        expect(getByText("Everest Canteen")).toBeOnTheScreen();
    });

    test("renders the sections",()=>{
        const {getByText} = render(<App/>)
        expect(getByText("breakfast")).toBeOnTheScreen();
    });
})