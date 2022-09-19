module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "Info@novumadviesgroep.nl",
        defaultReplyTo: "Info@novumadviesgroep.nl",
      },
    },
  },
  ezforms: {
    config: {
      captchaProvider: {
        name: "none",
        // config: {
        //   secretKey: '6Lczec8fAAAAANwmMZ6nUWOC7PlMQCnNGxhniCRU',
        //   minimumScore: 0.5
        // }
      },
      notificationProviders: [
        {
          name: "email",
          enabled: true,
          config: {
            from: "",
          },
        },
        {
          // provider: 'twilio',
          // enabled: true,
          // config: {
          //   accountSid: '',
          //   authToken: '',
          //   from: '',
          // }
        },
      ],
    },
  },
});
