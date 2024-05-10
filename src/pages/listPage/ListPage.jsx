import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import { listData } from "../../lib/dummyData";

const ListsPage = () => {
  const lists = listData;

  return (
    <div className="list">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {lists.map((list) => {
            return <Card key={list.id} item={list} />;
          })}
        </div>
      </div>
      <div className="mapContainer">map</div>
    </div>
  );
};

export default ListsPage;
