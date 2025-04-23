-- CreateTable
CREATE TABLE "registration" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "phone" TEXT NOT NULL,
  "education" TEXT NOT NULL,
  "experience" TEXT NOT NULL,
  "payment" TEXT NOT NULL,
  "referral" TEXT NOT NULL,
  "message" TEXT,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  CONSTRAINT "registration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "registration_email_key" ON "registration"("email");