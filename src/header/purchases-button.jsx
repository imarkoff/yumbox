import { useContext } from "react"
import { ShopContext } from "../context/context"

export default function PurchasesButton() {
    const purchasesClass = 'purchases'
    const { reverseVisibility} = useContext(ShopContext)

    // TODO вивести кількість товарів та загальну ціну в кошику. бажано це витягувати з контексту

    return (
        <>
        <button 
            className={`${purchasesClass}`}
            onClick={() => {reverseVisibility()}}
        >
            <span className={`${purchasesClass}__quantity`}>0</span>
            <span className={`${purchasesClass}__price`}>0 грн</span>
        </button>
        </>
    )
}