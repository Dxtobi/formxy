import { LucideView } from "lucide-react";
import { GetFormStats } from "../../../actions/form";
import { ReactNode, Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function RootLayout() {
  return (<Suspense fallback={<StatsCards loading={true}/>}>
    <CardsStateWrapper />
  </Suspense>);
}

async function CardsStateWrapper() {
  const stats = await GetFormStats();
  return <StatsCards loading={false} data={stats} />;
}

interface StatsCardProps {
  data?: Awaited<ReturnType<typeof GetFormStats>>;
  loading: boolean;
}
function StatsCards(params: StatsCardProps) {
  const { data, loading } = params;

  return (
    <div className="w-full grid gap-4 pt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="total view"
        icon={<LucideView />}
        helperText="All time form visits"
        value={data?.visits.toLocaleString() || ''}
        loading={loading}
        className="border-2 border-green-600"
      />
    </div>
  );
}

function StatCard({
  title,
  icon,
  helperText,
  value,
  loading,
  className,
}: {
  title: string;
  icon: ReactNode;
  helperText: string;
  value: string;
  loading: boolean;
  className: string;
}) {
  return (<div>
    <Card className={className}>
      <CardHeader className="flex justify-between flex-row items-center">
        <CardTitle className=" capitalize">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {
            loading && <Skeleton className="bg-gray-50 opacity-5" ><span className=" opacity-0">0</span></Skeleton>
          }
          {
            !loading && value
          }
        </div>

        <p>{helperText}</p>
      </CardContent>
    </Card>
  </div>);
}
