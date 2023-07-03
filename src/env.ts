import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	server: {
		EMAIL: z.string().email(),
		PASSWORD: z.string().min(1),
		SERVICE: z.string().min(1),
		FROM: z.string(),
	},
	runtimeEnv: process.env,
});
