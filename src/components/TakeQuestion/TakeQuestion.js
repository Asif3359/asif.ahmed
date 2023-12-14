import Image from "next/image";
import Question from '@/assets/question.png'

const TakeQuestion = () => {

    return (
        <div className='w-full rounded-full bg-white lg:w-2/5  mx-auto  '>
            <Image src={Question} width={500} height={500} alt="Question Image" className="  w-4/5 h-4/5   rounded-full  mx-auto " ></Image>
        </div>
    );
};

export default TakeQuestion;