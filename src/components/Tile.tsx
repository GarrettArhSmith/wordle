import React from "react";

type Props = {
  dataTileType: String;
  dataMatchType: String;
};

const Tile = ({
  children,
  dataTileType,
  dataMatchType,
}: React.PropsWithChildren<Props>) => {
  return (
    <div
      data-tile-type={dataTileType}
      data-match-type={dataMatchType}
      className="aspect-square border-2 grid place-items-center
      data-[tile-type=board]:data-[match-type=full]:bg-[#6aaa64]
      data-[tile-type=board]:data-[match-type=char]:bg-[#c9b458]
      data-[tile-type=board]:border-none data-[tile-type=board]:text-white data-[tile-type=board]:bg-gray-500
      data-[tile-type=input]:border-gray-500
      data-[tile-type=empty]:border-gray-300"
    >
      <p className="text-3xl font-bold">{children}</p>
    </div>
  );
};

export default Tile;
