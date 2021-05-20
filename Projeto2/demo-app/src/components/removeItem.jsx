
import './App.css';


function removeItem(id) {
    setItems(prevData => {
        return prevData.filter((item, index) => {
            return index !== id;
        })
    });
}