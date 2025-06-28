import { fetchCustomers, fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const [customers] = await Promise.all([fetchFilteredCustomers("")]);

  if (!customers) {
    notFound();
  }

  return (
    // <Suspense>
    //   <CustomersTable customers={customers} />
    // </Suspense>
    <div>suspense customer</div>
  );
}
