import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";

export function SocialMidias() {
  return (
    <div className="social-midias flex ">
      <a href="#" target="" rel="">
        <FacebookLogo
          size={40}
          color={"white"}
          weight={"fill"}
          className="cursor-pointer bg-transparent m-2 hover:bg-[#0271AE] transition-all duration-500 rounded-md "
        />
      </a>
      <a href="#" target="" rel="">
        <InstagramLogo
          size={40}
          color={"white"}
          weight={"fill"}
          className="cursor-pointer bg-transparent m-2 hover:bg-[#8133bc] transition-all duration-300 rounded-md"
        />
      </a>
      <a href="#" target="" rel="">
        <WhatsappLogo
          size={40}
          color={"white"}
          weight={"fill"}
          className="cursor-pointer bg-transparent m-2 hover:bg-[#26CC64] transition-all duration-300 rounded-md"
        />
      </a>
      <a href="#" target="" rel="">
        <LinkedinLogo
          size={40}
          color={"white"}
          weight={"fill"}
          className="cursor-pointer bg-transparent m-2 hover:bg-[#016ca5] transition-all duration-300 rounded-md"
        />
      </a>
      <a href="#" target="" rel="">
        <TwitterLogo
          size={40}
          color={"white"}
          weight={"fill"}
          className="cursor-pointer bg-transparent m-2 hover:bg-[#00A6E8] transition-all duration-300 rounded-md"
        />
      </a>

      <a href="#" target="" rel="">
        <YoutubeLogo
          size={40}
          color={"white"}
          weight={"fill"}
          className="cursor-pointer bg-transparent m-2 hover:bg-[#F70000] transition-all duration-300 rounded-md"
        />
      </a>
    </div>
  );
}
