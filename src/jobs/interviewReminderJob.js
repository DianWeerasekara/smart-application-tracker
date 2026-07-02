const cron = require("node-cron");
const Application = require("../models/Application");
const emailService = require("../services/emailService");

const startInterviewReminderJob = () => {
  // Every day at 9 AM
  cron.schedule("0 9 * * *", async () => {
    console.log("Checking interview reminders...");

    const tomorrow = new Date();

    tomorrow.setDate(tomorrow.getDate() + 1);

    const start = new Date(tomorrow);
    start.setHours(0, 0, 0, 0);

    const end = new Date(tomorrow);
    end.setHours(23, 59, 59, 999);

    const applications = await Application.find({
      interview_date: {
        $gte: start,
        $lte: end,
      },
      interview_reminder_sent: false,
    }).populate("user_id", "first_name email");

    for (const application of applications) {
      await emailService.sendInterviewReminder(
        application.user_id.email,
        application.user_id.first_name,
        application.company_name,
        application.position,
        application.interview_date,
      );

      application.interview_reminder_sent = true;

      await application.save();
    }
  });
};

module.exports = startInterviewReminderJob;
