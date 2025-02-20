const HeroTexts = () => {
  return (
    <>
      <h3 className="font-poppins text-xl max-sm:text-base">My Name is</h3>
      <h1 className="font-rubik text-6xl font-bold name_underline text-primary max-sm:text-4xl ">
        Quach Minh <br /> Nhat .
      </h1>
      <div className="py-4  rounded-md flex flex-col justify-center items-center overflow-hidden">
        <div className="font-poppins text-base sm:text-xl [text-wrap:balance] text-gray-700">
          I am a Software Developer / 
          <span className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul className="block text-left font-rubik text-lg sm:text-2xl leading-tight [&_li]:block animate-text-slide">
              <li className="text-[#00cfab]">Hello,</li>
              <li className="text-[#00cfab]">welcome</li>
              <li className="text-[#00cfab]">to</li>
              <li className="text-[#00cfab]">my portfolio</li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
};
export default HeroTexts;
