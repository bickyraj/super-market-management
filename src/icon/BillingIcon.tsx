import billImage from "../assets/bill.png";

interface  IProps {
    className?: string;
}
const BillingIcon: React.FC<IProps> = (props: IProps) => {
    return (
        <img src={billImage} alt="billing" className={props.className} />
    )
}
export default BillingIcon;