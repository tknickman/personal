import { notFound } from "next/navigation";

export async function verifyCalSlug({ id }: { id: string }): Promise<boolean> {
  // fetch the cal.com url to see if it 404's to decide if we should show the page
  const result = await fetch(`https://app.cal.com/tknickman/${id}`);
  return result.status === 200;
}

export default async function ScheduleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const isValidSlug = await verifyCalSlug({ id: params.id });

  if (!isValidSlug) {
    return notFound();
  }

  return children;
}
