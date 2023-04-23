interface SecondaryInfosProps {
  id: number;
  materials: string[];
  info: string;
  weight: string;
  dimensions: string;
  madeIn: string;
}

const SecondaryInfos = ({
  id,
  materials,
  info,
  weight,
  dimensions,
  madeIn,
}: SecondaryInfosProps) => {
  return (
    <div>
      <div className="py-5 border-b">
        <h4 className="text-base md:text-lg">Materials</h4>
        <span className="text-base md:text-lg font-light text-slate-600">
          {materials.join(', ')}
        </span>
      </div>

      <div className="py-5 border-b">
        <h4 className="text-base md:text-lg">Delivery Information</h4>
        <span className="text-base md:text-lg font-light text-slate-600">
          {info}
        </span>
      </div>

      <div className="py-5 border-b">
        <div className="flex justify-between items-center">
          <h4 className="text-base md:text-lg">Weight</h4>
          <span className="text-base md:text-lg font-light text-slate-700">
            {weight}
          </span>
        </div>

        <div className="flex justify-between items-center my-3">
          <h4 className="text-base md:text-lg">Dimensions</h4>
          <span className="text-base md:text-lg font-light text-slate-700">
            {dimensions}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <h4 className="ttext-base md:text-lg">Made in</h4>
          <span className="text-base md:text-lg font-light text-slate-700">
            {madeIn}
          </span>
        </div>
      </div>

      <p className="flex justify-end text-sm font-light text-slate-700 py-5 border-b">
        ID: {id}
      </p>
    </div>
  );
};

export default SecondaryInfos;
