
import './App.css';

function addItem(event) {
    setItems(prevData => {
        return [...prevData, input];
    });
    
    setInput("");
}