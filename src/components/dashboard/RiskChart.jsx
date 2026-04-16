import React from "react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";
import Card from "../ui/Card";

export default function RiskChart({ stressTrend = [], wellnessScoreHistory = [] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card title="Stress Trend" className="h-full">
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stressTrend} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                <XAxis dataKey="name" tick={{ fill: "rgba(226,232,240,0.75)", fontSize: 12 }} />
                <YAxis tick={{ fill: "rgba(226,232,240,0.75)", fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    background: "rgba(15,23,42,0.9)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    borderRadius: 12,
                  }}
                  formatter={(v) => [v, "Stress risk"]}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="rgba(110,231,249,0.95)"
                  strokeWidth={3}
                  dot={{ r: 3, fill: "rgba(110,231,249,0.95)" }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        <Card title="Wellness Score History" className="h-full">
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={wellnessScoreHistory}
                margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                <XAxis dataKey="name" tick={{ fill: "rgba(226,232,240,0.75)", fontSize: 12 }} />
                <YAxis tick={{ fill: "rgba(226,232,240,0.75)", fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    background: "rgba(15,23,42,0.9)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    borderRadius: 12,
                  }}
                  formatter={(v) => [v, "Wellness score"]}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="rgba(167,139,250,0.95)"
                  fill="rgba(167,139,250,0.15)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

