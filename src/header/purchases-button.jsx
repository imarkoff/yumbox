export default function PurchasesButton() {
    const purchasesClass = 'purchases'

    return (
        <button className={purchasesClass}>
            <span className={`${purchasesClass}__quantity`}>0</span>
            <span className={`${purchasesClass}__price`}>0 грн</span>
        </button>
    )
}