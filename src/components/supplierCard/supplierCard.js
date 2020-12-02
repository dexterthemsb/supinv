import { Link } from "react-router-dom";

import { Card, CardContent } from "@material-ui/core";
import { Box, Mail, Map, Phone, User } from "react-feather";

const SupplierCard = props => {
  return (
    <Card>
      <CardContent className="card-content">
        {/* name */}
        <p className="text-2xl font-bold mb-4">{props.supplier.name}</p>

        {/* contact person */}
        <p className="flex flex-row items-center text-yellow-700 font-medium mb-4 py-1 px-2 bg-yellow-100 rounded w-max">
          <User className="mr-2" size={20} />
          {props.supplier.contact_person}
        </p>

        {/* email */}
        <p className="flex flex-row items-center font-medium mb-2">
          <Mail className="mr-2" size={20} />
          {props.supplier.email}
        </p>

        {/* mobile */}
        <p className="flex flex-row items-center font-medium mb-2">
          <Phone className="mr-2" size={20} />
          {props.supplier.mobile}
        </p>

        {/* location */}
        <p className="flex flex-row items-center font-medium mb-6">
          <Map className="mr-2" size={20} />
          {props.supplier.address}
        </p>

        <div className="flex flex-row items-center justify-between">
          <Link
            className="hover:text-yellow-700 text-yellow-600 mr-6"
            to={`/supplier/${props.supplier.id}`}
          >
            View Inventory
          </Link>

          <p className="py-1 px-2 flex flex-row items-center text-gray-700 font-medium text-sm bg-gray-100 rounded-full w-max">
            <Box className="mr-2" size={16} />
            {`${props.supplier.count} items`}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SupplierCard;
