import { GridViewListExample } from './GridViewListExample';
import { GridViewCardExample } from './GridViewCardExample';


const Grids = (): JSX.Element => {
  return (
    <div style={{ display: "grid", placeItems: "center", margin: "0 auto", height: "100%" }}>
      <GridViewListExample />
      <GridViewCardExample />
    </div>
  );
};

export default Grids;