import { fetchCustomers, fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { notFound } from "next/navigation";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const [customers] = await Promise.all([fetchFilteredCustomers("")]);

  if (!customers) {
    notFound();
  }

  console.log(customers);
  return <CustomersTable customers={customers} />;
}
