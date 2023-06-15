import AdminLayout from "@/components/Layout/admin";
import { DashboardHeader } from "@/components/header";
import OrderTable from "@/components/orders";
import { DashboardShell } from "@/components/shell";
import { useOrder } from "@/hooks/useOrder";

type TabValue = "orders" | "users" | "transactions" | null;

const Orders = () => {
  const { data, isLoading } = useOrder({});

  if (isLoading) return <h1>Loading...</h1>;

  if (!data) return <h1>No data</h1>;
  return (
    <AdminLayout>
      <DashboardShell>
        <DashboardHeader heading="Orders" text="Manage orders" />
        <OrderTable data={data} />
      </DashboardShell>
    </AdminLayout>
  );
};

export default Orders;
