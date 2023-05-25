import { OrderData, ProductType } from "@/global";
import { Badge, Group, Select, Table, Text } from "@mantine/core";
import { useMemo, useState } from "react";
import { Button } from "../Button";
import { TAKA } from "../products/product-item";
import ProductModal from "./ProductModal";

interface OrderTableProps {
  data: OrderData[];
}

const statusData = [
  "pending",
  "confirmed",
  "declined",
  "shipping",
  "delivered",
] as const;

export type OrderStatus = (typeof statusData)[number];

export default function OrderTable({ data }: OrderTableProps) {
  const [selected, setSelected] = useState<OrderData | null>(null);

  const close = () => {
    setSelected(null);
  };

  console.log({ selected });

  const rows = useMemo(
    () =>
      data.map((item) => (
        <tr key={item.orderId} className="text-sm">
          <td className="text-black/70">{item.orderId}</td>
          <td>
            <Select
              size="xs"
              data={statusData}
              defaultValue={item.status}
              variant="unstyled"
            />
          </td>
          <td>
            <Group spacing="sm">
              <div>
                <Text fz="sm" fw={500}>
                  {item.user.name}
                </Text>
                <Text fz="xs" c="dimmed">
                  {item.user.email}
                </Text>
              </div>
            </Group>
          </td>
          <td>{item.address}</td>

          {/* <td>
        {Math.random() > 0.5 ? (
          <Badge fullWidth>Active</Badge>
        ) : (
          <Badge color="gray" fullWidth>
            Disabled
          </Badge>
        )}
      </td> */}
          <td className="text-black/70">{item.transactionId}</td>
          <td>
            <Badge fullWidth>{`${TAKA} ${item.amount}`}</Badge>
          </td>
          <td onClick={() => setSelected(item)}>
            <Button size="sm" compact>
              Show products
            </Button>
          </td>
        </tr>
      )),
    [data]
  );

  return (
    <Table verticalSpacing="sm">
      <thead>
        <tr>
          <th>Order Id</th>
          <th>Status</th>
          <th>Customer</th>
          <th>Address</th>
          <th>Transaction Id</th>
          <th>Amount</th>
          <th>Products</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
      {selected && (
        <ProductModal
          products={selected.products as ProductType[]}
          opened={selected != null}
          close={close}
        />
      )}
    </Table>
  );
}