-- CreateTable
CREATE TABLE "sent_emails" (
    "id" TEXT NOT NULL,
    "templateName" TEXT NOT NULL,
    "sent_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "waitlistId" TEXT NOT NULL,

    CONSTRAINT "sent_emails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sent_emails_waitlistId_templateName_key" ON "sent_emails"("waitlistId", "templateName");

-- AddForeignKey
ALTER TABLE "sent_emails" ADD CONSTRAINT "sent_emails_waitlistId_fkey" FOREIGN KEY ("waitlistId") REFERENCES "waitlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
