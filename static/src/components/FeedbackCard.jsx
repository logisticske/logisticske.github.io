

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  w-full max-w-[350px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card  shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105   duration-300">
    
    <p className="text-base text-body-color leading-relaxed mb-5">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] " />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-black">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-black">
          {title}
        </p>
      </div>
    </div>
  </div>
);


export default FeedbackCard;
