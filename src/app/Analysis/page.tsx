"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
import YearlyStudyCount from "@/components/graph/yearly";
import RegionalStudyCount from "@/components/graph/region";
// import { fetchYearlyStudyCount } from "../api/year/route";
// import YearlyStudyCount from "@/components/graph/yearly";

interface StudyCountData {
  year: number;
  study_count: number;
}

const Analysis = () => {
  return (
    <div>
      <div className="p-10 space-y-8">
        <h1 className="text-3xl pt-6 lg:text-6xl font-semibold text-[#5A3A31]">
          Dive Deep into Africa’s Genomic Landscape
        </h1>
        <p className="text-2xl lg:text-3xl font-bold ">
          Uncover Regional Insights and Research Trends
        </p>
      </div>
      <div className="p-10 w-full ">
        <h1 className="text-2xl lg:text-3xl font-bold ">Visualize by:</h1>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="year">Year</TabsTrigger>
            <TabsTrigger value="region">Region</TabsTrigger>
            <TabsTrigger value="disorder">Disorder</TabsTrigger>
            <TabsTrigger value="biologicalModality">
              Biological Modality
            </TabsTrigger>
            <TabsTrigger value="geneticSource">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="year">
            <YearlyStudyCount />
          </TabsContent>
          <TabsContent value="region">
            <RegionalStudyCount />
          </TabsContent>
          <TabsContent value="disorder">Change your password here.</TabsContent>
          <TabsContent value="biologicalModality">
            Change your password here.
          </TabsContent>
          <TabsContent value="geneticSource">
            Change your password here.
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analysis;
