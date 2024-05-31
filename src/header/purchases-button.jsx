import { useContext } from "react"
import { ShopContext } from "../context/context"

export default function PurchasesButton() {
    const purchasesClass = 'purchases'
    const { reverseVisibility, totalQuantity, totalPrice, delivery} = useContext(ShopContext)

    return (
        <>
        <button 
            className={`${purchasesClass}`}
            onClick={() => {reverseVisibility()}}
        >
            <span className={`${purchasesClass}__quantity`}>{totalQuantity}</span>
            <span className={`${purchasesClass}__price`}>{totalQuantity != 0 ? totalPrice : totalPrice - delivery} грн</span>
        </button>
        </>
    )
}