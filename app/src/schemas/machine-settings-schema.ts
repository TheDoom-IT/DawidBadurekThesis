import { z } from 'zod';

const elementSchema = z.object({
    color: z.string().regex(/^#[0-9a-fA-F]{6}$/, 'Color should be in format: #ffffff'),
    opacity: z.number().max(1).min(0),
});

export const machineSettingsSchema = z.object({
    PHOS: elementSchema,
    RICH: elementSchema,
    ITSD: elementSchema,
    IdCU: elementSchema,
    IdCC: elementSchema,
    IPA: elementSchema,
    ICUd: elementSchema,
    ICCd: elementSchema,
    IHK: elementSchema,
    ISR: elementSchema,
    TDGN: elementSchema,
    B077: elementSchema,
    EPM: elementSchema,
});

export type MachineSettings = z.infer<typeof machineSettingsSchema>;
