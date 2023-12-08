import { z } from 'zod';
import { GhPullRequestSchema } from '../services/github';

export const ReleaseChangeSchema = z.object({
    pr: GhPullRequestSchema,
    title: z.string().min(1),
    body: z.string(),
    demoUrls: z.array(z.string()),
    jiraUrls: z.array(z.object({
        url: z.string(),
        issueId: z.string()
    })),
    prUrl: z.string(),
    prNumber: z.number()
});