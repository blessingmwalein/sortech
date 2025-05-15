import { Button } from "@/components/ui/button";

interface PageHeroProps {
  subtitle: string;
  title: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export const PageHero = ({
  subtitle,
  title,
  buttonText,
  onButtonClick,
}: PageHeroProps) => {
  return (
    <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 md:px-6">
      <p className="text-white/80 mb-2 text-[35px]">{subtitle}</p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 heading-1">
        {title.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </h1>
      <Button
        onClick={onButtonClick}
        className="bg-transparent hover:bg-white/20 text-white rounded-full border-2 border-white px-10 py-7 button-text-normal"
      >
        {buttonText}
      </Button>
    </div>
  );
};
