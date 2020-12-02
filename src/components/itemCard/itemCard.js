import { Link } from "react-router-dom";

import { Card, CardContent } from "@material-ui/core";
import { Box, Mail, Map, Phone, User } from "react-feather";

const ItemCard = props => {
  return (
    <Card>
      <CardContent className="card-content">
        {/* image */}
        <div className="item-image-holder">
          {props.item.image ? (
            <img src={props.item.image} alt={props.item.name} />
          ) : (
            <p className="text-lg text-gray-400">Not Photo available</p>
          )}
        </div>

        {/* name */}
        <p className="text-2xl font-bold mb-4">{props.item.name}</p>

        {/* category */}
        <p className="flex flex-row items-center text-yellow-700 text-sm font-medium mb-4 py-1 px-2 bg-yellow-100 rounded w-max">
          {props.item.category}
        </p>

        {/* name */}
        <p className="item-description mb-4">{props.item.description}</p>

        <p>
          <span className="font-bold">Batch:</span> {props.item.batch_id}
        </p>
        <p className="mb-4">
          <span className="font-bold">Warehouse:</span> {props.item.warehouse_id}
        </p>

        {/* stock */}
        <div className="flex flex-row items-center justify-between">
          <p>{`${props.item.units} unit`}</p>

          <p className="py-1 px-2 flex flex-row items-center text-gray-700 font-medium text-sm bg-gray-100 rounded-full w-max">
            <Box className="mr-2" size={16} />
            {`${props.item.qty ? props.item.qty + " in" : "Out of"} stock`}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
