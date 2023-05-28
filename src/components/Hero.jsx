import { logo } from "../assets";


const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img
          src={logo}
          alt="Summify Logo"
          className="w-28 object-contain"
        ></img>
        <button
          type="button"
          onClick={() => window.open("https://github.com/abharan2002")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text ">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAi GPT-4</span>
      </h1>
      <h2 className="desc">
        Streamline Your Reading Experience: Summize - The Open-Source Article
        Summarizer Revolutionizing Lengthy Content into Clear and Concise
        Summaries
      </h2>
    </header>
  );
};

export default Hero;
