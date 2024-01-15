import { Badge } from '../ui/badge';

export const PortfolioComponent = () => {
  return (
    <div className="mx-auto flex flex-col items-center">
      <Badge variant="outline" className="px-6 py-2">
        Work
      </Badge>
      <h3 className="mt-4 mb-20 text-5xl font-bold">My Portfolio.</h3>

      <div className="flex justify-center items-center overflow-scroll pl-80 gap-6 w-screen"></div>
    </div>
  );
};
