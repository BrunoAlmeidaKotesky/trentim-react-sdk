import { GridViewListExample } from './GridViewListExample';

const Grids = (): JSX.Element => {
  return (
    <div style={{ display: "grid", placeItems: "center", margin: "0 auto", height: "100%" }}>
      <GridViewListExample />
    </div>
  );
};

export default Grids;