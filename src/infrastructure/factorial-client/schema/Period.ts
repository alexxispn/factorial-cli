import { z } from "zod";

export const Period = z.object({
  id: z.number(),
  employeeId: z.number(),
  year: z.number(),
  month: z.number(),
  startOn: z.string(),
  endOn: z.string(),
  state: z.string(),
  timeUnitsDistibution: z.array(z.string()),
  workedMinutes: z.number(),
  trackedMinutes: z.number(),
  trackedMinutesDistribution: z.array(z.number()),
  distribution: z.array(z.number()),
  workedMinutesNotApprovedDistribution: z.array(z.number()),
  totalBreakTaken: z.array(z.boolean()).optional(),
  balanceMinutes: z.string(),
  balanceMinutesDistribution: z.array(z.number()),
  estimatedMinutes: z.number(),
  estimatedRegularMinutes: z.number(),
  estimatedRegularMinutesDistribution: z.array(z.string()),
  estimatedOvertimeMinutes: z.number(),
  estimatedMinutesUntilToday: z.number(),
  estimatedMinutesDistribution: z.array(z.number()),
  estimatedOvertimeMinutesDistribution: z.array(z.string()),
  estimatedOvertimeRequestMinutesDistribution: z.array(z.string()),
  workedHalfDays: z.number(),
  permissions: z.object({
    read: z.boolean(),
    edit: z.boolean(),
    approve: z.boolean(),
    delete: z.boolean(),
  }),
  reviews: z.array(z.unknown()),
});
