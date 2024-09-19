import React, { useEffect, useState } from "react";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useGetYears } from "@/hooks/use-get-yearApi";

const YearlyStudyCount: React.FC = () => {
  const { data: year, isLoading, isError } = useGetYears();

  const chartData = year?.map((data) => ({
    year: data.year,
    study_count: data.study_count,
    citation: data.citation,
    impact_factor: data.impact_factor
  }));

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile:{
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
    other:{
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Yearly Study-Count</CardTitle>
        <CardDescription>Number of Publications </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="study_count"
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
             <Line
              dataKey="citation"
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
             <Line
              dataKey="impact_factor"
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Highlight <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          The data on African genomics research reveals a clear upward trend
          from 2007, with a significant surge in publications starting around
          2014. This growth reflects increasing global interest and investment
          in the field, peaking at 14 publications in 2022. The consistent
          activity over the years highlights the growing importance and
          recognition of African genomics on the global research stage.
        </div>
      </CardFooter>
    </Card>
  );
};

export default YearlyStudyCount;
