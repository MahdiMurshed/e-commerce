import AdminLayout from "@/components/Layout/admin";
import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import UserTable from "@/components/users/UserTable";
import { useUsers } from "@/hooks/useUsers";

const Customers = () => {
  const { data, isLoading } = useUsers();

  const customers = data?.filter((user) => user.role === "user") ?? [];

  if (isLoading) return <h1>Loading...</h1>;

  if (!data) return <h1>No data</h1>;
  return (
    <AdminLayout>
      <DashboardShell>
        <DashboardHeader heading="Customers" text="Manage customers" />
        <UserTable data={customers} />
      </DashboardShell>
    </AdminLayout>
  );
};

export default Customers;
