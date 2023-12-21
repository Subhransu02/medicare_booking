
import {faqs} from "./../../assets/data/faqs";
import FaqItem from "./FaqItem";
const FaqList = () => {
  return (
    <ul className="mt-[38px]">
        {faqs.map((item, index) => (
            <FaqItem key={index} item={{question:item.question, content:item.content}} />
        ))}
    </ul>
  )
}

export default FaqList