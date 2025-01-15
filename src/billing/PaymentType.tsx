import MenuCard from "../common/MenuCard.tsx";
import creditCardImage from "../assets/credit-card.png";
import cashOnDelivery from "../assets/cash-on-delivery.png";

const PaymentType: React.FC = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-8">
                <div className="col-span-1">
                    <MenuCard title="by card" icon={creditCardImage}/>
                </div>
                <div className="col-span-1">
                    <MenuCard title="by cash" icon={cashOnDelivery}/>
                </div>
            </div>
        </>
    );
}
export default PaymentType;