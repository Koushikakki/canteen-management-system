import { render,screen } from "@testing-library/react-native";
import ItemCard from "./ItemCard";

const mockItem = {
  id: "1",
  title: "Burger",
  price: 50,
  image: require("/Users/admin/Desktop/react-native/canteen-management-system/assets/images/snacks/burger.jpeg"), 
};

describe("ItemCard component",()=>{
    test("renders given item ",()=>{
        const {getByText} = render(<ItemCard item={mockItem}/>);
        expect(getByText("Burger")).toBeOnTheScreen();
    })
})



