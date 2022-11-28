module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "dick@novumadviesgroep.nl",
        defaultReplyTo: "dick@novumadviesgroep.nl",
      },
    },
  },
  ezforms:{
    config:{
      captchaProvider: {
        name: 'none',
      },
      notificationProviders: [
        {
          name: 'email',
          enabled: true,
          config: {
            from: 'dick@novumadviesgroep.nl'
          }
        },
        {
        provider: 'sendgrid',
        enabled: true,
        config: {
          authToken: env('SENDGRID_API_KEY'),
          from: 'dick@novumadviesgroep.nl',
        }
      }
      ]
    },
  },
});
