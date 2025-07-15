import { betterAuth } from "better-auth"
import { emailOTP } from "better-auth/plugins"

export const auth = betterAuth({
  database: {
    provider: "sqlite",
    url: "./auth.db"
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false, // Disabled for demo purposes
  },
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        // In production, you would send this via email service
        console.log(`Verification OTP for ${email}: ${otp} (${type})`)
      },
    }),
  ],
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
  },
})

export type Session = typeof auth.$Infer.Session